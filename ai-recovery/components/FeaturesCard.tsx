import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const features = [
  { title: 'Personalized Dashboard', description: 'Access your personalized recovery plan, track your progress, and stay organized with our intuitive dashboard.' },
  { title: 'Therapist Interaction', description: 'Connect with verified therapists and counselors for one-on-one support and guidance.' },
  { title: '24/7 AI Assistant', description: 'Get instant support and answers from our compassionate AI assistant, available anytime.' },
  { title: 'Customized Recovery Plans', description: 'Receive personalized recovery plans tailored to your unique needs and goals.' },
  { title: 'Progress Tracking', description: 'Monitor your progress, celebrate milestones, and identify areas for improvement.' },
  { title: 'Community Support', description: 'Connect with a supportive community of individuals on similar recovery journeys.' },
  { title: 'Educational Resources', description: 'Access a wealth of educational materials, including articles, videos, and podcasts, to deepen your understanding of addiction and recovery.' },
  { title: 'Crisis Support', description: 'Receive immediate support and guidance during difficult moments through our crisis hotline and emergency resources.' },
  { title: 'Habit Tracking', description: 'Develop and maintain healthy habits with our comprehensive habit tracking tools.' },
  { title: 'Calendar Integration', description: 'Seamlessly integrate your recovery activities and appointments with your calendar for better organization.' },
  { title: 'Family and Friends Support', description: 'Involve your loved ones in your recovery journey through our dedicated support features.' },
  { title: 'Gamification', description: 'Stay motivated and engaged with our gamification elements, including rewards, challenges, and achievements.' },
];

const Features = () => {
  return (
    <Container maxWidth="lg" className="py-16">
      <Typography variant="h4" component="h1" className="text-center mb-12 font-bold">
        Comprehensive Support for Your Recovery
      </Typography>
      <Typography variant="body1" component="p" className="text-center mb-16">
        Our recovery app offers a wide range of features to support you throughout your addiction recovery journey.
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index} className="mb-8">
            <Box className="p-4">
              <Typography variant="h6" component="h2" className="mb-2 font-semibold">
                {feature.title}
              </Typography>
              <Typography variant="body2" component="p">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
