
//Hook personalizado para traer productos desde una API
import { useEffect, useState } from 'react';

export default function useFetchProducts(url) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("cargando productos")
    fetch(url)
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        setProducts(data)
      })
  .catch(err=>{
    console.error("Error al cargar productos", err)
      setError(true)
  })
  },[url])
return { products,  error };

}

