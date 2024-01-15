import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to install axios: npm install axios

const Cancelorder = () => {
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');

  const handleCancelOrder = async () => {
    try {
      const response = await axios.post('/cancel-order', { orderId });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error cancelling order');
    }
  };

  return (
    <div>
      <h1>Cancel Order</h1>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleCancelOrder}>Cancel Order</button>
      <p>{message}</p>
    </div>
  );
};

export default Cancelorder;