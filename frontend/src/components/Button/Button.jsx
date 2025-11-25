import React from 'react';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  disabled = false 
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}