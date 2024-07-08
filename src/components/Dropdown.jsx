import { useEffect, useState } from "react";
import "bootstrap";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

export default function DropDown({ info: { name } }) {
  const [selected, setSelected] = useState(null);
  const catFromState = ["Café en granos", "Bebidas", "Comidas"];

  useEffect(() => {
    setSelected(null);
  }, []);

  return (
    <div className="dropdown">
      <Link
        to="#"
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name}
      </Link>
      <div
        className={`dropdown-menu p-2 ${styles.dropdownMenu} text-center`}
        style={{ width: selected != null ? 600 : 300 }}
      >
        <div className="row">
          <div className="col text-center">
            <h6 className={styles.dropdownHeader}>Categorías</h6>
            <div className="list-group">
              {catFromState.map((category, index) => (
                <Link
                  key={index}
                  to={`/products/${index + 1}`}
                  className={`border-0 rounded-3 list-group-item list-group-item-action ${
                    selected === index
                      ? styles.dropdownItemSelected
                      : styles.dropdownItem
                  }`}
                  onMouseEnter={() => setSelected(index)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          {selected != null && (
            <div className="col-6 text-center">
              <h6 className={styles.dropdownHeader}>Productos</h6>
              {selected === 0 && (
                <div id="ListaCafe" className="list-group list-group-flush">
                  <Link
                    to="/products"
                    className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`}
                  >
                    México ATM
                  </Link>
                </div>
              )}
              {selected === 1 && (
                <div id="ListaPostres" className="list-group list-group-flush">
                  <Link
                    to="/products"
                    className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`}
                  >
                    Tarta de almendras
                  </Link>
                </div>
              )}
              {selected === 2 && (
                <div
                  id="ListaConfiteria"
                  className="list-group list-group-flush"
                >
                  <Link
                    to="/products"
                    className={`list-group-item list-group-item-action border-0 rounded-3 ${styles.dropdownItem}`}
                  >
                    Croissant con jamón y queso
                  </Link>
                </div>
              )}
              <span>
                <Link to="/products">Ver más -</Link>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
