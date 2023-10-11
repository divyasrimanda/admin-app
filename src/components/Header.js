import React from 'react'
import { Typography, AppBar, Toolbar } from '@mui/material';
import {
    Link,
  } from "react-router-dom";


export default function Header() {
  
  return (
    <div>
         <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Management System
          </Typography>
        </Toolbar>
      </AppBar>  
    </div>
  )
}
