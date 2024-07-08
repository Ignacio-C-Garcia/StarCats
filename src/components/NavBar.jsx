import DropDown from "./Dropdown";
import "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white ">
      <div className=" animate__animated animate__fadeIn container container-fluid align">
        <Link to="/" className="navbar-brand">
          <span>Starcat</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/products" className="nav-link"></Link>
            </li>
            <li className="nav-item">
              <DropDown info={{ name: "Shop" }} />
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">
                Sobre el Proyecto
              </Link>
            </li>
          </ul>
          <div></div>
          <div className="d-flex justify-content-center align-items-center text-center">
            <div className="shoppingCartIcon px-3">
              <UserIcon></UserIcon>
            </div>
            <div className="shoppingCartIcon">
              <Link to="/cart" className="nav-link">
                Carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
