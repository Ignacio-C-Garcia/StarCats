/* eslint-disable react/prop-types */
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={12} lg={4} mb={6} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
