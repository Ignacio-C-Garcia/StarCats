import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/CartShopping.module.css";
import { Button, Form } from "react-bootstrap";
import { addProduct, removeProduct } from "../../redux/shoppingCartReducer";

export default function ShoppingCartList() {
  const { products } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Tu carrito</h2>
      {products.length > 0 ? (
        products.map((product) => {
          const totalPrice = (product.qty * product.totalPrice).toFixed(2);

          const incrementQuantity = () => {
            dispatch(addProduct({ ...product, qty: 1 }));
          };

          const decrementQuantity = () => {
            dispatch(removeProduct({ ...product, qty: 1 }));
          };

          return (
            <div
              className={`container border rounded-4 card ${styles["individual-product"]}`}
              key={product.id}
            >
              <div className="row">
                <div className="col-6">
                  <h4 className="mt-4">
                    {product.name} - {product.volume} ml
                  </h4>
                  <img
                    src={`/img/${product.pic}`}
                    alt={product.name}
                    className={styles["product-pic"]}
                  />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <p className="mt-2">${totalPrice}</p>
                  <Form.Group className="mb-2 d-flex justify-content-center align-items-center">
                    <div className="d-flex border rounded-pill border-black m-3">
                      <Button
                        variant="rounded-end-circle"
                        className="btn rounded-pill border-0"
                        onClick={decrementQuantity}
                      >
                        -
                      </Button>
                      <div className="d-flex">
                        <Form.Control
                          type="text"
                          value={product.qty}
                          className={styles["no-hover"]}
                          readOnly
                        />
                        <Button
                          variant="rounded-end-circle"
                          className="btn rounded-pill border-0"
                          onClick={incrementQuantity}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No hay productos en el carrito de compras</p>
      )}
    </>
  );
}
