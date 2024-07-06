import React from 'react';
import Navbar from '../components/Navbar';
import FeaturesCard from '../components/FeaturesCard';
import { Box, Typography, Button } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #121212, #323232)', minHeight: '100vh', color: 'white', fontFamily: 'Roboto, sans-serif' }}>
      <Navbar />
      <Box textAlign="center" py={8} px={4}>
        <Typography variant="h2" mb={4} sx={{ fontWeight: 'bold', letterSpacing: '0.05em' }}>
          Your Recovery Companion
        </Typography>
        <Typography variant="h5" mb={4} sx={{ fontWeight: '300', color: '#c7c7c7' }}>
          Transform Your Life with AI-Powered Recovery Support
        </Typography>
        <Typography variant="body1" mb={8} sx={{ maxWidth: '600px', margin: '0 auto', color: '#b0b0b0' }}>
          Our AI chatbot provides personalized support and guidance to help you on your journey to recovery.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mb: 4 }}>
          Get Started
        </Button>
      </Box>
      <Box my={8} mx={4}>
        <FeaturesCard />
      </Box>
    </Box>
  );
};

export default LandingPage;
