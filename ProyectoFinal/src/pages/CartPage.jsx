
//isualización y gestión de carrito de compras
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <p>El carrito está vacío.</p>;

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Tu carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            {item.title} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default CartPage;
