import styles from "../styles/Login.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.login}>
      <NavBar />
      <Container className={styles.loginContainer}>
        <Row className="h-100">
          <Col
            className="d-flex justify-content-center align-items-center"
            lg={6}
          >
            <img
              src="logostarcats.svg"
              width={400}
              height={400}
              alt="StarCats Logo"
            />
          </Col>
          <Col className={styles.formColumn}>
            <div className="w-75">
              <h2 className="text-center pb-2">Registrate</h2>
              {/* {showAlert && (
                <Alert
                  variant="warning"
                  className={styles.customAlert}
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  Por favor, completa ambos campos.
                  <button onClick={() => setShowAlert(false)}>×</button>
                </Alert>
              )} */}
              <Form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-2"
              >
                <Form.Control
                  type="text"
                  placeholder="Ingresá tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`${styles.inputForm} rounded-pill p-2 ps-3 pe-3`}
                />
                <Form.Control
                  type="text"
                  placeholder="Ingresá tu apellido"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className={`${styles.inputForm} rounded-pill p-2 ps-3 pe-3`}
                />
                <Form.Control
                  type="email"
                  placeholder="Ingresá un correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${styles.inputForm} rounded-pill p-2 ps-3 pe-3`}
                />
                <Form.Control
                  type="password"
                  placeholder="Ingresá una contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${styles.inputForm} rounded-pill p-2 ps-3 pe-3`}
                />
                <ButtonComponent type="submit" className="rounded-pill">
                  Registrarse
                </ButtonComponent>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
