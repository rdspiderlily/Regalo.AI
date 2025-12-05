# backend/app/api/dependencies.py
from fastapi import HTTPException, Request
from app.core.redis_client import redis_client

# Per-user limits
REQUESTS_PER_MINUTE_PER_IP = 3
REQUESTS_PER_DAY_PER_IP = 10

# Global limits (matches Gemini free tier)
GLOBAL_REQUESTS_PER_MINUTE = 8
GLOBAL_REQUESTS_PER_DAY = 245

async def rate_limiter(request: Request):
    ip = request.client.host

    # Per-IP keys
    minute_key_ip = f"rate:minute:{ip}"
    day_key_ip = f"rate:day:{ip}"

    # Global keys
    minute_key_global = "rate:minute:global"
    day_key_global = "rate:day:global"

    # Increment counters
    minute_count_ip = await redis_client.incr(minute_key_ip)
    day_count_ip = await redis_client.incr(day_key_ip)
    minute_count_global = await redis_client.incr(minute_key_global)
    day_count_global = await redis_client.incr(day_key_global)

    # Set expirations if first increment
    if minute_count_ip == 1:
        await redis_client.expire(minute_key_ip, 60)
    if day_count_ip == 1:
        await redis_client.expire(day_key_ip, 86400)
    if minute_count_global == 1:
        await redis_client.expire(minute_key_global, 60)
    if day_count_global == 1:
        await redis_client.expire(day_key_global, 86400)

    # Check per-IP limits
    if minute_count_ip > REQUESTS_PER_MINUTE_PER_IP:
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Try again later."
        )
    if day_count_ip > REQUESTS_PER_DAY_PER_IP:
        raise HTTPException(
            status_code=429,
            detail="Daily request limit reached. Try again tomorrow."
        )

    # Check global limits
    if minute_count_global > GLOBAL_REQUESTS_PER_MINUTE:
        raise HTTPException(
            status_code=429,
            detail="Global request limit per minute reached. Please try again shortly."
        )
    if day_count_global > GLOBAL_REQUESTS_PER_DAY:
        raise HTTPException(
            status_code=429,
            detail="Global daily request limit reached. Please try again tomorrow."
        )

    return True
