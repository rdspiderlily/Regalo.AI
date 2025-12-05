# backend/app/schemas/gift_schema.py
from pydantic import BaseModel
from typing import List, Any

class GiftIdea(BaseModel):
    title: str
    description: str
    items: List[Any] | None = None
    reason: str
    budget: str
    message: str | None = None

class GiftResponse(BaseModel):
    ideas: List[GiftIdea]


