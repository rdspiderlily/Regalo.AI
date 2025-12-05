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
        f"Write the title, description, items (as a list), reason, and budget in a factual, neutral tone. "
        f"Write a short dedication message for the gift in the field 'message', "
        f"following this style: {message_style}. "
        f"Do not include specific brands, just general gift categories. "
        f"Also include a field called 'items' which lists suggested items to buy for this gift idea. "
        f"Return the ideas as a JSON array with fields: title, description, items, reason, budget, message."
    )

def s_format_gift_prompt(
    budget_range: str, gift_category: str
) -> str: 
    return (
        f"Generate random 3 creative, Filipino-friendly gift ideas for the category: {gift_category}.  "
        f"The budget for each gift must strictly be within: {budget_range} Philippine Pesos. "
        f"Do not exceed the maximum amount in the budget range, and do not leave the budget field empty. "
        f"Write the title and dedication message ('message' field) in Tagalog, "
        f"and write the description, items (as a list), reason, and budget in English. "
        f"Include a short dedication message for the gift in the 'message' field, relevant to the category."
        f"Do not include specific brands, just general gift categories. "
        f"Also include a field called 'items' which lists suggested items to buy for this gift idea. "
        f"Return the ideas as a JSON array with fields: title, description, items, reason, budget, message."
    )


