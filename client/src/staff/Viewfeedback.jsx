import React, { useState, useEffect } from 'react';
import axios from 'axios'; // for HTTP requests

const Viewfeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Fetch feedback data from Node.js server
    axios.get('/api/feedback') // Assuming Node.js API endpoint
      .then(response => {
        setFeedbackList(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback:', error);
      });
  }, []); // Empty dependency array triggers the effect only once

  return (
    <div>
      <h1>Feedback</h1>
      <ul>
        {feedbackList.map(feedback => (
          <li key={feedback.id}>
            {feedback.text} - {feedback.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Viewfeedback;