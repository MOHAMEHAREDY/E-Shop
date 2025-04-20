import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShopIcon from '@mui/icons-material/ShoppingCart';

// LeftDrawer component for navigation
const LeftDrawer = () => {
  const [open, setOpen] = useState(false);

  // Toggle drawer open/close
  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <Box sx={{ display: 'flex', gap: 5 }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => toggleDrawer(true)}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left" 
        open={open}
        onClose={() => toggleDrawer(false)} 
      >
        <Box sx={{ width: 200, display: 'flex', alignItems: "center" }}>
          <List>
            <ListItem button key="Home" component={Link} to="/home" aria-label="Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button key="About" component={Link} to="/about" aria-label="About">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>

            <ListItem button key="Contact" component={Link} to="/contact" aria-label="Contact">
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>

            <ListItem button key="Shop" component={Link} to="/shop" aria-label="Shop">
              <ListItemIcon>
                <ShopIcon />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default LeftDrawer;
