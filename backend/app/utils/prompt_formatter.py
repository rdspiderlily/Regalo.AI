# backend/app/utils/prompt_formatter.py
def format_gift_prompt(recipient: str, interests: str, budget: str) -> str:
    return (
        f"Generate 5 creative, Filipino-friendly gift ideas for {recipient}. "
        f"The recipient likes: {interests}. "
        f"Budget: {budget}. "
        f"Do not include specific brands, just general gift categories. "
        f"Return the ideas as JSON array with fields: title, description, reason, budget."
    )



