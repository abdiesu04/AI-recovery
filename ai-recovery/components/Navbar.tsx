import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to bottom, #000000, #323232)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffffff', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
          LOGO
        </Typography>
        <Link href="/get-started" passHref>
          <Button color="inherit" sx={{ color: '#ffffff', border: '1px solid #ffffff', borderRadius: '4px', ml: 2, textTransform: 'none' }}>
            Get Started
          </Button>
        </Link>
        <IconButton edge="end" color="inherit" sx={{ ml: 2 }}>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
