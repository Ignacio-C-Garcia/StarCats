import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "./coffee.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  return (
    <Container>
      <Row>
        {data.map((product) => (
          <div key={product.id} className="col col-xs-6 col-md-6 col-lg-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
