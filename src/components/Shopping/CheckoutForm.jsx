import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Alert } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function CheckoutForm({ setIsProcessing, nextStep }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      setMessage("Pago rechazado");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      nextStep();
    } else {
      setMessage("Error interno");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <div className="pt-4">
        {message && (
          <Alert variant={"danger"}>
            Ha ocurrido un error, intente nuevamente
          </Alert>
        )}
      </div>
    </form>
  );
}
