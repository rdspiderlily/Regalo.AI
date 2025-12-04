# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from app.api.v1 import gift, health

app = FastAPI(title="Regalo.AI", version="1.0")



allowed_origins = os.getenv("ALLOWED_ORIGINS")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router)
app.include_router(gift.router)
