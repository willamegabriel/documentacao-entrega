import React from 'react';
import styles from './BackgroundSymbol.module.css';

export default function BackgroundSymbol() {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.imageWrapper}>
        <img
          src="/img/background.png"
          alt="Background 3D"
          className={styles.backgroundImage}
          loading="eager"
          draggable={false}
        />
      </div>
    </div>
  );
}
