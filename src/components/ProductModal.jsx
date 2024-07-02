import React, { useState, useEffect } from "react";
import { Modal as BootstrapModal, Button, Form } from "react-bootstrap";
import styles from "../styles/ProductModal.module.css";

function ProductModal({ show, setShow, product }) {
  const handleClose = () => setShow(false);

  const [isToGo, setIsToGo] = useState("aqui");
  const [quantity, setQuantity] = useState(1);
  const [volume, setVolume] = useState(250);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleVolumeChange = (vol) => {
    setVolume(vol);
  };

  const handleIsToGoChange = (option) => {
    setIsToGo(option);
  };

  const handleAddToCart = () => {
    console.log({
      product,
      isToGo,
      quantity,
      volume,
      totalPrice,
    });
    setShow(false);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const basePrice = product.price;
    const volumeMultiplier = volume / 250;
    const newPrice = basePrice * volumeMultiplier * quantity;
    setTotalPrice(newPrice.toFixed(2));
  }, [volume, quantity]);

  return (
    <BootstrapModal show={show} onHide={handleClose}>
      <BootstrapModal.Body className={styles.body}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs col-sm-12 text-center">
              <h3>{product.name}</h3>
              <img
                src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
                alt={product.alt}
                className={` ${styles.productImage}`}
              />
              <p>{product.description}</p>
            </div>

            <div className="col-lg-6 col-md-6 col-xs col-sm-12 text-center">
              <hr />
              <Form>
                <Form.Group className="mb-3">
                  <div className="row text-center">
                    <div className="col-6">
                      <p>Aquí</p>
                      <i
                        className={`bi bi-cup-straw fs-2 ${
                          isToGo === "aqui" ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleIsToGoChange("aqui")}
                      ></i>
                    </div>
                    <div className="col-6">
                      <p>llevar</p>
                      <i
                        className={`bi bi-bag fs-2 ${
                          isToGo === "llevar" ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleIsToGoChange("llevar")}
                      ></i>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3 text-center">
                  <hr />
                  <p>Tamaño</p>
                  <div className={`d-flex ${styles.volumeSelector}`}>
                    <div
                      className={`d-flex flex-column align-items-center ${styles.volumeOption}`}
                    >
                      <i
                        className={`bi bi-cup-hot fs-6 ${
                          volume === 250 ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleVolumeChange(250)}
                      ></i>
                      <span>250ml</span>
                    </div>
                    <div
                      className={`d-flex flex-column align-items-center ${styles.volumeOption}`}
                    >
                      <i
                        className={`bi bi-cup-hot fs-4 ${
                          volume === 350 ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleVolumeChange(350)}
                      ></i>
                      <span>350ml</span>
                    </div>
                    <div
                      className={`d-flex flex-column align-items-center ${styles.volumeOption}`}
                    >
                      <i
                        className={`bi bi-cup-hot fs-2 ${
                          volume === 450 ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleVolumeChange(450)}
                      ></i>
                      <span>450ml</span>
                    </div>
                  </div>
                  <hr />
                </Form.Group>

                <Form.Group className="mb-2 d-flex justify-content-between">
                  <p>
                    <strong>${totalPrice}</strong>
                  </p>
                  <div className="d-flex border rounded-pill border-black">
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
                          1;
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
              </Form>
            </div>
          </div>
        </div>
        <BootstrapModal.Footer className="d-flex justify-content-between">
          <Button className={styles.btnClose} onClick={handleClose}>
            Cerrar
          </Button>
          <Button className={styles.btnAddToCart} onClick={handleAddToCart}>
            Añadir al carrito
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
}

export default ProductModal;
