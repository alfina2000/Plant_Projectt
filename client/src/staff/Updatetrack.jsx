import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Updatetrack = ({ trackId }) => {
  const [track, setTrack] = useState({});
  const [updatedInfo, setUpdatedInfo] = useState({});

  useEffect(() => {
    // Fetch track data based on trackId from your Node.js backend
    axios.get(`http://your-backend-api/tracks/${trackId}`)
      .then(response => {
        setTrack(response.data);
      })
      .catch(error => {
        console.error('Error fetching track data:', error);
      });
  }, [trackId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo({ ...updatedInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated track information to the backend to update the track
    axios.put(`http://your-backend-api/tracks/${trackId}`, updatedInfo)
      .then(response => {
        console.log('Track updated successfully:', response.data);
        // Perform any necessary actions after updating the track
      })
      .catch(error => {
        console.error('Error updating track:', error);
      });
  };

  return (
    <div>
      <h2>Update Track Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Track Name:
          <input
            type="text"
            name="name"
            value={updatedInfo.name || track.name || ''}
            onChange={handleChange}
          />
        </label>
        {/* Add other input fields for the track information */}
        <button type="submit">Update Track</button>
      </form>
    </div>
  );
};

export default Updatetrack;