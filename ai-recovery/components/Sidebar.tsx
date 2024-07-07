// components/Sidebar.tsx

'use client';

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const menuItems = [
    { text: 'Quotes', icon: <FormatQuoteIcon /> },
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'AI Assistant', icon: <SupportAgentIcon /> },
    { text: 'Get a Therapist', icon: <GroupIcon /> },
    { text: 'Resources', icon: <LibraryBooksIcon /> },
    { text: 'Profile', icon: <AccountCircleIcon /> },
  ];

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div
          className="w-64 bg-gray-900 text-white"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="p-4 text-center font-bold text-xl border-b border-gray-700">Menu</div>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
