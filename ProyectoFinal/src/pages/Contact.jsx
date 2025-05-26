
import { Container, Row, Col } from 'react-bootstrap'
import { Card, CardHeader, CardTitle, CardBody } from 'react-bootstrap'
import { Form, FormGroup, FormControl, FormLabel, FormText } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const contactData = Object.fromEntries(formData.entries())
    
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log(contactData)
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Contáctanos</CardTitle>
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
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl 
                    type="tel" 
                    name="telefono" 
                    placeholder="+34 123 456 789"
                  />
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Asunto</FormLabel>
                  <FormControl 
                    type="text" 
                    name="asunto" 
                    placeholder="Escriba el asunto de su consulta"
                    required
                  />
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl 
                    as="textarea" 
                    rows={5}
                    name="mensaje" 
                    placeholder="Escriba su mensaje aquí..."
                    required
                  />
                </FormGroup>

                <Button 
                  type="submit" 
                  className="w-100 mb-3"
                >
                  Enviar Mensaje
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact