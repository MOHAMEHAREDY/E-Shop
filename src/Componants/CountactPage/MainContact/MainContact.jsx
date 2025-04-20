import React from "react";
import { Box, Container } from "@mui/material";
import { DataProduct } from "../../HomePage/Data/DataProducts";
import FormContact from "../FormContact/FormContact";


export default function MainContact() {
  const Productid = 61;
  const Product = DataProduct.find((product) => product.id === Productid);

  if (!Product) {
    return <p>Product not found</p>;
  }
  return (
    <Container sx={{ my: 10, p: "0" }}>
      <Box sx={{ width: "100%", height: "300%" }}>
        <img
          src={Product.image}
          alt={Product.name}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ py: 6 }}>
        <FormContact />
      </Box>
    </Container>
  );
}
