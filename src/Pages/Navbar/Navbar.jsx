import React from 'react'
import TopNavbar from '../../Componants/HomePage/Navbar/TopNavbar/TopNavbar'
import SacNavbar from '../../Componants/HomePage/Navbar/SacNavbar/SacNavbar'
import ThirdNavbar from '../../Componants/HomePage/Navbar/ThirdNavBar/ThirdNavbar'
import { Box } from '@mui/material'

export default function Navbar() {
  return (
  <Box>
    <TopNavbar />
    <ThirdNavbar />
    <SacNavbar/>
    
  </Box>
  )
}
