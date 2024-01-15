import React, { useState } from 'react';

const Addcart = () => {
  const [items, setItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setItems([...items, product]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => addToCart({ id: 1, name: 'Product 1' })}>
        Add Product 1
      </button>
      {/* Render items in the cart */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Addcart