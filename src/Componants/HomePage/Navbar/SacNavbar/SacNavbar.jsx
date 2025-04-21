import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  Search as SearchIcon,
  AccountCircle,
  CreditCard as CreditCardIcon,
  AttachMoney as AttachMoneyIcon,
} from "@mui/icons-material";
import Links from "../../../Links/Link";
import LoginModal from "../../../../Pages/Auth/Login/Login";
import RegisterModal from "../../../../Pages/Auth/Register/Register";
import { Link, useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import "../TopNavbar/TopNavbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import LeftDrawer from "../../../LeftDrawer/LeftDrawer";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#ffffff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#ffffff", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [creditMenuAnchorEl, setCreditMenuAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isCreditMenuOpen = Boolean(creditMenuAnchorEl);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
    closeLogin();
    setSnackbarOpen(true); // Show snackbar
  };

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleCreditMenuOpen = (event) =>
    setCreditMenuAnchorEl(event.currentTarget);
  const handleCreditMenuClose = () => setCreditMenuAnchorEl(null);

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("loggedInUser");
    setIsAuthenticated(false);
    setUser(null);
    handleMenuClose();
    navigate("/home");
    window.location.reload();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right", width: "60px" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isAuthenticated && (
        <>
          <MenuItem
            onClick={() => {
              navigate("/profile");
              handleMenuClose();
            }}
          >
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </>
      )}
    </Menu>
  );

  const renderCreditMenu = (
    <Menu
      anchorEl={creditMenuAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isCreditMenuOpen}
      onClose={handleCreditMenuClose}
    >
      <MenuItem onClick={handleCreditMenuClose}>
        <AttachMoneyIcon /> Cash
      </MenuItem>
      <MenuItem onClick={handleCreditMenuClose}>
        <CreditCardIcon /> Visa
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#ef5350", color: "black", minHeight: "40px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left: Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Links />
          </Box>
          <Box
            sx={{ display: { xs: "block", md: "none" }, color: "black" }}
            onClick={toggleDrawer(true)}
          >
            <LeftDrawer />
          </Box>
          {/* Center: Logo + Search */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search products…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          {/* Right: User Area */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isAuthenticated ? (
              <>
                {/* <IconButton size="large" sx={{ color: "black" }}>
                  <ShoppingCartIcon />
                </IconButton> */}
                <IconButton
                  size="large"
                  sx={{ color: "black" }}
                  onClick={handleCreditMenuOpen}
                >
                  <CreditCardIcon />
                </IconButton>
                <Typography sx={{ mx: 1, fontWeight: "bold" }}>
                  {user?.name || "User"}
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  onClick={openLogin}
                  sx={{
                    cursor: "pointer",
                    // mx: 1,
                    fontWeight: "bold",
                    border: "none",
                    padding:"10px",
                    backgroundColor: "white",
                    borderRadius: "8px"
                    
                  }}
                >
                  Login
                </Typography>
                <Typography
                  onClick={openRegister}
                  sx={{
                    cursor: "pointer",
                    // mx: 1,
                    fontWeight: "bold",
                    border: "none",
                    padding:"10px",
                    backgroundColor: "white",
                    borderRadius: "8px"
                  }}
                >
                  Register
                </Typography>
              </>
            )}
            {isAuthenticated && (
              <IconButton
                size="large"
                edge="end"
                onClick={handleProfileMenuOpen}
                sx={{ color: "black" }}
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenu}
      {renderCreditMenu}

      <LoginModal
        open={loginOpen}
        onClose={closeLogin}
        onLoginSuccess={handleLoginSuccess}
      />
      <RegisterModal open={registerOpen} onClose={closeRegister} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Logged in successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
