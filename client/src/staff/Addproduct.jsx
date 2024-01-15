
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For API calls

const Addproduct = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch product data from Node.js backend
    axios.get('/api/product/123') // Replace '123' with product ID
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Other product details */}
    </div>
  );
};

export default Addproduct;