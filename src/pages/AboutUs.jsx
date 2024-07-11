import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/AboutUs.module.css";
import { Container, Col, Row } from "react-bootstrap";

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
                Este es el resultado de nuestro trayecto en Ánima FINEST.
                Formamos parte de un intenso programa de formación en desarrollo
                web, que incluye más de 200 horas prácticas distribuidas a lo
                largo de 4 meses. Durante este tiempo, hemos aplicado nuestros
                conocimientos y habilidades para dar vida a este proyecto.
                <br />
                <br />
                Dedicamos gran parte de este semestre a desarrollar este
                e-commerce con el objetivo de poner en practica lo aprendido.
                Cada aspecto del diseño y la funcionalidad de nuestra aplicación
                ha sido cuidadosamente elaborado para ofrecer a los usuarios una
                plataforma atractiva y eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.techBackground} container-fluid pb-3 pt-5`}>
        <Container>
          <div className="row text-center">
            <p className="pb-3">
              A lo largo del proyecto, hemos utilizado una amplia gama de
              tecnologías que abarcaron tanto en el desarrollo del backend como
              del frontend. Además hemos adquirido experiencia práctica con el
              uso de tecnologías para nuestra base de datos.
              <br />
              <br />
              Como plataforma de colaboración y control de versiones, usamos
              Github
              <br />
              <br />
              Utilizamos Trello y Meets, plataformas cruciales para facilitar
              una comunicación fluida y para la planificación y organización de
              todo el proyecto.
              <br />
              <br />
              Estas son algunas de las herramientas que hemos elegido
              cuidadosamente para aumentar nuestra productividad:
            </p>
            <Row>
              <Col md={12} lg={6} className="my-4">
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
        </Container>
      </div>

      <div className="bg-light py-5">
        <Container className="my-4">
          <h2 className="text-center">Nuestro Equipo</h2>
          <p className="text-center mb-4">
            Nuestro equipo está compuesto por estudiantes apasionados y
            dedicados que aportan una amplia gama de habilidades.
          </p>

          <Row className={`${styles["members-box"]}`}>
            <div className={styles["members"]}>
              <img
                src="https://i.pinimg.com/564x/54/08/39/5408399b4f0e4137961ef81ee61289c9.jpg"
                className={styles["img-fluid"]}
                alt=""
              />
              <p className="mt-2 mb-1">Ignacio Castellan</p>
              <div className="d-flex flex-row justify-content-center gap-2">
                <a className={styles["member-accounts"]} href="">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className={styles["member-accounts"]} href="">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>

            <div className={styles["members"]}>
              <img
                src="https://i.pinimg.com/originals/80/38/ef/8038ef4599953301e18d739caf1b4d18.jpg"
                className={styles["img-fluid"]}
                alt=""
              />
              <p className="mt-2 mb-1">Jean Franco Pisciottano</p>
              <div className="d-flex flex-row justify-content-center gap-2">
                <a className={styles["member-accounts"]} href="">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className={styles["member-accounts"]} href="">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>

            <div className={styles["members"]}>
              <img
                src="https://i.pinimg.com/originals/e4/8b/2f/e48b2f53314783acf8b12fbf8ce3fa8e.jpg"
                className={styles["img-fluid"]}
                alt=""
              />
              <p className="mt-2 mb-1">Abril Pereira Diaz</p>
              <div className="d-flex flex-row justify-content-center gap-2">
                <a className={styles["member-accounts"]} href="">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className={styles["member-accounts"]} href="">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>

            <div className={styles["members"]}>
              <img
                src="https://i.pinimg.com/originals/ff/a1/56/ffa1564f87643dcb905707ecc3aed565.jpg"
                className={styles["img-fluid"]}
                alt=""
              />
              <p className="mt-2 mb-1">Agustin Acosta</p>
              <div className="d-flex flex-row justify-content-center gap-2">
                <a className={styles["member-accounts"]} href="">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className={styles["member-accounts"]} href="">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
