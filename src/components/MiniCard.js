import React from 'react';

export default function MiniCard({ src, alt }) {
  return (
      <section className="mini-card">
          <img src={ src } alt={ alt } width={ '200px' }/>
      </section>
  );
}
