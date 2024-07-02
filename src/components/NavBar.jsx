import DropDown from "./Dropdown";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white">
      <div className="container container-fluid align-items-center">
        <a className="navbar-brand" href="/">
          <span>StarCats</span>
        </a>
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
        <div className="navbar-collapse collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <DropDown info={{ name: "Shop" }} />
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
                Sobre nosotros
              </a>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <div className="input-group">
              <input
                type="text"
                id="searchInput"
                className="form-control rounded-start-pill"
                placeholder="Buscar producto"
                aria-label="Buscar"
                aria-describedby="button-addon1"
              />
              <button
                className={`btn btn-outline-secondary ${styles.rounded_right} btn-sm border-white searchInputButton  rounded-end-pill me-2 text-white`}
                type="button"
                id="button-addon1"
              >
                Buscar
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center  mt-2 ">
            <div className="shoppingCartIcon">
              <a href="/cart" className="nav-link">
                Carrito
              </a>
            </div>
            <span className="px-2">|</span>
            <div className="shoppingCartIcon">
              <a href="/login" className="nav-link">
                Iniciar sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
