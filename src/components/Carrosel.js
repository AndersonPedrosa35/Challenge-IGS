import React from 'react';
import { Carousel } from 'react-bootstrap';
import ListCards from './ListCards';
import next from '../assets/Archive/arrow_right.png';
import previous from '../assets/Archive/arrow_left.png';
import indicatorOn from '../assets/Archive/pagination_on.png';


export default function Carrosel() {
  return (
    <Carousel
      nextIcon={ <img src={ next } alt="Proximo" width={ "50px" } /> }
      prevIcon={ <img src={ previous } alt="Proximo" width={ "50px" } /> }
    >
      <Carousel.Item>
        <ListCards />
      </Carousel.Item>
      <Carousel.Item>
        <ListCards />
      </Carousel.Item>
      <Carousel.Item>
        <ListCards />
      </Carousel.Item>
    </Carousel>
  );
}
