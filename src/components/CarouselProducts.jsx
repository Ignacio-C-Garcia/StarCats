import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard.jsx";
import styles from "../styles/ProductCard.module.css";

function CarouselProducts({ products }) {
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
          slidesToShow: 12,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`p-3 bg-black ${styles.carousel}`}>
      <div className="container">
        <h2 className="text-center text-white pb-4 pt-5">Productos destacados</h2>
        <Slider {...settings} className="m-3">
          {products
            .filter((product) => product.featured)
            .map((product, index) => (
              <div key={index} className="p-3">
                <ProductCard product={product} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselProducts;
