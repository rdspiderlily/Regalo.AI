// frontend/src/services/giftAPI.js
import axios from "axios";

const API_URL = "http://localhost:8000/gift";

export const generateGiftIdeas = async ({ recipient, interests, budget }) => {
  try {
    const response = await axios.post(API_URL, { recipient, interests, budget });
    return response.data.ideas;
  } catch (error) {
    console.error("Error fetching gift ideas:", error);
    throw new Error("Failed to fetch gift ideas");
  }
};

