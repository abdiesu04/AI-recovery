import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import 'tailwindcss/tailwind.css';

const Footer: React.FC = () => {
  return (
    <Box sx={{ background: '#121212', py: 4 }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center" className="text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
        <Box mt={2} className="flex justify-center space-x-4">
          <Link href="#" color="inherit" className="text-gray-500 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" className="text-gray-500 hover:text-white">
            Terms of Service
          </Link>
          <Link href="#" color="inherit" className="text-gray-500 hover:text-white">
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
