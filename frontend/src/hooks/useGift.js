// frontend/src/hooks/useGift.js
import { useState } from "react";
import { generateGiftIdeas as fetchIdeas } from "../services/giftAPI";

export function useGift() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateGiftIdeas = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchIdeas(formData);
      setIdeas(results);
      return results;
    } catch (err) {
      setError(err.message || "Error generating gift ideas");
      setIdeas([]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { ideas, loading, error, generateGiftIdeas, setIdeas, setError };
}

