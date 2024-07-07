import styles from "../styles/Home.module.css";
import CarouselCats from "../components/CarouselCats";
import CarouselProducts from "../components/CarouselProducts";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/products"
        );
        if (!response.ok) {
          throw new Error("API fetch error, !ok");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/kittens");
        if (!response.ok) {
          throw new Error("API fetch error, !ok");
        }
        const data = await response.json();
        setCats(data.kittens);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <header className={`container-fluid ${styles.parallax}`}>
        <div
          className={`container animate__animated animate__zoomIn ${styles.containerHeader}`}
        >
          <div className="row">
            <div className="col-lg-6 col-sm-6 ">
              <h1 className={`${styles["HomeTitle"]}`}>STARCATS</h1>
              <p className={styles.pHeader}>
                Vive la experiencia <br /> del café con felinos
              </p>
              <div className={`${styles.btnHeader} `}>
                <a
                  className={`${styles.btnLeft} `}
                  href="/products"
                  role="button"
                >
                  <i className="bi bi-arrow-right"></i>
                </a>
                <a
                  className={`${styles.btnRight} d-flex justify-content-center `}
                  href="/products"
                  role="button"
                >
                  Ver el menú
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 ">
              <img
                src="cup-coffee.png"
                alt="cup-coffee"
                className={styles.cupCoffee}
              />
            </div>
          </div>
        </div>
      </header>

      <section className={styles.containerCategory}>
        <div className="container container-fluid">
          <div className="row">
            <h2>Categorías</h2>
            <p className="fs-3 text-center">
              CADA PRODUCTO, UN COMPROMISO CON LA EXCELENCIA
            </p>

            <div className="col-sm-12 col-lg-4 col-md-4 d-flex justify-content-center">
              <a href="#" className={styles.card}>
                <img
                  src="img/categories/cupcoffee.png"
                  alt="Cup of coffee"
                  className="img-fluid"
                />
                <a className="d-lg-none fs-3 mt-4" href="#">
                  CAFÉ
                </a>
              </a>
            </div>

            <a
              href=""
              className="col-sm-12 col-lg-4 col-md-4 d-flex justify-content-center"
            >
              <div className={styles.card}>
                <img
                  src="img/categories/medialuna.png"
                  alt="Medialuna"
                  className=""
                />
                <a className="d-lg-none fs-3 mt-4" href="">
                  PASTELERÍA
                </a>
              </div>
            </a>

            <a
              href=""
              className="col-sm-12 col-lg-4 col-md-4 d-flex justify-content-center"
            >
              <div className={styles.card}>
                <img
                  src="img/categories/beans.png"
                  alt="Coffee beans"
                  className="img-fluid"
                />
                <a className="d-lg-none fs-3 mt-4" href="">
                  GRANOS
                </a>
              </div>
            </a>
          </div>

          <div className="row mt-3 justify-content-center d-none d-lg-flex">
            <div className={`col-md-7 d-flex justify-content-center`}>
              <div className={`col-md-7 d-flex justify-content-center`}>
                <Link className="fs-2" to="/products/1">
                  CAFE
                </Link>
              </div>
              <div className={`col-md-7 d-flex justify-content-center`}>
                <Link className="fs-2" to="/products/2">
                  PASTELERÍA
                </Link>
              </div>
              <div className={`col-md-7 d-flex justify-content-center`}>
                <Link className="fs-2" to="/products/3">
                  GRANOS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CarouselProducts products={products} />
      <CarouselCats cats={cats} />
      <img src="/gifcats.gif" alt="Animated GIF" className={styles.gif} />

      <Footer />
    </>
  );
}

export default Home;
