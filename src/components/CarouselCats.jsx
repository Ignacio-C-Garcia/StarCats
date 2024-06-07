import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "./cats.json";

const CarouselCats = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200, // lg
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992, // md
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // sm
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // xs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-dark">
      <div className="m-5">
        <Slider {...settings}>
          {data.cats.map((cats, index) => (
            <div key={index} className="p-2">
              <div className="card">
                <img
                  src={`https://via.placeholder.com/150?text=${cats.name}`}
                  className="card-img-top"
                  alt={cats.name}
                />
                <div className="card-body">
                  <h5 className="card-title"> {cats.name}</h5>
                  <p className="card-text">{cats.feature}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselCats;
