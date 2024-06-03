import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  const expand = "md";
  return (
    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="logo.png" style={{ height: 50 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img src="logo.png" style={{ height: 50 }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Products"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <Container>
                  <Row>
                    <Col>
                      <NavDropdown.Item href="#action3">
                        Action1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action 2
                      </NavDropdown.Item>
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action3">
                        Action 2
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action 2
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
