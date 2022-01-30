import React from 'react';
import jogos from '../data/jogos';
import MiniCard from './MiniCard';

function findNameGames(url) {
    return url.split('sobre/')[1].split('.html')[0];
}

export default function ListCards() {
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
    )})
}
