# backend/app/core/redis_client.py
import os
import aioredis

REDIS_HOST = os.getenv("REDIS_HOST")
REDIS_PORT = int(os.getenv("REDIS_PORT", 6379))
REDIS_PASSWORD = os.getenv("REDIS_PASSWORD", None)

redis = aioredis.from_url(
    f"redis://{REDIS_HOST}:{REDIS_PORT}",
    password=REDIS_PASSWORD,
    decode_responses=True
)
