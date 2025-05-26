
import { useEffect, useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Home() {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  return (
    <CardGroup className="row row-cols-1 row-cols-md-3 g-4">
      {products.map(product => (
        <Card key={product.id} className="h-100">
          <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button 
              onClick={() => addToCart(product)}
              className="w-100"
            >
              Agregar al Carrito
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  )
}

export default Home
