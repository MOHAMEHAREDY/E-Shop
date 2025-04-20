import {
  Box,
  Container,
  Rating,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import React from "react";

const OurCustomers = () => {
  const customers = [
    {
      id: 1,
      name: "Mohamed Adel",
      rating: 5,
      image: "src/assets/Images/Me/Me.jpeg",
      comment: "Amazing quality and fast delivery. Highly recommend!",
    },
    {
      id: 2,
      name: "Sara Ali",
      rating: 4,
      image: "src/assets/customers/customer2.jpg",
      comment: "Good product, value for money. Will order again!",
    },
    {
      id: 3,
      name: "Mohamed Tarek",
      rating: 5,
      image: "src/assets/customers/customer3.jpg",
      comment: "Excellent customer service and very comfy product.",
    },
  ];
  return (
    <Container sx={{ py: 5 }}>
      <Typography sx={{
        fontSize: "24px",
        py: 2,
        fontWeight: "bold"
      }} variant="h5" align="center" fontWeight="bold" gutterBottom>
        Our customers love us!
      </Typography>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {customers.map((customer) => (
        <Box
          key={customer.id}
          sx={{
            flex: "1 1 280px", // minimum 280px, then grow
            maxWidth: "320px",
            p: 3,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 2,
            textAlign: "center",
          }}
        >
          <Rating value={customer.rating} readOnly sx={{ mb: 1 }} />
          <Avatar
            src={customer.image}
            alt={customer.name}
            sx={{ width: 70, height: 70, mx: "auto", mb: 1 }}
          />
          <Typography variant="subtitle1" fontWeight="bold" mb={0.5}>
            {customer.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {customer.comment}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
  );
};
export default OurCustomers;
