import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4} mb={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
