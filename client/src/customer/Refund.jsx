import React, { useState } from 'react';
import axios from 'axios';

const Refund = () => {
  const [refundData, setRefundData] = useState({
    amount: '',
    reason: '',
    // other necessary fields
  });

  const handleRefund = async () => {
    try {
      const response = await axios.post('/api/refund', refundData);
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Error:', error); // Handle error response
    }
  };

  return (
    <div>
      <input
        type="text"
        value={refundData.amount}
        onChange={(e) => setRefundData({ ...refundData, amount: e.target.value })}
        placeholder="Amount"
      />
      <input
        type="text"
        value={refundData.reason}
        onChange={(e) => setRefundData({ ...refundData, reason: e.target.value })}
        placeholder="Reason"
      />
      {/* Other input fields */}
      <button onClick={handleRefund}>Submit Refund</button>
    </div>
  );
};

export default Refund;