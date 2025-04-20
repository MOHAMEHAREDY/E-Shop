import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Link,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#222", color: "white", mt: 5, pt: 5, pb: 3, fontSize: "16px" }}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Logo and description */}
          <Box sx={{ maxWidth: 250 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              MyStore
            </Typography>
            <Typography variant="body2" color="#aaa">
              Discover the best quality products with fast delivery and excellent support.
            </Typography>
          </Box>

          {/* Quick links */}
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={0.5}>
              <Link to="/Home" underline="none" color="inherit">Home</Link>
              <Link href="#" underline="none" color="inherit">About</Link>
              <Link href="#" underline="none" color="inherit">Products</Link>
              <Link href="#" underline="none" color="inherit">Contact</Link>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="#aaa">Email: support@mystore.com</Typography>
            <Typography variant="body2" color="#aaa">Phone: +20 106 417 8029</Typography>
          </Box>

          {/* Newsletter */}
          <Box sx={{ maxWidth: 300 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <TextField
                size="small"
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  input: { p: "10px" },
                  flexGrow: 1,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none", bgcolor: "orangered", "&:hover": { bgcolor: "#e55027" } }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Stack>

        {/* Social & Payment */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          mt={5}
          flexWrap="wrap"
        >
          {/* Social icons */}
          <Stack direction="row" spacing={1}>
            <IconButton color="inherit"><FacebookIcon /></IconButton>
            <IconButton color="inherit"><InstagramIcon /></IconButton>
            <IconButton color="inherit"><TwitterIcon /></IconButton>
            <IconButton color="inherit"><YouTubeIcon /></IconButton>
          </Stack>

          {/* Payment logos */}
          <Box sx={{ mt: { xs: 2, md: 0 } }}>
            <img src="src/assets/Images/payment/payment-1.png.webp" alt="Visa" width="50" style={{ marginRight: 10 }} />
            <img src="src/assets/Images/payment/payment-2.png.webp" alt="MasterCard" width="50" style={{ marginRight: 10 }} />
            <img src="src/assets/Images/payment/payment-3.png.webp" alt="PayPal" width="50" />
          </Box>
        </Stack>

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          color="#888"
          sx={{ mt: 5, fontSize: "16px" }}
        >
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
