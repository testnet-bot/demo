'use client';

import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={styles.toggleContainer}>
      <span className={styles.label}>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`${styles.toggleBtn} ${darkMode ? styles.active : ''}`}
      >
        <div className={styles.knob}></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
