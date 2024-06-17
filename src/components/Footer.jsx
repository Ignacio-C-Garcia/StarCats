import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <img
              src="/logostarcats.svg"
              alt="Cat Cafe Logo"
              width={80}
              height={80}
              className="me-3"
            />
            <span className="h4 mb-0">StarCats</span>
          </div>

          <div className="col-md-3  ">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-dark">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <p className="mb-1">123 Cat Street, Meowtown, CA 12345</p>
            <p className="mb-1">Phone: (555) 555-5555</p>
            <p className="mb-0">Open 7 days a week, 8am - 6pm</p>
          </div>

          <div className="col-3 ">
            <div className="col d-flex justify-content-center">
              <a href="/" className="text-dark me-3">
                <i className="bi bi-facebook fs-3"></i>
              </a>
              <a href="/" className="text-dark me-3">
                <i className="bi bi-twitter fs-3"></i>
              </a>
              <a href="/" className="text-dark">
                <i className="bi bi-instagram fs-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
