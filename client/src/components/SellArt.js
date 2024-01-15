import React, { useState } from 'react';
import axios from 'axios';

const SellArt = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSell = async () => {
    try {
      // Make a request to the backend to create a new artwork
      const response = await axios.post('/arts/sell', {
        title,
        description,
        stock,
        price,
        // Include other artwork details as needed
      });

      // Handle the response as needed (e.g., show a success message)
      console.log('Artwork added successfully:', response.data);
    } catch (error) {
      console.error('Error selling artwork:', error);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <div>
      <h2>Sell Art</h2>
      <label>Title: </label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>Description: </label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <label>Stock: </label>
      <input type="number" value={stock} onChange={(e) => setStock(Math.max(0, parseInt(e.target.value, 10)))} />
      <br />
      <label>Price: </label>
      <input type="number" value={price} onChange={(e) => setPrice(Math.max(0, parseFloat(e.target.value)))} />
      <br />
      <button onClick={handleSell}>Sell Art</button>
    </div>
  );
};

export default SellArt;
