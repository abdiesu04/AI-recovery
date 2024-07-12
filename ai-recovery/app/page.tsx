'use client'

import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import FeaturesCard from '@/components/FeaturesCard';
import Link from 'next/link';
import 'animate.css'; // Import animate.css for animations
import styles from './landingPage.module.css'; // Import the separate CSS file
import Image from 'next/image';

const LandingPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const text = "Empowering Your Recovery Journey";
    let index = 0;
    const interval = setInterval(() => {
      const animatedText = document.getElementById('animated-text');
      if (animatedText && index < text.length) {
        animatedText.innerHTML = text.slice(0, index + 1);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }, []);

  const handleLearnMoreClick = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={`${styles.landingBackground} flex items-center justify-center min-h-screen`}>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 p-8 md:p-12">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className={`text-white animate__animated animate__fadeInDown ${styles.mainTitle}`} id="animated-text">
              {/* The text will be populated by the useEffect hook */}
            </h1>
            <p className={`text-white animate__animated animate__fadeInUp ${styles.subHeading}`}>
              A comprehensive app that provides personalized support, expert guidance, and a compassionate community to help you achieve lasting sobriety and build positive habits.
            </p>
            <div className="mt-6 flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-4">
              <Link href="/login" passHref>
                <Button variant="contained" style={{ backgroundColor: '#87CEEB', color: '#000' }} className="w-full md:w-auto" size="large">
                  Get Started
                </Button>
              </Link>
              <Button variant="outlined" style={{ borderColor: '#87CEEB', color: '#fff' }} className="w-full md:w-auto" size="large" onClick={handleLearnMoreClick}>
                Learn More
              </Button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/MindfulHomePage.png"
              alt="Recovery Journey"
              width={340}
              height={340}
              className={styles.image}
            />
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
