import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BuyArt = () => {
  const { artId } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [quantity, setQuantity] = useState(1); // Assuming a default quantity of 1 for simplicity

  useEffect(() => {
    // Fetch artwork details from the backend when the component mounts
    const fetchArtwork = async () => {
      try {
        const response = await axios.get(`/arts/${artId}`);
        setArtwork(response.data);
      } catch (error) {
        console.error('Error fetching artwork details:', error);
      }
    };

    fetchArtwork();
  }, [artId]);

  const handleBuy = async () => {
    try {
      // Make a request to the backend to create a purchase
      const response = await axios.post('/purchase', {
        artId,
        quantity,
        // Include other purchase details as needed
      });

      // Handle the response as needed (e.g., show a success message)
      console.log('Purchase successful:', response.data);
    } catch (error) {
      console.error('Error purchasing artwork:', error);
      // Handle the error (e.g., show an error message)
    }
  };

  if (!artwork) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Buy Art</h2>
      <h3>{artwork.title}</h3>
      <p>{artwork.description}</p>
      <p>Price: {artwork.price}</p>
      <label>Quantity: </label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
      />
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
};

export default BuyArt;