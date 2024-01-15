import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  //const history = useNavigate();

  const handleLogin =  (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/login',{username, password})
      .then((result)=>{
      console.log(result);
      console.log("hle",result.data.user.id)
      localStorage.setItem("USER_ROLE",result.data.role)
      localStorage.setItem("USER_ID",result.data.user._id)

      const { message, role } = result.data;
      if(message === "Success"){
        if (role === 'admin'){
          navigate('/admin')
        }else if (role === 'artist'){
          navigate('/artist')
        }else{
          navigate('/user')
        }
       window.location.reload()
      }else{
        setError(result.data)
      }
   })
   .catch(err =>{
    console.log(err);
    setError("not in the database") 
   })
  };

  return (
    <div className='Login' style={{ backgroundImage:`url(./loginpage.jpg)`,backgroundRepeat:"",backgroundSize:"contain",
    
  }}>
      <div className='login'>
      <h2 className='head'>Login</h2>
      <label className='label'>Username: </label>
      <input className='input' type="text" name='username'onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label className='label'>Password: </label>
      <input className='input' type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button className='button' onClick={handleLogin}>Login</button>
      <div><h6>OR</h6>
       <Link to={'/signup'}>signup</Link>
      </div>
      </div>
    </div>
  );
};

export default Login;