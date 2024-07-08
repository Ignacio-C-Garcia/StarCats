import styles from "../styles/Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { saveToken } from "../redux/authReducer";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleSubmit = async (event) => {
    event.preventDefault();
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
      <Container className="vh-100 d-flex justify-content-center">
        <Row>
          <Col
            xs={{ span: 12, order: "last" }}
            md={{ span: 12, order: "last" }}
            lg={{ span: 6, order: "first" }}
            className="m-0 p-3 d-flex justify-content-center"
          >
            <a href="/" className="d-flex align-items-center">
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
              <div className="d-flex gap-1">
                <Link to="/signup" className="flex-fill">
                  <button className="p-2 border-0 rounded-pill w-100">
                    Registrarse
                  </button>
                </Link>
                <Link to="" className="flex-fill">
                  <button className="p-2 border-0 rounded-pill w-100">
                    ¿Olvidaste la contraseña?
                  </button>
                </Link>
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
