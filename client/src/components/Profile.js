import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //const { userId } = useParams();
const userId=localStorage.getItem("USER_ID")
console.log("userid",userId)
  useEffect(() => {
    // Fetch user profile from the backend when the component mounts
    const fetchUserProfile = async () => {
      try {
        console.log("Fetching user profile for userId:");
        const response = await axios.get(`http://localhost:5000/userprofile/users/${userId}`);
        console.log("Response:", response.data);
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Error fetching user profile. Please try again.');
      }finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return null; // or return a default message if needed
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>age: {user.age}</p>
      <p>phoneNumber: {user.phonenumber}</p>
      <p><Link to={'/user'}>purchase from here</Link></p>
    </div>
  );
};

export default Profile;