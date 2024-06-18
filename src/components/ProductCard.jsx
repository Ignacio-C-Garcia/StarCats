import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={`card ${styles.cardCss}`}>
      <div className={styles["img-container"]}>
        <img
          src={import.meta.env.VITE_IMG_PATH + product.pic}
          //     alt={product.alt}
          className={styles.img}
        />
      </div>
      <div>
        <div className={` ${styles.cardContent}`}>
          <h5 className={`${styles.title}`}>
            <strong>{product.name}</strong>
          </h5>
          <small className=" m-2 fs-4 ">
            <strong>${product.price}</strong>
          </small>
          <button type="button" className={` ${styles.btn}`}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
