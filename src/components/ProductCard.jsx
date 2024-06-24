import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`card ${styles.cardCss}`}>
      <div className={styles["img-container"]} onClick={handleShow}>
        <img
          src={import.meta.env.VITE_IMG_PATH + product.pic}
          alt={product.alt}
          className={styles.name}
        />
      </div>
      <div>
        <div className={` ${styles.cardContent}`}>
          <h5 className={`${styles.title}`} onClick={handleShow}>
            <strong>{product.name}</strong>
          </h5>
          <small className="m-2 fs-4">
            <strong>${product.price}</strong>
          </small>
          <button
            type="button"
            onClick={handleShow}
            className={` ${styles.btn}`}
          >
            Agregar al carrito
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={import.meta.env.VITE_IMG_PATH + product.pic}
            alt={product.alt}
            className={styles.img}
          />
          <p>{product.description}</p>
          <p>
            <strong>Precio: </strong>${product.price}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="rounded-pill" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductCard;
