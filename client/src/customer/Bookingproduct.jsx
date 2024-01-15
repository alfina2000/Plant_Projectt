import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const BookingProduct = () => {
  // State to manage product details
  const [product, setProduct] = useState(null);

  // Fetch product details from the backend when the component mounts
  useEffect(() => {
    // Make a GET request to fetch product details from the backend
    axios.get('/api/product/:productId') // Replace ':productId' with the actual ID of the product
      .then(response => {
        setProduct(response.data); // Update state with fetched product data
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, []);

  // Function to handle booking a product
  const handleBooking = () => {
    // Add logic to handle booking the product (e.g., sending a POST request to the backend)
    // This can involve sending user information, selected options, etc.
    // For brevity, this example does not include the booking logic.
    console.log('Booking the product...');
  };

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <button onClick={handleBooking}>Book Now</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookingProduct;