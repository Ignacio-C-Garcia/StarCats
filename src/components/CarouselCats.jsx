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
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
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
          {data.cats.map((cat, index) => (
            <div key={index} className="p-2">
              <div className="card p-3">
                <img
                  src={`./img/${cat.name.toLowerCase()}.webp`}
                  className="card-img-top img-fluid object-fit-cover border rounded vh-20"
                  alt={cat.name}
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {cat.name} - Edad: {cat.age}
                  </h5>
                  <p className="card-text">{cat.personality}</p>
                  <p>Cumpleaños: {cat.birthdate}</p>
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
