import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCartList from "../../components/Shopping/ShoppingCartList";
import Payment from "../../components/Shopping/Payment";
import PayPalButton from "../../components/Shopping/PayPalButton";
import Congrats from "../../components/Congrats";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const { products, token } = useSelector((state) => {
    return { products: state.shoppingCart.products, token: state.auth.token };
  });
  const [step, SetStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const nextStep = () => SetStep((prev) => prev + 1);

  const calculateSubTotal = () => {
    let total = 0;
    for (const product of products) {
      total += product.qty * product.price;
    }
    return total.toFixed(2);
  };

  const handleCartButton = () => {
    if (!token) navigate("/login");
    switch (step) {
      case 0:
        nextStep();
        break;
      case 2:
        navigate("/ordenes");
        break;
      default:
        console.log("step inválido");
        break;
    }
  };
  return (
    <>
      <Navbar />
      <Container className="mt-4 mb-4">
        <Row>
          <Col md={8}>
            <Card className="border rounded-4 h-100">
              <Card.Body className="p-4">
                {step === 0 && <ShoppingCartList />}
                {step === 1 && (
                  <Payment
                    isProcessing={isProcessing}
                    setIsProcessing={setIsProcessing}
                    nextStep={nextStep}
                  />
                )}
                {step === 2 && <Congrats />}
              </Card.Body>
              <Card.Footer
                className={`px-4 py-0 ${step == 0 ? "d-none" : ""} `}
              >
                {step === 1 && (
                  <div className="pt-4 pb-3">
                    <PayPalButton nextStep={nextStep}></PayPalButton>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <Button
                      className="btn rounded-pill my-4 border-0 w-100"
                      variant="dark"
                      onClick={() => navigate("/")}
                    >
                      <span id="button-text">Volver a la Página Principal</span>
                    </Button>
                  </div>
                )}
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border rounded-4  h-100">
              <Card.Body className="p-4">
                <h4 className="mb-4">Resumen del Pedido</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Sub Total:</span>
                  <span>${calculateSubTotal()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Envío:</span>
                  <span>$0.0</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Total:</span>
                  <span>${calculateSubTotal()}</span>
                </div>
                {step === 1 && (
                  <div className="border p-2 rounded text-secondary">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Visa:</span>
                      <span>4000008580000003</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>PayPal:</span>
                      <span>4032035520131152</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Caducidad:</span>
                      <span>03/28</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>CCV:</span>
                      <span>173</span>
                    </div>
                  </div>
                )}
              </Card.Body>
              <Card.Footer className="p-4">
                <Button
                  className="btn rounded-pill border-0 w-100"
                  variant="dark"
                  type="submit"
                  form="payment-form"
                  onClick={handleCartButton}
                >
                  <span id="button-text">
                    {step === 0 && "Continue"}
                    {step === 1 && isProcessing && "Processing ... "}
                    {step === 1 && !isProcessing && "Pay now"}
                    {step === 2 && "Ver orden de compra"}
                  </span>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
