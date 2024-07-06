import { useState } from "react";
import { Form, Button, InputGroup, FormControl, Card } from "react-bootstrap";
import "./custom.css"; // Archivo CSS personalizado

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <Card className="shadow-sm w-100 max-w-md border rounded-lg bg-card text-card-foreground">
      <Card.Body className="p-4">
        <h3 className="h3">Payment Method</h3>
        <p className="text-muted small">
          Select your preferred payment method to complete the transaction.
        </p>
      </Card.Body>
      <div className="p-4 grid gap-3">
        <Form.Group>
          <div role="radiogroup" className="d-flex justify-content-around">
            {["debito", "paypal", "credito"].map((method) => (
              <div key={method}>
                <input
                  type="radio"
                  id={method}
                  name="paymentMethod"
                  value={method}
                  checked={selectedMethod === method}
                  onChange={() => setSelectedMethod(method)}
                  className="d-none"
                />
                <label
                  className={`text-center cursor-pointer flex flex-column align-items-center justify-content-between rounded border p-3 hover-bg-accent hover-text-accent-foreground ${
                    selectedMethod === method
                      ? "border-primary"
                      : "border-muted"
                  }`}
                  htmlFor={method}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-3 h-6 w-6"
                  >
                    {method === "debito" && (
                      <>
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </>
                    )}
                    {method === "paypal" && (
                      <>
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </>
                    )}
                    {method === "credito" && (
                      <>
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
                        <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
                      </>
                    )}
                  </svg>
                  <div>
                    {method === "debito" && "Tarjeta de Debito"}
                    {method === "paypal" && "Cuenta de PayPal"}
                    {method === "credito" && "Tarjeta de Credito"}
                  </div>
                </label>
              </div>
            ))}
          </div>
        </Form.Group>
        <Form.Group className="grid gap-2">
          <Form.Label htmlFor="card-name">Nombre en la tarjeta</Form.Label>
          <Form.Control
            type="text"
            id="card-name"
            placeholder="Michi the cat"
          />
        </Form.Group>
        <Form.Group className="grid gap-2">
          <Form.Label htmlFor="card-number">Numero de tarjeta</Form.Label>
          <Form.Control
            type="text"
            id="card-number"
            placeholder="0000 0000 0000 0000"
          />
        </Form.Group>
        <div>Expiracion:</div>
        <div className="d-flex justify-content-around">
          <div className="d-flex">
            <Form.Group>
              <Form.Label>Mes</Form.Label>
              <InputGroup>
                <FormControl as="select" id="expiration-month" className="">
                  <option value="" disabled defaultValue>
                    MM
                  </option>
                  <option value="January">Enero</option>
                  <option value="January">Febrero</option>
                  <option value="January">Marzo</option>
                  <option value="January">Abril</option>
                  <option value="January">Mayo</option>
                  <option value="January">Junio</option>
                  <option value="January">Julio</option>
                  <option value="January">Agosto</option>
                  <option value="January">Septiembre</option>
                  <option value="January">Octubre</option>
                  <option value="January">Noviembre</option>
                  <option value="January">Diciembre</option>
                </FormControl>
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Anio</Form.Label>
              <InputGroup>
                <FormControl as="select" id="expiration-year">
                  <option value="" disabled defaultValue>
                    YYYY
                  </option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </FormControl>
              </InputGroup>
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Label htmlFor="cvv">CVV</Form.Label>
            <Form.Control type="text" id="cvv" placeholder="CVV" />
          </Form.Group>
        </div>
      </div>
    </Card>
  );
};

export default PaymentMethod;
