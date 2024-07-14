import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CarouselCats from "../components/CarouselCats";
import CarouselProducts from "../components/CarouselProducts";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Spinner from "react-bootstrap/Spinner";

function Home() {
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products`
        );
        if (!response.ok) {
          throw new Error("API fetch error");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/kittens`);
        if (!response.ok) {
          throw new Error("API fetch error");
        }
        const data = await response.json();
        setCats(data.kittens);
      } catch (error) {
        console.error("Error fetching kittens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  if (loading) {
    return (
      <div className="d-flex  justify-content-center mt-5 ">
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
  }
  return (
    <>
      <NavBar />
      <header className={`container-fluid ${styles.parallax}`}>
        <div
          className={`container animate__animated animate__zoomIn ${styles.containerHeader}`}
        >
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className={styles["home-title"]}>STARCATS</h1>
              <p className={styles["p-header"]}>
                Vive la experiencia <br /> del café con felinos
              </p>
              <div className={`${styles["btn-header"]}`}>
                <Link to="/products" className={`${styles["btn-left"]}`}>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/products" className={`${styles["btn-right"]}`}>
                  Ver el menú
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="/cup-coffee.png"
                alt="cup-coffee"
                className={styles["cup-coffee"]}
              />
            </div>
          </div>
        </div>
      </header>

      <section className={styles["container-category"]}>
        <div className="container container-fluid">
          <div className="row">
            <h2>Categorías</h2>
            <p className="fs-3 text-center">
              CADA PRODUCTO, UN COMPROMISO CON LA EXCELENCIA
            </p>

            <div className="col-sm-12 col-lg-4 col-md-4 d-flex justify-content-center">
              <Link to="/products/1" className={`${styles.card}`}>
                <img
                  src="/img/categories/cupcoffee.png"
                  alt="Cup of coffee"
                  className="img-fluid"
                />
                <span className="fs-3 mt-4">CAFÉ</span>
              </Link>
            </div>

            <div className="col-sm-12 col-lg-4 col-md-4 d-flex justify-content-center">
              <Link to="/products/2" className={`${styles.card}`}>
                <img
                  src="/img/categories/medialuna.png"
                  alt="Medialuna"
                  className=""
                />
                <span className="fs-3 mt-4">PASTELERÍA</span>
              </Link>
            </div>

            <div className="col-sm-12 col-lg-4 col-md-4 d-flex justify-content-center">
              <Link to="/products/3" className={`${styles.card}`}>
                <img
                  src="/img/categories/beans.png"
                  alt="Coffee beans"
                  className="img-fluid"
                />
                <span className="fs-3 mt-4">GRANOS</span>
              </Link>
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
