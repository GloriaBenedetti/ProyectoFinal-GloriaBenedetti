
import { Container, Row, Col } from 'react-bootstrap'
import { Card, CardHeader, CardTitle, CardBody } from 'react-bootstrap'
import { Form, FormGroup, FormControl, FormLabel, FormText } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const userData = Object.fromEntries(formData.entries())
    
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log(userData)
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Registrarse</CardTitle>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <FormLabel>Nombre completo</FormLabel>
                  <FormControl 
                    type="text" 
                    name="nombre" 
                    placeholder="Ingrese su nombre completo"
                    required
                  />
                  <FormText className="text-muted">
                    Por favor ingrese su nombre completo tal como aparece en su documento.
                  </FormText>
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Email</FormLabel>
                  <FormControl 
                    type="email" 
                    name="email" 
                    placeholder="ejemplo@correo.com"
                    required
                  />
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl 
                    type="password" 
                    name="contraseña" 
                    minLength="8"
                    required
                  />
                  <FormText className="text-muted">
                    La contraseña debe tener mínimo 8 caracteres.
                  </FormText>
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Confirmar Contraseña</FormLabel>
                  <FormControl 
                    type="password" 
                    name="confirmar_contraseña" 
                    required
                  />
                </FormGroup>

                <Button 
                  type="submit" 
                  className="w-100 mb-3"
                >
                  Registrarse
                </Button>

                <p className="text-center">
                  ¿Ya tiene cuenta?{' '}
                  <Link to="/" className="text-decoration-none">
                    Iniciar sesión
                  </Link>
                </p>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Register