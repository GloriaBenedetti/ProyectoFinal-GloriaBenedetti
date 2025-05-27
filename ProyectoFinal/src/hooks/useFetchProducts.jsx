
//Hook personalizado para traer productos desde una API
import { useEffect, useState } from 'react';

export default function useFetchProducts(url) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { products, loading, error };
}
