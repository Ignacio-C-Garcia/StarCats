import { useState } from "react";
import Modal from "./ProductModal";
import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <div className={`card border border-black ${styles.cardCss}`}>
      <div className={styles["img-container"]} onClick={handleShow}>
        <img
          src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
          alt={product.alt}
          className={styles.img}
        />
      </div>
      <div>
        <div className={styles.cardContent}>
          <h5 className={styles.title} onClick={handleShow}>
            <strong>{product.name}</strong>
          </h5>
          <small className="m-2 fs-4">
            <strong>${product.price}</strong>
          </small>
          <button type="button" onClick={handleShow} className={styles.btn}>
            Agregar al carrito
          </button>
        </div>
        <Modal show={show} setShow={setShow} product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
