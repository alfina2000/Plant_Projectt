import React, { useState } from 'react'
import './Addplant.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const PlantAdd = () => {
  const [name, setName] = useState()
  const [species, setSpecies] = useState()
  const [description, setDesc] = useState()
  const [rate, setRate] = useState()



  const handleSignUp = async (e) => {
    console.log(name)
    console.log(species)
    console.log(description)
    console.log(rate)
    // Make a request to the backend to create a new user account
    e.preventDefault()
    axios.post('http://localhost:5000/addplant',{name, species, description, rate })
    .then(result => {
      
      console.log("name--->",result)
    
    })
    .catch(err => console.log(err))
}


  return (
    <div className='sign'>
      <div className='signup'>
      <h2 className='head'>Sign Up</h2>
      <label className='label'>Name: </label>
      <input className='input' type="text" name='name' onChange={(e) => setName(e.target.value)} />
      <br />
      <label className='label'>Species: </label>
      <input className='input' type="text" name='species' onChange={(e) => setSpecies(e.target.value)} />
      <br />
      <label className='label'>Description: </label>
      <input className='input' type="text" name='description' onChange={(e) => setDesc(e.target.value)} />
      <br />
      <label className='label'>Rate: </label>
      <input className='input' type="text" name='rate' onChange={(e) => setRate(e.target.value)} />
      <br />
     

      <br />
      <button className='button' onClick={handleSignUp}>Add Plant</button>
      </div>

    </div>
  )
}

export default PlantAdd