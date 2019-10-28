import React from 'react';
import './Caroussel.scss';

const Caroussel = () => (
  <section className="landingPage_carousel">
    <button className="carouselControl">&lt;</button>
    <img className="carouselPlaceholder" src="https://via.placeholder.com/600x350" alt="Carousel" />
    <button className="carouselControl">&gt;</button>
  </section>
);

export default Caroussel;
