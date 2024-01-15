import React, { useState } from 'react';
import axios from 'axios';

const  Staffreg = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Other necessary fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-backend-api/register', formData);
      console.log('Registration successful:', response.data);
      // Handle success - show message or redirect
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error - show error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      {/* Other input fields */}
      <button type="submit">Register</button>
    </form>
  );
};
export default Staffreg