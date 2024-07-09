import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const PersonalGoalsCard: React.FC = () => {
  return (
    <Card className="h-full bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <CardContent>
        <div className="flex items-center mb-4">
          <EmojiEventsIcon style={{ fontSize: 40, color: '#4CAF50' }} />
          <Typography variant="h5" component="h2" className="text-gray-900 font-bold ml-2">
            Personal Goals
          </Typography>
        </div>
        <ul className="mt-2 text-gray-700">
          <li className="flex items-center mb-2">
            <FitnessCenterIcon style={{ color: '#FF5722' }} />
            <span className="ml-2">Exercise 3 times a week</span>
          </li>
          <li className="flex items-center mb-2">
            <LocalLibraryIcon style={{ color: '#3F51B5' }} />
            <span className="ml-2">Read 2 support group books</span>
          </li>
        </ul>
        <a className="mt-4 block w-full bg-green-500 text-white text-center py-2 rounded-md shadow-md hover:bg-green-700 transition-all duration-300">
          Add Goal
        </a>
      </CardContent>
    </Card>
  );
};

export default PersonalGoalsCard;
