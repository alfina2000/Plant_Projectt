import axios from 'axios';
import React, { useEffect, useState }  from 'react';
const UserProfile = () => {
  var [details, setDetails] = useState([]);
  useEffect(()=>{
    axios.get ("http://localhost:5000/userprofile/:userId")
    .then((response)=>{
      console.log(response.data);
      setDetails(response.data)
    })
},[])
  
  return (
    <div>
      <h2>User Profile</h2>
      {details.map((val,i)=>{
        <div key={i}>
          <p>Name:{val.name}</p>
          <p>Email:{val.email}</p>
          <p>age:{val.age}</p>
          <p>phoneNumber:{val.phonenumber}</p>
        </div>
      })}
    </div>
  );
};

export default UserProfile;