# backend/app/core/ai_client.py
import json
import httpx
from .config import settings
from .logger import logger

async def generate_gift_ideas(prompt: str):
    url = f"{settings.GEMINI_URL}?key={settings.GEMINI_API_KEY}"

    payload = {
        "contents": [
            {"parts": [{"text": prompt}]}
        ]
    }

    try:
        async with httpx.AsyncClient(timeout=25) as client:
            response = await client.post(url, json=payload)
            response.raise_for_status()
            data = response.json()
    except Exception as e:
        logger.error(f"Error calling AI service: {e}")
        return []

    try:
        candidates = data.get("candidates", [])
        if not candidates:
            logger.warning("No candidates returned from AI service")
            return []

        parts = candidates[0].get("content", {}).get("parts", [])
        if not parts:
            logger.warning("No content parts returned from AI service")
            return []
        
        ai_text = "\n".join(p.get("text", "") for p in parts)
        
        if ai_text.startswith("```json"):
            ai_text = ai_text.strip("```json").strip("```").strip()

        try:
            gift_ideas = json.loads(ai_text)
            return gift_ideas  
        except json.JSONDecodeError:
            logger.warning(f"Failed to parse AI JSON response: {e}")
            return []

    except Exception:
        logger.error(f"Unexpected error processing AI response: {e}")
        return []
