import { Container, Box } from '@mui/material'
import React from 'react'
const Discount = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Box
        component="img"
        src="/assets/Images/Banner/Frame_1984082904_1.webp"
        alt="Discount Banner"
        sx={{
          width: "100%",
          maxWidth: "1200px", // optional limit to prevent stretching on very large screens
          height: "auto",
          objectFit: "cover",
          borderRadius: 2, 
        }}
      />
    </Container>
  )
}

export default Discount;
