import React, { useState, useEffect } from "react";
import {
  Modal as BootstrapModal,
  Button,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import styles from "../styles/ProductModal.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/shoppingCartReducer";
import { Link } from "react-router-dom";
import ButtonComponent  from "./ButtonComponent";

function ProductModal({ show, setShow, product }) {
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);

  const [isToGo, setIsToGo] = useState("aqui");
  const [quantity, setQuantity] = useState(1);
  const [volume, setVolume] = useState(250);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [showViewCart, setShowViewCart] = useState(false);

  const handleVolumeChange = (vol) => {
    setVolume(vol);
  };

  const handleIsToGoChange = (option) => {
    setIsToGo(option);
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({ ...product, qty: quantity, isToGo, volume, totalPrice })
    );
    setShowViewCart(true);
    setTimeout(() => {
      setShow(false);
    }, 100000);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const basePrice = product.price;
    const volumeMultiplier = volume / 250;
    const newPrice = basePrice * volumeMultiplier * quantity;
    setTotalPrice(newPrice.toFixed(2));
  }, [volume, quantity]);

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
      <BootstrapModal.Body className={styles.body}>
        <div className="container-fluid">
          {product.categoryId === 1 ? (
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
                          onClick={() => handleIsToGoChange("aqui")}
                        ></i>
                      </div>
                      <div className="col-6">
                        <p>Llevar</p>
                        <i
                          className={`bi bi-bag fs-2 ${
                            isToGo === "llevar" ? styles.selectedIcon : ""
                          } ${styles.hoverIcon}`}
                          onClick={() => handleIsToGoChange("llevar")}
                        ></i>
                      </div>
                    </div>
                  </Form.Group>

                  {product.categoryId === 1 && (
                    <Form.Group className="pb-5 text-center">
                      <hr />
                      <p>Tamaño</p>
                      <div className={`d-flex ${styles.volumeSelector}`}>
                        <div
                          className={`d-flex flex-column align-items-center ${styles.volumeOption}`}
                        >
                          <i
                            className={`bi bi-cup-hot fs-6 ${
                              volume === 250 ? styles.selectedIcon : ""
                            } ${styles.hoverIcon}`}
                            onClick={() => handleVolumeChange(250)}
                          ></i>
                          <span>250ml</span>
                          <small>${(product.price * 1).toFixed(2)}</small>
                        </div>
                        <div
                          className={`d-flex flex-column align-items-center m-2 ${styles.volumeOption}`}
                        >
                          <i
                            className={`bi bi-cup-hot fs-4 ${
                              volume === 350 ? styles.selectedIcon : ""
                            } ${styles.hoverIcon}`}
                            onClick={() => handleVolumeChange(350)}
                          ></i>
                          <span>350ml</span>
                          <small>${(product.price * 1.4).toFixed(2)}</small>
                        </div>
                        <div
                          className={`d-flex flex-column align-items-center ${styles.volumeOption}`}
                        >
                          <i
                            className={`bi bi-cup-hot fs-2 ${
                              volume === 450 ? styles.selectedIcon : ""
                            } ${styles.hoverIcon}`}
                            onClick={() => handleVolumeChange(450)}
                          ></i>
                          <span>450ml</span>
                          <small>${(product.price * 1.8).toFixed(2)}</small>
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
                      <strong>${totalPrice}</strong>
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
                  {product.name}{" "}
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
                          onClick={() => handleIsToGoChange("aqui")}
                        ></i>
                      </div>
                      <div className="col-6">
                        <p>Llevar</p>
                        <i
                          className={`bi bi-bag fs-2 ${
                            isToGo === "llevar" ? styles.selectedIcon : ""
                          } ${styles.hoverIcon}`}
                          onClick={() => handleIsToGoChange("llevar")}
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
                      <strong>${totalPrice}</strong>
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
            <ButtonComponent className={styles.btnClose} onClick={handleAddToCart}>
              Añadir al carrito
            </ButtonComponent>
          )}
        </BootstrapModal.Footer>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
}

export default ProductModal;
