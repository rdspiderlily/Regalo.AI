# backend/app/schemas/gift_schema.py
from pydantic import BaseModel
from typing import List

class GiftIdea(BaseModel):
    title: str
    description: str
    reason: str
    budget: str

class GiftResponse(BaseModel):
    ideas: List[GiftIdea]


