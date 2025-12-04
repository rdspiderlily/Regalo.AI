# backend/app/core/redis_client.py
import os
import redis.asyncio as redis

REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
REDIS_PORT = int(os.getenv("REDIS_PORT", 6379))
REDIS_PASSWORD = os.getenv("REDIS_PASSWORD", "")

redis_url = (
    f"rediss://:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}"
    if REDIS_PASSWORD else f"rediss://{REDIS_HOST}:{REDIS_PORT}"
)

redis_client = redis.from_url(
    redis_url,
    decode_responses=True
)
