import user from "./img/user.png";
import edit from "./img/edit.png";
import logout from "./img/log-out.png";
import "./App.css";
import { PersonCircle } from "react-bootstrap-icons";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserIcon() {
  const token = useSelector((state) => state.auth.token);

  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="App z-3">
      <div className="menu_container position-relative z-3" ref={menuRef}>
        <div
          className="menu_trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Link>
            <PersonCircle size={30} className="text-white" />
          </Link>
        </div>

        <div
          className={`dropdown_menu border z-3 text-decoration-none ${open ? "active" : "inactive"}`}
        >
          <h3>
            {token === "" ? "Café y Michis!" : "Nombre de usuario"}
            <br />
          </h3>
          {token !== "" ? (
            <ul className="p-0 mb-0">
              <DropdownItem img={user} text={"Mi Perfil"} to={"/user"} />
              <DropdownItem img={edit} text={"Ordenes"} to={"/ordenes"} />
              <DropdownItem img={logout} text={"Cerrar Sesión"} to={"/logout"} />
            </ul>
          ) : (
            <ul className="p-0 mb-0">
              <DropdownItem img={logout} text={"Iniciar Sesión"} to={"/login"} />
              <DropdownItem img={logout} text={"Registrarse"} to={"/signup"} />
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function DropdownItem({ img, text, to }) {
  return (
    <li className="text-center dropdownItem border-top d-flex align-items-center p-2">
      <img src={img} alt={text} />
      <Link to={to} className="ps-3 text-decoration-none">
        {text}
      </Link>
    </li>
  );
}

export default UserIcon;
