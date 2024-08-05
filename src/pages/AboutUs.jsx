import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/AboutUs.module.css";
import { Container, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";

function AboutUs() {
  const renderTooltip = (tooltipText) => (
    <Tooltip id="button-tooltip">{tooltipText}</Tooltip>
  );

  return (
    <>
      <NavBar />

      <div className={`container-fluid ${styles["coffee-background"]}`}>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-7 col-md-12 text-white">
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
                e-commerce con el objetivo de poner en práctica lo aprendido.
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
              Estas son algunas de las herramientas que hemos elegido
              cuidadosamente para aumentar nuestra productividad:
            </p>
            <Row>
              <Col md={12} lg={6} className="my-4">
                <h4>Front-end</h4>
                <div>
                  <div className="row d-flex gap-3 justify-content-center">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("HTML")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/html.svg"
                        alt="HTML"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("CSS")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/css.svg"
                        alt="CSS"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("Bootstrap")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/bs.svg"
                        alt="Bootstrap"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("JavaScript")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/js.svg"
                        alt="JavaScript"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("React")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/react.svg"
                        alt="React"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("PayPal API")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/paypal-api.svg"
                        alt="PayPal API"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("Vite")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/vite.svg"
                        alt="Vite"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("Redux")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/redux.svg"
                        alt="Redux"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("React Stripe")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/react-stripe.svg"
                        alt="React Stripe"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("React Tabulator")}
                    >
                      <img
                        className={styles["tech-icons"]}
                        src="/icons/react-tabulator.png"
                        alt="React Tabulator"
                      />
                    </OverlayTrigger>
                  </div>
                </div>
              </Col>
              <Col className="my-4">
                <h4>Back-end</h4>
                <div className="row d-flex gap-3 justify-content-center">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip("Express")}
                  >
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/express-js.svg"
                      alt="Express"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip("Faker.js")}
                  >
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/faker-js.svg"
                      alt="Faker.js"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip("Node.js")}
                  >
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/node.svg"
                      alt="Node.js"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip("Postman")}
                  >
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/postman.svg"
                      alt="Postman"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip("Sequelize")}
                  >
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/sequelize.svg"
                      alt="Sequelize"
                    />
                  </OverlayTrigger>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="my-4">
                <h4>Control de versiones</h4>
                <div className="row d-flex gap-3 justify-content-center">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip("Git")}
                  >
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/git.svg"
                      alt="Git"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip("GitHub")}
                  >
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/github.svg"
                      alt="GitHub"
                    />
                  </OverlayTrigger>
                </div>
              </Col>
              <Col className="my-4">
                <h4>Base de datos</h4>
                <div className="row d-flex gap-3 justify-content-center">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip("MySQL")}
                  >
                    <img
                      className={styles["tech-icons"]}
                      src="/icons/mysql.svg"
                      alt="MySQL"
                    />
                  </OverlayTrigger>
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
                src="members/nacho.jpeg"
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
                src="members/jeanfranco.jpg"
                className={styles["img-fluid"]}
                alt="Jean Franco Pisciottano"
              />
              <p className="mt-2 mb-1">Jean Franco Pisciottano</p>
              <div className="d-flex flex-row justify-content-center gap-2">
                <a
                  className={styles["member-accounts"]}
                  href="https://www.linkedin.com/in/jeanfranco-pisciottano/?trk=opento_sprofile_topcard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  className={styles["member-accounts"]}
                  href="https://github.com/jeanfranco60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>

            <div className={styles["members"]}>
              <img
                src="members/abril-pereira.jpeg"
                className={styles["img-fluid"]}
                alt=""
              />
              <p className="mt-2 mb-1">Abril Pereira Diaz</p>
              <div className="d-flex flex-row justify-content-center gap-2">
                <a
                  className={styles["member-accounts"]}
                  href="https://www.linkedin.com/in/abril-pereira-4024251a7/"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  className={styles["member-accounts"]}
                  href="https://github.com/abrilpereira
                  "
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>

            <div className={styles["members"]}>
              <img
                src="members/agustin-acosta.jpeg"
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
