import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={`card ${styles.cardCss}`}>
      <div className={styles["img-container"]}>
        <img src={product.image} alt={product.alt} className={styles.img} />
      </div>
      <div>
        <div className={styles.cardContent}>
          <h5 className="card-title">{product.name}</h5>
          <small className="text-muted m-2 fs-4 fw-bold">
            ${product.price}
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
