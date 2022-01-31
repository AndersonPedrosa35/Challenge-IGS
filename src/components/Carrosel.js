import React from 'react';
import { Carousel } from 'react-bootstrap';
import ListCards from './ListCards';


export default function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <section className="container-cards">
          <ListCards />
        </section>
      </Carousel.Item>
      <Carousel.Item>
        <section className="container-cards">
          <ListCards />
        </section>
      </Carousel.Item>
      <Carousel.Item>
        <section className="container-cards">
          <ListCards />
        </section>
      </Carousel.Item>
    </Carousel>
  );
}
