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
        enableKeyboardControls
        autoplay
        wrapAround
        dragging
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
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}

export default Caroussel;
