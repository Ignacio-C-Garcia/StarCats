import styles from "../styles/Login.module.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { saveToken } from "../redux/authReducer";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setShowAlert(true);
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tokens`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) setError(true);
    else {
      const data = await response.json();
      dispatch(saveToken({ token: `Bearer ${data.token}` }));
    }
  };

  return auth.token === "" ? (
    <div className={styles.login}>
      <Container fluid className={styles.loginContainer}>
        <Row className="h-100">
          <Col
            className="d-flex justify-content-center align-items-center"
            lg={6}
          >
            <img src="logostarcats.svg" width={450} height={450}></img>
          </Col>
          <Col md={6} className={styles.formColumn}>
            <div className={`${styles.form}`}>
              <h2 className="text-center pb-2">Iniciar sesión</h2>
              {showAlert && (
                <Alert
                  variant="warning"
                  className={styles.customAlert}
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  Por favor, completa ambos campos.
                  <button onClick={() => setShowAlert(false)}>×</button>
                </Alert>
              )}
              <Form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-2"
              >
                <Form.Control
                  type="email"
                  placeholder="Ingresá tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${styles.inputForm} rounded-pill p-2 ps-3 pe-3`}
                />
                <Form.Control
                  type="password"
                  placeholder="Ingresá tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${styles.inputForm} rounded-pill p-2 ps-3 pe-3`}
                />
                <Button
                  variant="dark"
                  type="submit"
                  className={`${styles.loginButton} rounded-pill p-2`}
                >
                  Ingresar
                </Button>
              </Form>
              <div
                className={`${styles.buttonGroup} d-flex flex-row d-grid gap-2 pt-3`}
              >
                <Button
                  variant="dark"
                  className={`col d-flex align-items-center justify-content-center p-2 ps-0 pe-0 rounded-pill`}
                  href="/signup"
                >
                  Regístrate
                </Button>
                <Button
                  variant="dark"
                  className={`col d-flex align-items-center justify-content-center p-2 ps-0 pe-0 rounded-pill`}
                >
                  ¿Olvidaste tu contraseña?
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  ) : (
    <Navigate to="/ordenes"></Navigate>
  );
};

export default Login;
