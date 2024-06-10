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
    autoplay: false,
    autoplaySpeed: 3000,
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
    <div className="bg-black text-center p-4">
      <h2 style={{ color: "#d89d49" }}> Nuestro Staff</h2>
      <p className="fs-3 text-secondary">
        Te presentamos a nuestro staff de michis{" "}
      </p>
      <div>
        <div className="container-fluid p-3">
          <Slider {...settings}>
            {data.cats.map((cat, index) => (
              <div key={index} className="p-2">
                <div className="card bg-black p-3 border border-secondary rounded-4  ">
                  <img
                    src={cat.image}
                    className="card-img-top img-fluid object-fit-cover border border-secondary rounded-0  "
                    alt={cat.name}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#d89d49" }}>
                      {cat.name}
                    </h5>
                    <p className=" text-secondary">
                      edad: {cat.age}
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
    </div>
  );
};

export default CarouselCats;
