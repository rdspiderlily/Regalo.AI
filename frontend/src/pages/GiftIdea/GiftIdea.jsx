// // frontend/src/pages/GiftIdea/GiftIdea.jsx
// import { useState, useEffect } from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import Card from "../../components/Card/Card";
// import styles from "./GiftIdea.module.css";
// import { useGift } from "../../hooks/useGift";
// import heroImage from '../../images/bg.png';

// export default function GiftIdea() {
//   const [showModal, setShowModal] = useState(false);
//   const [modalLoading, setModalLoading] = useState(false);
//   const [selectedGiftType, setSelectedGiftType] = useState(null); 

//   const [formData, setFormData] = useState({ 
//     // Heartfelt fields
//     recipient: "", interests: "", budget: "", 
//     occasion: "", personality: "", age_range: "", filters: "", message_style: "",
//     // Surprise field
//     budget_range: "", gift_category: ""
//   });

//   const { ideas: giftIdeas, loading, error, generateGiftIdeas, setIdeas, setError } = useGift();

//   // Add scroll animation logic
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add(styles.show);
//         }
//       });
//     }, { threshold: 0.1 });

//     const hiddenElements = document.querySelectorAll(`.${styles.fadeInUp}`);
//     hiddenElements.forEach((el) => observer.observe(el));

//     return () => hiddenElements.forEach((el) => observer.unobserve(el));
//   }, [selectedGiftType]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     try {
//       await generateGiftIdeas(formData);
//       setShowModal(true);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleGenerateAgain = async () => {
//     setModalLoading(true);
//     setError(null);
//     try {
//       const newIdeas = await generateGiftIdeas(formData);
//       setIdeas(newIdeas);
//     } catch (err) {
//       console.error(err);
//       setError("Please try again in a few minutes");
//     } finally {
//       setModalLoading(false);
//     }
//   };

//   const handleCloseModal = () => setShowModal(false);

//   const handleCardClick = (type) => {
//     setSelectedGiftType(type);
//     setFormData({
//       // Heartfelt fields
//       recipient: "", interests: "", budget: "", 
//       occasion: "", personality: "", age_range: "", filters: "", message_style: "",
//       // Surprise field
//       budget_range: "", gift_category: ""
//     });
//   };

//   const handleBackToSelection = () => {
//     setSelectedGiftType(null);
//   };

//   return (
//     <div className={styles.page}>
//       <Header />

//       <main className={styles.main} style={{ backgroundImage: `url(${heroImage})` }}>
//         <div className={styles.container}>
//           <h1 className={`${styles.pageTitle} ${styles.fadeInUp}`}>
//             Generate the Perfect Gift
//           </h1>
//           <p className={`${styles.pageSubtitle} ${styles.fadeInUp}`}>
//              Choose a gift style — quick surprise or thoughtful personalization.
//           </p>

//           {/* SELECTION CARDS */}
//           {selectedGiftType === null && (
//             <div className={`${styles.cardSelection} ${styles.fadeInUp}`}>
//               <div 
//                 className={styles.selectionCard}
//                 onClick={() => handleCardClick('surprise')}
//               >
//                 <div className={styles.cardIcon}>🎉</div>
//                 <h2 className={styles.cardTitle}>Exciting Surprise</h2>
//                 <p className={styles.cardDesc}>For quick, fun, instant suggestions</p>
//               </div>

//               <div 
//                 className={styles.selectionCard}
//                 onClick={() => handleCardClick('heartfelt')}
//               >
//                 <div className={styles.cardIcon}>💖</div>
//                 <h2 className={styles.cardTitle}>Heartfelt Gift</h2>
//                 <p className={styles.cardDesc}>For thoughtful, personalized recommendations</p>
//               </div>
//             </div>
//           )}

//           {/* SURPRISE FORM */}
//           {selectedGiftType === 'surprise' && (
//              <section className={styles.formSection}>
//                <Card className={`${styles.giftCard} ${styles.fadeInUp}`}>
//                  <button 
//                    className={styles.backButton}
//                    onClick={handleBackToSelection}
//                    type="button"
//                  >
//                    ← Back to Selection
//                  </button>

//                  <form className={styles.form} onSubmit={handleSubmit}>
//                    <div className={styles.formGroup}>
//                      <label htmlFor="budget_range" className={styles.label}>
//                        Budget Range
//                      </label>
//                      <select
//                        id="budget_range"
//                        name="budget_range"
//                        value={formData.budget_range}
//                        onChange={handleInputChange}
//                        className={styles.select}
//                        required
//                      >
//                        <option value="">Select your budget</option>
//                        <option value="below100">Below ₱100</option>
//                        <option value="100-250">₱100–₱250</option>
//                        <option value="250-500">₱250–₱500</option>
//                        <option value="1000+">₱1,000+</option>
//                        <option value="unlimited">No budget limit</option>
//                      </select>
//                    </div>

//                    <div className={styles.formGroup}>
//                      <label htmlFor="gift_category" className={styles.label}>
//                        Gift Category
//                      </label>
//                      <input
//                        type="text"
//                        id="gift_category"
//                        name="gift_category"
//                        value={formData.gift_category}
//                        onChange={handleInputChange}
//                        placeholder='e.g., "something practical", "something funny", "useful", "aesthetic", etc.'
//                        className={styles.input}
//                        required
//                      />
//                    </div>

//                    <button type="submit" className={styles.submitButton} disabled={loading}>
//                      {loading ? "Generating..." : "🎁 Generate Surprise Gift"}
//                    </button>
//                    {error && <p className={styles.errorText}>{error}</p>}
//                  </form>
//                </Card>
//              </section>
//           )}

//           {/* HEARTFELT FORM */}
//           {selectedGiftType === 'heartfelt' && (
//             <section className={styles.formSection}>
//               <Card className={`${styles.giftCard} ${styles.fadeInUp}`}>
//                 <button 
//                    className={styles.backButton}
//                    onClick={handleBackToSelection}
//                    type="button"
//                  >
//                    ← Back to Selection
//                  </button>

//                 <form className={styles.form} onSubmit={handleSubmit}>

//                     <div className={styles.formGroup}>
//                     <label htmlFor="occasion" className={styles.label}>
//                       Occasion
//                     </label>
//                     <select 
//                       id="occasion" 
//                       name="occasion" 
//                       className={styles.select}
//                       value={formData.occasion}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="">Select occasion</option>
//                       <option value="birthday">Birthday</option>
//                       <option value="anniversary">Anniversary</option>
//                       <option value="graduation">Graduation</option>
//                       <option value="christmas">Christmas</option>
//                       <option value="valentines">Valentine&apos;s Day</option>
//                       <option value="mothersday">Mother&apos;s Day</option>
//                       {/* --- NEW UPDATE / CHANGES FROM FIGMA: Added Father's Day --- */}
//                       <option value="fathersday">Father&apos;s Day</option>
//                       <option value="wedding">Wedding</option>
//                       <option value="babyshower">Baby Shower</option>
//                       <option value="debut">Debut</option>
//                       <option value="teachersday">Teacher&apos;s Day</option>
//                       <option value="randomsurprise">Random Surprise</option>
//                     </select>
//                   </div>

//                   <div className={styles.formGroup}>
//                     <label htmlFor="recipient" className={styles.label}>Gift Recipient</label>
//                     <input
//                       type="text"
//                       id="recipient"
//                       name="recipient"
//                       value={formData.recipient}
//                       onChange={handleInputChange}
//                       placeholder='Input Name or Relationship e.g. "Mom", "Best Friend", "Jungkook", etc.'
//                       className={styles.input}
//                       required
//                     />
//                   </div>

//                   <div className={styles.formGroup}>
//                     <label htmlFor="age_range" className={styles.label}>
//                       Age Range
//                     </label>
//                     <select 
//                       id="age_range" 
//                       name="age_range" 
//                       className={styles.select}
//                       value={formData.age_range}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="">Select age range</option>
//                       <option value="0-10">0–10</option>
//                       <option value="11-15">11–15</option>
//                       <option value="16-20">16–20</option>
//                       <option value="21-30">21–30</option>
//                       <option value="31-40">31–40</option>
//                       <option value="41-50">41–50</option>
//                       <option value="51-60">51–60</option>
//                       <option value="61+">61+</option>
//                     </select>
//                   </div>

//                   <div className={styles.formGroup}>
//                     <label htmlFor="interests" className={styles.label}>Recipient&apos;s Interests</label>
//                     <textarea
//                       id="interests"
//                       name="interests"
//                       value={formData.interests}
//                       onChange={handleInputChange}
//                       placeholder="e.g., cooking, anime, art, music, travel, etc."
//                       rows={4}
//                       className={styles.textarea}
//                       required
//                     />
//                   </div>

//                    <div className={styles.formGroup}>
//                     <label htmlFor="personality" className={styles.label}>
//                       Personality
//                     </label>
//                     <select 
//                       id="personality" 
//                       name="personality" 
//                       className={styles.select}
//                       value={formData.personality}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="">Select personality style</option>
//                       <option value="practical">Practical</option>
//                       <option value="sentimental">Sentimental</option>
//                       <option value="creative">Creative</option>
//                       <option value="techy">Techy</option>
//                       <option value="fashionable">Fashionable</option>
//                       <option value="foodlover">Food Lover</option>
//                       <option value="funny">Funny</option>
//                       <option value="adventurous">Adventurous</option>
//                       <option value="minimalist">Minimalist</option>
//                     </select>
//                   </div>

//                   <div className={styles.formGroup}>
//                     <label htmlFor="filters" className={styles.label}>
//                       Gift Filters
//                     </label>
//                     <select 
//                       id="filters" 
//                       name="filters" 
//                       className={styles.select}
//                       value={formData.filters}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="">Select gift filter</option>
//                       <option value="diy">DIY / Handmade</option>
//                       <option value="personalized">Personalized Gifts</option>
//                       <option value="ecofriendly">Eco-Friendly</option>
//                       <option value="experience">Experience-Based Gifts</option>
//                       <option value="budgetsaver">Budget Saver Options</option>
//                       <option value="cute">Cute / Aesthetic</option>
//                       <option value="homeessentials">Home Essentials</option>
//                       <option value="foodsnacks">Food & Snacks</option>
//                     </select>
//                   </div>

//                   <div className={styles.formGroup}>
//                     <label htmlFor="message_style" className={styles.label}>
//                       Message Style
//                     </label>
//                     <select 
//                       id="message_style" 
//                       name="message_style" 
//                       className={styles.select}
//                       value={formData.message_style}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="">Select message style</option>
//                       <option value="sweetenglish">Sweet (English)</option>
//                       <option value="sweettagalog">Sweet (Tagalog)</option>
//                       <option value="funny">Funny</option>
//                       <option value="shortsimple">Short & Simple</option>
//                       <option value="emotional">Emotional</option>
//                     </select>
//                   </div>

//                   <div className={styles.formGroup}>
//                     <label htmlFor="budget" className={styles.label}>Budget Range</label>
//                     <select
//                       id="budget"
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleInputChange}
//                       className={styles.select}
//                       required
//                     >
//                       <option value="">Select your budget</option>
//                       <option value="below100">Below ₱100</option>
//                       <option value="100-500">₱100 - ₱500</option>
//                       <option value="500-1000">₱500 - ₱1,000</option>
//                       <option value="1000-3000">₱1,000 - ₱3,000</option>
//                       <option value="3000-5000">₱3,000 - ₱5,000</option>
//                       <option value="5000+">₱5,000+</option>
//                     </select>
//                   </div>

//                   <button type="submit" className={styles.submitButton} disabled={loading}>
//                     {loading ? "Generating..." : "💝 Generate Heartfelt Gifts"}
//                   </button>
//                   {error && <p className={styles.errorText}>{error}</p>}
//                 </form>
//               </Card>
//             </section>
//           )}

//           {loading && (
//             <section className={styles.loading}>
//               <div className={styles.spinner}></div>
//               <p className={styles.loadingText}>Thinking of the best gifts…</p>
//             </section>
//           )}
//         </div>
//       </main>

//       {showModal && (
//         <div className={styles.modalOverlay} onClick={handleCloseModal}>
//           <div className={styles.giftBoxModal} onClick={(e) => e.stopPropagation()}>
//             <div className={styles.ribbon}></div>
//             <div className={styles.ribbonVertical}></div>
            
//             <button className={styles.closeButton} onClick={handleCloseModal}>×</button>

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
//                       <div key={index} className={styles.giftItem}>
//                         <div className={styles.giftNumber}>{index + 1}</div>
//                         <div className={styles.giftDetails}>
//                           <h3 className={styles.giftTitle}>{gift.title}</h3>
//                           <p className={styles.giftDescription}>{gift.description}</p>
                          
//                           {/* --- NEW UPDATE / CHANGES FROM FIGMA: SUGGESTED ITEMS --- */}
//                           {gift.items && gift.items.length > 0 && (
//                             <div className={styles.suggestedItems}>
//                               <h4 className={styles.suggestedItemsTitle}>
//                                 🛒 Suggested Items to Buy:
//                               </h4>
//                               <ul className={styles.suggestedItemsList}>
//                                 {gift.items.map((item, idx) => (
//                                   <li key={idx} className={styles.suggestedItem}>
//                                     {item}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           )}
//                           {/* -------------------------------------------------------- */}

//                           <div className={styles.giftMeta}>
//                             <span className={styles.giftReason}><strong>Why:</strong> {gift.reason}</span>
//                             <span className={styles.giftBudget}><strong>Budget:</strong> {gift.budget}</span>
//                           </div>
//                           {gift.message && (
//                             <p className={styles.giftMessage}>{gift.message}</p>
//                           )}
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


// frontend/src/pages/GiftIdea/GiftIdea.jsx
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import styles from "./GiftIdea.module.css";
import { useGift } from "../../hooks/useGift";
import heroImage from '../../images/bg.png';
// PICTURE ABOVE GIFT IDEA TITLE - Import Image
import giftBoxImage from '../../images/sample.png';

export default function GiftIdea() {
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [selectedGiftType, setSelectedGiftType] = useState(null); 

  // UPDATED STATE: Split recipient into Name and Relationship
  const [formData, setFormData] = useState({ 
    // Heartfelt fields
    recipientName: "", 
    recipientRelationship: "",
    gender_identity: "", 
    interests: "", 
    budget: "", 
    occasion: "", 
    personality: "", 
    age_range: "", 
    message_style: "",
    // Surprise field
    budget_range: "", 
    gift_category: ""
  });

  const { ideas: giftIdeas, loading, error, generateGiftIdeas, setIdeas, setError } = useGift();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll(`.${styles.fadeInUp}`);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, [selectedGiftType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // COMBINE NAME AND RELATIONSHIP FOR THE AI
    // This creates a string like: "Sarah (Girlfriend)" which works with your existing backend
    const finalRecipientString = `${formData.recipientName} (${formData.recipientRelationship})`;

    const submissionData = {
      ...formData,
      recipient: finalRecipientString 
    };

    try {
      await generateGiftIdeas(submissionData);
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerateAgain = async () => {
    setModalLoading(true);
    setError(null);

    // Re-construct the recipient string for "Generate Again"
    const finalRecipientString = `${formData.recipientName} (${formData.recipientRelationship})`;

    const submissionData = {
      ...formData,
      recipient: finalRecipientString
    };

    try {
      const newIdeas = await generateGiftIdeas(submissionData);
      setIdeas(newIdeas);
    } catch (err) {
      console.error(err);
      setError("Please try again in a few minutes");
    } finally {
      setModalLoading(false);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const handleCardClick = (type) => {
    setSelectedGiftType(type);
    // Reset form
    setFormData({
      recipientName: "", recipientRelationship: "", gender_identity: "", interests: "", budget: "", 
      occasion: "", personality: "", age_range: "", message_style: "",
      budget_range: "", gift_category: ""
    });
  };

  const handleBackToSelection = () => {
    setSelectedGiftType(null);
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.container}>
          <h1 className={`${styles.pageTitle} ${styles.fadeInUp}`}>
            Generate the Perfect Gift
          </h1>
          <p className={`${styles.pageSubtitle} ${styles.fadeInUp}`}>
             Choose a gift style — quick surprise or thoughtful personalization.
          </p>

          {/* SELECTION CARDS */}
          {selectedGiftType === null && (
            <div className={`${styles.cardSelection} ${styles.fadeInUp}`}>
              <div 
                className={styles.selectionCard}
                onClick={() => handleCardClick('surprise')}
              >
                <div className={styles.cardIcon}>🎉</div>
                <h2 className={styles.cardTitle}>Exciting Surprise</h2>
                <p className={styles.cardDesc}>For quick, fun, instant suggestions</p>
              </div>

              <div 
                className={styles.selectionCard}
                onClick={() => handleCardClick('heartfelt')}
              >
                <div className={styles.cardIcon}>💖</div>
                <h2 className={styles.cardTitle}>Heartfelt Gift</h2>
                <p className={styles.cardDesc}>For thoughtful, personalized recommendations</p>
              </div>
            </div>
          )}

          {/* SURPRISE FORM */}
          {selectedGiftType === 'surprise' && (
             <section className={styles.formSection}>
               <Card className={`${styles.giftCard} ${styles.fadeInUp}`}>
                 <button 
                   className={styles.backButton}
                   onClick={handleBackToSelection}
                   type="button"
                 >
                   ← Back to Selection
                 </button>

                 <form className={styles.form} onSubmit={handleSubmit}>
                   <div className={styles.formGroup}>
                     <label htmlFor="budget_range" className={styles.label}>
                       Budget Range
                     </label>
                     <select
                       id="budget_range"
                       name="budget_range"
                       value={formData.budget_range}
                       onChange={handleInputChange}
                       className={styles.select}
                       required
                     >
                       <option value="">Select your budget</option>
                       <option value="below100">Below ₱100</option>
                       <option value="100-250">₱100–₱250</option>
                       <option value="250-500">₱250–₱500</option>
                       <option value="1000+">₱1,000+</option>
                       <option value="unlimited">No budget limit</option>
                     </select>
                   </div>

                   <div className={styles.formGroup}>
                     <label htmlFor="gift_category" className={styles.label}>
                       Gift Category
                     </label>
                     <input
                       type="text"
                       id="gift_category"
                       name="gift_category"
                       value={formData.gift_category}
                       onChange={handleInputChange}
                       placeholder='e.g., "something practical", "something funny", "useful", "aesthetic", etc.'
                       className={styles.input}
                       required
                     />
                   </div>

                   <button type="submit" className={styles.submitButton} disabled={loading}>
                     {loading ? "Generating..." : "🎁 Generate Surprise Gift"}
                   </button>
                   {error && <p className={styles.errorText}>{error}</p>}
                 </form>
               </Card>
             </section>
          )}

          {/* HEARTFELT FORM */}
          {selectedGiftType === 'heartfelt' && (
            <section className={styles.formSection}>
              <Card className={`${styles.giftCard} ${styles.fadeInUp}`}>
                <button 
                   className={styles.backButton}
                   onClick={handleBackToSelection}
                   type="button"
                 >
                   ← Back to Selection
                 </button>

                <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.formGroup}>
                    <label htmlFor="occasion" className={styles.label}>
                      Occasion
                    </label>
                    <select 
                      id="occasion" 
                      name="occasion" 
                      className={styles.select}
                      value={formData.occasion}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="graduation">Graduation</option>
                      <option value="christmas">Christmas</option>
                      <option value="valentines">Valentine&apos;s Day</option>
                      <option value="mothersday">Mother&apos;s Day</option>
                      <option value="fathersday">Father&apos;s Day</option>
                      <option value="wedding">Wedding</option>
                      <option value="babyshower">Baby Shower</option>
                      <option value="debut">Debut</option>
                      <option value="teachersday">Teacher&apos;s Day</option>
                      <option value="randomsurprise">Random Surprise</option>
                    </select>
                  </div>

                  {/* --- NEW UPDATE: Split Recipient Name & Relationship --- */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className={styles.formGroup}>
                      <label htmlFor="recipientName" className={styles.label}>Recipient Name</label>
                      <input
                        type="text"
                        id="recipientName"
                        name="recipientName"
                        value={formData.recipientName}
                        onChange={handleInputChange}
                        placeholder='e.g. "Sarah"'
                        className={styles.input}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="recipientRelationship" className={styles.label}>Relationship</label>
                      <input
                        type="text"
                        id="recipientRelationship"
                        name="recipientRelationship"
                        value={formData.recipientRelationship}
                        onChange={handleInputChange}
                        placeholder='e.g. "Mom"'
                        className={styles.input}
                        required
                      />
                    </div>
                  </div>
                  {/* ------------------------------------------------------- */}

                  <div className={styles.formGroup}>
                    <label htmlFor="gender_identity" className={styles.label}>
                      Gender & Identity
                    </label>
                    <select 
                      id="gender_identity" 
                      name="gender_identity" 
                      className={styles.select}
                      value={formData.gender_identity}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select gender & identity</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-Binary">Non-Binary</option>
                      <option value="Transgender Male">Transgender Male</option>
                      <option value="Transgender Female">Transgender Female</option>
                      <option value="Gay Male">Gay Male</option>
                      <option value="Lesbian / Queer Woman">Lesbian / Queer Woman</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="age_range" className={styles.label}>
                      Age Range
                    </label>
                    <select 
                      id="age_range" 
                      name="age_range" 
                      className={styles.select}
                      value={formData.age_range}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select age range</option>
                      <option value="0-10">0–10</option>
                      <option value="11-15">11–15</option>
                      <option value="16-20">16–20</option>
                      <option value="21-30">21–30</option>
                      <option value="31-40">31–40</option>
                      <option value="41-50">41–50</option>
                      <option value="51-60">51–60</option>
                      <option value="61+">61+</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="interests" className={styles.label}>Recipient&apos;s Interests</label>
                    <textarea
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      /* --- UPDATED PLACEHOLDER --- */
                      placeholder="Input as many as you can (e.g. music, art, travel. etc.)"
                      rows={3}
                      className={styles.textarea}
                      required
                    />
                  </div>

                   <div className={styles.formGroup}>
                    <label htmlFor="personality" className={styles.label}>
                      Personality
                    </label>
                    <select 
                      id="personality" 
                      name="personality" 
                      className={styles.select}
                      value={formData.personality}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select personality style</option>
                      <option value="Homebody / Introvert">Homebody / Introvert</option>
                      <option value="Social Butterfly / Extrovert">Social Butterfly / Extrovert</option>
                      <option value="Maximalist / Bold & Expressive">Maximalist / Bold & Expressive</option>
                      <option value="Minimalist / Simple">Minimalist / Simple</option>
                      <option value="Practical / Functional">Practical / Functional</option>
                      <option value="Sentimental / Nostalgic">Sentimental / Nostalgic</option>
                      <option value="Creative / Artsy">Creative / Artsy</option>
                      <option value="Techy / Gadget Lover">Techy / Gadget Lover</option>
                      <option value="Fashionable / Trendy">Fashionable / Trendy</option>
                      <option value="Food Lover">Food Lover</option>
                      <option value="Adventurous">Adventurous</option>
                      <option value="Workaholic">Workaholic</option>
                      <option value="Gamer">Gamer</option>
                      <option value="Tita/Tito Vibe">"Tita/Tito" Vibe</option>
                      <option value="Sosyal / Luxury Lover">"Sosyal" / Luxury Lover</option>
                      <option value="Marites / Chismosa">Marites / Chismosa</option>
                      <option value="Eco-Conscious / Sustainable">Eco-Conscious / Sustainable</option>
                      <option value="Wellness Guru / Self-Care">Wellness Guru / Self-Care</option>
                      <option value="Fur Parent / Pet Lover">"Fur Parent" / Pet Lover</option>
                      <option value="Spiritual / Astrology Lover">"Spiritual" / Astrology Lover</option>
                      <option value="Intellectual / Bookworm">Intellectual / Bookworm</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message_style" className={styles.label}>
                      Message Style
                    </label>
                    <select 
                      id="message_style" 
                      name="message_style" 
                      className={styles.select}
                      value={formData.message_style}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select message style</option>
                      <option value="sweetenglish">Sweet (English)</option>
                      <option value="sweettagalog">Sweet (Tagalog)</option>
                      <option value="funny">Funny</option>
                      <option value="shortsimple">Short & Simple</option>
                      <option value="emotional">Emotional</option>
                    </select>
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
                      <option value="below100">Below ₱100</option>
                      <option value="100-500">₱100 - ₱500</option>
                      <option value="500-1000">₱500 - ₱1,000</option>
                      <option value="1000-3000">₱1,000 - ₱3,000</option>
                      <option value="3000-5000">₱3,000 - ₱5,000</option>
                      <option value="5000+">₱5,000+</option>
                    </select>
                  </div>

                  <button type="submit" className={styles.submitButton} disabled={loading}>
                    {loading ? "Generating..." : "💝 Generate Heartfelt Gifts"}
                  </button>
                  {error && <p className={styles.errorText}>{error}</p>}
                </form>
              </Card>
            </section>
          )}

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
            <div className={styles.ribbon}></div>
            <div className={styles.ribbonVertical}></div>
            
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

                        {/* PICTURE ABOVE GIFT IDEA TITLE */}
                         <img 
                          src={giftBoxImage} 
                          alt="Gift box" 
                          className={styles.giftImage}
                        />

                        <div className={styles.giftDetails}>
                          <h3 className={styles.giftTitle}>{gift.title}</h3>
                          <p className={styles.giftDescription}>{gift.description}</p>
                          
                          {gift.items && gift.items.length > 0 && (
                            <div className={styles.suggestedItems}>
                              <h4 className={styles.suggestedItemsTitle}>
                                🛒 Suggested Items to Buy:
                              </h4>
                              <ul className={styles.suggestedItemsList}>
                                {gift.items.map((item, idx) => (
                                  <li key={idx} className={styles.suggestedItem}>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className={styles.giftMeta}>
                            <span className={styles.giftReason}><strong>Why:</strong> {gift.reason}</span>
                            <span className={styles.giftBudget}><strong>Budget:</strong> {gift.budget}</span>
                          </div>
                          {gift.message && (
                            <p className={styles.giftMessage}>{gift.message}</p>
                          )}
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