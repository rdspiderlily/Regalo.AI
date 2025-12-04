# backend/app/utils/prompt_formatter.py
def format_gift_prompt(
    recipient: str, interests: str, budget: str,
    occasion: str, personality: str,
    age_range: str, filters: str, message_style: str
    ) -> str:
    return (
        f"Generate 5 creative, Filipino-friendly gift ideas for {recipient}. "
        f"The recipient likes: {interests}. "
        f"Budget: {budget}. "
        f"Occasion: {occasion}. "
        f"Personality traits: {personality}. "
        f"Age range: {age_range}. "
        f"Gift filters: {filters}. "
        f"Create a short dedication message for the gift, written in this style: {message_style}. "
        f"The dedication message should sound like something the giver writes on a gift card. "
        f"Do not include specific brands, just general gift categories. "
        f"Return the ideas as JSON array with fields: title, description, reason, budget, message."
    )



