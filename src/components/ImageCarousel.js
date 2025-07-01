import React, { useState, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ImageCarousel.module.css';

const imagens = [
  { src: 'img/prazos/em-dia.png', legenda: 'Entrega em Dia' },
  { src: 'img/prazos/prazo-medio.png', legenda: 'Prazo Médio (Amarelo)' },
  { src: 'img/prazos/prazo-limite.png', legenda: 'Prazo Limite (Laranja)' },
  { src: 'img/prazos/em-atraso.png', legenda: 'Em Atraso (Vermelho)' }
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const startXRef = useRef(null);
  const timeoutRef = useRef(null);

  const changeIndex = (newIndex, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setIndex(newIndex);
      setAnimating(false);
      setDirection(null);
    }, 300);
  };

  const prev = () => changeIndex(index === 0 ? imagens.length - 1 : index - 1, 'right');
  const next = () => changeIndex(index === imagens.length - 1 ? 0 : index + 1, 'left');

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (animating) return;
    startXRef.current = e.clientX;

    const handleMouseMove = (ev) => {
      const deltaX = ev.clientX - startXRef.current;

      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) prev();
        else next();
        startXRef.current = ev.clientX;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    if (animating) return;
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (startXRef.current === null) return;
    const deltaX = e.touches[0].clientX - startXRef.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) prev();
      else next();
      startXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    startXRef.current = null;
  };

  return (
    <div
      className={styles.carousel}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className={styles.botaoSeta} onClick={prev} aria-label="Imagem anterior">
        ⬅️
      </button>

      <div className={styles.imagemComLegenda}>
        <img
          src={useBaseUrl(`/${imagens[index].src}`)}
          alt={imagens[index].legenda}
          title={imagens[index].legenda}
          className={`${styles.image} ${
            animating
              ? direction === 'left'
                ? styles.slideOutLeft
                : styles.slideOutRight
              : styles.slideIn
          }`}
          draggable="false"
        />
        <p className={styles.caption}>{imagens[index].legenda}</p>
      </div>

      <button className={styles.botaoSeta} onClick={next} aria-label="Próxima imagem">
        ➡️
      </button>
    </div>
  );
}
