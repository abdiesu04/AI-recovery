import React from 'react';
import { Button } from '@mui/material';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const HabitTrackerCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <TrackChangesIcon style={{ fontSize: 40, color: '#607D8B' }} />
        <h2 className="text-2xl font-bold ml-2 text-gray-900">Habit Tracker</h2>
      </div>
      <p className="mt-2 text-gray-700">
        Monitor habits, identify triggers, and track progress to maintain positive behaviors.
      </p>
      <div className="flex items-center mt-4">
        <TrendingUpIcon style={{ fontSize: 30, color: '#4CAF50' }} />
        <p className="ml-2 text-gray-600">
          Set goals and see improvement in daily habits to support your recovery goals.
        </p>
      </div>
      <Button variant="contained" color="primary" className="mt-4 w-full">
        View Habit Tracker
      </Button>
    </div>
  );
};

export default HabitTrackerCard;
