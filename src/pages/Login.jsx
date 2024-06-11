import styles from "../styles/Login.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.main}>
      <Container className="vh-100 d-flex justify-content-center">
        <Row>
          <Col
            xs={{ span: 12, order: "last" }}
            md={{ span: 12, order: "last" }}
            lg={{ span: 6, order: "first" }}
            className="m-0 p-3 d-flex justify-content-center"
          >
            <a href="/" className="d-flex justify-content-center">
              <img src="/logostarcats.svg" alt="starcat-logo" />
            </a>
          </Col>
          <Col className="m-0 p-3 d-flex flex-column justify-content-center">
            <h2 className="text-center mb-3 fs-1">Iniciar sesión</h2>
            <div className={`rounded-4 p-4 w-100 ${styles.form}`}>
              -- Editar el mensaje de advertencia al no llenar los campos --{" "}
              <br />
              -- Crear formulario (posiblemente sera la configuracion de
              usuario) de cambio de contraseña --
              <form
                onSubmit={handleSubmit}
                className="d-flex align-items-center pb-2"
              >
                <div className="w-100">
                  <div>
                    <input
                      className="mb-2 p-2 border-0 rounded-pill w-100 text-center"
                      placeholder="Correo electrónico"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="mb-2 p-2 border-0 rounded-pill w-100 text-center"
                      placeholder="Contraseña"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2 border-0 rounded-pill w-100"
                  >
                    Entrar
                  </button>
                </div>
              </form>
              <div class="d-flex gap-1">
                <Link to="/signup" class="flex-fill">
                  <button class="p-2 border-0 rounded-pill w-100">
                    Registrarse
                  </button>
                </Link>
                <Link to="" class="flex-fill">
                  <button class="p-2 border-0 rounded-pill w-100">
                    ¿Olvidaste la contraseña?
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
