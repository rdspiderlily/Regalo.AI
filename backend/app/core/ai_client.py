# backend/app/core/ai_client.py
import json
import httpx
from .config import settings

async def generate_gift_ideas(prompt: str):
    url = f"{settings.GEMINI_URL}?key={settings.GEMINI_API_KEY}"

    payload = {
        "contents": [
            {"parts": [{"text": prompt}]}
        ]
    }

    async with httpx.AsyncClient(timeout=30) as client:
        response = await client.post(url, json=payload)
        response.raise_for_status()
        data = response.json()

    # --- FIXED PARSER ---
    try:
        candidates = data.get("candidates", [])
        if not candidates:
            return []

        parts = candidates[0].get("content", {}).get("parts", [])
        if not parts:
            return []
        
        ai_text = "\n".join(p.get("text", "") for p in parts)
        
        if ai_text.startswith("```json"):
            ai_text = ai_text.strip("```json").strip("```").strip()

        # Parse JSON string safely
        try:
            gift_ideas = json.loads(ai_text)
            return gift_ideas  # List of dicts
        except json.JSONDecodeError:
            return []

    except Exception:
        return []
