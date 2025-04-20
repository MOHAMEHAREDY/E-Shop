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
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  AttachMoney as AttachMoneyIcon,
} from "@mui/icons-material";
import Links from "../../Links/Link";
import LeftDrawer from "../../LeftDrawer/LeftDrawer";
import LoginModal from "../../../Pages/Auth/Login/Login";
import RegisterModal from "../../../Pages/Auth/Register/Register";
import Social from "../../../Social/Social";
import Home from "../../../Pages/Home/Home";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#ffffff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#ffffff", 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
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
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
    closeLogin();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [creditMenuAnchorEl, setCreditMenuAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isCreditMenuOpen = Boolean(creditMenuAnchorEl);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleCreditMenuOpen = (event) =>
    setCreditMenuAnchorEl(event.currentTarget);
  const handleCreditMenuClose = () => setCreditMenuAnchorEl(null);

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("loggedInUser");
    setIsAuthenticated(false);
    setUser(null);
    window.location.reload();
  };

  const renderAuthMenuItems = (isMobile = false) => {
    if (isAuthenticated) {
      return (
        <>
          {isMobile && (
            <>
              <MenuItem>
                <IconButton size="small" color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
                <p style={{ marginLeft: 8 }}>Cart</p>
              </MenuItem>
              <MenuItem>
                <IconButton size="small" color="inherit">
                  <CreditCardIcon />
                </IconButton>
                <p style={{ marginLeft: 8 }}>Payment</p>
              </MenuItem>
            </>
          )}
          <MenuItem disabled>Signed in as {user?.name || "User"}</MenuItem>
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </>
      );
    } else {
      return (
        <>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              openLogin();
            }}
          >
            <IconButton size="small" color="inherit">
              <AccountCircle />
            </IconButton>
            <p style={{ marginLeft: 8 }}>Login</p>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              openRegister();
            }}
          >
            <IconButton size="small" color="inherit">
              <AccountCircle />
            </IconButton>
            <p style={{ marginLeft: 8 }}>Register</p>
          </MenuItem>
        </>
      );
    }
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {renderAuthMenuItems(false)}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {renderAuthMenuItems(true)}
    </Menu>
  );

  const renderCreditMenu = (
    <Menu
      anchorEl={creditMenuAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
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
    <Box
      sx={{ flexGrow: 1, width: "100%", display: { xs: "block", sm: "flex" } }}
    >
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <LeftDrawer />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link
              variant="body2"
              component="button"
              to="/Home"
              style={{
                fontSize: "1.5rem",
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              E-Shop
            </Link>
          </Box>

          {/* Desktop Search */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" }, mx: 2 }}>
            <Search sx={{ width: "100%" }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search products…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          {/* Mobile Search Icon */}
          <IconButton
            sx={{ display: { xs: "block", sm: "none" }, color: "black", ml: 1 }}
          >
            <SearchIcon />
          </IconButton>

          {/* Actions */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
              justifyContent: { xs: "end", sm: "flex-end" },
            }}
          >
            {isAuthenticated && (
              <>
                <Links />
                <IconButton size="large" sx={{ color: "black" }}>
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{ color: "black" }}
                  onClick={handleCreditMenuOpen}
                >
                  <CreditCardIcon />
                </IconButton>
                <Typography sx={{ mx: 1, fontWeight: "bold", color: "black" }}>
                  {user?.name || "User"}
                </Typography>
              </>
            )}
            {/* Icon Social */}
            <Social />
            <IconButton
              size="large"
              edge="end"
              aria-label="account"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{ color: "black" }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
      {renderCreditMenu}

      <LoginModal
        open={loginOpen}
        onClose={closeLogin}
        onLoginSuccess={handleLoginSuccess}
      />
      <RegisterModal open={registerOpen} onClose={closeRegister} />
    </Box>
  );
}
