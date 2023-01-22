import React from "react";
import {
  Carousel as ReactCarousel,
  CarouselProps,
} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "styled-components";

export const CarouselImage = styled.img`
  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
`;
export const Carousel: React.FC<{ imagesUrl: string[] }> = ({ imagesUrl }) => {
  return (
    <>
      <ReactCarousel
        showThumbs={false}
        dynamicHeight={false}
        showArrows={false}
        showStatus={false}
      >
        {imagesUrl.map((imageUrl, index) => (
          <CarouselImage key={index} src={imageUrl} alt="" />
        ))}
      </ReactCarousel>
    </>
  );
};
