'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div className="w-64 h-full bg-blue-500 text-white" role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List className="flex flex-col gap-4 mt-8">
        {['Dashboard', 'Therapists', 'Community', 'Resources', 'Sign In'].map((text) => (
          <ListItem button key={text} className="pl-6">
            <ListItemText primary={text} primaryTypographyProps={{ className: 'text-lg font-medium' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar className="px-4 lg:px-6 h-20 flex items-center gap-2">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <EnergySavingsLeafIcon className="h-8 w-8 text-white mr-2" />
          <Typography variant="h6" className="font-bold text-white text-lg">
            Mindful Recovery
          </Typography>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="#" className="text-base font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Dashboard
          </Link>
          <Link href="#" className="text-base font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Therapists
          </Link>
          <Link href="#" className="text-base font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Community
          </Link>
          <Link href="#" className="text-base font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Resources
          </Link>
          <Link href="#" className="text-base font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Sign In
          </Link>
        </nav>
        <IconButton edge="end" color="inherit" className="text-white md:hidden ml-auto" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
