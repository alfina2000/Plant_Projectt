import React, { useState } from 'react';

const Payment = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handlePayment = async () => {
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardDetails),
      });
      // Handle response (e.g., success or error)
    } catch (error) {
      // Handle error
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  return (
    <form>
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={cardDetails.cardNumber}
        onChange={handleInputChange}
      />
      {/* Other input fields for expiry and cvc */}
      <button onClick={handlePayment}>Pay Now</button>
    </form>
  );
};

export default Payment;