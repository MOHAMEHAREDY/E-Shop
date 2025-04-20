import React from 'react'
import { Box } from '@mui/material'

const Brands = () => {

  const brand = [
    { id: 2, name: 'Nike', logo: 'public/assets/Images/brands/brand_1.png' },
    { id: 3, name: 'Nike', logo: 'public/assets/Images/brands/brand_2.png' },
    { id: 4, name: 'Nike', logo: 'public/assets/Images/brands/brand_3.png' },
    { id: 5, name: 'Nike', logo: 'public/assets/Images/brands/brand_4.png' },
    { id: 6, name: 'Nike', logo: 'public/assets/Images/brands/brand_5.png' },
    { id: 7, name: 'Nike', logo: 'public/assets/Images/brands/brand_6.png' },
    { id: 8, name: 'Nike', logo: 'public/assets/Images/brands/brand_7.png' },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        gap: { xs: 3, sm: 5, md: 8 },
        py: 4,
        backgroundColor: "#fff",
        borderRadius: "15px"
        
      }}
    >
      {
        brand.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: { xs: "40px", sm: "70px", md: "100px" },
              height: { xs: "60px", sm: "50px", md: "60px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              objectFit: "cover"
            }}
          >
            <img
              src={item.logo}
              alt={item.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </Box>
        ))
      }
    </Box>
  );
}

export default Brands;
