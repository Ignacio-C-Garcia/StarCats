import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/CarouselCats.module.css"; // Import your custom CSS module

function CarouselCats({ cats }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
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
    <div className={`text-center p-4 ${styles.carouselContainer}`}>
      <h2 className={styles.title}>Nuestro Staff</h2>
      <p className={`fs-3 ${styles.subtitle}`}>
        Te presentamos a nuestro staff de michis
      </p>
      <div className="container-fluid  p-3">
        <Slider {...settings}>
          {cats.map((cat, index) => (
            <div key={index} className={` p-3`}>
              <div className={` ${styles.card}`}>
                <img
                  src={import.meta.env.VITE_CAT_IMG_PATH + cat.pic}
                  className={` ${styles.cardImage}`}
                  alt={cat.name}
                />
                <div className={` ${styles.cardContent}`}>
                  <h5 className={`card-title ${styles.cardTitle}`}>
                    {cat.name}
                  </h5>
                  <p className={styles.cardText}>
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
