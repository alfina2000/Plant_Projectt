import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewPlant = () => {

    var[data,setData] = useState([])
useEffect(()=>{
  axios.get("http://localhost:5000/view")
  .then((response)=>{
    console.log(response.data)
    setData(response.data)
    console.log(data)
  })
  .catch((err)=>console.log(err))
},[])
  return (
    <div>
      {data.map((val,i)=>(
      
          <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
           {val.name}
          </Typography>
          <Typography variant="h5" component="div">
          {val.species}
          </Typography>
          <Typography color="text.secondary">
          {val.description}
          </Typography>
          <Typography variant="body2">
          {val.rate}
            <br />
           
          </Typography>
        </CardContent>
        <CardActions>
          <Button
          size="small" variant='contained' color='secondary'>
            Delete
            </Button>
          <Button size="small" variant='contained' color='secondary'>Update</Button>
        </CardActions>
      </Card>
        
))}
    </div>
  )
}

export default ViewPlant