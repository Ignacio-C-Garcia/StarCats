import { useEffect, useState } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import styles from "../styles/Products.module.css";

function Products() {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category);
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
  let filteredProducts = selectedCategory
    ? products.filter((item) => item.categoryId == selectedCategory)
    : products;
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

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log(categoryId);
  };

  return (
    <div className={styles.products}>
      <NavBar />
      <Container>
        <Row>
          <Col className="pt-5">
            <h2 className={`text-center ${styles.menu}`}>Menú</h2>
            <div className={`d-flex flex-column gap-3`}>
              <Sidebar
                categories={categories}
                onCategorySelect={handleCategorySelect}
              />
              <ProductList products={filteredProducts} />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Products;
