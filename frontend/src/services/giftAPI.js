// frontend/src/services/giftAPI.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;  // backend URL for /gift
const SURPRISE_API_URL = import.meta.env.VITE_SURPRISE_API_URL;  // backend URL for /surprise

export const generateGiftIdeas = async ({ recipient, interests, budget, occasion, personality, age_range, filters, message_style }) => {
  try {
    const response = await axios.post(API_URL, { 
      recipient, interests, budget, occasion, personality, age_range, filters, message_style
    });
    return response.data.ideas;
  } catch (error) {
    console.error("Error fetching gift ideas:", error);
    throw new Error("Failed to fetch gift ideas");
  }
};

export const generateSurpriseGift = async ({ budget_range, gift_category }) => {
  try {
    const response = await axios.post(SURPRISE_API_URL, {
      budget_range,
      gift_category
    });
    return response.data.ideas;
  } catch (error) {
    console.error("Error fetching surprise gift ideas:", error);
    throw new Error("Failed to fetch surprise gift ideas");
  }
};
