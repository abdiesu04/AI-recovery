import React from 'react';
import Navbar from '../components/Navbar';
import FeaturesCard from '../components/FeaturesCard';
import Footer from '../components/Footer';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'tailwindcss/tailwind.css';

const LandingPage: React.FC = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #121212, #323232)', minHeight: '100vh', color: 'white', fontFamily: 'Roboto, sans-serif' }}>
      <Navbar />
      <Box textAlign="center" py={8} px={4}>
        <Typography variant="h2" mb={4} className="font-bold tracking-wider text-4xl md:text-5xl">
          Your Recovery Companion
        </Typography>
        <Typography variant="h5" mb={4} className="font-light text-xl md:text-2xl text-gray-400">
          Transform Your Life with AI-Powered Recovery Support
        </Typography>
        <Typography variant="body1" mb={6} className="max-w-lg mx-auto text-gray-400 leading-relaxed">
          Our AI chatbot provides personalized support and guidance to help you on your journey to recovery.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          sx={{ textTransform: 'none', padding: '10px 20px', background: 'linear-gradient(to right, #00796b, #48a999)' }}
        >
          Get Started
        </Button>
      </Box>
      <Box my={4} mx={4} sx={{ background: 'linear-gradient(to bottom, #323232, #121212)', py: 8 }}>
        <FeaturesCard />
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;
  