import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Viewbooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div>
      <h1>View Bookings</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {/* Display booking details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Viewbooking;