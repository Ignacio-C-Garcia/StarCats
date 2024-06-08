import "../Login.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
            <h2 className="text-center mb-3 fs-1">Regístrate</h2>
            <form
              onSubmit={handleSubmit}
              className="rounded-4 p-4 d-flex align-items-center w-100"
            >
              <div className="w-100">
                // volver en el futuro para editar los valores que correspondan
                al back
                <div>
                  <input
                    className="mb-2 p-2 border-0 rounded-pill w-100 text-center"
                    placeholder="Nombre"
                    type="text"
                    value={name}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
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
                  Crear cuenta
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
