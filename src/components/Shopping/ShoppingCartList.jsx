import { useSelector } from "react-redux";
import styles from "../../styles/CartShopping.module.css";
export default function ShoppingCartList() {
  const { products } = useSelector((state) => state.shoppingCart);
  return (
    <>
      <h2>Tu carrito</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div
            className={`${styles.individualProduct} d-flex flex-row align-items-center gap-3 border rounded-4 p-2`}
            key={product.id}
          >
            <div className="col d-flex align-items-center">
              <img
                src={`/img/${product.pic}`}
                alt=""
                className={`${styles.productPic}`}
              />
            </div>
            <div className="productInfo col d-flex justify-content-center flex-column">
              <h4>{product.name}</h4>
              <p>${product.price}</p>
            </div>
            <div className="col">
              {/*<InputGroup className="border rounded-pill d-flex flex-row border p-1">
                <Button
                  variant="rounded-end-circle"
                  onClick={() => handleQuantityChange("Cappuccino", -1)}
                >
                  -
                </Button>
                <Form.Control
                  type="number"
                  className="border-0 text-center"
                  value={quantities.Cappuccino}
                  readOnly
                />
                <Button
                  variant="rounded-end-circle"
                  onClick={() => handleQuantityChange("Cappuccino", 1)}
                >
                  +
                </Button>
              </InputGroup>*/}
            </div>
            <div className="col d-flex justify-content-center">
              <p>${(product.qty * product.price).toFixed(2)}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito de compras</p>
      )}
    </>
  );
}
