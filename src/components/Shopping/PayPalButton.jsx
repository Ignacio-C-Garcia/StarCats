import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FUNDING } from "@paypal/react-paypal-js";
import { Alert } from "react-bootstrap";
// eslint-disable-next-line react/prop-types
const PayPalButton = ({ nextStep }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AWuubWkyg0xKa-rBlMunAc6FZyBz5as_4Byq716w4M4utZt793RTVqCf6T2a7JfKqXAdHPIezQuN0ZaZ",
      }}
    >
      <PayPalButtons
        style={{
          shape: "pill",
          label: "pay",
          color: "black",
          height: 38,
          disableMaxWidth: true,
          tagline: false,
        }}
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
        onError={() => {
          <Alert variant={"danger"}>
            Ha ocurrido un error, intente nuevamente
          </Alert>;
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(() => {
            <Alert variant={"dark"}>Pago Existoso!</Alert>;
            nextStep();
          });
        }}
        fundingSource={FUNDING.PAYPAL}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
