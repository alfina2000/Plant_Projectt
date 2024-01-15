import React, { useState } from 'react';
import axios from 'axios';

const VerifyCancel= () => {
    const [cancellationCode, setCancellationCode] = useState('');
    const [verificationMessage, setVerificationMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCancellationCode(e.target.value);
    };

    const handleVerifyCancellation = async () => {
        try {
            const response = await axios.post('/api/verifyCancel', { cancellationCode });
            setVerificationMessage(response.data.message);
            setError('');
        } catch (error) {
            setError(error.response.data.error);
            setVerificationMessage('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={cancellationCode}
                onChange={handleChange}
                placeholder="Enter Cancellation Code"
            />
            <button onClick={handleVerifyCancellation}>Verify Cancellation</button>
            {verificationMessage && <p>{verificationMessage}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default VerifyCancel