// // frontend/src/hooks/useGift.js
// import { useState } from "react";
// import { generateGiftIdeas as fetchIdeas, generateSurpriseGift as fetchSurprise } from "../services/giftAPI";

// export function useGift() {
//   const [ideas, setIdeas] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const generateGiftIdeas = async (formData) => {
//     setLoading(true);
//     setError(null);
//     try {
//       if (formData.gift_category) {
//         // Use surprise API 
//         const results = await fetchSurprise({
//           budget_range: formData.budget_range,
//           gift_category: formData.gift_category
//         });
//         setIdeas(results);
//         return results;
//       } else {
//         // Use heartfelt API
//         const results = await fetchIdeas(formData);
//         setIdeas(results);
//         return results;
//       }
//     } catch (err) {
//       setError("Please try again in a few minutes");
//       setIdeas([]);
//       throw new Error("Frontend error suppressed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { ideas, loading, error, generateGiftIdeas, setIdeas, setError };
// }

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
      const results = formData.gift_category
        ? await fetchSurprise({
            budget_range: formData.budget_range,
            gift_category: formData.gift_category,
          })
        : await fetchIdeas(formData);

      if (!results || results.length === 0) {
        setIdeas([]);
        setError("Please try again in a few minutes"); // covers both surprise and heartfelt
        return [];
      }

      setIdeas(results);
      return results;
    } catch (err) {
      setIdeas([]);
      setError("Please try again in a few minutes");
      throw new Error("Frontend error suppressed");
    } finally {
      setLoading(false);
    }
  };

  return { ideas, loading, error, generateGiftIdeas, setIdeas, setError };
}
