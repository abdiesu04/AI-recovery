import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box } from '@mui/material';
import { Dashboard, Chat, Group, Person, Menu } from '@mui/icons-material';
import 'tailwindcss/tailwind.css';

const Sidebar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box className="bg-gradient-to-b from-black to-gray-900 h-full p-4">
      <Box className="text-center mb-4">
        <img src="/logo.png" alt="Logo" className="h-10 mx-auto" />
      </Box>
      <List className="text-white">
        <ListItem button className="hover:bg-gray-700 w-full">
          <ListItemIcon>
            <Dashboard className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button className="hover:bg-gray-700 w-full">
          <ListItemIcon>
            <Chat className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Support Chat" />
        </ListItem>
        <ListItem button className="hover:bg-gray-700 w-full">
          <ListItemIcon>
            <Group className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Community" />
        </ListItem>
        <ListItem button className="hover:bg-gray-700 w-full">
          <ListItemIcon>
            <Person className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Box className="flex md:hidden justify-between p-4 bg-gradient-to-b from-black to-gray-900">
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
          <Menu className="text-white" />
        </IconButton>
      </Box>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        classes={{
          paper: 'bg-gradient-to-b from-black to-gray-900',
        }}
      >
        {drawerContent}
      </Drawer>
      <Box className="hidden md:block bg-gradient-to-b from-black to-gray-900 h-full">{drawerContent}</Box>
    </Box>
  );
};

export default Sidebar;
