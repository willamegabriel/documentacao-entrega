import React from 'react';
import styles from './ShootingStarsBackground.module.css';

export default function ShootingStarsBackground() {
  return (
    <div className={styles.night}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className={styles.shooting_star}></div>
      ))}
    </div>
  );
}