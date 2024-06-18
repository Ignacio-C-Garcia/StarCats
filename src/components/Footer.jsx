import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 ">
            <span className="h4 d-flex">StarCats</span>
            <a href="#" className="icon-link ">
              <img
                src="/logostarcats.svg"
                alt="Cat Cafe Logo"
                width={80}
                height={80}
                className=" bg-white "
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="/" className="text-white me-3">
                <i className="bi bi-facebook fs-3"></i>
                <span className="visually-hidden">Facebook</span>
              </a>
              <a href="/" className="text-white me-3">
                <i className="bi bi-twitter fs-3"></i>
                <span className="visually-hidden">Twitter</span>
              </a>
              <a href="/" className="text-white">
                <i className="bi bi-instagram fs-3"></i>
                <span className="visually-hidden">Instagram</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <p className="mb-1">123 Cat Street, Meowtown, CA 12345</p>
            <p className="mb-1">Phone: (555) 555-5555</p>
            <p className="mb-0">Open 7 days a week, 8am - 6pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
