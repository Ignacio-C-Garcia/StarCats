import { useState } from "react";
import styles from "../styles/ProductModal.module.css";
import {
  Modal as BootstrapModal,
  Button,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addProduct } from "../redux/shoppingCartReducer";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import { Toaster, toast } from "sonner";

function ProductModal({ show, setShow, product }) {
  const dispatch = useDispatch();
  const [isToGo, setIsToGo] = useState("aqui");
  const [quantity, setQuantity] = useState(1);
  const [volume, setVolume] = useState("base");
  const [showViewCart, setShowViewCart] = useState(false);
  let total = product.price[volume] * quantity;

  const handleClose = () => setShow(false);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, qty: quantity, isToGo, volume }));
    setShowViewCart(true);

    toast(`${product.name} añadido al carrito`);

    setTimeout(() => {
      setShow(false);
    }, 80000);
  };
  const caloriesContent = (
    <Popover id="popover-calories">
      <Popover.Body>{product.calories} kcal</Popover.Body>
    </Popover>
  );

  return (
    <BootstrapModal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Toaster position="top-right" />
      <BootstrapModal.Body className={styles.body}>
        <div className="container-fluid">
          {product.categoryId == 1 ? (
            <div className="row">
              <div className={`col-6 ${styles.productImageContainer}`}>
                <h2 className="pt-4 mt-4 fs-2">
                  {product.name}
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={caloriesContent}
                  >
                    <Button className="mb-2" variant="black border-0">
                      <i className="bi bi-info-circle"></i>
                    </Button>
                  </OverlayTrigger>
                </h2>

                <img
                  src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
                  alt={product.name}
                  className={` ${styles.productImage}`}
                />
              </div>

              <div className="col-6 text-center row ">
                <Form>
                  <Form.Group className="mt-5 mb-3">
                    <div className="row text-">
                      <div className="col-6">
                        <p>Aquí</p>
                        <i
                          className={`bi bi-cup-straw fs-2 ${
                            isToGo === "aqui" ? styles.selectedIcon : ""
                          } ${styles.hoverIcon}`}
                          onClick={() => setIsToGo("aqui")}
                        ></i>
                      </div>
                      <div className="col-6">
                        <p>Llevar</p>
                        <i
                          className={`bi bi-bag fs-2 ${
                            isToGo === "llevar" ? styles.selectedIcon : ""
                          } ${styles.hoverIcon}`}
                          onClick={() => setIsToGo("llevar")}
                        ></i>
                      </div>
                    </div>
                  </Form.Group>

                  {product.categoryId == 1 && (
                    <Form.Group className="pb-5 text-center">
                      <hr />
                      <p>Tamaño</p>
                      <div className={`d-flex ${styles.volumeSelector}`}>
                        <div
                          className={`d-flex flex-column align-items-center ${styles.volumeOption}`}
                        >
                          <i
                            className={`bi bi-cup-hot fs-6 ${
                              volume === "base" ? styles.selectedIcon : ""
                            } ${styles.hoverIcon}`}
                            onClick={() => setVolume("base")}
                          ></i>
                          <span>250ml</span>
                          <small>${product.price["base"]}</small>
                        </div>
                        <div
                          className={`d-flex flex-column align-items-center m-2 ${styles.volumeOption}`}
                        >
                          <i
                            className={`bi bi-cup-hot fs-4 ${
                              volume === 350 ? styles.selectedIcon : ""
                            } ${styles.hoverIcon}`}
                            onClick={() => setVolume(350)}
                          ></i>
                          <span>350ml</span>
                          <small>${product.price[350]}</small>
                        </div>
                        <div
                          className={`d-flex flex-column align-items-center ${styles.volumeOption}`}
                        >
                          <i
                            className={`bi bi-cup-hot fs-2 ${
                              volume === 450 ? styles.selectedIcon : ""
                            } ${styles.hoverIcon}`}
                            onClick={() => setVolume(450)}
                          ></i>
                          <span>450ml</span>
                          <small>${product.price[450]}</small>
                        </div>
                      </div>
                      <hr />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-2 d-flex justify-content-between ">
                    <div className="d-flex border rounded-pill border-black">
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
                          value={quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            setQuantity(value || 1);
                          }}
                          className={`${styles.noHover}`}
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
                    <p>
                      <strong>${total.toFixed(2)}</strong>
                    </p>
                  </Form.Group>
                </Form>
              </div>
              <p className="mt-4 mb-4">{product.description}</p>
            </div>
          ) : (
            <div className="row">
              <div className={`col-6 ${styles.productImageContainer}`}>
                <img
                  src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
                  alt={product.alt}
                  className={` ${styles.productImage}`}
                />
                <p className="mt-4 mb-4">{product.description}</p>
              </div>
              <div className="col-6">
                <h2>
                  {product.name}
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={caloriesContent}
                  >
                    <Button className="mb-2" variant="black border-0">
                      <i className="bi bi-info-circle"></i>
                    </Button>
                  </OverlayTrigger>
                </h2>
                <hr />
                <Form>
                  <Form.Group className="mb-5 mt-5">
                    <div className="row text-center ">
                      <div className="col-6">
                        <p>Aquí</p>
                        <i
                          className={`bi bi-cup-straw fs-2 ${
                            isToGo === "aqui" ? styles.selectedIcon : ""
                          } ${styles.hoverIcon}`}
                          onClick={() => setIsToGo("aqui")}
                        ></i>
                      </div>
                      <div className="col-6">
                        <p>Llevar</p>
                        <i
                          className={`bi bi-bag fs-2 ${
                            isToGo === "llevar" ? styles.selectedIcon : ""
                          } ${styles.hoverIcon}`}
                          onClick={() => setIsToGo("llevar")}
                        ></i>
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-2 d-flex justify-content-around ">
                    <div className="d-flex border rounded-pill border-black">
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
                          value={quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            setQuantity(value || 1);
                          }}
                          className={`${styles.noHover}`}
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
                    <p>
                      <strong>${total.toFixed(2)}</strong>
                    </p>
                  </Form.Group>
                </Form>
              </div>
            </div>
          )}
        </div>
        <BootstrapModal.Footer className="d-flex justify-content-between">
          <ButtonComponent className={styles.btnClose} onClick={handleClose}>
            Cerrar
          </ButtonComponent>
          {showViewCart ? (
            <Link to="/cart" className={styles["btn-view-cart"]}>
              Ver carrito
            </Link>
          ) : (
            <ButtonComponent
              className={styles.btnClose}
              onClick={handleAddToCart}
            >
              Añadir al carrito
            </ButtonComponent>
          )}
        </BootstrapModal.Footer>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
}

export default ProductModal;
