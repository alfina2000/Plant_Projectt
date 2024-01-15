import React from 'react';
import { Link } from 'react-router-dom';
import '../staff/staff.css';


const Staff = () => {
  return (
    <div className="admin-container">
      axios.post()
      <div className="sidebar">
        <div className="green-box">
          <Link to="/staffreg" className="link-text-field">
            Add Product
          </Link>
          <Link to="/viewbooking" className="link-text-field">
            Delivery
          </Link>
          <Link to="/verifycancel" className="link-text-field">
            Update Track
          </Link>   
          <Link to="/verifycancel" className="link-text-field">
           View Booking
          </Link>
          <Link to="/verifycancel" className="link-text-field">
          </Link>
          <Link to="/verifycancel" className="link-text-field">
           View Feedback
          </Link>
        </div>
      </div>
      <div className="main-content">
        {/* Other content of the admin dashboard */}
      </div>
    </div>
  );
};

export default Staff;
