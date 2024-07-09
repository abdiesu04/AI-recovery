'use client';

import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Button, Fab } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { text: 'Quotes', icon: <FormatQuoteIcon /> },
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'AI Assistant', icon: <SupportAgentIcon /> },
    { text: 'Get a Therapist', icon: <GroupIcon /> },
    { text: 'Resources', icon: <LibraryBooksIcon /> },
    { text: 'Profile', icon: <AccountCircleIcon /> },
  ];

  return (
    <div className={`fixed top-0 bottom-0 left-0 z-40 bg-blue-500 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-64`}>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-bold">Menu</h2>
        <Button onClick={toggleSidebar} className="text-white">
          <ChevronRightIcon />
        </Button>
      </div>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;