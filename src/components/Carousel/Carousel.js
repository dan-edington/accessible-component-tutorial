import React, { useState, useEffect, useRef } from 'react';
import {
  CarouselContainer,
  CarouselItemsContainer,
  CarouselItem,
  CarouselItemTextContainer,
  CarouselItemTitle,
  CarouselItemDescription,
  CarouselItemCTA,
  CarouselControlsContainer,
  CarouselButton,
} from './Carousel.styles';

const Carousel = props => {
  const { autoplay = true, delay = 4000, items = [] } = props || {};
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselItemsRef = useRef(null);
  const totalSlides = items.length;
  let slideInterval;

  const pauseCarousel = () => setIsPaused(true);
  const unPauseCarousel = () => setIsPaused(false);

  const handleButtonKeyDown = evt => {
    if (evt.keyCode === 13 || evt.keyCode === 32) {
      setTimeout(() => carouselItemsRef.current.focus(), 0);
    }
  };

  useEffect(() => {
    carouselItemsRef.current.addEventListener('focusin', pauseCarousel);
    carouselItemsRef.current.addEventListener('focusout', unPauseCarousel);

    if (autoplay && !isPaused) {
      slideInterval = setInterval(() => {
        const nextSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(nextSlide);
      }, delay);
    }

    return () => {
      clearInterval(slideInterval);
      carouselItemsRef.current.removeEventListener('focusin', pauseCarousel);
      carouselItemsRef.current.removeEventListener('focusout', unPauseCarousel);
    };
  });

  return (
    <CarouselContainer className="carousel">
      <CarouselItemsContainer
        className="carousel__itemsContainer"
        id="carouselItemsContainer"
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        tabIndex="0"
        ref={carouselItemsRef}
      >
        {items.map((item, i) => (
          <CarouselItem
            className="carousel__item"
            key={i}
            totalSlides={totalSlides}
            aria-hidden={currentSlide === i ? 'false' : 'true'}
            aria-live="polite"
          >
            <img src={item.asset.url} alt={item.asset.altText} className="carousel__itemImage" />
            <CarouselItemTextContainer>
              <CarouselItemTitle className="carousel__itemTitle">{item.title}</CarouselItemTitle>
              <CarouselItemDescription className="carousel__itemDescription">
                {item.description}
              </CarouselItemDescription>
              <CarouselItemCTA
                href={item.cta.url}
                target="_blank"
                className="carousel__itemCTA"
                tabIndex={currentSlide !== i ? -1 : ''}
              >
                {item.cta.text}
              </CarouselItemCTA>
            </CarouselItemTextContainer>
          </CarouselItem>
        ))}
      </CarouselItemsContainer>
      <CarouselControlsContainer className="carousel__controls">
        {items.map((item, i) => (
          <CarouselButton
            className={currentSlide === i ? 'carousel__controlsButton-selected' : 'carousel__controlsButton'}
            key={i}
            selected={currentSlide === i}
            onClick={() => setCurrentSlide(i)}
            onKeyDown={handleButtonKeyDown}
            aria-label={`Go to slide ${i + 1}`}
            aria-controls="carouselItemsContainer"
          />
        ))}
      </CarouselControlsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
