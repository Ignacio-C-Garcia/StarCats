import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={`card ${styles.cardCss}`}>
      <img src={product.image} alt={product.alt} className="card-img-top" />
      <div className={`card-body ${styles.cardBody}`}>
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className={styles.cardBottom}>
          <button type="button" className={`btn ${styles.btn}`}>
            Order
          </button>

          <small>${product.price}</small>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
