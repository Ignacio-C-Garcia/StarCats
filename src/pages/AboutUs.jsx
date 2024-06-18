import React from "react";
// import "../styles/AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BiLinkedin, BiGithub } from "react-icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/AboutUs.module.css";

import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  return (
    <div className={`${styles.about}`}>
      <NavBar />
      <Container>
        <h1 className={`${styles.aboutTitle} mt-4`}>Sobre nosotros</h1>

        <div className="mt-4 mb-4">
          <section id="mission-vision-1">
            <Row className="align-items-center">
              <Col
                md={{ span: 6 }}
                xs={{ span: 6, order: "last" }}
                className="col-md-6 d-flex justify-content-center"
              >
                <img
                  src="https://i.pinimg.com/originals/da/9f/4a/da9f4a89b3eeefedc675aa25536235d8.jpg"
                  className={`${styles.michiPhoto}`}
                  alt="Imagen de la misión"
                />
              </Col>
              <Col md={{ span: 6 }} xs={{ span: 6, order: "first" }}>
                <h2>Nuestra Misión</h2>
                <p>
                  Nuestra misión es Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nulla totam architecto officia sapiente
                  earum vero culpa ipsum cupiditate? Totam, deserunt architecto
                  at atque facere assumenda dolorum eos provident veniam? Amet.
                </p>
              </Col>
            </Row>
            <div className="row align-items-center mt-5">
              <div className="col-md-6">
                <h2>Nuestra visión</h2>
                <ul>
                  <li>
                    <strong>Innovación:</strong> Abrazamos el cambio y buscamos
                    constantemente nuevas formas de hacer las cosas.
                  </li>
                  <li>
                    <strong>Integridad:</strong> Actuamos con honestidad,
                    transparencia y respeto en todas nuestras relaciones.
                  </li>
                  <li>
                    <strong>Calidad:</strong> Nos comprometemos a ofrecer
                    productos/servicios de la más alta calidad.
                  </li>
                  <li>
                    <strong>Colaboración:</strong> Valoramos el trabajo en
                    equipo y la diversidad de ideas.
                  </li>
                  <li>
                    <strong>Responsabilidad:</strong> Nos preocupamos por el
                    impacto de nuestras acciones en la comunidad y el medio
                    ambiente.
                  </li>
                </ul>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img
                  src="https://www.pleated-jeans.com/wp-content/uploads/2014/06/cute-overload-1.jpg"
                  className={`${styles.michiPhoto}`}
                  alt="Imagen de valores"
                />
              </div>
            </div>
          </section>
          <section id="mission-vision-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-center">
                  <img
                    src="https://i.pinimg.com/originals/f4/65/f8/f465f8b2e3537d1e20396a3613aebf46.jpg"
                    className={`${styles.michiPhoto}`}
                    alt="Imagen de la misión 2"
                  />
                </div>
                <div className="col-md-6">
                  <h2>Nuestros valores</h2>
                  <p>
                    Nuestra misión es Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sequi asperiores officia soluta accusamus
                    cumque dicta, sunt eaque nihil laboriosam quaerat autem.
                    Minus, illo enim a vitae repellendus cum dicta alias?
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="team" className={`py-5`}>
            <div>
              <h2 className="text-center">Nuestro Equipo</h2>
              <p className="text-center">
                Nuestro equipo está compuesto por profesionales apasionados y
                dedicados que aportan una amplia gama de habilidades y
                experiencia.
              </p>
              <div className="row">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="https://i.pinimg.com/564x/54/08/39/5408399b4f0e4137961ef81ee61289c9.jpg"
                      className={`${styles.michiPhoto}`}
                      alt=""
                    />
                    <p>Ignacio Castellan</p>
                    {/*<BiLinkedin />*/}
                    {/*<BiGithub />*/}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="https://i.pinimg.com/originals/80/38/ef/8038ef4599953301e18d739caf1b4d18.jpg"
                      className={`${styles.michiPhoto}`}
                      alt=""
                    />
                    <p>Jean Franco Pisciottano</p>
                    {/*<BiLinkedin />*/}
                    {/*<BiGithub />*/}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="https://i.pinimg.com/originals/e4/8b/2f/e48b2f53314783acf8b12fbf8ce3fa8e.jpg"
                      className={`${styles.michiPhoto}`}
                      alt=""
                    />
                    <p>Abril Pereira</p>
                    {/*<BiLinkedin />*/}
                    {/*<BiGithub />*/}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="https://i.pinimg.com/originals/ff/a1/56/ffa1564f87643dcb905707ecc3aed565.jpg"
                      className={`${styles.michiPhoto}`}
                      alt=""
                    />
                    <p>Agustin Acosta</p>
                    {/*<BiLinkedin />*/}
                    {/*<BiGithub />*/}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="py-5">
            <div className="container">
              <h2 className="text-center">Contáctanos</h2>
              <p className="text-center">
                Estamos aquí para responder cualquier pregunta que puedas tener.
                No dudes en contactarnos en{" "}
                <a href="mailto:info@starcats.com">info@starcats.com</a> o a
                través de nuestras redes sociales.
              </p>
            </div>
          </section>
          <div className="container">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  required
                />
              </div>
              <div className="mb-3 rounded-4">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                id="button"
                className="rounded-pill border-0 p-2 ps-4 pe-4"
                type="submit"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default AboutUs;
