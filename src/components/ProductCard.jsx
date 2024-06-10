
function ProductCard ({ product }) {
  return (
    <div className="card" style={{ background: "#ffd" }}>
      <img
        src={product.image}
        alt={product.alt}
        style={{ objectFit: 'cover', height: '18.75em' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Order
            </button>
          </div>
          <small>${product.price}</small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
