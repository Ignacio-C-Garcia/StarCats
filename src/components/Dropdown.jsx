import { useState } from "react";
export default function DropDown({ info: { name } }) {
  const [selected, setSelected] = useState(null);
  const catFromState = ["Café de especialidad", "Postres", "Confitería"];
  return (
    <div className="dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name}
      </a>
      <div
        className="dropdown-menu p-3"
        style={{ width: selected != null ? 600 : 300 }}
      >
        <div className="row no-gutters">
          <div className="col text-center">
            <h6>Categorias</h6>
            {catFromState.map((category, index) => {
              return (
                <a
                  key={index}
                  className={`dropdown-item ${
                    selected === index ? "dropdown-item-selected" : ""
                  }`}
                  href="#"
                  onMouseEnter={() => setSelected(index)}
                >
                  {category}
                </a>
              );
            })}
          </div>
          {selected != null && (
            <div className="col-6 text-center">
              <h6>Productos</h6>
              {selected === 0 && (
                <div id="ListaCafe">
                  <a className="dropdown-item" href="#">
                    México ATM
                  </a>
                  <a className="dropdown-item" href="#">
                    Brasil Crucera
                  </a>
                  <a className="dropdown-item" href="#">
                    El salvador VV
                  </a>
                </div>
              )}
              {selected === 1 && (
                <div id="ListaPostres">
                  <a className="dropdown-item" href="#">
                    Tarta de almendras
                  </a>
                  <a className="dropdown-item" href="#">
                    Postre de coco
                  </a>
                  <a className="dropdown-item" href="#">
                    Cheesecake de Frutilla
                  </a>
                </div>
              )}
              {selected === 2 && (
                <div id="ListaConfiteria">
                  <a className="dropdown-item" href="#">
                    Croissant con jamon y queso
                  </a>
                  <a className="dropdown-item" href="#">
                    Sándwiches Olímpicos de Copetín
                  </a>
                  <a className="dropdown-item" href="#">
                    Sándwiches de Atún
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
