import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArtList = () => {
  const[images,setImages] = useState([]);
  const userId=localStorage.getItem("USER_ID")
  console.log("userid",userId)

  useEffect(() =>{
    axios.get(`http://localhost:5000/arts/artistimg/${userId}`)
    .then(response => {
      setImages(response.data);
    })
    .catch(error => {
      console.error('Error fetching images', error);
    }, [userId]);
  })

return (
  <div>
    <h2 className='head'>Image Gallery</h2>
    <div className='img'>
      {images.map(image => (
        <div className='img1' key={image._id}>
          <img src={`http://localhost:5000/${image.path}`} alt={image.filename} />
          <p className='imgname'>Image Name: {image.imageName}</p>
          <p className='artistname'>Artist Name: {image.artistName}</p>
          <p className='price'>Price: {image.price}</p>
          <p className='description'>Description: {image.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ArtList;