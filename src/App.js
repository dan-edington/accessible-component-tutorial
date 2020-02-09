import React from 'react';
import Carousel from './components/Carousel/Carousel';
import GlobalStyles from './styles/global.styles';

const carouselData = {
  autoplay: false,
  delay: 4000,
  items: [
    {
      title: 'Slide 1',
      description: 'Slide 1 description',
      cta: {
        text: 'Slide 1 CTA',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=82',
        altText: 'A photo of a dog',
      },
    },
    {
      title: 'Slide 2',
      description: 'Slide 2 description',
      cta: {
        text: 'Slide 2 CTA',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=4',
        altText: 'A photo of a dog',
      },
    },
    {
      title: 'Slide 3',
      description: 'Slide 3 description',
      cta: {
        text: 'Slide 3 CTA',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=58',
        altText: 'A photo of a dog',
      },
    },
    {
      title: 'Slide 4',
      description: 'Slide 4 description',
      cta: {
        text: 'Slide 4 CTA',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=8',
        altText: 'A photo of a dog',
      },
    },
    {
      title: 'Slide 5',
      description: 'Slide 5 description',
      cta: {
        text: 'Slide 5 CTA',
        url: '#',
      },
      asset: {
        url: 'https://placedog.net/600/338?id=60',
        altText: 'A photo of a dog',
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
