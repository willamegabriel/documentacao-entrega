import React, { useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ImageCarousel.module.css';

const imagens = [
  { src: 'img/prazos/em-dia.png', legenda: 'Entrega em Dia' },
  { src: 'img/prazos/prazo-medio.png', legenda: 'Entrega dentro do Prazo Médio (Alerta Amarelo)' },
  { src: 'img/prazos/prazo-limite.png', legenda: 'Entrega dentro do Prazo Limite (Crítico - Laranja)' },
  { src: 'img/prazos/em-atraso.png', legenda: 'Entrega em Atraso (Urgente - Vermelho)' }
];

export default function ImageCarousel() {
  const spinnerRef = useRef(null);
  const [rotationY, setRotationY] = useState(0);
  const startXRef = useRef(null);

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;

    const handleMouseMove = (ev) => {
      const delta = ev.clientX - startXRef.current;
      const newRotation = rotationY + delta * 0.5;
      spinnerRef.current.style.transform = `rotateY(${newRotation}deg)`;
      setRotationY(newRotation);
      startXRef.current = ev.clientX;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className={styles.carousel} onMouseDown={handleMouseDown}>
      <div className={styles.spinner} ref={spinnerRef}>
        {imagens.map((img, i) => (
          <img
            key={i}
            src={useBaseUrl(`/${img.src}`)}
            className={styles.image}
            style={{
              transform: `rotateY(${i * (360 / imagens.length)}deg) translateZ(200px)`
            }}
            alt={img.legenda}
            title={img.legenda}
          />
        ))}
      </div>
    </div>
  );
}
