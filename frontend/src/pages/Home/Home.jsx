import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
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
              <Card variant="feature">
                <h3>🎯 Personalized Recommendations</h3>
                <p>AI analyzes recipient details, interests, and budget to generate customized gift ideas</p>
              </Card>

              <Card variant="feature">
                <h3>🇵🇭 Filipino-Centric</h3>
                <p>Designed with Filipino culture and gift-giving traditions in mind</p>
              </Card>

              <Card variant="feature">
                <h3>💰 Budget-Conscious</h3>
                <p>Filter suggestions based on your specific budget range</p>
              </Card>

              <Card variant="feature">
                <h3>🔒 Privacy-First</h3>
                <p>No data storage, no account required – your privacy is our priority</p>
              </Card>

              <Card variant="feature">
                <h3>⚡ Fast & Efficient</h3>
                <p>Get multiple gift suggestions in seconds</p>
              </Card>

              <Card variant="feature">
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
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Enter recipient details</h3>
                <p>Tell us about who you're buying for</p>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Enter interests</h3>
                <p>Share what they love and enjoy</p>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Set a gift budget</h3>
                <p>Choose a comfortable price range</p>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h3>Click "Generate Ideas"</h3>
                <p>Let our AI work its magic</p>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>5</div>
                <h3>Get personalized suggestions</h3>
                <p>Receive thoughtful gift recommendations</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              <Card>
                <h3>Does this app use specific brands?</h3>
                <p>No, all gift suggestions focus on general categories, not brand names.</p>
              </Card>

              <Card>
                <h3>Is Regalo.AI free to use?</h3>
                <p>Yes, it's completely free for everyone.</p>
              </Card>

              <Card>
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
              <Card>
                <ul className={styles.privacyList}>
                  <li><strong>Data Privacy:</strong> We do not store any personal data.</li>
                  <li><strong>Input Usage:</strong> All information is used solely to generate personalized gift suggestions.</li>
                  <li><strong>Account Requirement:</strong> No account creation is necessary to use the app.</li>
                  <li><strong>AI Content:</strong> AI-generated suggestions may vary and are intended as guidance, not absolute recommendations.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}