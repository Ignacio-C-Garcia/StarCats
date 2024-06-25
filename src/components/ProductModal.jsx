import React, { useState } from "react";
import { Modal as BootstrapModal, Button, Form } from "react-bootstrap";
import styles from "../styles/ProductModal.module.css"; // Incluye estilos personalizados

function ProductModal({ show, setShow, product }) {
  const handleClose = () => setShow(false);

  const [size, setSize] = useState("mediano");
  const [isToGo, setIsToGo] = useState("aqui");
  const [espressoShots, setEspressoShots] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [volume, setVolume] = useState(250);

  const handleSizeSelection = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleAddToCart = () => {
    // Lógica para añadir el producto al carrito
    console.log({
      product,
      size,
      isToGo,
      espressoShots,
      quantity,
      volume
    });
    setShow(false);
  };

  return (
    <BootstrapModal show={show} onHide={handleClose} dialogClassName={styles.customModal}>
      <BootstrapModal.Body>
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>{product.name}</h2>
          </div>
          <div className="col-6">
            <img
              src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
              alt={product.alt}
              className={`img-fluid ${styles.productImage}`}
            />
          </div>
          <div className="col-6">
            <p>{product.description}</p>
            <p>
              <strong>Precio: </strong>${product.price}
            </p>
          
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Onsite / Takeaway</Form.Label>
                <Form.Control as="select" value={isToGo} onChange={(e) => setIsToGo(e.target.value)}>
                  <option value="aqui">Onsite</option>
                  <option value="llevar">Takeaway</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Volume, ml</Form.Label>
                <Form.Control as="select" value={volume} onChange={(e) => setVolume(e.target.value)}>
                  <option value="250">250 ml</option>
                  <option value="350">350 ml</option>
                  <option value="450">450 ml</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cantidad de espressos</Form.Label>
                <Form.Control type="number" value={espressoShots} onChange={(e) => setEspressoShots(e.target.value)} min="1" max="10" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cantidad de productos</Form.Label>
                <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" max="10" />
              </Form.Group>
            </Form>
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
