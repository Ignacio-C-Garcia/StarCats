import "../Login.css";
import React, { useState } from "react";
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
    <Container className="vh-100 d-flex justify-content-center">
      <Row>
        <Col
          xs={12}
          md={12}
          lg={6}
          className="m-0 p-3 d-flex justify-content-center"
        >
          <img src="/logostarcat.svg" alt="starcat-logo" />
        </Col>
        <Col className="m-0 p-3 d-flex align-items-center">
          <form
            onSubmit={handleSubmit}
            className="border rounded-4 p-4 d-flex align-items-center w-100"
          >
            <div className="w-100">
              <h2 className="text-center mb-3">Iniciar sesión</h2>
              <div>
                <input
                  className="mb-2 p-2 border rounded-pill w-100 text-center"
                  placeholder="Correo electrónico"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  className="mb-2 p-2 border rounded-pill w-100 text-center"
                  placeholder="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="p-2 border rounded-pill w-100">
                Entrar
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
