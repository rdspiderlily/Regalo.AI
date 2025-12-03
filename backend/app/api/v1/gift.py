# backend/app/api/v1/gift.py
from fastapi import APIRouter
from app.schemas.user_input_schema import GiftRequest
from app.schemas.gift_schema import GiftResponse
from app.services.gift_service import get_gift_ideas

router = APIRouter(prefix="/gift", tags=["Gift Ideas"])

@router.post("/", response_model=GiftResponse)
async def generate_gift(request: GiftRequest):
    ideas = await get_gift_ideas(request.recipient, request.interests, request.budget)
    return {"ideas": ideas}



