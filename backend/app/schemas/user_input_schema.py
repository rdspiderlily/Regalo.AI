# backend/app/schemas/user_input_schema.py
from pydantic import BaseModel

class GiftRequest(BaseModel):
    recipient: str
    interests: str
    budget: str
    
    occasion: str
    personality: str    
    age_range: str
    filters: str          
    message_style: str

