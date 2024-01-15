import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({size}) => {
  const role=localStorage.getItem("USER_ROLE")
  console.log("role",role)
  const clearRole=()=>{
    console.log("helo")
    localStorage.clear("USER_ROLE")
       window.location.reload()
   
  }
    return (
      <div className='Navebar'>
         <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static' style={{backgroundColor:'green'}}>
            <Toolbar>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} align='left'>
                BLOOMS PARK
                </Typography>
                {role ? (
  <>
    
    <Button color='inherit'>
      <Link to={'/userprofile'} style={{ textDecoration: 'none', color: 'white' }}>
        Profile
      </Link>
    </Button>
    <Button onClick={clearRole}>
      <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
        Logout
      </Link>
    </Button>
  </>
) : (
  <>
    <Button color='inherit'>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
        Home
      </Link>
    </Button>
    <Button color='inherit'>
      <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
        Login
      </Link>
    </Button>
    <Button>
      <Link to={'/signup'} style={{ textDecoration: 'none', color: 'white' }}>
        Signup
      </Link>
    </Button>
  </>
)}

            </Toolbar>
          </AppBar>
          </Box>
  
            
      </div>
    )
  }
  
  export default Navbar