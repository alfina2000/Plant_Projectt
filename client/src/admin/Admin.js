import React from 'react';
import { Link } from 'react-router-dom';
import '../admin/admin.css';

const Admin = () => {
    <div className="admin-container">
      <div className="sidebar">
        <div className="green-box">
          <Link to="/staffreg" className="link-text-field">
            Staff Registration
          </Link>
          <Link to="/viewbooking" className="link-text-field">
            View Booking
          </Link>
          <Link to="/verifycancel" className="link-text-field">
            Verify Cancel
          </Link>   
          <Link to="/verifycancel" className="link-text-field">
           View Feedback
          </Link>
          <Link to="/verifycancel" className="link-text-field">
           Verify Refund
          </Link>
        </div>
      </div>
      <div className="main-content">
        {/* Other content of the admin dashboard */}
      </div>
    </div>
  
};

export default Admin;
