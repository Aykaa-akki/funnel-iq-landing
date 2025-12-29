import os
import razorpay
import hmac
import hashlib
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from datetime import datetime
from typing import Optional
import logging
from google_sheets_service import add_lead_to_sheet, update_payment_status

logger = logging.getLogger(__name__)

router = APIRouter()

# Initialize Razorpay client
razorpay_client = razorpay.Client(
    auth=(os.environ.get('RAZORPAY_KEY_ID'), os.environ.get('RAZORPAY_KEY_SECRET'))
)

# Models
class OrderCreate(BaseModel):
    amount: int  # in paise (e.g., 5999 * 100 = 599900)
    currency: str = "INR"
    phone: str
    website: str
    # UTM parameters
    utm_source: Optional[str] = ''
    utm_campaign: Optional[str] = ''
    utm_id: Optional[str] = ''
    utm_medium: Optional[str] = ''
    utm_adset: Optional[str] = ''
    utm_adcreative: Optional[str] = ''
    utm_adgroup: Optional[str] = ''

class PaymentVerification(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str
    phone: str
    website: str
    amount: Optional[int] = 0
    # UTM parameters
    utm_source: Optional[str] = ''
    utm_campaign: Optional[str] = ''
    utm_id: Optional[str] = ''
    utm_medium: Optional[str] = ''
    utm_adset: Optional[str] = ''
    utm_adcreative: Optional[str] = ''
    utm_adgroup: Optional[str] = ''

# Create Order
@router.post("/create-order")
async def create_order(order_data: OrderCreate):
    try:
        # Create Razorpay order
        order_params = {
            'amount': order_data.amount,  # Amount in paise
            'currency': order_data.currency,
            'receipt': f'order_{datetime.now().timestamp()}',
            'notes': {
                'phone': order_data.phone,
                'website': order_data.website,
                'utm_source': order_data.utm_source or '',
                'utm_campaign': order_data.utm_campaign or '',
                'utm_id': order_data.utm_id or '',
                'utm_medium': order_data.utm_medium or '',
                'utm_adset': order_data.utm_adset or '',
                'utm_adcreative': order_data.utm_adcreative or '',
                'utm_adgroup': order_data.utm_adgroup or ''
            }
        }
        
        order = razorpay_client.order.create(data=order_params)
        
        # Add lead to Google Sheet with status 'N' (not paid yet)
        try:
            sheet_result = add_lead_to_sheet(
                phone=order_data.phone,
                website=order_data.website,
                amount=order_data.amount,
                payment_status='N',
                utm_source=order_data.utm_source or '',
                utm_campaign=order_data.utm_campaign or '',
                utm_id=order_data.utm_id or '',
                utm_medium=order_data.utm_medium or '',
                utm_adset=order_data.utm_adset or '',
                utm_adcreative=order_data.utm_adcreative or '',
                utm_adgroup=order_data.utm_adgroup or ''
            )
            logger.info(f"Lead sheet result: {sheet_result}")
        except Exception as sheet_error:
            logger.error(f"Failed to add lead to sheet: {sheet_error}")
            # Don't fail the order creation if sheet update fails
        
        return {
            'success': True,
            'order_id': order['id'],
            'amount': order['amount'],
            'currency': order['currency'],
            'key_id': os.environ.get('RAZORPAY_KEY_ID')
        }
    
    except Exception as e:
        logger.error(f"Failed to create order: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Verify Payment
@router.post("/verify-payment")
async def verify_payment(payment_data: PaymentVerification):
    try:
        # Verify signature
        generated_signature = hmac.new(
            os.environ.get('RAZORPAY_KEY_SECRET').encode(),
            f"{payment_data.razorpay_order_id}|{payment_data.razorpay_payment_id}".encode(),
            hashlib.sha256
        ).hexdigest()
        
        if generated_signature != payment_data.razorpay_signature:
            raise HTTPException(status_code=400, detail="Invalid payment signature")
        
        # Fetch payment details from Razorpay
        payment_info = razorpay_client.payment.fetch(payment_data.razorpay_payment_id)
        
        # Update payment status in Google Sheet
        try:
            sheet_result = update_payment_status(
                phone=payment_data.phone,
                website=payment_data.website,
                amount=payment_info.get('amount', payment_data.amount),
                utm_source=payment_data.utm_source or '',
                utm_campaign=payment_data.utm_campaign or '',
                utm_id=payment_data.utm_id or '',
                utm_medium=payment_data.utm_medium or '',
                utm_adset=payment_data.utm_adset or '',
                utm_adcreative=payment_data.utm_adcreative or '',
                utm_adgroup=payment_data.utm_adgroup or ''
            )
            logger.info(f"Payment sheet result: {sheet_result}")
        except Exception as sheet_error:
            logger.error(f"Failed to update payment status in sheet: {sheet_error}")
            # Don't fail payment verification if sheet update fails
        
        return {
            'success': True,
            'message': 'Payment verified successfully',
            'payment_id': payment_data.razorpay_payment_id,
            'order_id': payment_data.razorpay_order_id,
            'amount': payment_info['amount'],
            'status': payment_info['status']
        }
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Payment verification failed: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Get Payment Status
@router.get("/payment-status/{payment_id}")
async def get_payment_status(payment_id: str):
    try:
        payment = razorpay_client.payment.fetch(payment_id)
        return {
            'success': True,
            'payment_id': payment_id,
            'status': payment['status'],
            'amount': payment['amount'],
            'method': payment.get('method'),
            'email': payment.get('email'),
            'contact': payment.get('contact')
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
