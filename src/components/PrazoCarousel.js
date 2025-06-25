import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './PrazoCarousel.module.css';

const imagens = [
  { src: 'img/prazos/em-dia.png', legenda: 'Entrega em Dia' },
  { src: 'img/prazos/prazo-medio.png', legenda: 'Entrega dentro do Prazo Médio (Alerta Amarelo)' },
  { src: 'img/prazos/prazo-limite.png', legenda: 'Entrega dentro do Prazo Limite (Crítico - Laranja)' },
  { src: 'img/prazos/em-atraso.png', legenda: 'Entrega em Atraso (Urgente - Vermelho)' }
];

export default function PrazoCarousel() {
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
          className={`${styles.imagem} ${fade ? styles.fadeOut : styles.fadeIn}`}
        />
        <button className={styles.botaoSeta} onClick={avancar}>➡️</button>
      </div>
      <p className={styles.legenda}>{imagens[index].legenda}</p>
    </div>
  );
}