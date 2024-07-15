import "./App.css";
import {
  PersonCircle,
  PersonFill,
  BoxArrowRight,
  Pencil,
} from "react-bootstrap-icons";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

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

  const handleToggle = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <div className="App z-3">
      <Dropdown show={open} onToggle={handleToggle}>
        <Dropdown.Toggle
          as={Link}
          to="#"
          id="dropdown-basic"
          className="menu_trigger"
          onClick={() => setOpen(!open)}
        >
          <PersonCircle size={30} className="text-white" />
        </Dropdown.Toggle>

        <Dropdown.Menu
          className={`dropdown_menu border z-3 text-decoration-none ${
            open ? "active" : "inactive"
          }`}
          ref={menuRef}
        >
          <Dropdown.Header>
            {token === "" ? "" : "Nombre de usuario"}
          </Dropdown.Header>
          {token !== "" ? (
            <>
              <Dropdown.Item as={Link} to="/user">
                <PersonFill className="dropdown-icon me-2" />
                Mi Perfil
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/ordenes">
                <Pencil className="dropdown-icon me-2" />
                Ordenes
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/logout">
                <BoxArrowRight className="dropdown-icon me-2" />
                Cerrar Sesión
              </Dropdown.Item>
            </>
          ) : (
            <>
              <Dropdown.Item as={Link} to="/login">
                <BoxArrowRight className="dropdown-icon me-2" />
                Iniciar Sesión
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/signup">
                <BoxArrowRight className="dropdown-icon me-2" />
                Registrarse
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default UserIcon;
