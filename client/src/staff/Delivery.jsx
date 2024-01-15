import React, { useState, useEffect } from 'react';

const Delivery = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    // Fetch delivery data from the backend when the component mounts
    fetch('/api/deliveries') // Assuming your backend server is running on the same host
      .then(response => response.json())
      .then(data => setDeliveries(data))
      .catch(error => console.error('Error fetching deliveries:', error));
  }, []);

  return (
    <div>
      <h1>Delivery Page</h1>
      <ul>
        {deliveries.map(delivery => (
          <li key={delivery.id}>
            <p>{`Recipient: ${delivery.recipient}`}</p>
            <p>{`Address: ${delivery.address}`}</p>
            <p>{`Status: ${delivery.status}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Delivery;