# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from app.api.v1 import gift, health
from app.core.config import settings

app = FastAPI(title="Regalo.AI", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router)
app.include_router(gift.router)
