import React from 'react';
import styles from './BackgroundSymbol.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function BackgroundSymbol() {
  const imageUrl = useBaseUrl('/img/background.png'); // caminho ajustado pelo baseUrl

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt="Background 3D"
          className={styles.backgroundImage}
          loading="eager"
          draggable={false}
        />
      </div>
    </div>
  );
}
