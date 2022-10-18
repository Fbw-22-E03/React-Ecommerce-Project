import React, {useState, useEffect} from 'react'
import Product from './Product';

function ProductsPaginate() {

    const [state, setState] = useState();

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(10);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'da81b807a3msh6630664edd85f8cp16fe6bjsnf0cc3c8311bf',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
    };
    
      useEffect(
        () => async () => {
          setLoading(true);
          const res = await fetch(
            "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN",
            options
          );
          const data = await res.json();
          setState(data);
          setLoading(false);
        },
        []
      );
     
      // Get current product
      const indexOfLastProduct = currentPage * productPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productPerPage;
      let currentProduct = null;
      {state? (
        currentProduct = state.results.slice(indexOfFirstProduct, indexOfLastProduct)): null}
      
     
  return 
  (
    <div></div>
    //  <Product state={currentProduct} loading={loading}/>
      
  )
}

export default ProductsPaginate