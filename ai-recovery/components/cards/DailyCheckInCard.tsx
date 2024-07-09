import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import HotelIcon from '@mui/icons-material/Hotel';

const DailyCheckInCard: React.FC = () => {
  return (
    <Card className="h-full bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <CardContent>
        <div className="flex items-center mb-4">
          <MoodIcon style={{ fontSize: 40, color: '#FFEB3B' }} />
          <Typography variant="h5" component="h2" className="text-gray-900 font-bold ml-2">
            Daily Check-In
          </Typography>
        </div>
        <ul className="mt-2 text-gray-700">
          <li className="flex items-center mb-2">
            <MoodIcon style={{ color: '#FF9800' }} />
            <span className="ml-2">Mood: Good</span>
          </li>
          <li className="flex items-center mb-2">
            <LocalDrinkIcon style={{ color: '#03A9F4' }} />
            <span className="ml-2">Cravings: Low</span>
          </li>
          <li className="flex items-center mb-2">
            <HotelIcon style={{ color: '#8BC34A' }} />
            <span className="ml-2">Sleep: Adequate</span>
          </li>
        </ul>
        <Button variant="contained" color="primary" className="mt-4 w-full">
          Check In
        </Button>
      </CardContent>
    </Card>
  );
};

export default DailyCheckInCard;
