import { Nav, Navbar } from "react-bootstrap";
import "./Sidebar.css"; // Archivo CSS para estilos adicionales
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="ssidebar">
      <Navbar bg="light" expand="lg" className="d-flex flex-column vh-100">
        <Navbar.Brand href="/">Admin</Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/productos">
            Productos
          </Nav.Link>
          <Nav.Link as={Link} to="/ordenes">
            Ordenes
          </Nav.Link>
          <Nav.Link as={Link} to="/clientes">
            Clientes
          </Nav.Link>
          <Nav.Link as={Link} to="/perfil">
            Perfil
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Sidebar;
