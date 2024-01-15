import React from 'react';
import { Link } from 'react-router-dom';
import '../customer/customer.css';

const Customer = () => {
  return (
    <div className="admin-container">
      <div className="sidebar">
        <div className="green-box">
          <Link to="/Add Cart" className="link-text-field">
            Add Cart
          </Link>
          <Link to="/Booking product" className="link-text-field">
            Booking product
          </Link>
          <Link to="/Cancel product" className="link-text-field">
            Cancel order
          </Link>   
          <Link to="/Feedback" className="link-text-field">
           Feedback
          </Link>
          <Link to="/payment" className="link-text-field">
           payment
          </Link>
          <Link to="/Refund" className="link-text-field">
           Refund
          </Link>

        </div>
      </div>
      <div className="main-content">
        {/* Other content of the admin dashboard */}
      </div>
    </div>
  );
};

export default Customer;
