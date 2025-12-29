import gspread
from google.oauth2.service_account import Credentials
import os
import json
import logging
from datetime import datetime, timezone
from typing import Optional, Dict, Any
import uuid

logger = logging.getLogger(__name__)

# Google Sheets configuration
SPREADSHEET_ID = os.environ.get('GOOGLE_SHEET_ID', '1GpMLwCYv5ChAvZc1d2WufpDKSqe-8maOQGeFqtjDkJA')
LEADS_SHEET_NAME = 'All Leads'
PAID_SHEET_NAME = 'Successful Payments'

# Define scopes
SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

# Headers for the sheets
LEADS_HEADERS = [
    'User Id',
    'WhatsApp Phone Number',
    'Website URL',
    'Lead Date',
    'Lead Timestamp',
    'Pay Amount',
    'Payment Status',
    'UTM Source',
    'UTM Campaign',
    'UTM ID',
    'UTM Medium',
    'UTM Adset',
    'UTM Adcreative',
    'UTM Adgroup'
]

PAID_HEADERS = LEADS_HEADERS.copy()  # Same headers for paid sheet


def get_gspread_client():
    """Initialize and return gspread client using service account credentials."""
    try:
        # Get credentials from environment variable (JSON string)
        creds_json = os.environ.get('GOOGLE_SERVICE_ACCOUNT_JSON')
        
        if not creds_json:
            logger.error("GOOGLE_SERVICE_ACCOUNT_JSON environment variable not set")
            return None
        
        # Parse JSON credentials
        creds_dict = json.loads(creds_json)
        
        # Create credentials
        credentials = Credentials.from_service_account_info(
            creds_dict,
            scopes=SCOPES
        )
        
        # Authorize gspread
        client = gspread.authorize(credentials)
        return client
    
    except Exception as e:
        logger.error(f"Failed to initialize gspread client: {str(e)}")
        return None


def ensure_sheet_exists(spreadsheet, sheet_name: str, headers: list):
    """Ensure a worksheet exists with proper headers."""
    try:
        # Try to get existing worksheet
        worksheet = spreadsheet.worksheet(sheet_name)
        
        # Check if headers exist (first row)
        first_row = worksheet.row_values(1)
        if not first_row:
            # Add headers if sheet is empty
            worksheet.append_row(headers)
        
        return worksheet
    
    except gspread.exceptions.WorksheetNotFound:
        # Create new worksheet
        worksheet = spreadsheet.add_worksheet(title=sheet_name, rows=1000, cols=len(headers))
        worksheet.append_row(headers)
        return worksheet


def add_lead_to_sheet(
    phone: str,
    website: str,
    amount: int,
    payment_status: str = 'N',
    utm_source: str = '',
    utm_campaign: str = '',
    utm_id: str = '',
    utm_medium: str = '',
    utm_adset: str = '',
    utm_adcreative: str = '',
    utm_adgroup: str = ''
) -> Dict[str, Any]:
    """Add a lead entry to the Google Sheet."""
    try:
        client = get_gspread_client()
        if not client:
            return {'success': False, 'error': 'Failed to initialize Google Sheets client'}
        
        # Open spreadsheet
        spreadsheet = client.open_by_key(SPREADSHEET_ID)
        
        # Get or create the leads worksheet
        leads_sheet = ensure_sheet_exists(spreadsheet, LEADS_SHEET_NAME, LEADS_HEADERS)
        
        # Generate user ID
        user_id = str(uuid.uuid4())[:8].upper()
        
        # Get current datetime
        now = datetime.now(timezone.utc)
        lead_date = now.strftime('%Y-%m-%d')
        lead_timestamp = now.strftime('%Y-%m-%d %H:%M:%S UTC')
        
        # Prepare row data
        row_data = [
            user_id,
            phone,
            website,
            lead_date,
            lead_timestamp,
            amount / 100 if amount else 0,  # Convert from paise to rupees
            payment_status,
            utm_source or '',
            utm_campaign or '',
            utm_id or '',
            utm_medium or '',
            utm_adset or '',
            utm_adcreative or '',
            utm_adgroup or ''
        ]
        
        # Append row to leads sheet
        leads_sheet.append_row(row_data)
        
        logger.info(f"Lead added to sheet: {user_id}")
        
        return {
            'success': True,
            'user_id': user_id,
            'message': 'Lead added successfully'
        }
    
    except Exception as e:
        logger.error(f"Failed to add lead to sheet: {str(e)}")
        return {'success': False, 'error': str(e)}


def update_payment_status(
    phone: str,
    website: str,
    amount: int,
    utm_source: str = '',
    utm_campaign: str = '',
    utm_id: str = '',
    utm_medium: str = '',
    utm_adset: str = '',
    utm_adcreative: str = '',
    utm_adgroup: str = ''
) -> Dict[str, Any]:
    """Update payment status to 'Y' and add to paid sheet."""
    try:
        client = get_gspread_client()
        if not client:
            return {'success': False, 'error': 'Failed to initialize Google Sheets client'}
        
        # Open spreadsheet
        spreadsheet = client.open_by_key(SPREADSHEET_ID)
        
        # Get or create sheets
        leads_sheet = ensure_sheet_exists(spreadsheet, LEADS_SHEET_NAME, LEADS_HEADERS)
        paid_sheet = ensure_sheet_exists(spreadsheet, PAID_SHEET_NAME, PAID_HEADERS)
        
        # Try to find existing lead by phone
        try:
            cell = leads_sheet.find(phone)
            if cell:
                # Update payment status to 'Y'
                leads_sheet.update_cell(cell.row, 7, 'Y')  # Column 7 is Payment Status
                
                # Get the row data
                row_data = leads_sheet.row_values(cell.row)
                
                # Add to paid sheet
                paid_sheet.append_row(row_data)
                
                logger.info(f"Payment status updated for phone: {phone}")
                return {'success': True, 'message': 'Payment status updated'}
        except gspread.exceptions.CellNotFound:
            pass
        
        # If lead not found, create new entry with Y status
        user_id = str(uuid.uuid4())[:8].upper()
        now = datetime.now(timezone.utc)
        lead_date = now.strftime('%Y-%m-%d')
        lead_timestamp = now.strftime('%Y-%m-%d %H:%M:%S UTC')
        
        row_data = [
            user_id,
            phone,
            website,
            lead_date,
            lead_timestamp,
            amount / 100 if amount else 0,
            'Y',  # Payment successful
            utm_source or '',
            utm_campaign or '',
            utm_id or '',
            utm_medium or '',
            utm_adset or '',
            utm_adcreative or '',
            utm_adgroup or ''
        ]
        
        # Add to both sheets
        leads_sheet.append_row(row_data)
        paid_sheet.append_row(row_data)
        
        logger.info(f"New paid lead added: {user_id}")
        
        return {
            'success': True,
            'user_id': user_id,
            'message': 'Payment recorded successfully'
        }
    
    except Exception as e:
        logger.error(f"Failed to update payment status: {str(e)}")
        return {'success': False, 'error': str(e)}
