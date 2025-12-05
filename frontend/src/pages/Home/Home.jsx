import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import heroImage from '../../images/bg.png';
import styles from './Home.module.css';

export default function Home() {
  // Add scroll animation logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    }, { threshold: 0.15 }); // Trigger when 15% is visible

    // Select all elements with any animation class
    const hiddenElements = document.querySelectorAll(`.${styles.fadeInUp}, .${styles.slideLeft}, .${styles.popIn}`);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
          {/* Hero keeps the subtle Fade Up to be safe */}
          <div className={`${styles.heroContent} ${styles.fadeInUp}`}>
            <h1 className={styles.heroTitle}>Find the Perfect Gift in Seconds</h1>
            <p className={styles.heroSubtitle}>AI-powered Filipino gift idea generator</p>
            <Link to="/generate">
              <Button variant="cta">Start Generating Gift Ideas</Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <div className={styles.featureGrid}>
              {/* Changed to Slide Left */}
              <Card variant="feature" className={styles.slideLeft}>
                <h3>🎯 Personalized Recommendations</h3>
                <p>AI analyzes recipient details, interests, and budget to generate customized gift ideas</p>
              </Card>

              <Card variant="feature" className={styles.slideLeft}>
                <h3>🇵🇭 Filipino-Centric</h3>
                <p>Designed with Filipino culture and gift-giving traditions in mind</p>
              </Card>

              <Card variant="feature" className={styles.slideLeft}>
                <h3>💰 Budget-Conscious</h3>
                <p>Filter suggestions based on your specific budget range</p>
              </Card>

              <Card variant="feature" className={styles.slideLeft}>
                <h3>🔒 Privacy-First</h3>
                <p>No data storage, no account required – your privacy is our priority</p>
              </Card>

              <Card variant="feature" className={styles.slideLeft}>
                <h3>⚡ Fast & Efficient</h3>
                <p>Get multiple gift suggestions in seconds</p>
              </Card>

              <Card variant="feature" className={styles.slideLeft}>
                <h3>🎁 Category-Based</h3>
                <p>Focus on general gift categories rather than specific brands</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.stepGrid}>
              
              {/* Step 1: Mode Selection */}
              <div className={`${styles.step} ${styles.popIn}`}>
                <div className={styles.stepNumber}>1</div>
                <h3>Choose a gift style</h3>
                <p>Select between a quick "Exciting Surprise" or a "Heartfelt Gift"</p>
              </div>

              {/* Step 2: Customization (covers both Short & Long forms) */}
              <div className={`${styles.step} ${styles.popIn}`}>
                <div className={styles.stepNumber}>2</div>
                <h3>Customize details</h3>
                <p>Enter the occasion, interests, or specific category details</p>
              </div>

              {/* Step 3: Budget */}
              <div className={`${styles.step} ${styles.popIn}`}>
                <div className={styles.stepNumber}>3</div>
                <h3>Set a budget</h3>
                <p>Choose a price range that fits your wallet</p>
              </div>

              {/* Step 4: Generate */}
              <div className={`${styles.step} ${styles.popIn}`}>
                <div className={styles.stepNumber}>4</div>
                <h3>Click "Generate"</h3>
                <p>Let our AI curate the perfect recommendations</p>
              </div>

              {/* Step 5: Results + Suggested Items */}
              <div className={`${styles.step} ${styles.popIn}`}>
                <div className={styles.stepNumber}>5</div>
                <h3>Get ideas</h3>
                <p>Receive thoughtful suggestions and specific items to buy</p>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className={styles.faqPrivacyWrapper}>
          <section className={styles.faq}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <div className={styles.faqList}>
                {/* Changed to Slide Left */}
                <Card className={styles.slideLeft}>
                  <h3>Does this app use specific brands?</h3>
                  <p>No, all gift suggestions focus on general categories, not brand names.</p>
                </Card>

                <Card className={styles.slideLeft}>
                  <h3>Is Regalo.AI free to use?</h3>
                  <p>Yes, it's completely free for everyone.</p>
                </Card>

                <Card className={styles.slideLeft}>
                  <h3>What data do you collect?</h3>
                  <p>None. All inputs are used only to generate gift ideas and are not stored.</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Privacy & Terms */}
          <section className={styles.privacy}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Privacy & Terms</h2>
              <div className={styles.privacyContent}>
                 {/* Changed to Slide Left */}
                <Card className={styles.slideLeft}>
                  <h3>Data Privacy</h3>
                  <p>We do not store any personal data. No account creation is necessary to use the app.</p>
                </Card>
                
                <Card className={styles.slideLeft}>
                  <h3>Input Usage</h3>
                  <p>All information is used solely to generate personalized gift suggestions.</p>
                </Card>
                
                <Card className={styles.slideLeft}>
                  <h3>AI Content</h3>
                  <p>AI-generated suggestions may vary and are intended as guidance, not absolute recommendations.</p>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}