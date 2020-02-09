import styled from 'styled-components';
import { pxToRem } from '../../styles/utilities';
import { colors } from '../../styles/variables';

export const CarouselContainer = styled.section`
  display: block;
  margin: ${pxToRem(20)};
  overflow: hidden;
`;

export const CarouselItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: calc(100% * ${props => props.totalSlides});
  position: relative;
  left: calc(100% * ${props => props.currentSlide} * -1);
  transition: left 0.5s ease-out;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CarouselItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${colors.colorB};
  padding: ${pxToRem(20)};
  width: calc((100% / ${props => props.totalSlides}) - ${pxToRem(40)});

  > img {
    width: ${pxToRem(600)};
    height: ${pxToRem(338)};
  }
`;

export const CarouselItemTextContainer = styled.div`
  padding: ${pxToRem(20)};
`;

export const CarouselItemTitle = styled.h2`
  font-size: ${pxToRem(48)};
  margin-bottom: ${pxToRem(60)};
  color: ${colors.text};
`;

export const CarouselItemDescription = styled.p`
  font-size: ${pxToRem(24)};
  margin-bottom: ${pxToRem(60)};
  color: ${colors.text};
`;

export const CarouselItemCTA = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${colors.ctaText};
  text-align: center;
  padding: ${pxToRem(14)};
  background-color: ${colors.colorA};
  border-radius: ${pxToRem(15)};

  &:hover,
  &:focus {
    color: ${colors.ctaTextHover};
  }
`;

export const CarouselControlsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CarouselButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  width: ${pxToRem(44)};
  height: ${pxToRem(44)};
  background-color: transparent;
  border: 0;
  margin-right: 0.5rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:after {
    content: '';
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    border-radius: ${pxToRem(10)};
    background-color: ${props => (props.selected ? colors.colorB : colors.colorA)};
  }

  &:hover:after,
  &:focus-within:after {
    background-color: ${colors.colorB};
  }
`;
