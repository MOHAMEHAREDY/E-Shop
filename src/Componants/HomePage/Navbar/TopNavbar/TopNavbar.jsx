import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Social from "../../../../Social/Social";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import './TopNavbar.css';

export default function TopNavbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"sx={{bgcolor: "white"}} elevation={0} >
        <Toolbar sx={{ justifyContent: "space-between", px: 2, mx: 10 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "10px", sm: "12px", md: "10px" },
              color: "gray",
              flex: 1,
            }}
          >
            WOW Offers! 60-80% Off For All Story Books
          </Typography>

          {/* Hide Social on small screens */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Social />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
