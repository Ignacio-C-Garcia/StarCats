import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <NavBar />

      <div className={`container-fluid ${styles["coffee-background"]}`}>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h2 className={`${styles["header-title"]}`}>
                Sobre este Proyecto
              </h2>
              <p className={styles["banner-p"]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["tech-background"]} container-fluid pb-3 pt-5`}>
        <div className="row text-center">
          <div className="col-lg-6 m-auto">
            <p className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="row">
          <span
            className={`${styles["tech-icons"]} d-flex gap-5 justify-content-center my-5`}
          >
            {/* <img src="/icons/html.svg" alt="" /> */}
            {/* <img src="/icons/css.svg" alt="" /> */}
            <img src="/icons/bs.svg" alt="" />
            {/* <img src="/icons/js.svg" alt="" /> */}
            {/* <img src="/icons/git.svg" alt="" /> */}
            {/* <img src="/icons/github.svg" alt="" /> */}
            {/* <img src="/icons/node.svg" alt="" /> */}
            {/* <img src="/icons/postman.svg" alt="" /> */}
            <img src="/icons/mysql.svg" alt="" />
            {/* <img src="/icons/sequelize.svg" alt="" /> */}
            {/* <img src="/icons/react.svg" alt="" /> */}
            {/* <img src="/icons/vite.svg" alt="" /> */}
            {/* <img src="/icons/redux.svg" alt="" />0 */}
          </span>
        </div>
      </div>

      <div id="team" className="bg-light py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h2 className="text-center">Nuestro Equipo</h2>
              <p>
                Nuestro equipo está compuesto por profesionales apasionados y
                dedicados que aportan una amplia gama de habilidades y
                experiencia.
              </p>

              <div className="row">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="https://i.pinimg.com/564x/54/08/39/5408399b4f0e4137961ef81ee61289c9.jpg"
                      className={styles["img-fluid"]}
                      alt=""
                    />
                    <p>Ignacio Castellan</p>
                    <div className="d-flex flex-row justify-content-center gap-2">
                      <i className="bi bi-linkedin"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="https://i.pinimg.com/originals/80/38/ef/8038ef4599953301e18d739caf1b4d18.jpg"
                      className={styles["img-fluid"]}
                      alt=""
                    />
                    <p>Jean Franco Pisciottano</p>
                    <div className="d-flex flex-row justify-content-center gap-2">
                      <i className="bi bi-linkedin"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="https://i.pinimg.com/originals/e4/8b/2f/e48b2f53314783acf8b12fbf8ce3fa8e.jpg"
                      className={styles["img-fluid"]}
                      alt=""
                    />
                    <p>Abril Pereira Diaz</p>
                    <div className="d-flex flex-row justify-content-center gap-2">
                      <i className="bi bi-linkedin"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="https://i.pinimg.com/originals/ff/a1/56/ffa1564f87643dcb905707ecc3aed565.jpg"
                      className={styles["img-fluid"]}
                      alt=""
                    />
                    <p>Agustin Acosta</p>
                    <div className="d-flex flex-row justify-content-center gap-2">
                      <i className="bi bi-linkedin"></i>
                      <i className="bi bi-github"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
