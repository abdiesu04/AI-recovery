import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import 'tailwindcss/tailwind.css';

const FeaturesCard: React.FC = () => {
  const features = [
    {
      imgSrc: "../public/chatgpt.png",  
      altText: "Personalized AI Chatbot",
      title: "Personalized AI Chatbot",
      description: "Get personalized support and guidance from our AI chatbot."
    },
    {
      imgSrc: "https://faviicon.com/icons/progress_tracking.png",
      altText: "Progress Tracking",
      title: "Progress Tracking",
      description: "Track your progress over time with detailed insights."
    },
    {
      imgSrc: "https://faviicon.com/icons/community_support.png",
      altText: "Community Support",
      title: "Community Support",
      description: "Connect with a supportive community for shared experiences."
    },
    {
      imgSrc: "https://faviicon.com/icons/human_assistance.png",
      altText: "Human Assistance",
      title: "Human Assistance",
      description: "Receive personalized assistance from human experts when needed."
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, pb: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="max-w-xs bg-gray-900 shadow-lg text-white rounded-lg">
              <CardMedia
                component="img"
                height="100"
                image={feature.imgSrc}
                alt={feature.altText}
                className="object-contain p-2"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" className="font-bold">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
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
