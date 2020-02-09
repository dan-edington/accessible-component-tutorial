import React, { useState } from 'react';
import {
  CarouselContainer,
  CarouselItemsContainer,
  CarouselItem,
  CarouselItemTextContainer,
  CarouselItemTitle,
  CarouselItemDescription,
  CarouselItemImage,
  CarouselItemCTA,
  CarouselControlsContainer,
  CarouselButton,
} from './Carousel.styles';

const Carousel = props => {
  const { autoplay = true, delay = 3000, items = [] } = props || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <CarouselContainer className="carousel">
      <CarouselItemsContainer
        className="carousel__itemsContainer"
        currentSlide={currentSlide}
        itemCount={items.length}
      >
        {items.map((item, i) => (
          <CarouselItem className="carousel__item" key={i} itemCount={items.length}>
            <CarouselItemImage src={item.asset.url} className="carousel__itemImage" />
            <CarouselItemTextContainer>
              <CarouselItemTitle className="carousel__itemTitle">{item.title}</CarouselItemTitle>
              <CarouselItemDescription className="carousel__itemDescription">
                {item.description}
              </CarouselItemDescription>
              <CarouselItemCTA href={item.cta.url} target="_blank" className="carousel__itemCTA">
                {item.cta.text}
              </CarouselItemCTA>
            </CarouselItemTextContainer>
          </CarouselItem>
        ))}
      </CarouselItemsContainer>
      <CarouselControlsContainer className="carousel__controls">
        {items.map((item, i) => (
          <CarouselButton
            className="carousel__controlsButton"
            key={i}
            selected={currentSlide === i}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </CarouselControlsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
