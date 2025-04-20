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
        color: "black"
    }}>
      <Link href="http://www.facebook.com" underline="none" target="_blank">
        <Facebook />
      </Link>
      <Link href="http://www.twitter.com" underline="hover" target="_blank">
        <Twitter />
      </Link>
      <Link href="http://www.instagram.com" underline="always" target="_blank">
        <Instagram/>
      </Link>
      <Link href="http://www.YouTube.com" underline="always" target="_blank">
        <YouTube/>
      </Link>
      <Link href="http://www.Pinterest.com" underline="always" target="_blank">
        <Pinterest/>
      </Link>
    </Box>
  );
}
