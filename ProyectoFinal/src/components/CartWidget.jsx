
import { Badge } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartWidget() {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <Badge pill bg="danger">{cartItems.length}</Badge>
    </div>
  )
}

export default CartWidget