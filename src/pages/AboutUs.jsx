import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/AboutUs.module.css";
import { Container, Col, Row } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <NavBar />

      <div className={`container-fluid ${styles.coffeeBackground}`}>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h2 className={`${styles.headerTitle}`}>Sobre este Proyecto</h2>
              <p className={styles.bannerP}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.techBackground} container-fluid pb-3 pt-5`}>
        <Container>
          <div className="row text-center">
            <div className="col-lg-6 m-auto">
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
              <Row>
                <Col className="my-4">
                  <h4>Front-end</h4>
                  <div>
                    <div className="row d-flex gap-3 justify-content-center">
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/html.svg"
                        alt="HTML"
                      />
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/css.svg"
                        alt="CSS"
                      />
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/bs.svg"
                        alt="Bootstrap"
                      />
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/js.svg"
                        alt="JavaScript"
                      />
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/react.svg"
                        alt="React"
                      />
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/paypal-api.svg"
                        alt="PayPal API"
                      />
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/vite.svg"
                        alt="Vite"
                      />
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/redux.svg"
                        alt="Redux"
                      />
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/react-stripe.svg"
                        alt="React Stripe"
                      />
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/react-tabulator.png"
                        alt="React Tabulator"
                      />
                    </div>
                  </div>
                </Col>
                <Col className="my-4">
                  <h4>Back-end</h4>
                  <div className="row d-flex gap-3 justify-content-center">
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/express-js.svg"
                      alt="Express"
                    />
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/faker-js.svg"
                      alt="Faker.js"
                    />
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/node.svg"
                      alt="Node.js"
                    />
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/postman.svg"
                      alt="Postman"
                    />

                    <img
                      className={styles["tech-icons"]}
                      src="/icons/sequelize.svg"
                      alt="Sequelize"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="my-4">
                  <h4>Control de versiones</h4>
                  <div className="row d-flex gap-3 justify-content-center">
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/git.svg"
                      alt="Git"
                    />
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/github.svg"
                      alt="Github"
                    />
                  </div>
                </Col>
                <Col className="my-4">
                  <h4>Base de datos</h4>
                  <div className="row d-flex gap-3 justify-content-center">
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/mysql.svg"
                      alt="MySQL"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
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
                      className={styles.imgFluid}
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
                      className={styles.imgFluid}
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
                      className={styles.imgFluid}
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
                      className={styles.imgFluid}
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
