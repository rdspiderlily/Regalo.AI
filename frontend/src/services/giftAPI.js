// frontend/src/services/giftAPI.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;  // backend URL for /gift
const SURPRISE_API_URL = import.meta.env.VITE_SURPRISE_API_URL;  // backend URL for /surprise

// const API_URL = "http://localhost:8000/gift";  // backend URL for /gift
// const SURPRISE_API_URL = "http://localhost:8000/surprise";  // backend URL for /surprise

export const generateGiftIdeas = async ({ recipient, gender_identity, interests, budget, occasion, personality, age_range, message_style, signal }) => {
  try {
    const response = await axios.post(API_URL, 
      { recipient, gender_identity, interests, budget, occasion, personality, age_range, message_style },
      { signal}
    );
    return response.data.ideas;
  } catch (error) {
    if (axios.isCancel(error)) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      throw abortError;
    }
    console.error("Error fetching gift ideas:", error);
    throw new Error("Failed to fetch gift ideas");
  }
};

export const generateSurpriseGift = async ({ budget_range, gift_category, signal }) => {
  try {
    const response = await axios.post(SURPRISE_API_URL, 
      { budget_range, gift_category },
      { signal }
    );
    return response.data.ideas;
  } catch (error) {
    if (axios.isCancel(error)) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      throw abortError;
    }
    console.error("Error fetching surprise gift ideas:", error);
    throw new Error("Failed to fetch surprise gift ideas");
  }
};
