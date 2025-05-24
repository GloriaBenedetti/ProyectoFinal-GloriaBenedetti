
//Pagina principal con listado general de productos
import useFetchProducts from '../hooks/useFetchProducts';
import ProductList from '../components/ProductList';

function HomePage() {
  const { products, loading, error } = useFetchProducts('https://6830a4386205ab0d6c39e89c.mockapi.io/products')

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos</p>;

  return (
    <div>
      <h2>Productos disponibles</h2>
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
