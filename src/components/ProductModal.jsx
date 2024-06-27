import React, { useState } from "react";
import { Modal as BootstrapModal, Button, Form } from "react-bootstrap";
import styles from "../styles/ProductModal.module.css";

function ProductModal({ show, setShow, product }) {
  const handleClose = () => setShow(false);

  const [isToGo, setIsToGo] = useState("aqui");
  const [quantity, setQuantity] = useState(1);
  const [volume, setVolume] = useState(250);

  const handleVolumeChange = (vol) => {
    setVolume(vol);
  };

  const handleIsToGoChange = (option) => {
    setIsToGo(option);
  };

  const handleAddToCart = () => {
    console.log({
      product,
      size,
      isToGo,
      quantity,
      volume,
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

  return (
    <BootstrapModal
      show={show}
      onHide={handleClose}
      dialogClassName={styles.customModal}
    >
      <BootstrapModal.Body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <img
                src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
                alt={product.alt}
                className={` ${styles.productImage}`}
              />
              <p>{product.description}</p>
            </div>
            <div className="col-12 col-md-6 mt-4">
              <h3>{product.name}</h3>
              <hr />
              <Form>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <p>Onsite</p>
                      <i
                        className={`bi bi-cup-straw fs-2 ${
                          isToGo === "aqui" ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleIsToGoChange("aqui")}
                      ></i>
                    </div>
                    <div className="col-6">
                      <p>Takeaway</p>
                      <i
                        className={`bi bi-bag fs-2 ${
                          isToGo === "llevar" ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleIsToGoChange("llevar")}
                      ></i>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <p>Tamaño</p>
                  <hr />
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

                <Form.Group className="mb-3">
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      className="me-2"
                      onClick={decrementQuantity}
                    >
                      -
                    </Button>
                    <div className="d-flex align-items-center">
                      <Form.Control
                        type="text"
                        value={quantity}
                        onChange={(e) => {
                          const value = e.target.value;
                          setQuantity(value);
                        }}
                        className={styles.noHover}
                      />
                      <Button
                        variant="outline-secondary"
                        className="ms-2"
                        onClick={incrementQuantity}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </Form.Group>
                <p>
                  <strong>Precio: </strong>${product.price}
                </p>
              </Form>
              <div className="text-end"></div>
            </div>
          </div>
        </div>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
      <Button className={styles.btnClose} onClick={handleClose}>
          Cerrar
        </Button>
        <Button className={styles.btnAddToCart} onClick={handleAddToCart}>
          Añadir al carrito
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default ProductModal;
