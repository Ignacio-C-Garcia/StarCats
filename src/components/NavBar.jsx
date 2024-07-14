import "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon";
import { BagHeart } from "react-bootstrap-icons";
4;

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white ">
      <div className="container ">
        <Link to="/" className="navbar-brand">
          <h2 className="fs-1">STARCATS</h2>
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

            <Link
              to="/Products"
              className="nav-link active"
              aria-current="page"
            >
              Productos
            </Link>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">
                Sobre el Proyecto
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <UserIcon></UserIcon>
            <Link to="/cart" className="nav-link ps-4">
              <BagHeart size={30} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
