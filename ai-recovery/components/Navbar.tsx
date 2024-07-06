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
    <AppBar position="static" style={{ background: 'linear-gradient(to right, #000000, #434343)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1, color: '#ffffff', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
          LOGO
        </Typography>
        <Link href="/get-started" passHref>
          <Button color="inherit" style={{ color: '#ffffff', border: '1px solid #ffffff', borderRadius: '4px', marginLeft: '16px', textTransform: 'none' }}>
            Get Started
          </Button>
        </Link>
        <IconButton edge="end" color="inherit" style={{ marginLeft: '16px' }}>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
