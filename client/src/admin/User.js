import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './User.css'

const User = () => {
    const[images,setImages] = useState([]);

    useEffect(() =>{
      axios.get('http://localhost:5000/images/user')
      .then(response => {
        setImages(response.data);
        console.log(images)
      })
      .catch(error => {
        console.error('Error fetching images', error);
      },[]);
    })
  
  return (
    <div>
      <h2 className='head'>Image Gallery</h2>
      <div className='img'>
        {images.map(val => (
          <div className='img1' key={val._id}>
            <img src={val.path} alt={val.filename} />
            <p className='imgname'>Image Name: {val.imageName}</p>
            <p className='artistname'>Artist Name: {val.artistName}</p>
            <p className='price'>Price: {val.price}</p>
            <p className='description'>Description: {val.description}</p>
          </div>
        ))}
      </div>
      </div>
  )
  }


export default User
