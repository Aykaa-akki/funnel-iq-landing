import os
import razorpay
import hmac
import hashlib
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from datetime import datetime
from typing import Optional

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

class PaymentVerification(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str
    phone: str
    website: str

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
                'website': order_data.website
            }
        }
        
        order = razorpay_client.order.create(data=order_params)
        
        return {
            'success': True,
            'order_id': order['id'],
            'amount': order['amount'],
            'currency': order['currency'],
            'key_id': os.environ.get('RAZORPAY_KEY_ID')
        }
    
    except Exception as e:
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
        
        # TODO: Store order in database
        # TODO: Trigger audit analysis
        # TODO: Send confirmation emails/WhatsApp
        
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
