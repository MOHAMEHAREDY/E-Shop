import { Box, Container} from "@mui/material";
import React from "react";
import { DataProduct } from "../../HomePage/Data/DataProducts";
import AboutSection from "../SectionAbout/SectionAbout";

const Productid = 57;
const Product = DataProduct.find((product) => product.id === Productid);

export default function MainAbout() {
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

      <AboutSection />
    </Container>
  );
}
