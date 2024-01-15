import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phonenumber, setPhonenumber] = useState()
  const [age, setAge] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [role , setRole] = useState()

 

  const handleSignUp = async (e) => {
      // Make a request to the backend to create a new user account
      e.preventDefault()
      axios.post('http://localhost:5000/signup',{name, email, phonenumber, age, username, password: password, role })
      .then(result => {
        
        console.log("name--->",result)
     
       navigate('/login')
      
      })
      .catch(err => console.log(err))

  //   const { type } = response.data;
    
  //   if (type === 'artist') {
  //     history.push('/artist-profile'); // Redirect to the artist's profile
  //   } else {
  //     history.push('/buyer-profile'); // Redirect to the buyer's profile
  //   }
   };

  return (
    <div className='sign'>
      <div className='signup'>
      <h2 className='head'>Sign Up</h2>
      <label className='label'>Name: </label>
      <input className='input' type="text" name='name' onChange={(e) => setName(e.target.value)} />
      <br />
      <label className='label'>Email: </label>
      <input className='input' type="text" name='email' onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label className='label'>Phone Number: </label>
      <input className='input' type="text" name='phoneNumber' onChange={(e) => setPhonenumber(e.target.value)} />
      <br />
      <label className='label'>Age: </label>
      <input className='input' type="text" name='age' onChange={(e) => setAge(e.target.value)} />
      <br />
      <label className='label'>Username: </label>
      <input className='input' type="text" name='username' onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label className='label'>Password: </label>
      <input className='input' type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
      <br />
     
      <label className='label'>Role: </label>
      <div className='input-container'>
 
  <input 
    className='input' 
    type="text" 
    id='role' 
    name='role' 
    onChange={(e) => setRole(e.target.value)} 
    list='roles'
  />
  <datalist id='roles'>
    <option value='staff' />
    <option value='user' />
    {/* <option value='Option 3' /> */}
    {/* Add more options as needed */}
  </datalist>
</div>
      <br />
      <button className='button' onClick={handleSignUp}>Sign Up</button>
      </div>

    </div>
  );
};

export default SignUp;
