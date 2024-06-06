function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid align">
        <a class="navbar-brand" href="#">
          <img src="../../public/logo.png" style={{ width: 50 }} />
          <span>Starcat</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cats
              </a>
            </li>

            <div class="dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <div
                class="dropdown-menu p-3"
                aria-labelledby="dropdownMenuButton"
              >
                <div class="row row-cols-2 g-1 ">
                  <div class="col text-center">
                    <h6>Productos</h6>
                    <a class="dropdown-item" href="#">
                      Bebidas
                    </a>
                    <a class="dropdown-item" href="#">
                      Comidas
                    </a>
                    <a class="dropdown-item" href="#">
                      Almuerzos
                    </a>
                  </div>
                  <div class="col text-center">
                    <h6>Título 2</h6>
                    <a class="dropdown-item" href="#">
                      Cafe de especialidad
                    </a>
                    <a class="dropdown-item" href="#">
                      Elemento 2.2
                    </a>
                    <a class="dropdown-item" href="#">
                      Elemento 2.3
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                About Us
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <a class="btn btn-outline-success" type="submit">
              Search
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
