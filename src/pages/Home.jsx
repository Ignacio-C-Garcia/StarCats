import React from "react";
import styles from "../styles/Home.module.css";
import CarouselCats from "../components/CarouselCats";
import CarouselProducts from "../components/CarouselProducts";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <header>
        <div>
          <div>
            <h1>STARCATS</h1>
            <p className={styles.pHeader}>
              Vive la experiencia <br />
              del café con felinos
            </p>
          </div>
          <img
            src="/public/header.png"
            alt="header image"
            className={`img-fluid ${styles.headerImage}`}
          />
          <div className={styles.btnHeader}>
            <button className={styles.btnLeft}>
              <i className="bi bi-arrow-right"></i>
            </button>
            <button className={styles.btnRight}>Ver el menú</button>
          </div>
        </div>
      </header>
      <section className={styles.containerCategory}>
        <div className="container-fluid ">
          <div className="row">
            <h2>Categorias</h2>
            <div
              className={`"col-12 col-sm-12 col-lg-3 col-md-6 d-flex align-items-center`}
            >
              <p className="m-5">
                CADA PRODUCTO, UN <br /> COMPROMISO CON LA <br /> EXCELENCIA
              </p>
            </div>

            <div className="col-12 col-sm-12 col-lg-3 col-md-6 d-flex ">
              <div className={styles.card}>
                <img
                  src="img/categorias/cupcoffee.png"
                  alt="Cup of coffee"
                  className="img-fluid"
                />
                <a className="d-lg-none fs-3 mt-4" href="">
                  DRINK
                </a>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-3 col-md-6 d-flex ">
              <div className={styles.card}>
                <img
                  src="img/categorias/medialuna.png"
                  alt="Medialuna"
                  className="img-fluid"
                />
                <a className="d-lg-none fs-3 mt-4" href="">
                  BAKERY
                </a>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-3 col-md-6 d-flex ">
              <div className={styles.card}>
                <img
                  src="img/categorias/beans.png"
                  alt="Coffee beans"
                  className="img-fluid"
                />
                <a className="d-lg-none fs-3 mt-4" href="">
                  BEANS
                </a>
              </div>
            </div>
            <div className="row m-4 justify-content-center mt-4 d-none d-lg-flex">
              <div
                className={` ${styles.paintedSection}`}
              >
                <div className="col-12 col-sm-12 col-lg-3 col-md-6 "></div>
                <div className="col-12 col-sm-12 col-lg-3 col-md-6  d-flex justify-content-start   ">
                  <a className="fs-2 p-3" href="">
                    DRINK
                  </a>
                </div>
                <div className="col-12 col-sm-12 col-lg-3 col-md-6 d-flex justify-content-center  ">
                  <a className="fs-2 p-5" href="">
                    BAKERY
                  </a>
                </div>
                <div className="col-12 col-sm-12 col-lg-3 col-md-6 d-flex justify-content-end  ">
                  <a className="fs-2 p-5" href="">
                    BEANS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CarouselProducts />
      <CarouselCats />
      <Footer />
    </>
  );
}

export default Home;
