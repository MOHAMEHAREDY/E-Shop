import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

// Styled Button component
const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  color: "black",
  fontWeight: "bold",
  textTransform: "none",
  backgroundColor: "transparent",

}));

// Links component rendering navigation buttons
const Links = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center" }}>
      <StyledButton component={Link} to="/home" aria-label="Home">
        Home
      </StyledButton>
      <StyledButton component={Link} to="/about" aria-label="About">
        About
      </StyledButton>
      <StyledButton component={Link} to="/reviews" aria-label="Reviews">
        Reviews
      </StyledButton>
      <StyledButton component={Link} to="/shop" aria-label="Shop">
        Shop
      </StyledButton>
      <StyledButton component={Link} to="/contact" aria-label="Contact Us">
        Contact Us
      </StyledButton>
    </Box>
  );
};

export default Links;
