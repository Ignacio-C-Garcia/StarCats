import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FUNDING } from "@paypal/react-paypal-js";
const PayPalButton = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AWuubWkyg0xKa-rBlMunAc6FZyBz5as_4Byq716w4M4utZt793RTVqCf6T2a7JfKqXAdHPIezQuN0ZaZ",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1.00", // Aquí defines el monto de la transacción ficticia
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(() => {
            alert("Pago completado");
          });
        }}
        fundingSource={FUNDING.PAYPAL}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
