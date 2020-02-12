import React, { useState, useEffect, useRef } from 'react';
import {
  CarouselContainer,
  SlidesContainer,
  Slide,
  SlideTextContainer,
  SlideTitle,
  SlideDescription,
  SlideCTA,
  CarouselControlsContainer,
  CarouselButton,
} from './Carousel.styles';

const Carousel = props => {
  const { autoplay = true, delay = 4000, items = [] } = props || {};
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentSlideRef = useRef(null);
  const totalSlides = items.length;

  const pauseCarousel = () => setIsPaused(true);
  const unPauseCarousel = () => setIsPaused(false);

  const isCurrent = i => currentSlide === i;

  const handleButtonKeyDown = evt => {
    if (evt.keyCode === 13 || evt.keyCode === 32) {
      setTimeout(() => currentSlideRef.current.focus(), 0);
    }
  };

  useEffect(() => {
    let slideInterval;

    currentSlideRef.current.addEventListener('focusin', pauseCarousel);
    currentSlideRef.current.addEventListener('focusout', unPauseCarousel);

    if (autoplay && !isPaused) {
      slideInterval = setInterval(() => {
        const nextSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(nextSlide);
      }, delay);
    }

    return () => {
      clearInterval(slideInterval);
      currentSlideRef.current.removeEventListener('focusin', pauseCarousel);
      currentSlideRef.current.removeEventListener('focusout', unPauseCarousel);
    };
  });

  return (
    <CarouselContainer className="carousel">
      <SlidesContainer
        className="carousel__slidesContainer"
        id="slidesContainer"
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        tabIndex="0"
        ref={currentSlideRef}
      >
        {items.map((item, i) => (
          <Slide
            className="carousel__slide"
            key={i}
            totalSlides={totalSlides}
            aria-hidden={isCurrent(i) ? 'false' : 'true'}
          >
            <img src={item.asset.url} alt={item.asset.altText} className="carousel__slideImage" />
            <SlideTextContainer>
              <SlideTitle className="carousel__slideTitle">{item.title}</SlideTitle>
              <SlideDescription className="carousel__slideDescription">{item.description}</SlideDescription>
              <SlideCTA
                href={item.cta.url}
                target="_blank"
                className="carousel__slideCTA"
                tabIndex={!isCurrent(i) ? -1 : ''}
              >
                {item.cta.text}
              </SlideCTA>
            </SlideTextContainer>
          </Slide>
        ))}
      </SlidesContainer>
      <CarouselControlsContainer className="carousel__controls" role="group">
        {items.map((item, i) => (
          <CarouselButton
            className={isCurrent(i) ? 'carousel__controlsButton-selected' : 'carousel__controlsButton'}
            key={i}
            selected={isCurrent(i)}
            onClick={() => setCurrentSlide(i)}
            onKeyDown={handleButtonKeyDown}
            aria-label={`Go to ${item.title}`}
            aria-controls="slidesContainer"
          />
        ))}
      </CarouselControlsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
