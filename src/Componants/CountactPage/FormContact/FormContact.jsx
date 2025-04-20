import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { DataProduct } from "../../HomePage/Data/DataProducts";

const FormContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const Productid = 62;
  const Product = DataProduct.find((product) => product.id === Productid);

  if (!Product) {
    return <p>Product not found</p>;
  }

  return (
    <Stack
      direction={{ xs: "column", md: "row" }} // Mobile = column, Desktop = row
      spacing={4}
      sx={{ p: 4, justifyContent: "center", alignItems: "center" }}
    >
      {/* Contact Form */}
      <Box
        component={Paper}
        elevation={4}
        sx={{
          width: { xs: "100%", md: "60%" },
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={3}>
            <TextField label="Name" variant="outlined" name="user_name" fullWidth required />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              name="user_email"
              fullWidth
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Box>

      {/* Product Image */}
      <Box
        sx={{
          width: { xs: "100%", md: "35%" },
          height: 300,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <img
          src={Product.image}
          alt={Product.name}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </Box>
    </Stack>
  );
};

export default FormContact;
