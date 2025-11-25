import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import styles from './GiftIdea.module.css';

export default function GiftIdea() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [formData, setFormData] = useState({
    recipient: '',
    interests: '',
    budget: ''
  });
  const [giftIdeas, setGiftIdeas] = useState([]);

  // Mock gift ideas for demonstration
  const mockGiftIdeasSet1 = [
    {
      id: 1,
      title: 'Personalized Recipe Book',
      description: 'A custom recipe book filled with family favorites and space for new discoveries',
      reason: 'Perfect for someone who loves cooking and trying new dishes',
      budget: '₱500 - ₱1,000'
    },
    {
      id: 2,
      title: 'Gourmet Cooking Spices Set',
      description: 'A curated collection of premium local and international spices',
      reason: 'Great for experimenting with different flavors and cuisines',
      budget: '₱300 - ₱800'
    },
    {
      id: 3,
      title: 'Kitchen Gadget Organizer',
      description: 'A stylish organizer to keep cooking tools neat and accessible',
      reason: 'Helps keep the kitchen tidy for passionate cooks',
      budget: '₱400 - ₱900'
    }
  ];

  const mockGiftIdeasSet2 = [
    {
      id: 6,
      title: 'Cookbook Collection',
      description: 'A set of bestselling cookbooks featuring Filipino and international cuisine',
      reason: 'Expands culinary knowledge and inspires new dishes',
      budget: '₱800 - ₱1,500'
    },
    {
      id: 7,
      title: 'Kitchen Knife Set',
      description: 'Professional-grade knives for precise cutting and food preparation',
      reason: 'Essential tools for anyone passionate about cooking',
      budget: '₱1,200 - ₱2,000'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show loading state
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setGiftIdeas(mockGiftIdeasSet1);
      setShowModal(true);
    }, 2000);
  };

  const handleGenerateAgain = () => {
    // Show loading inside modal
    setModalLoading(true);

    // Simulate API call for new ideas
    setTimeout(() => {
      // Alternate between gift idea sets
      const newIdeas = giftIdeas[0]?.id === 1 ? mockGiftIdeasSet2 : mockGiftIdeasSet1;
      setGiftIdeas(newIdeas);
      setModalLoading(false);
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
                  <label htmlFor="recipient" className={styles.label}>
                    Recipient Name / Relationship
                  </label>
                  <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    placeholder="e.g., Mom, best friend, boyfriend, coworker"
                    className={styles.input}
                    value={formData.recipient}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="interests" className={styles.label}>
                    Recipient Interests
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    placeholder="e.g., cooking, reading, gaming, travel, music"
                    rows={4}
                    className={styles.textarea}
                    value={formData.interests}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="budget" className={styles.label}>
                    Budget Range
                  </label>
                  <select 
                    id="budget" 
                    name="budget" 
                    className={styles.select}
                    value={formData.budget}
                    onChange={handleInputChange}
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
                  {loading ? 'Generating...' : 'Generate Ideas'}
                </button>
              </form>
            </Card>
          </section>

          {/* Loading State */}
          {loading && (
            <section className={styles.loading}>
              <div className={styles.spinner}></div>
              <p className={styles.loadingText}>Thinking of the best gifts…</p>
            </section>
          )}
        </div>
      </main>

      {/* Gift Box Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.giftBoxModal} onClick={(e) => e.stopPropagation()}>
            {/* Gift Box Ribbon */}
            <div className={styles.ribbon}></div>
            <div className={styles.ribbonVertical}></div>

            {/* Close Button */}
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>

            {/* Gift Box Content */}
            <div className={styles.giftBoxContent}>
              <h2 className={styles.modalTitle}>🎁 Here are your gift ideas!</h2>

              {modalLoading ? (
                <div className={styles.modalLoadingContainer}>
                  <div className={styles.spinner}></div>
                  <p className={styles.loadingText}>Thinking of the best gifts…</p>
                </div>
              ) : (
                <>
                  <div className={styles.giftList}>
                    {giftIdeas.map((gift, index) => (
                      <div key={gift.id} className={styles.giftItem}>
                        <div className={styles.giftNumber}>{index + 1}</div>
                        <div className={styles.giftDetails}>
                          <h3 className={styles.giftTitle}>{gift.title}</h3>
                          <p className={styles.giftDescription}>{gift.description}</p>
                          <div className={styles.giftMeta}>
                            <span className={styles.giftReason}>
                              <strong>Why:</strong> {gift.reason}
                            </span>
                            <span className={styles.giftBudget}>
                              <strong>Budget:</strong> {gift.budget}
                            </span>
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