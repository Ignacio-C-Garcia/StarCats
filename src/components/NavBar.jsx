import DropDown from "./Dropdown";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white ">
      <div className="container container-fluid align">
        <a className="navbar-brand" href="/">
          <span>Starcat</span>
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
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
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
            <li>
              <DropDown info={{ name: "Shop" }} />
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
                Sobre nosotros
              </a>
            </li>
          </ul>
          <div>
            <div className="input-group">
              <input
                type="text"
                id="searchInput"
                className="form-control rounded-start-pill"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <button
                className={`btn btn-outline-secondary ${styles.rounded_right} btn-sm searchInputButton`}
                type="button"
                id="button-addon1"
              >
                Buscar
              </button>
            </div>
          </div>
          <div className="d-flex p-3 text-center">
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
