import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm({ isProcessing, setIsProcessing }) {
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
      setMessage("Pago Exitoso!");
    } else {
      setMessage("Error interno");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      {message && (
        <div id="payment-message" className="p-4">
          {message}
        </div>
      )}
    </form>
  );
}
