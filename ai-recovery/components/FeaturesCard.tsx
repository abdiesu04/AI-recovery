import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import 'tailwindcss/tailwind.css';

const FeaturesCard: React.FC = () => {
  const features = [
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png",
      altText: "Personalized AI Chatbot",
      title: "Personalized AI Chatbot",
      description: "Get personalized support and guidance from our AI chatbot."
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/2716/2716451.png",
      altText: "Progress Tracking",
      title: "Progress Tracking",
      description: "Track your progress over time with detailed insights."
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/3190/3190578.png",
      altText: "Community Support",
      title: "Community Support",
      description: "Connect with a supportive community for shared experiences."
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/2860/2860611.png",
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
            <Card className="max-w-xs bg-gray-800 shadow-lg text-white rounded-lg">
              <CardMedia
                component="img"
                height="120"
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
