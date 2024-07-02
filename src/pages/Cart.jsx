import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";

import styles from "../styles/CartShopping.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  console.log(shoppingCart);
  const [quantities, setQuantities] = useState({
    Americano: 0,
    Cappuccino: 0,
  });

  const handleQuantityChange = (product, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(0, prevQuantities[product] + change);
      return {
        ...prevQuantities,
        [product]: newQuantity,
      };
    });
  };

  const prices = {
    Americano: 2.99,
    Cappuccino: 4.99,
  };

  const calculateTotal = () => {
    let subtotal = 0;
    Object.keys(quantities).forEach((product) => {
      subtotal += quantities[product] * prices[product];
    });

    const discount = 0.1 * subtotal; // Example discount
    const taxRate = 0.21; // Example tax rate (21%)
    const tax = taxRate * subtotal;
    const total = subtotal - discount + tax;

    return { subtotal, discount, tax, total };
  };

  const totals = calculateTotal();

  return (
    <>
      <Navbar />
      <Container className="mt-4 mb-4">
        <Row>
          <h2>Tu carrito</h2>
          <Col md={8} className="d-flex flex-column gap-3">
            {shoppingCart.products.length > 0 ? (
              shoppingCart.products.map((product) => (
                <div
                  className={`${styles.individualProduct} d-flex flex-row align-items-center gap-3 border rounded-4 p-2`}
                  key={product.id}
                >
                  <div className="col d-flex align-items-center">
                    <img
                      src={`/img/${product.pic}`}
                      alt=""
                      className={`${styles.productPic}`}
                    />
                  </div>
                  <div className="productInfo col d-flex justify-content-center flex-column">
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                  </div>
                  <div className="col">
                    <InputGroup className="border rounded-pill d-flex flex-row border p-1">
                      <Button
                        variant="rounded-end-circle"
                        onClick={() => handleQuantityChange("Cappuccino", -1)}
                      >
                        -
                      </Button>
                      <Form.Control
                        type="number"
                        className="border-0 text-center"
                        value={quantities.Cappuccino}
                        readOnly
                      />
                      <Button
                        variant="rounded-end-circle"
                        onClick={() => handleQuantityChange("Cappuccino", 1)}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <p>${(product.qty * product.price).toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay productos en el carrito de compras</p>
            )}
          </Col>
          <Col md={4}>
            <Card className="p-3 border rounded-4">
              <Card.Body>
                <h4 className="mb-4">Resumen del Pedido</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Total parcial:</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Descuentos:</span>
                  <span>${totals.discount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>IVA (21%):</span>
                  <span>${totals.tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Total:</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                <Form className="mt-4">
                  <Form.Group controlId="formDiscountCode">
                    <Form.Label>Código de Descuento</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Introduce tu código"
                      className="rounded-pill"
                    />
                  </Form.Group>
                  <Button
                    className={`btn rounded-pill mt-3 border-0`}
                    variant="dark"
                  >
                    Aplicar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
