import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <p className={styles.copyright}>© Regalo.AI 2025</p>
          <p className={styles.developer}>Developed by SnowCrow</p>
        </div>
        <div className={styles.section}>
          <p className={styles.contactTitle}>Contact Us:</p>
          <p className={styles.contactInfo}>snowcrow@gmail.com</p>
          <p className={styles.contactInfo}>Corner M.J Cuenco, R. Palma St., Cebu City, 6000</p>
        </div>
      </div>
    </footer>
  );
}