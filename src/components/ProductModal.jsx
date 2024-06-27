import React, { useState } from "react";
import { Modal as BootstrapModal, Button, Form } from "react-bootstrap";
import styles from "../styles/ProductModal.module.css";

function ProductModal({ show, setShow, product }) {
  const handleClose = () => setShow(false);

  const [isToGo, setIsToGo] = useState("aqui");
  const [espressoShots, setEspressoShots] = useState(1);
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
      size: "mediano",
      isToGo,
      espressoShots,
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
              <Form.Group className="mb-3">
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-primary"
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
                      style={{ width: "50px", textAlign: "center" }}
                    />
                    <Button
                      variant="outline-primary"
                      className="ms-2"
                      onClick={incrementQuantity}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </Form.Group>
              <Form>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <p>Onsite</p>
                      <i
                        className={`bi bi-cup-straw fs-2  ${
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
                  <div className={styles.volumeSelector}>
                    <div className={styles.volumeOption}>
                      <i
                        className={`bi bi-cup-hot fs-5 ${
                          volume === 250 ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleVolumeChange(250)}
                      ></i>
                      <span>250 ml</span>
                    </div>
                    <div className={styles.volumeOption}>
                      <i
                        className={`bi bi-cup-hot fs-4  ${
                          volume === 350 ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleVolumeChange(350)}
                      ></i>
                      <span>350 ml</span>
                    </div>
                    <div className={styles.volumeOption}>
                      <i
                        className={`bi bi-cup-hot fs-3 ${
                          volume === 450 ? styles.selectedIcon : ""
                        } ${styles.hoverIcon}`}
                        onClick={() => handleVolumeChange(450)}
                      ></i>
                      <span>450 ml</span>
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
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Añadir al carrito
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default ProductModal;
