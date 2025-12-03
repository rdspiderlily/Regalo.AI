# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import gift, health

app = FastAPI(title="Regalo.AI", version="1.0")

# Security: CORS only for frontend
# origins = [
#     "https://your-frontend-domain.com",  # replace with your Vercel frontend URL
# ]

# Security: only allow frontend during development
origins = [
    "http://localhost:5173",  # Vite dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router)
app.include_router(gift.router)
