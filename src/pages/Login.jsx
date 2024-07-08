import styles from "../styles/Login.module.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image,
  Alert,
} from "react-bootstrap";
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
    <>
      <Container>
        <Row className={styles.loginContainer}>
          <Col className={styles.imageColumn}>
            <Image
              className={styles.loginBox}
              src="logostarcats.svg"
              alt="Logo del proyecto"
            />
          </Col>
          <Col md={9} className={styles.formColumn}>
            <div className={`${styles.formContainer}`}>
              <h2>Iniciar sesión</h2>
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
                className="d-flex flex-column gap-1"
              >
                <Form.Control
                  type="email"
                  placeholder="Ingresá tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-pill"
                />
                <Form.Control
                  type="password"
                  placeholder="Ingresá tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-pill"
                />
                <Button
                  variant="dark"
                  type="submit"
                  className={`${styles.loginButton} rounded-pill`}
                >
                  Ingresar
                </Button>
              </Form>
              <div
                className={`${styles.buttonGroup} d-flex flex-row d-grid gap-1 pt-1`}
              >
                <Button
                  variant="dark"
                  className={`col d-flex align-items-center justify-content-center ps-0 pe-0 rounded-pill`}
                  href="/signup"
                >
                  Regístrate
                </Button>
                <Button
                  variant="dark"
                  className={`col d-flex align-items-center justify-content-center ps-0 pe-0 rounded-pill`}
                >
                  ¿Olvidaste tu contraseña?
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  ) : (
    <Navigate to="/ordenes"></Navigate>
  );
};

export default Login;
