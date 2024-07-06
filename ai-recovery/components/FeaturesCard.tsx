import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import 'tailwindcss/tailwind.css';

const features = [
  {
    Icon: ChatIcon,
    title: "Personalized AI Chatbot",
    description: "Get personalized support and guidance from our AI chatbot."
  },
  {
    Icon: TrackChangesIcon,
    title: "Progress Tracking",
    description: "Track your progress over time with detailed insights."
  },
  {
    Icon: GroupIcon,
    title: "Community Support",
    description: "Connect with a supportive community for shared experiences."
  },
  {
    Icon: PersonIcon,
    title: "Human Assistance",
    description: "Receive personalized assistance from human experts when needed."
  }
];

const FeaturesCard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, pb: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="bg-gray-900 shadow-lg text-white rounded-lg">
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                <feature.Icon sx={{ fontSize: 50, color: 'white' }} />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" className="font-bold text-center">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="text-gray-400 text-center">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesCard;
