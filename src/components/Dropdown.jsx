import { useState } from "react";

export default function DropDown({ info: { name } }) {
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
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
        style={{ width: !hidden1 || !hidden2 || !hidden3 ? 600 : 300 }}
      >
        <div className="row">
          <div className="col text-center">
            <h6>Categorias</h6>
            <a
              className="dropdown-item"
              id="CatCafe"
              href="#"
              onMouseEnter={() => setHidden1(false)}
            >
              Café de especialidad
            </a>
            <a
              className="dropdown-item"
              id="CatPostre"
              href="#"
              onMouseEnter={() => setHidden2(false)}
              onMouseLeave={() => setHidden2(true)}
            >
              Postres
            </a>
            <a
              className="dropdown-item"
              id="CatConfiteria"
              href="#"
              onMouseEnter={() => setHidden3(false)}
              onMouseLeave={() => setHidden3(true)}
            >
              Confitería
            </a>
          </div>
          {(!hidden1 || !hidden2 || !hidden3) && (
            <div className="col-6 text-center">
              <h6>Productos</h6>
              {hidden1 ? null : (
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
              {hidden2 ? null : (
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
              {hidden3 ? null : (
                <div id="ListaConfiteria" className="d-inline-block">
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
