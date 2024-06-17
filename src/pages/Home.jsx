import styles from "../styles/Home.module.css";
import CarouselCats from "../components/CarouselCats";
import CarouselProducts from "../components/CarouselProducts";
import Footer from "../components/Footer";

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
            <button className={styles.btnRight}>See our menu</button>
          </div>
        </div>
      </header>

      <section className={styles.containerCategory}>
        <div className="container-fluid">
          <div className="row">
            <h2>Categories</h2>
            <div className=" col-12 col-xs-12 col-lg-3 col-md-  d-flex align-items-center justify-content-center">
              <p>CADA PRODUCTO, UN COMPROMISO CON LA EXCELENCIA</p>
            </div>

            <div className=" col-12 col-xs-12 col-lg-3 col-md-  d-flex justify-content-center">
              <div className={`card ${styles.card}`}>
                <img
                  src="img/categorias/cupcoffee.png"
                  alt="Cup of coffee"
                  className="img-fluid "
                />
              </div>
            </div>

            <div className=" col-12 col-xs-12 col-lg-3 col-md-  d-flex justify-content-center">
              <div className={`card ${styles.card}`}>
                <img
                  src="img/categorias/medialuna.png"
                  alt="Medialuna"
                  className="img-fluid "
                />
              </div>
            </div>

            <div className=" col-12 col-xs-12 col-lg-3 col-md-  d-flex justify-content-center">
              <div className={`card ${styles.card}`}>
                <img
                  src="img/categorias/beans.png"
                  alt="Coffee beans"
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-end mt-4 ">
            <div className="col-6 col-md-9">
              <div
                className={` d-flex justify-content-around ${styles.paintedSection}`}
              >
                <a href="">DRINK</a>
                <a href="">BAKERY</a>
                <a href="">BEANS</a>
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
