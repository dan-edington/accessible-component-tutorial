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
  width: calc(100% * ${props => props.itemCount});
  position: relative;
  left: calc(100% * ${props => props.currentSlide} * -1);
  transition: left 0.5s ease-out;
`;

export const CarouselItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${colors.yellow};
  padding: ${pxToRem(20)};
  width: calc((100% / ${props => props.itemCount}) - ${pxToRem(40)});
`;

export const CarouselItemImage = styled.img``;

export const CarouselItemTextContainer = styled.div`
  padding: ${pxToRem(20)};
`;

export const CarouselItemTitle = styled.h2`
  font-size: ${pxToRem(48)};
  margin-bottom: ${pxToRem(60)};
`;

export const CarouselItemDescription = styled.p`
  font-size: ${pxToRem(24)};
  margin-bottom: ${pxToRem(60)};
`;

export const CarouselItemCTA = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${colors.yellow};
  text-align: center;
  padding: ${pxToRem(14)};
  background-color: ${colors.pink};
  border-radius: ${pxToRem(15)};
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
    background-color: ${props => (props.selected ? colors.yellow : colors.pink)};
  }

  &:hover:after {
    background-color: ${colors.yellow};
  }
`;
