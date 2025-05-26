
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/" className="navbar-brand">Tienda Online</Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Inicio</NavLink>
            <NavLink to="/register" className="nav-link">Registrarse</NavLink>
            <NavLink to="/contact" className="nav-link">Contacto</NavLink>
          </Nav>

          <div className="d-flex">
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header