import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const history = useNavigate();

  const handleLogout = async () => {
    try {
      // Make a request to the backend to handle the logout
      await axios.get('/auth/logout');

      // Redirect to the home page after successful logout
      history.push('/');
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
