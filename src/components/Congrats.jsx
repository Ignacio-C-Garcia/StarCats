import { Card } from "react-bootstrap";
export default function Congrats() {
  return (
    <>
      <Card.Title>¡Gracias por tu compra!</Card.Title>
      <Card.Text>
        Agradecemos tu compra. Esperamos que disfrutes de tu producto.
      </Card.Text>
      <div className="d-flex justify-content-center">
        <img src="../../public/logostarcats.svg" className="w-25"></img>
      </div>
    </>
  );
}
