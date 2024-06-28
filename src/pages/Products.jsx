import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

import styles from "../styles/Products.module.css";

function Products() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    const url = selectedCategory
      ? `http://localhost:3000/products?category=${selectedCategory}`
      : "http://localhost:3000/products";

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className={styles.products}>
      <NavBar />
      <Container>
        <Row>
          <Col className="pt-5">
            <h2 className="text-center">Menú</h2>
            <div className={`d-flex flex-column gap-3`}>
              <Sidebar
                categories={categories}
                onCategorySelect={handleCategorySelect}
              />
              <ProductList products={products} />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Products;
