import { Facebook, Instagram, Twitter, YouTube, Pinterest } from "@mui/icons-material";
import { Box, Link } from "@mui/material";
import React from "react";

export default function Social() {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        justifyContent: "flex-end",
        
    }}>
      <Link href="http://www.facebook.com" underline="none" style={{color: "black"}}>
        <Facebook />
      </Link>
      <Link href="http://www.twitter.com" underline="hover" style={{color: "black"}}>
        <Twitter />
      </Link>
      <Link href="http://www.instagram.com" underline="always" style={{color: "black"}}>
        <Instagram/>
      </Link>
      <Link href="http://www.YouTube.com" underline="always" style={{color: "black"}}>
        <YouTube/>
      </Link>
      <Link href="http://www.Pinterest.com" underline="always" style={{color: "black"}}>
        <Pinterest/>
      </Link>
    </Box>
  );
}
