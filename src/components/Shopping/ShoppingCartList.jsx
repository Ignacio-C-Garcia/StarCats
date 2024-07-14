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
          const { price, volume, qty, name, categoryId, pic } = product;

          const totalPrice = (qty * price[volume]).toFixed(2);

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
                <div className="col-7">
                  <h4 className="mt-4">
                    {name}{" "}
                    {categoryId == 1 && `${volume == "base" ? 250 : volume}ml`}
                  </h4>
                  <img
                    src={`/img/${pic}`}
                    alt={product.name}
                    className={styles["product-pic"]}
                  />
                </div>
                <div className="col-5 d-flex flex-column justify-content-center align-items-center">
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
                          value={qty}
                          className={styles["noHover"]}
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
