import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/products"
        );
        if (!response.ok) {
          throw new Error("API fetch error, !ok");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <div
            key={product.id}
            className="container col col-xs-6 col-md-6 col-lg-4 mb-4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
