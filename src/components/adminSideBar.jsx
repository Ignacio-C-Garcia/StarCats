import { Nav, Navbar } from "react-bootstrap";
import "./Sidebar.css"; // Archivo CSS para estilos adicionales
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="ssidebar">
      <Navbar bg="light" expand="lg" className="d-flex flex-column vh-100">
        <Navbar.Brand href="/">Admin</Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/admin/productos">
            Productos
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/ordenes">
            Ordenes
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/clientes">
            Clientes
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/perfil">
            Perfil
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Sidebar;
