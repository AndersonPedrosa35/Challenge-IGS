import React from 'react';
import { Carousel } from 'react-bootstrap';
import ListCards from './ListCards';
import next from '../assets/Archive/arrow_right.png';
import previous from '../assets/Archive/arrow_left.png';


export default function Carrosel() {
  return (
    <Carousel
      nextIcon={ <img src={ next } alt="Proximo" width={ "50px" } /> }
      prevIcon={ <img src={ previous } alt="Proximo" width={ "50px" } /> }
    >
      <Carousel.Item
        role="imagens"
      >
        <ListCards />
      </Carousel.Item>
      <Carousel.Item
        role="imagens"
      >
        <ListCards />
      </Carousel.Item>
      <Carousel.Item
        role="imagens"
      >
        <ListCards />
      </Carousel.Item>
    </Carousel>
  );
}
