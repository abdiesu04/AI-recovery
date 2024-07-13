import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SchoolIcon from '@mui/icons-material/School';
import HealingIcon from '@mui/icons-material/Healing';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const HomePage = () => {
  return (
    <Box className="bg-sky-blue min-h-screen p-8">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card className="p-4 bg-green-100 rounded-lg shadow-lg">
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Card className="p-4 bg-green-100 rounded-lg shadow-neumorphic">
                    <CardContent className="flex flex-col items-center">
                      <FormatQuoteIcon className="text-green-600 mb-2" fontSize="large" />
                      <Typography variant="h6" className="font-bold text-gray-800 mb-2">
                        Inspirational Quotes
                      </Typography>
                      <Typography variant="body2" className="text-gray-600 mb-4 text-center">
                        Click here to find words of wisdom that offer comfort, motivation, and new perspectives for emotional healing and personal growth.
                      </Typography>
                      <Button variant="contained" color="success">
                        View More Quotes
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Card className="p-4 bg-green-100 rounded-lg shadow-neumorphic">
                    <CardContent className="flex flex-col items-center">
                      <SchoolIcon className="text-green-700 mb-2" fontSize="large" />
                      <Typography variant="h6" className="font-bold text-gray-800 mb-2">
                        Educational Resources
                      </Typography>
                      <Typography variant="body2" className="text-gray-600 mb-4 text-center">
                        Click here to access valuable materials that enhance learning, support academic growth, and provide in-depth knowledge across various subjects.
                      </Typography>
                      <Button variant="contained" color="success">
                        Get Resources
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4} className="mt-8">
          <Grid item xs={12} md={6} lg={3}>
            <Card className="p-4 bg-green-50 rounded-lg shadow-lg flex flex-col justify-between h-full">
              <CardContent className="flex flex-col items-center">
                <HealingIcon className="text-green-500 mb-2" fontSize="large" />
                <Typography variant="h6" className="font-bold text-gray-800 mb-2">
                  Personalized Recovery
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4 text-center">
                  Start your journey towards personal recovery. Click here to access tools and resources designed to support your healing process, build resilience, and foster well-being.
                </Typography>
                <Button variant="contained" color="success">
                  Start Your Recovery
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card className="p-4 bg-green-50 rounded-lg shadow-lg flex flex-col justify-between h-full">
              <CardContent className="flex flex-col items-center">
                <TrackChangesIcon className="text-green-500 mb-2" fontSize="large" />
                <Typography variant="h6" className="font-bold text-gray-800 mb-2">
                  Habit Tracker
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4 text-center">
                  Achieve your goals with our habit tracker. Click here to monitor your progress, build new habits, and stay motivated on your path to personal growth and productivity.
                </Typography>
                <Button variant="contained" color="success">
                  Start Tracking
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
