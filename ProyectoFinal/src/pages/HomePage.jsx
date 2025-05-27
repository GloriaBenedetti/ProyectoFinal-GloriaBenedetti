
//Pagina principal con listado general de productos
//Consume el hook y muestra los productos
import useFetchProducts from '../hooks/useFetchProducts';
import ProductList from '../components/ProductList';

function HomePage() {
  const { products, loading, error } = useFetchProducts('https://fakestoreapi.com/products');

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
