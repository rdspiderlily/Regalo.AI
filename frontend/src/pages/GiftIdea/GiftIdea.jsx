// // frontend/src/pages/GiftIdea/GiftIdea.jsx
// import { useState } from 'react';
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';
// import Card from '../../components/Card/Card';
// import styles from './GiftIdea.module.css';
// import { useGift } from "../../hooks/useGift";

// export default function GiftIdea() {
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [modalLoading, setModalLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     recipient: '',
//     interests: '',
//     budget: ''
//   });
//   const [giftIdeas, setGiftIdeas] = useState([]);
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Submit form to backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const ideas = await generateGiftIdeas(formData);
//       setGiftIdeas(ideas);
//       setShowModal(true);
//     } catch (err) {
//       console.error("Error fetching gift ideas:", err);
//       setError("Failed to generate gift ideas. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Generate again button in modal
//   const handleGenerateAgain = async () => {
//     setModalLoading(true);
//     setError(null);

//     try {
//       const newIdeas = await generateGiftIdeas(formData);
//       setGiftIdeas(newIdeas);
//     } catch (err) {
//       console.error("Error generating again:", err);
//       setError("Failed to generate new ideas. Please try again.");
//     } finally {
//       setModalLoading(false);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className={styles.page}>
//       <Header />

//       <main className={styles.main}>
//         <div className={styles.container}>
//           <h1 className={styles.pageTitle}>Generate Gift Ideas</h1>

//           <section className={styles.formSection}>
//             <Card>
//               <form className={styles.form} onSubmit={handleSubmit}>
//                 <div className={styles.formGroup}>
//                   <label htmlFor="recipient" className={styles.label}>
//                     Recipient Name / Relationship
//                   </label>
//                   <input
//                     type="text"
//                     id="recipient"
//                     name="recipient"
//                     placeholder="e.g., Mom, best friend, boyfriend, coworker"
//                     className={styles.input}
//                     value={formData.recipient}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 <div className={styles.formGroup}>
//                   <label htmlFor="interests" className={styles.label}>
//                     Recipient Interests
//                   </label>
//                   <textarea
//                     id="interests"
//                     name="interests"
//                     placeholder="e.g., cooking, reading, gaming, travel, music"
//                     rows={4}
//                     className={styles.textarea}
//                     value={formData.interests}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 <div className={styles.formGroup}>
//                   <label htmlFor="budget" className={styles.label}>
//                     Budget Range
//                   </label>
//                   <select 
//                     id="budget" 
//                     name="budget" 
//                     className={styles.select}
//                     value={formData.budget}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="">Select your budget</option>
//                     <option value="100-500">₱100 - ₱500</option>
//                     <option value="500-1000">₱500 - ₱1,000</option>
//                     <option value="1000-3000">₱1,000 - ₱3,000</option>
//                     <option value="3000-5000">₱3,000 - ₱5,000</option>
//                     <option value="5000+">₱5,000+</option>
//                   </select>
//                 </div>

//                 <button type="submit" className={styles.submitButton} disabled={loading}>
//                   {loading ? 'Generating...' : 'Generate Ideas'}
//                 </button>
//               </form>

//               {error && <p className={styles.errorText}>{error}</p>}
//             </Card>
//           </section>

//           {/* Loading State */}
//           {loading && (
//             <section className={styles.loading}>
//               <div className={styles.spinner}></div>
//               <p className={styles.loadingText}>Thinking of the best gifts…</p>
//             </section>
//           )}
//         </div>
//       </main>

//       {/* Gift Box Modal */}
//       {showModal && (
//         <div className={styles.modalOverlay} onClick={handleCloseModal}>
//           <div className={styles.giftBoxModal} onClick={(e) => e.stopPropagation()}>
//             {/* Gift Box Ribbon */}
//             <div className={styles.ribbon}></div>
//             <div className={styles.ribbonVertical}></div>

//             {/* Close Button */}
//             <button className={styles.closeButton} onClick={handleCloseModal}>
//               ×
//             </button>

//             {/* Gift Box Content */}
//             <div className={styles.giftBoxContent}>
//               <h2 className={styles.modalTitle}>🎁 Here are your gift ideas!</h2>

//               {modalLoading ? (
//                 <div className={styles.modalLoadingContainer}>
//                   <div className={styles.spinner}></div>
//                   <p className={styles.loadingText}>Thinking of the best gifts…</p>
//                 </div>
//               ) : (
//                 <>
//                   {error && <p className={styles.errorText}>{error}</p>}
                  
//                   <div className={styles.giftList}>
//                     {giftIdeas.map((gift, index) => (
//                       <div key={gift.id} className={styles.giftItem}>
//                         <div className={styles.giftNumber}>{index + 1}</div>
//                         <div className={styles.giftDetails}>
//                           <h3 className={styles.giftTitle}>{gift.title}</h3>
//                           <p className={styles.giftDescription}>{gift.description}</p>
//                           <div className={styles.giftMeta}>
//                             <span className={styles.giftReason}>
//                               <strong>Why:</strong> {gift.reason}
//                             </span>
//                             <span className={styles.giftBudget}>
//                               <strong>Budget:</strong> {gift.budget}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <button className={styles.generateAgainButton} onClick={handleGenerateAgain}>
//                     🎲 Generate Again
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// }

import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import styles from "./GiftIdea.module.css";
import { useGift } from "../../hooks/useGift";

export default function GiftIdea() {
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [formData, setFormData] = useState({ recipient: "", interests: "", budget: "" });

  const { ideas: giftIdeas, loading, error, generateGiftIdeas, setIdeas, setError } = useGift();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await generateGiftIdeas(formData);
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerateAgain = async () => {
    setModalLoading(true);
    setError(null);
    try {
      const newIdeas = await generateGiftIdeas(formData);
      setIdeas(newIdeas);
    } catch (err) {
      console.error(err);
      setError("Failed to generate new ideas. Please try again.");
    } finally {
      setModalLoading(false);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Generate Gift Ideas</h1>

          <section className={styles.formSection}>
            <Card>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="recipient" className={styles.label}>Recipient Name / Relationship</label>
                  <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleInputChange}
                    placeholder="e.g., Mom, best friend, boyfriend"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="interests" className={styles.label}>Recipient Interests</label>
                  <textarea
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    placeholder="e.g., cooking, reading, gaming"
                    rows={4}
                    className={styles.textarea}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="budget" className={styles.label}>Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Select your budget</option>
                    <option value="100-500">₱100 - ₱500</option>
                    <option value="500-1000">₱500 - ₱1,000</option>
                    <option value="1000-3000">₱1,000 - ₱3,000</option>
                    <option value="3000-5000">₱3,000 - ₱5,000</option>
                    <option value="5000+">₱5,000+</option>
                  </select>
                </div>

                <button type="submit" className={styles.submitButton} disabled={loading}>
                  {loading ? "Generating..." : "Generate Ideas"}
                </button>
                {error && <p className={styles.errorText}>{error}</p>}
              </form>
            </Card>
          </section>

          {loading && (
            <section className={styles.loading}>
              <div className={styles.spinner}></div>
              <p className={styles.loadingText}>Thinking of the best gifts…</p>
            </section>
          )}
        </div>
      </main>

      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.giftBoxModal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>×</button>

            <div className={styles.giftBoxContent}>
              <h2 className={styles.modalTitle}>🎁 Here are your gift ideas!</h2>

              {modalLoading ? (
                <div className={styles.modalLoadingContainer}>
                  <div className={styles.spinner}></div>
                  <p className={styles.loadingText}>Thinking of the best gifts…</p>
                </div>
              ) : (
                <>
                  {error && <p className={styles.errorText}>{error}</p>}
                  <div className={styles.giftList}>
                    {giftIdeas.map((gift, index) => (
                      <div key={index} className={styles.giftItem}>
                        <div className={styles.giftNumber}>{index + 1}</div>
                        <div className={styles.giftDetails}>
                          <h3 className={styles.giftTitle}>{gift.title}</h3>
                          <p className={styles.giftDescription}>{gift.description}</p>
                          <div className={styles.giftMeta}>
                            <span><strong>Why:</strong> {gift.reason}</span>
                            <span><strong>Budget:</strong> {gift.budget}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className={styles.generateAgainButton} onClick={handleGenerateAgain}>
                    🎲 Generate Again
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
