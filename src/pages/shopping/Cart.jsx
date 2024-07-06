import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import PaymentForm from "../../components/Shopping/PaymentForm";
import ShoppingCartList from "../../components/Shopping/ShoppingCartList";
import PaymentMethod from "../../components/Shopping/PaymentMethod";

function Cart() {
  const { products } = useSelector((state) => state.shoppingCart);
  const [step, SetStep] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const calculateSubTotal = () => {
    let total = 0;

    for (const product of products) {
      console.log(product);
      total += product.qty * product.price;
    }
    return total.toFixed(2);
  };
  const nextStep = () => SetStep((prev) => prev + 1);
  const prevStep = () => SetStep((prev) => prev - 1);
  const handleCartButton = (e) => {
    switch (step) {
      case 0:
        nextStep();
        break;
      case 1:
        nextStep();
        break;
      case 2:
        console.log("Hoy es martes");
        break;
      case 3:
        console.log("Hoy es miércoles");
        break;
      case 4:
        console.log("Hoy es jueves");
        break;
      case 5:
        console.log("Hoy es viernes");
        break;
      case 6:
        console.log("Hoy es sábado");
        break;
      default:
        console.log("Día inválido");
        break;
    }
  };
  return (
    <>
      <Navbar />
      <Container className="mt-4 mb-4">
        <Row>
          <Col md={8} className="d-flex flex-column gap-3">
            {step === 0 && <ShoppingCartList />}
            {step === 1 && <PaymentMethod />}
          </Col>
          <Col md={4}>
            <Card className="border rounded-4">
              <Card.Body className="p-4">
                <h4 className="mb-4">Resumen del Pedido</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Sub Total:</span>
                  <span>${calculateSubTotal()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Envío:</span>
                  <span>$00.00</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Total:</span>
                  <span>${calculateSubTotal()}</span>
                </div>
                {paymentMethod && (
                  <div className="d-flex justify-content-between mb-2">
                    <span>Metodo de pago:</span>
                    <span>{paymentMethod}</span>
                  </div>
                )}
              </Card.Body>
              <Card.Footer className="p-4">
                <Button
                  className="btn rounded-pill border-0 w-100"
                  variant="dark"
                  type="submit"
                  form="payForm"
                  onClick={handleCartButton}
                >
                  Continue
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
