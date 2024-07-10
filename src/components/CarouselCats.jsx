import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "../styles/CarouselCats.module.css";

function CarouselCats({ cats }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    <div className={`text-center p-4 ${styles["carousel-container"]}`}>
      <h2 className={styles.title}>Nuestro Staff</h2>
      <p className={`fs-3 ${styles.subtitle}`}>
        Te presentamos a nuestro staff de michis
      </p>
      <div className="container container-fluid p-3">
        <Slider {...settings}>
          {cats.map((cat, index) => (
            <div key={index} className={`p-3`}>
              <div className={styles.card}>
                <LazyLoadImage
                  src={import.meta.env.VITE_CAT_IMG_PATH + cat.pic}
                  alt={cat.name}
                  className={styles["card-image"]}
                  effect="blur"
                />
                <div className={styles["card-content"]}>
                  <h5 className={`card-title ${styles["card-title"]}`}>
                    {cat.name}
                  </h5>
                  <p className={styles["card-text"]}>
                    Edad: {cat.age}
                    <br />
                    {cat.personality}
                    <br />
                    Cumpleaños: {cat.birthdate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselCats;
