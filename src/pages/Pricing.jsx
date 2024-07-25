import React from "react";
import CarouselComponent from '../components/CarouselComponent';
import house1 from '../public/AdobeStock_89298214-min_8421efb06b9d433a6f2f17d886703510_2000-550x367.jpeg';
import house2 from '../public/AdobeStock_89298214-min_8421efb06b9d433a6f2f17d886703510_2000-550x367.jpeg';
import house3 from '../public/AdobeStock_89298214-min_8421efb06b9d433a6f2f17d886703510_2000-550x367.jpeg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles

export default function Pricing() {
  const houses = [
    {
      title: 'Modern Villa',
      description: 'This modern villa features a contemporary design with an open floor plan, large windows, and high-end finishes. Perfect for those who love luxury and comfort.',
      image: house1
    },
    {
      title: 'Rustic Cottage',
      description: 'A charming rustic cottage with a cozy atmosphere, stone walls, and a beautiful garden. Ideal for a peaceful countryside retreat.',
      image: house1
    },
    {
      title: 'Urban Apartment',
      description: 'Located in the heart of the city, this urban apartment offers convenience and style with modern amenities and stunning city views.',
      image: house1
    },
    {
      title: 'Beachfront Bungalow',
      description: 'Enjoy the sea breeze in this beachfront bungalow. It offers direct access to the beach, panoramic ocean views, and a relaxing ambiance.',
      image: house1
    },
    {
      title: 'Mountain Cabin',
      description: 'A cozy mountain cabin nestled in the woods, perfect for nature lovers. It features a fireplace, wooden interiors, and breathtaking mountain views.',
      image: house1
    },
    {
      title: 'Suburban House',
      description: 'A spacious suburban house with a large backyard, ideal for families. It offers a safe and friendly neighborhood with excellent schools and parks nearby.',
      image: house1
    }
  ];

  

  return (
    <>
      <div className="pricing">
      <section className="game-section">
      <h2 className="line-title">our products</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        interval={5000}
        transitionTime={600}
      >
        {houses.map((house, index) => (
          <div
            className="item"
            key={index}
            style={{ backgroundImage: `url(${house.image})` }}
          >
            <div className="item-desc">
              <h3>{house.title}</h3>
              <p>{house.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
        <div className="section2" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <h1 data-aos="fade-up" data-aos-duration="1500">Join us on email for</h1>
          <h1 className="fade">More Information about TAALIM</h1>
          <button className="join_btn">Join Now</button>
        </div>
      </div>
    </>
  );
}
