import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";

export default function CartDrawer({ open, onClose }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 300, padding: 20 }}>
        <h3>MY CART</h3>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            py: 5
        }}>
            <img src="/assets/Images/WhatsApp/empty-cart.png" alt="" />
        </Box>
      </div>
    </Drawer>
  );
}
