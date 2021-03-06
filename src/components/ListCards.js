import React from 'react';
import MiniCard from './MiniCard';
import jogos from '../data/jogos';
import cassanique from '../assets/Archive/icon_idle.png';

function findNameGames(url) {
    return url.split('sobre/')[1].split('.html')[0];
}

function renderCards() {
  return jogos.map(({ url, image }) => {
    return (
      <a
        href={ url }
        target="_blank"
      >
        <MiniCard
          src={ image }
          alt={ findNameGames(url) }
        />
      </a>
  )});
}

export default function ListCards() {
    return (
      <section
        className="container-cards"
        role="imagens"
      >
        { renderCards() }
        <a
          href="https://www.casinoonlinegratis.com.br/caca-niquel/ultra-hot/"
          target="_blank"
          className="mini-card"
        >
          <img src={ cassanique } alt="Cassanique" />
        </a>
      </section>
    )
}
