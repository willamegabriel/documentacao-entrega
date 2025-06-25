import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './PrazoCarousel.module.css'; // reutilizando os estilos do outro carousel

const imagens = [
  { src: 'img/impressao/48-colunas.png', legenda: 'Modelo de Impressão 48 COLUNAS (CUPOM)' },
  { src: 'img/impressao/96-colunas.png', legenda: 'Modelo de Impressão 96 COLUNAS (A4)' },
];

export default function ImpressaoCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const trocarImagem = (novoIndex) => {
    setFade(true);
    setTimeout(() => {
      setIndex(novoIndex);
      setFade(false);
    }, 300);
  };

  const avancar = () => trocarImagem((index + 1) % imagens.length);
  const voltar = () => trocarImagem((index - 1 + imagens.length) % imagens.length);

  return (
    <div className={styles.carousel}>
      <div className={styles.imagemContainer}>
        <button className={styles.botaoSeta} onClick={voltar}>⬅️</button>
        <img
          src={useBaseUrl(`/${imagens[index].src}`)}
          alt={imagens[index].legenda}
          className={`${styles.impressaoImagem} ${fade ? styles.fadeOut : styles.fadeIn}`}
        />
        <button className={styles.botaoSeta} onClick={avancar}>➡️</button>
      </div>
      <p className={styles.legenda}>{imagens[index].legenda}</p>
    </div>
  );
}