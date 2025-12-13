# backend/app/utils/prompt_formatter.py
def format_gift_prompt(
    recipient: str, gender_identity: str, interests: str, budget: str,
    occasion: str, personality: str,
    age_range: str, message_style: str
) -> str:
    return (
        f"Generate 3 random, Filipino-friendly gift ideas for {recipient}. "
        f"Gender identity: {gender_identity}. "
        f"The recipient likes: {interests}. "
        f"The budget for each gift must strictly be within: {budget} Philippine Pesos. "
        f"Occasion: {occasion}. "
        f"Personality traits: {personality}. "
        f"Age range: {age_range}. "
        f"Write a short dedication message for the gift in the field 'message', "
        f"following this style: {message_style}. "
        f"Each gift must include 1-3 tangible, real items to buy directly related to the recipient's interests. "
        f"Do not suggest DIY kits, conceptual items, or experiences—only physical items. "
        f"Write the title, description, items (1-3 suggested items only as a list), reason, and budget in a factual, neutral tone. "
        f"Do not include specific brands. "
        f"Also include a field called 'items' which lists 1-3 suggested items to buy for this gift idea. "
        f"Return the ideas as a JSON array with fields: title, description, items, reason, budget, message."
    )

def s_format_gift_prompt(
    budget_range: str, gift_category: str
) -> str: 
    return (
        f"Generate 3 random, Filipino-friendly gift ideas for the category: {gift_category}.  "
        f"The budget for each gift must strictly be within: {budget_range} Philippine Pesos. "
        f"Do not exceed the maximum amount in the budget range, and do not leave the budget field empty. "
        f"Each gift must include 1-3 tangible, real items to buy (no DIY kits or abstract gifts). "
        f"Write the title and dedication message ('message' field) in Tagalog, "
        f"and write the description, items (1-3 suggested items only as a list), reason, and budget in English. "
        f"Include a short dedication message for the gift in the 'message' field, relevant to the category."
        f"Do not include specific brands, just general gift categories. "
        f"Also include a field called 'items' which lists 1-3 suggested items to buy for this gift idea. "
        f"Return the ideas as a JSON array with fields: title, description, items, reason, budget, message."
    )


