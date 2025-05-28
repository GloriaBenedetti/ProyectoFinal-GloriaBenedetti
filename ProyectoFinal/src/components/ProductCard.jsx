
//Tarjeta individual para mostrar un producto
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <h3>{product.title}</h3>
      {/*Imagen del producto*/}
     <img src={product.image} 
     alt={product.title}width="150"/>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      <Link to={`/producto/${product.id}`}>Ver detalles</Link>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem',
  }
};

export default ProductCard;
