import { useState } from "react";
import "../../styles/PaymentForm.module.css";

function PaymentForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes simular la validación del pago
    if (name && cardNumber && expiryDate && cvv) {
      setPaymentStatus("Payment successful!");
    } else {
      setPaymentStatus("Payment failed. Please check your details.");
    }
  };

  return (
    <div className="PaymentContainer container">
      <h1 className="text-center my-4">Simulated Payment Gateway</h1>
      <form id="payForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name on Card:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
      </form>
      {paymentStatus && <p className="text-center mt-4">{paymentStatus}</p>}
    </div>
  );
}

export default PaymentForm;
