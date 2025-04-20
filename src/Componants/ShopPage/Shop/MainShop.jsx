import React from "react";
import BestProduct from "../../HomePage/BestProduct/BestProduct";
import { Box, Container } from "@mui/material";

import { DataProduct } from "../../HomePage/Data/DataProducts";

export default function MainShop() {
  const Productid = 60;
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
        <BestProduct />
      </Box>
    </Container>
  );
}
