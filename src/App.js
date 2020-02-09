import React from 'react';
import Carousel from './components/Carousel/Carousel';
import GlobalStyles from './styles/global.styles';

const carouselData = {
  autoPlay: true,
  delay: 3000,
  items: [
    {
      title: 'Slide 1',
      description: 'Slide 1 description',
      cta: {
        text: 'Slide 1 CTA',
        url: 'http://www.google.com',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=82',
      },
    },
    {
      title: 'Slide 2',
      description: 'Slide 2 description',
      cta: {
        text: 'Slide 2 CTA',
        url: 'http://www.google.com',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=4',
      },
    },
    {
      title: 'Slide 3',
      description: 'Slide 3 description',
      cta: {
        text: 'Slide 3 CTA',
        url: 'http://www.google.com',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=58',
      },
    },
    {
      title: 'Slide 4',
      description: 'Slide 4 description',
      cta: {
        text: 'Slide 4 CTA',
        url: 'http://www.google.com',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=8',
      },
    },
    {
      title: 'Slide 5',
      description: 'Slide 5 description',
      cta: {
        text: 'Slide 5 CTA',
        url: 'http://www.google.com',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=60',
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
