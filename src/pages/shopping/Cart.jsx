import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import PaymentForm from "../../components/Shopping/PaymentForm";
import ShoppingCartList from "../../components/Shopping/ShoppingCartList";

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
        setIsDisabled(true);
        nextStep();
        break;
      case 1:
        console.log("Hoy es lunes");
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
            {step === 0 ? <ShoppingCartList /> : <PaymentForm />}
          </Col>
          <Col md={4}>
            <Card className="p-3 border rounded-4">
              <Card.Body>
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
                <Button
                  className={`btn rounded-pill mt-3 border-0`}
                  variant="dark"
                  type="submit"
                  form="payForm"
                  disabled={isDisabled}
                  onClick={handleCartButton}
                >
                  Continuar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
