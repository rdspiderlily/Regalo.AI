import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import heroImage from '../../images/bg.png';
import styles from './About.module.css';

export default function About() {
  // Add scroll animation logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    }, { threshold: 0.15 });

    // Observes elements with slideLeft class
    const hiddenElements = document.querySelectorAll(`.${styles.slideLeft}`);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.container}>
          {/* Title animates Slide Left */}
          <h1 className={`${styles.pageTitle} ${styles.slideLeft}`}>About Regalo.AI</h1>

          {/* Mission Section */}
          <section className={`${styles.section} ${styles.slideLeft}`}>
            <Card className={styles.aboutCard}>
              <h2>Our Mission</h2>
              <p className={styles.missionText}>
                To help Filipinos find the perfect gift for any occasion—from quick surprises to heartfelt gestures—using smart AI technology.
              </p>
            </Card>
          </section>

          {/* Project Overview Section */}
          <section className={`${styles.section} ${styles.slideLeft}`}>
            <Card className={styles.aboutCard}>
              <h2>Project Overview</h2>
              <p>
                Regalo.AI is a smart, AI-powered web application created to make gift-giving easier, 
                faster, and more meaningful for every Filipino. Powered by Gemini 2.5 Flash, the platform removes the 
                stress of choosing a present by offering two distinct ways to generate ideas:
              </p>
              
              <ol className={styles.overviewList}>
                <li>
                  <strong>Exciting Surprise:</strong> A quick and fun mode where users simply set a budget and a category 
                  (e.g., "something practical" or "something aesthetic") for instant suggestions.
                </li>
                <li>
                  <strong>Heartfelt Gift:</strong> A deeply personalized mode that tailors recommendations based on specific 
                  details, including the occasion, recipient’s personality, interests, age, and preferred message 
                  style (English, Tagalog, or Funny).
                </li>
              </ol>

              <p>
                Instead of browsing aimlessly, users receive instant, curated gift ideas complete with 
                descriptions, budget ranges, reasoning ("Why this gift?"), and AI-generated messages. 
                With its intuitive interface and intelligent guidance, Regalo.AI transforms gift-giving 
                into a smoother, more confident, and more enjoyable experience.
              </p>
            </Card>
          </section>

          {/* Developers Section */}
          <section className={`${styles.section} ${styles.slideLeft}`}>
            <Card className={styles.aboutCard}>
              <h2>The Developers</h2>
              <p>
                Regalo.AI was developed by <strong>SnowCrow</strong>, a dedicated duo team of 3rd-year BSIT students from Cebu Technological University – Main Campus. We designed Regalo.AI to provide smart, user-friendly, and personalized gift recommendations. Through this project, we aim to deliver a practical tool that makes gift-giving faster, simpler, and more enjoyable for everyone.
              </p>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}