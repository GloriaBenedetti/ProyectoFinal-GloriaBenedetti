
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-light mt-4 p-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Información</h5>
            <ul className="list-unstyled">
              <li>Términos y condiciones</li>
              <li>Política de privacidad</li>
              <li>Preguntas frecuentes</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>Email: contacto@tiendaonline.com</li>
              <li>Teléfono: +54 11 456 789</li>
              <li>Dirección: Calle Rivadavia 123</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Síguenos</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center text-muted">&copy; 2025 Tienda Online</p>
      </Container>
    </footer>
  )
}

export default Footer