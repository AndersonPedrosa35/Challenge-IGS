import React from 'react';
import jogos from '../data/jogos';
import cassanique from '../assets/Archive/icon_idle.png';
import MiniCard from './MiniCard';
import { Link } from 'react-router-dom';

function findNameGames(url) {
    return url.split('sobre/')[1].split('.html')[0];
}

function renderCards() {
  return jogos.map(({ url, image }) => {
    return (
      <a
        href={ url }
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
      <section className="container-cards">
        { renderCards() }
        <Link
          to="casinoonlinegratis.com.br/caca-niquel/ultra-hot/"
          className="mini-card"
        >
          <img src={ cassanique } alt="Cassanique" />
        </Link>
      </section>
    )
}
