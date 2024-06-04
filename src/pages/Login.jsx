import React, { useState } from "react";
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <div className="row">
        <div></div>
        <div className="col-6 login-container">
          <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <div>
              <input
                placeholder="Correo electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
