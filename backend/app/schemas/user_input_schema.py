# backend/app/schemas/user_input_schema.py
from pydantic import BaseModel

class GiftRequest(BaseModel):
    recipient: str
    gender_identity: str
    interests: str
    budget: str
    
    occasion: str
    personality: str    
    age_range: str
    message_style: str

class SGiftRequest(BaseModel):
    budget_range: str
    gift_category: str