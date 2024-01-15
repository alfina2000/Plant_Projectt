import React, { useState } from 'react';
import axios from 'axios';

const Returnproduct = () => {
  const [productId, setProductId] = useState('');

  const handleReturn = async () => {
    try {
      // Make a POST request to the backend API endpoint
      const response = await axios.post('/api/return-product', { productId });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Error returning product:', error);
      // Handle error response
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleReturn}>Return Product</button>
    </div>
  );
};

export default Returnproduct;