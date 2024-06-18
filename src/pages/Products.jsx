import React from "react";

import { Container } from "react-bootstrap";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

function Products() {
  return (
    <>
      <NavBar />
      <Container className="p-5">
        <h2 className="text-center mb-5">Menú</h2>
        <div className="m-2">
          <ProductList />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Products;
