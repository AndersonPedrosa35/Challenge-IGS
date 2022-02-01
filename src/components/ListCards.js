import React from 'react';
import jogos from '../data/jogos';
import cassanique from '../assets/Archive/icon_idle.png';
import MiniCard from './MiniCard';

function findNameGames(url) {
    return url.split('sobre/')[1].split('.html')[0];
}

function renderCards() {
  return jogos.map(({ url, image }) => {
    return (
      // <Link
      //   to={ url }
      // >
        <MiniCard
          src={ image }
          alt={ findNameGames(url) }
        />
      // </Link>
  )});
}

export default function ListCards() {
    return (
      <section className="container-cards">
        { renderCards() }
        <section
          // to="casinoonlinegratis.com.br/caca-niquel/ultra-hot/"
          className="mini-card"
        >
          <img src={ cassanique } alt="Cassanique" />
        </section>
      </section>
    )
}
