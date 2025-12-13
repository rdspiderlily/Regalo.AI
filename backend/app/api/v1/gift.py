# backend/app/api/v1/gift.py
from fastapi import APIRouter, Depends
from app.schemas.user_input_schema import GiftRequest
from app.schemas.gift_schema import GiftResponse
from app.services.gift_service import get_gift_ideas
from app.api.dependencies import rate_limiter

router = APIRouter(prefix="/gift", tags=["Gift Ideas"])

@router.post("/", response_model=GiftResponse)
async def generate_gift(request: GiftRequest, _: bool = Depends(rate_limiter)):
    ideas = await get_gift_ideas(
        request.recipient, request.gender_identity, request.interests, request.budget,
        request.occasion, request.personality, request.age_range, 
        request.message_style
    )
    return {"ideas": ideas}

