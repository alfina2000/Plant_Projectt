import React, { useState } from 'react';
import axios from 'axios'; // Axios library for making HTTP requests

const VerifyRefund = () => {
  const [refundId, setRefundId] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyRefund = async () => {
    try {
      // Make a POST request to the backend endpoint '/verify-refund' to verify refund
      const response = await axios.post('/verify-refund', { refundId });

      // Update the state based on the response
      setIsVerified(response.data.isRefundVerified);
    } catch (error) {
      console.error('Error verifying refund:', error);
      // Handle error scenario
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Refund ID"
        value={refundId}
        onChange={(e) => setRefundId(e.target.value)}
      />
      <button onClick={handleVerifyRefund}>Verify Refund</button>

      {isVerified && <p>Refund is verified!</p>}
      {/* Display a message or UI based on the verification result */}
    </div>
  );
};

export default VerifyRefund;