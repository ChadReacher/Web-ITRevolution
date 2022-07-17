import React from 'react'
import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
// Styles
import './navigation-bar.css'

const NavigationBar = ({ isAuth }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {
          !isAuth ?
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to='/' className='nav-link'>User Viewer</NavLink>
              </Typography>
            </Toolbar>
            :
            <Toolbar sx={{ alignItems: 'center' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to='/' className='nav-link'>User Viewer</NavLink>
              </Typography>

              <Typography variant="h6" component="div" sx={{ justifySelf: 'end', mr: 3 }}>
                <NavLink to='/' className='nav-link'>Profile</NavLink>
              </Typography>

              <Typography variant="h6" component="div" sx={{ justifySelf: 'end', mr: 3 }}>
                <NavLink to='/all-users' className='nav-link'>All users</NavLink>
              </Typography>

              <div className="flex-inline">
                <Typography variant="h6" component="div" sx={{ justifySelf: 'end' }}>
                  Logout
                </Typography>

                <LogoutIcon sx={{ ml: 1 }} />
              </div>
            </Toolbar>
        }
      </AppBar>
    </Box>
  )
}

export default NavigationBar 