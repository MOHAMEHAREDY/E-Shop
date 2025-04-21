import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CartDrawer from "../CartDrawer/CartDrawer";

export default function ThirdNavbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          px: { xs: 1, sm: 5, md: 10 },
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            position: "relative",
            minHeight: "64px",
            px: { xs: 1, sm: 2 },
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: isMobile ? 1 : 0,
          }}
        >
          {/* CALL US NOW */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                "& img": {
                  height: "18px",
                  transition: "transform 0.6s ease-in-out",
                  "&:hover": {
                    transform: "rotate(360deg)",
                  },
                },
              }}
            >
              <img src="/assets/Images/WhatsApp/call.png" alt="Call Icon" />
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "black",
                }}
              >
                CALL US NOW
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: "12px",
                color: "black",
                mt: 0.5,
                ml: 4,
              }}
            >
              +1 (234) 567-8901
            </Typography>
          </Box>

          {/* Logo (Hidden on Mobile) */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Link to="/" style={{ display: "inline-block", margin: "0 auto" }}>
                <img
                  src="/assets/Images/WhatsApp/logo.webp"
                  alt="Logo"
                  style={{ height: "40px", cursor: "pointer" }}
                />
              </Link>
            </Box>
          )}

          {/* Shopping Cart */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "flex-end" : "flex-start",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <Link
              onClick={handleDrawerOpen}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "black",
                fontSize: "14px",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <img
                src="/assets/Images/WhatsApp/cart.png"
                alt="Cart"
                style={{
                  height: "24px",
                  cursor: "pointer",
                  transition: "transform 0.4s ease-in-out",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2) rotateX(10deg)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
              />
              Shopping Cart
            </Link>
            <CartDrawer open={drawerOpen} onClose={handleDrawerClose} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
