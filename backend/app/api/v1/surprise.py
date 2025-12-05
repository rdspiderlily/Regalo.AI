# backend/app/api/v1/surprise.py
from fastapi import APIRouter, Depends
from app.schemas.user_input_schema import SGiftRequest
from app.schemas.gift_schema import GiftResponse
from app.services.gift_service import s_get_gift_ideas
from app.api.dependencies import rate_limiter

router = APIRouter(prefix="/surprise", tags=["Surprise Gift Ideas"])

@router.post("/", response_model=GiftResponse)
async def s_generate_gift(request: SGiftRequest, _: bool = Depends(rate_limiter)):
    ideas = await s_get_gift_ideas(
        request.budget_range, request.gift_category
    )
    return {"ideas": ideas}

