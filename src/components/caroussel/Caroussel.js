import React from 'react';
import Carousel from 'nuka-carousel';
import './Caroussel.scss';

class Caroussel extends React.Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0,
    };
  }

  render() {
    return (
      <Carousel
        slideWidth={1}
        dragging
        swiping
        slidesToScroll={1}
        initialSlideHeight
        slidesToShow={1}
        cellSpacing={20}
        enableKeyboardControls
        autoplay
        wrapAround
        slideIndex={this.state.slideIndex}
        afterSlide={(slideIndex) => this.setState({ slideIndex })}
        renderAnnounceSlideMessage={({ currentSlide, slideCount }) => `Slide ${currentSlide + 1} of ${slideCount}`}
        renderCenterLeftControls={({ previousSlide }) => (
          <button className="buttonCarousel" onClick={previousSlide}><i className="far fa-arrow-alt-circle-left" /></button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className="buttonCarousel" onClick={nextSlide}><i className="far fa-arrow-alt-circle-right" /></button>
        )}
      >
        <img className="imgCarousel" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="c'est un chat" />
        <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="c'est un chat" />
        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" alt="c'est un chat" />
        <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" alt="c'est un chat" />
        <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" alt="c'est un chat" />
        <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" alt="c'est un chat" />
      </Carousel>
    );
  }
}

export default Caroussel;
