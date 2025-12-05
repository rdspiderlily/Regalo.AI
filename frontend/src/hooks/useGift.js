// frontend/src/hooks/useGift.js
import { useState } from "react";
import { generateGiftIdeas as fetchIdeas, generateSurpriseGift as fetchSurprise } from "../services/giftAPI";

export function useGift() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateGiftIdeas = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      if (formData.gift_category) {
        // Use surprise API if gift_category exists
        const results = await fetchSurprise({
          budget_range: formData.budget,
          gift_category: formData.gift_category
        });
        setIdeas(results);
        return results;
      } else {
        // Use heartfelt API
        const results = await fetchIdeas(formData);
        setIdeas(results);
        return results;
      }
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
