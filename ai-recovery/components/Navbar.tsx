'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import logo from '../public/logo.svg'; // Adjust this path if necessary

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#67B680',
  borderBottom: '2px solid #fff',
});

const StyledDrawer = styled('div')({
  backgroundColor: '#67B680',
  color: '#fff',
  width: 250,
});

const StyledIconButton = styled(IconButton)({
  color: '#fff',
});

const StyledLink = styled(Typography)({
  color: '#fff',
  fontSize: '1.2rem',
  fontWeight: '700',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const StyledListItemText = styled(ListItemText)({
  fontSize: '1.125rem',
  fontWeight: '500',
});

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <StyledDrawer role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {['Dashboard', 'Therapists', 'Community', 'Resources', 'Sign In'].map((text) => (
          <Link href={`/${text.toLowerCase().replace(' ', '')}`} key={text} passHref>
            <ListItem button component="a">
              <StyledListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </StyledDrawer>
  );

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Link href="/home" passHref>
          <div className="flex items-center cursor-pointer">
            <Image src={logo} alt="Addis Hiwot" width={40} height={40} />
            <StyledLink variant="h6" className="ml-2">
              Addis Hiwot
            </StyledLink>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          {['Dashboard', 'Therapists', 'Community', 'Resources', 'Sign In'].map((text) => (
            <Link href={`/${text.toLowerCase().replace(' ', '')}`} key={text} passHref>
              <StyledLink variant="body1" component="a">
                {text}
              </StyledLink>
            </Link>
          ))}
        </nav>
        <StyledIconButton edge="end" className="md:hidden ml-auto" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </StyledIconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
