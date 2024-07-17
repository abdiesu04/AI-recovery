import React from 'react';
import { Container, Grid, Box, Typography, Card, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SchoolIcon from '@mui/icons-material/School';
import HealingIcon from '@mui/icons-material/Healing';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import CustomCard from './CustomCard';
import SupportCard from './SupportCard';
import RecoveryPlans from './RecoveryPlans';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>

      <Box className="bg-[#ebf2eb] min-h-screen p-8 flex flex-col items-center justify-center">
        <Container maxWidth="lg">
          <Grid container spacing={4} className="mb-8">
            <Grid item xs={12} md={4} className="mx-auto w-full md:w-4/5 mb-4">
              <Card className="p-6 bg-[#edfaf0] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 h-full flex flex-col justify-between">
                <Box display="flex" alignItems="center" className="mb-4">
                  <HomeIcon fontSize="large" className="text-blue-500 mr-4" />
                  <Typography variant="h6" className="font-bold text-gray-800">
                    Your Recovery Home
                  </Typography>
                </Box>
                <Typography variant="body2" className="text-gray-700 flex-grow">
                  Track your progress, set goals, and connect with your therapist.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={8} className="mx-auto w-full md:w-4/5 mb-4">
              <Card className="p-6 bg-green-50 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 h-full flex flex-col justify-between">
                <Box display="flex" alignItems="center" className="mb-4">
                  <ShowChartIcon fontSize="large" className="text-blue-500 mr-4" />
                  <Typography variant="h6" className="font-bold text-gray-800">
                    Your Recovery Progress
                  </Typography>
                </Box>
                <Typography variant="body2" className="text-gray-700 flex-grow">
                  View your progress through graphs and analytics.
                </Typography>
                <Link href="/checkin" passHref>
                <Button
        variant="contained"
        className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white mt-4 w-full"
      >
        View Your Progress
      </Button>
    </Link>
              </Card>
            </Grid>
          </Grid>
          <SupportCard/>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} className="mx-auto w-full md:w-4/5 mb-4">
              <CustomCard
                icon={FormatQuoteIcon}
                iconColor="#607D8B"
                title="Inspirational Quotes"
                description="Click here to find words of wisdom that offer comfort, motivation, and new perspectives for emotional healing and personal growth."
                buttonText="View More Quotes"
              />
            </Grid>
            <Grid item xs={12} md={6} className="mx-auto w-full md:w-4/5 mb-4">
              <CustomCard
                icon={SchoolIcon}
                iconColor="#FF5722"
                title="Educational Resources"
                description="Click here to access valuable materials that enhance learning, support academic growth, and provide in-depth knowledge across various subjects."
                buttonText="Get Resources"
              />
            </Grid>
            <Grid item xs={12} md={6} className="mx-auto w-full md:w-4/5 mb-4">
              <CustomCard
                icon={HealingIcon}
                iconColor="#009688"
                title="Personalized Recovery"
                description="Start your journey towards personal recovery. Click here to access tools and resources designed to support your healing process, build resilience, and foster well-being."
                buttonText="Start Your Recovery"
              />
            </Grid>
            <Grid item xs={12} md={6} className="mx-auto w-full md:w-4/5 mb-4">
              <CustomCard
                icon={TrackChangesIcon}
                iconColor="#4CAF50"
                title="Habit Tracker"
                description="Achieve your goals with our habit tracker. Click here to monitor your progress, build new habits, and stay motivated on your path to personal growth and productivity."
                buttonText="Start Tracking"
              />
            </Grid>
      <RecoveryPlans/>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;