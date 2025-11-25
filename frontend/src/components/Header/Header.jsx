import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Regalo.AI
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/generate" className={styles.navLink}>Generate Ideas</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
        </nav>
      </div>
    </header>
  );
}