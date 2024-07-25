import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselComponent = ({ houses }) => {
  return (
    <Carousel showThumbs={false} showStatus={false} className="custom-carousel">
      {houses.map((house, index) => (
        <div key={index} className="carousel-slide">
          <img src={house.image} alt={`House ${index + 1}`} className="carousel-image"/>
          <div className="carousel-legend">
            <p>{house.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
