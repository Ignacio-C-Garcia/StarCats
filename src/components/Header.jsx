import DropDown from "./Dropdown";
import styles from "../styles/Dropdown.module.css";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid align">
        <a className="navbar-brand" href="#">
          <img src="../../public/logo.png" style={{ width: 50 }} />
          <span>Starcat</span>
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

            <li>
              <DropDown info={{ name: "Shop" }}></DropDown>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
            </li>
          </ul>

          <div>
            <div className="input-group">
              <input
                type="text"
                id="searchInput"
                className="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />

              <button
                className={`btn btn-outline-secondary ${styles.rounded_right} btn-sm searchInputButton`}
                type="button"
                id="button-addon1"
              >
                Search
              </button>
            </div>
          </div>
          <div className="d-flex p-3 text-center">
            <div className="shoppingCartIcon">
              <a href="#" className="nav-link">
                Cart
              </a>
            </div>
            <span className="px-2">|</span>
            <div className="shoppingCartIcon">
              <a href="#" className="nav-link">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
