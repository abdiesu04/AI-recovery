'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import FeaturesCard from '@/components/FeaturesCard';

const LandingPage: React.FC = () => {
  const handleLearnMoreClick = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="mt--15 flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 p-8 md:p-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-gray-900">
              Empowering Your Recovery Journey
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Our comprehensive recovery app provides personalized support, expert guidance, and a compassionate community <br /> to help you achieve lasting sobriety.
            </p>
            <div className="mt-8 flex flex-col md:flex-row md:items-center">
              <Button variant="contained" color="primary" className="w-full md:w-auto mb-4 md:mb-0 md:mr-4" size="large">
                Get Started
              </Button>
              <Button variant="outlined" color="primary" className="w-full md:w-auto" size="large" onClick={handleLearnMoreClick}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-96 md:h-120">
              <Image
                src="/MindfulHomePage.png"
                alt="Recovery Journey"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="features-section">
        <FeaturesCard />
      </div>
    </>
  );
};

export default LandingPage;
