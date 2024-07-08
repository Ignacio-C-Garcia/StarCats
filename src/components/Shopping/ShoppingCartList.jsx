import { useSelector } from "react-redux";
import React, { useState } from "react";
import styles from "../../styles/CartShopping.module.css";
import { Button, Form } from "react-bootstrap";

export default function ShoppingCartList() {
  const { products } = useSelector((state) => state.shoppingCart);

  return (
    <>
      <h2>Tu carrito</h2>
      {products.length > 0 ? (
        products.map((product) => {
          const [quantity, setQuantity] = useState(product.qty || 1);
          const totalPrice = (quantity * product.price).toFixed(2);

          const incrementQuantity = () => {
            setQuantity(quantity + 1);
          };

          const decrementQuantity = () => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          };

          return (
            <div
              className={`container border rounded-4 card  ${styles.individualProduct}`}
              key={product.id}
            >
              <div className="row">
                <div className="col-6">
                  <h4 className="mt-4">{product.name}</h4>
                  <img
                    src={`/img/${product.pic}`}
                    alt={product.name}
                    className={`${styles.productPic}`}
                  />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <p className="mt-2">${totalPrice}</p>
                  <Form.Group className="mb-2 d-flex justify-content-center align-items-center">
                    <div className="d-flex border rounded-pill border-black m-3">
                      <Button
                        variant="rounded-end-circle"
                        className="btn rounded-pill border-0"
                        onClick={decrementQuantity}
                      >
                        -
                      </Button>
                      <div className="d-flex">
                        <Form.Control
                          type="text"
                          value={quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            setQuantity(value || 1);
                          }}
                          className={`${styles.noHover}`}
                        />
                        <Button
                          variant="rounded-end-circle"
                          className="btn rounded-pill border-0"
                          onClick={incrementQuantity}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No hay productos en el carrito de compras</p>
      )}
    </>
  );
}
