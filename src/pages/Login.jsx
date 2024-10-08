// Login.jsx

import React, { useState } from "react";
import { Container, Row, Col, Form, Alert, Button, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { saveToken } from "../redux/authReducer";
import { Link, Navigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import ButtonComponent from "../components/ButtonComponent";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Por favor, completa ambos campos.");
      setShowAlert(true);
      return;
    }

    setLoading(true);
    setError(""); 

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tokens`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError("Usuario o contraseña incorrectos.");
        } else {
          setError("Usuario o contraseña incorrectos.");
        }
        setShowAlert(true);
      } else {
        const data = await response.json();
        dispatch(saveToken({ token: `Bearer ${data.token}` }));
      }
    } catch (error) {
      console.error("Error submitting login:", error);
      setError("Error en la conexión. Inténtalo nuevamente.");
      setShowAlert(true);
    } finally {
      setLoading(false); 
    }
  };

  return auth.token === "" ? (
    <div className={styles.login}>
      <NavBar />
      <Container className={`${styles.loginContainer}`}>
        <Row>
          <Col className="py-1 py-md-5 flex-column flex-md-row mx-auto" xs={6} md={4}>
            <Container className="d-flex justify-content-center align-items-center">
              <img
                src="logostarcats.svg"
                className={`img-fluid ${styles.loginPic}`}
                alt="StarCats Logo"
              />
            </Container>
          </Col>
          <Col className={`${styles.formColumn} pb-5`} xs={12} md={6}>
            <div className="w-75">
              <h2 className="text-center pb-2">Iniciar sesión</h2>
              {showAlert && (
                <Alert
                  variant="warning"
                  className={styles.customAlert}
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  {error}
                  <button onClick={() => setShowAlert(false)}>×</button>
                </Alert>
              )}
              <Form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
                <Form.Control
                  type="email"
                  placeholder="Ingresá: user@project.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${styles.inputForm} rounded-pill p-2 ps-3 pe-3`}
                />
                <Form.Control
                  type="password"
                  placeholder="Ingresá: 1234"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${styles.inputForm} rounded-pill p-2 ps-3 pe-3`}
                />
                <ButtonComponent
                  type="submit"
                  className={`${styles.loginButton} rounded-pill`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />{" "}
                      Cargando...
                    </>
                  ) : (
                    "Ingresar"
                  )}
                </ButtonComponent>
              </Form>
                {/* <div className="d-flex gap-2 pt-2 flex-column text-center">
                  <Link to="/signup" className={`btn-component flex-fill rounded-pill`}>
                    Regístrate
                  </Link>
                  <Link className={`btn-component flex-fill rounded-pill`}>
                    ¿Olvidaste tu contrseña?
                  </Link>
                </div> */}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
