import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import heroImage from '../../images/bg.png'; // Imported the image
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

    const hiddenElements = document.querySelectorAll(`.${styles.fadeInUp}, .${styles.slideLeft}`);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className={styles.page}>
      <Header />

      {/* Added style prop for background image */}
      <main className={styles.main} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.container}>
          {/* Title Animate Fade Up */}
          <h1 className={`${styles.pageTitle} ${styles.fadeInUp}`}>About Regalo.AI</h1>

          {/* Mission Section - Animate Slide Left */}
          <section className={`${styles.section} ${styles.slideLeft}`}>
            <Card>
              <h2>Our Mission</h2>
              <p className={styles.missionText}>
                Regalo.AI helps Filipinos find thoughtful and personalized gift ideas using AI.
              </p>
            </Card>
          </section>

          {/* Project Overview - Animate Slide Left */}
          <section className={`${styles.section} ${styles.slideLeft}`}>
            <Card>
              <h2>Project Overview</h2>
              <p>
                Regalo.AI is a smart, AI-powered web application created to make gift-giving easier, 
                faster, and more meaningful for every Filipino. By simply entering the recipient's 
                details, interests, and budget, users receive unique and thoughtful gift suggestions 
                tailored specifically to their situation.
              </p>
              <p>
                Powered by the OpenAI GPT API, the system generates creative, relevant, and 
                budget-friendly ideas that remove the stress and uncertainty of choosing the perfect 
                present. Instead of wasting time browsing stores or guessing what someone might like, 
                Regalo.AI provides instant, personalized recommendations with just one click.
              </p>
              <p>
                With its simple interface and intelligent guidance, the platform transforms gift-giving 
                into a smoother, more confident, and more enjoyable experience.
              </p>
            </Card>
          </section>

          {/* Developers Section - Animate Slide Left */}
          <section className={`${styles.section} ${styles.slideLeft}`}>
            <Card>
              <h2>The Developers</h2>
              <p>
                Regalo.AI was developed by <strong>SnowCrow</strong>, a dedicated duo team of 
                3rd-year BSIT students from Cebu Technological University – Main Campus.
              </p>
              <p>
                We designed Regalo.AI to provide smart, user-friendly, and personalized gift 
                recommendations. Through this project, we aim to deliver a practical tool that makes 
                gift-giving faster, simpler, and more enjoyable for everyone.
              </p>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}