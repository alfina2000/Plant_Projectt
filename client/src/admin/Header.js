import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({size}) => {
    return (
      <div className='Navebar'>
         <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static' style={{backgroundColor:'white'}}>
            <Toolbar>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} align='left' style={{textDecoration:'none',color:'red'}}>
                Admin
                </Typography>
                <Button color='inherit'><Link to={'/buyer'} style={{textDecoration:'none',color:'red'}}>Buyer</Link></Button> 
                <Button color='inherit'><Link to={'/artist'} style={{textDecoration:'none',color:'red'}}>Artist</Link></Button>
            </Toolbar>
          </AppBar>
          </Box>
  
            
      </div>
    )
  }
  
  export default Header