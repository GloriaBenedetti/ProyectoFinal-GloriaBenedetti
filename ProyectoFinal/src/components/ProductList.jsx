
//Muestra una lista de productCard
//contenedor que mapea y muestra multiples ProductCard
import ProductCard from './ProductCard';




const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
  },
};

function ProductList({ products }) {
  return (
    <div style={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductList;