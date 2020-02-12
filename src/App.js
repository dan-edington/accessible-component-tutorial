import React from 'react';
import Carousel from './components/Carousel/Carousel';
import GlobalStyles from './styles/global.styles';

const carouselData = {
  autoplay: false,
  delay: 4000,
  items: [
    {
      title: 'Dave',
      description: 'Dave is a good dog who hates cats.',
      cta: {
        text: 'Adopt Dave',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=82',
        altText: 'A white, furry dog called Dave.',
      },
    },
    {
      title: 'Bella',
      description: 'Bella is a bad dog who likes cats.',
      cta: {
        text: 'Adopt Bella',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=4',
        altText: 'A white dog called Bella.',
      },
    },
    {
      title: 'Coco',
      description: 'Coco is a friendly dog who eats chocolate for a laugh.',
      cta: {
        text: 'Adopt Coco',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=58',
        altText: 'Coco, a black and white dog.',
      },
    },
    {
      title: 'Daisy And Dolly',
      description: 'These dogs are inseparable.',
      cta: {
        text: 'Adopt Daisy & Dolly',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=8',
        altText: 'Two fluffy dogs named Daisy and Dolly.',
      },
    },
    {
      title: 'Benji',
      description: 'Benji will bite you.',
      cta: {
        text: 'Adopt Benji',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=60',
        altText: 'A dog chewing on human flesh.',
      },
    },
  ],
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Carousel {...carouselData} />
    </>
  );
}

export default App;
