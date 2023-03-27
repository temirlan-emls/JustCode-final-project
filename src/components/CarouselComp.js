import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import clothes from '../assets/Carousel/clothes.png';
import jewellery from '../assets/Carousel/jewellery.png';
import electronics from '../assets/Carousel/electronics.png';
import sale from '../assets/Carousel/sale.png';

export default function CarouselComp() {
  return (
    <Carousel autoPlay infiniteLoop interval='2500'>
      <div>
        <img src={sale} alt='sale' />
      </div>
      <div>
        <img src={clothes} alt='clothes' />
      </div>
      <div>
        <img src={jewellery} alt='jewellery' />
      </div>
      <div>
        <img src={electronics} alt='electronics' />
      </div>
    </Carousel>
  );
}
