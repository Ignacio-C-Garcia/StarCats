import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
export default function CheckoutForm({ setIsProcessing, nextStep }) {
  const { shoppingCart, auth } = useSelector((state) => state);
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);

  const saveOrder = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token,
      },
      body: JSON.stringify({
        products: shoppingCart.products,
        address: "MiawStreet 4972C, Michigan",
      }),
    });
    if (!response.ok) {
      const data = await response.json();
      return console.log(JSON.stringify(data));
    }
    nextStep();
  };
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
      saveOrder();
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
