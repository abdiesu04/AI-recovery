import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface CustomCardProps {
  icon: SvgIconComponent;
  iconColor: string;
  title: string;
  description: string;
  buttonText: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ icon: Icon, iconColor, title, description, buttonText }) => {
  return (
    <Card className="p-0 bg-green-50 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <CardContent className="flex flex-col items-start">
        <Box display="flex" alignItems="center" className="mb-2">
          <Icon style={{ fontSize: 40, color: iconColor }} />
          <Typography variant="h6" className="font-bold ml-2 text-gray-900">
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" className="text-gray-700 mb-4 text-left">
          {description}
        </Typography>
        <Button
          variant="contained"
          className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 mt-4 w-full"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
