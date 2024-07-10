/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./ProductModal";
import styles from "../styles/ProductCard.module.css";
import Button from "../components/ButtonComponent";

function ProductCard({ product }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <div className={styles["card-css"]}>
      <div className={styles["img-container"]} onClick={handleShow}>
        <img
          src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
          alt={product.alt}
          className={styles.img}
        />
      </div>
      <div>
        <div className={styles["card-content"]}>
          <h5 className={styles.title} onClick={handleShow}>
            <strong>{product.name}</strong>
          </h5>
          <small className="m-2 fs-4">
            <strong>${product.price["base"]}</strong>
          </small>

          <Button onClick={handleShow}>Agregar al carrito</Button>
        </div>
        <Modal show={show} setShow={setShow} product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
