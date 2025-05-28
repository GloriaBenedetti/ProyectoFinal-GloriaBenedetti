
//Tarjeta individual para mostrar un producto
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  

  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1rem',
      margin: '1rem',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'contain',
      marginBottom: '1rem',
      borderRadius: '5px',
    },
    button: {
      marginTop: '0.5rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    link: {
      display: 'block',
      marginTop: '0.5rem',
      color: '#2c3e50',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.card}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} style={styles.image} />
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)} style={styles.button}>
        Agregar al carrito
      </button>
      <Link to={`/producto/${product.id}`} style={styles.link}>
        Ver detalles
      </Link>
    </div>
  );
}

export default ProductCard;