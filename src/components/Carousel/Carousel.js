import React from 'react';
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

  return (
    <CarouselContainer className="carousel">
      <SlidesContainer>
        {items.map((item, i) => (
          <Slide key={i}>
            <img src={item.asset.url} />
            <SlideTextContainer>
              <SlideTitle>{item.title}</SlideTitle>
              <SlideDescription>{item.description}</SlideDescription>
              <SlideCTA href={item.cta.url} target="_blank">
                {item.cta.text}
              </SlideCTA>
            </SlideTextContainer>
          </Slide>
        ))}
      </SlidesContainer>
      <CarouselControlsContainer className="carousel__controls" role="group">
        {items.map((item, i) => (
          <CarouselButton key={i} />
        ))}
      </CarouselControlsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
