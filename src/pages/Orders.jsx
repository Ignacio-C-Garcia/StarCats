import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Orders() {
  const auth = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/orders/myOrders",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: auth.token,
            },
          }
        );
        if (!response.ok) {
          throw new Error("API fetch error, !ok");
        }
        const { orders } = await response.json();
        console.log(orders);
        setOrders(orders);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchOrders();
  }, []);

  const getStatusVariant = (status) => {
    switch (status) {
      case "entregado":
        return "success";
      case "enviado":
        return "info";
      case "cancelado":
        return "danger";
      default:
        return "secondary";
    }
  };
  const calculateTotal = (products) =>
    products
      .reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.qty * currentValue.price,
        0
      )
      .toFixed(2);

  return (
    <>
      <NavBar />
      <section className="bg-light py-5">
        <Container>
          <h4 className="mb-4">Tus pedidos</h4>
          <Row>
            {orders.map((order) => {
              console.log(order);
              return (
                <Col key={order.id} md={6} lg={4} className="mb-4">
                  <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                      <span>Pedido #{order.id}</span>
                      <Badge bg={getStatusVariant(order.status)}>
                        {order.status}
                      </Badge>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <strong>Direccion:</strong> {order.address}
                      </Card.Text>
                      <Card.Text>
                        <strong>Total:</strong>${calculateTotal(order.products)}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <span>Ver más</span>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
}
