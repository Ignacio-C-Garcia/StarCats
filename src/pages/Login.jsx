import "../Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login">
      <Container className="vh-100 d-flex justify-content-center">
        <Row>
          <Col
            xs={{ span: 12, order: "last" }}
            md={{ span: 12, order: "last" }}
            lg={{ span: 6, order: "first" }}
            className="m-0 p-3 d-flex justify-content-center"
          >
            <img src="/logostarcats.svg" alt="starcat-logo" />
          </Col>
          <Col className="m-0 p-3 d-flex flex-column justify-content-center">
            <h2 className="text-center mb-3 fs-1">Iniciar sesión</h2>
            <div className="form rounded-4 p-4 w-100">
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
              <div className="d-flex flex-row gap-1 w-100">
                <Link to="/signup">
                  <button className="p-2 border-0 rounded-pill">
                    No tengo cuenta
                  </button>
                </Link>
                <Link to="/home">
                  <button className="p-2 border-0 rounded-pill">
                    Solo quiero ver
                  </button>
                </Link>
              </div>
            </div>
            <p>
              <a
                className="link-offset-2 link-underline link-underline-opacity-0"
                href="/signup"
              >
                Me olvide de mi contraseña T.T
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
