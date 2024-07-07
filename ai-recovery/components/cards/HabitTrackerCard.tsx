import React from 'react';
import { Button } from '@mui/material';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const HabitTrackerCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <TrackChangesIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">Habit Tracker</h2>
      <p className="mt-2 text-gray-600">Track habits, triggers, and progress to avoid relapse.</p>
      <div className="flex mt-4">
        <div className="mr-4">
          <h3 className="font-bold">8</h3>
          <p>Habits Tracked</p>
        </div>
        <div>
          <h3 className="font-bold">92%</h3>
          <p>Habit Completion</p>
        </div>
      </div>
      <Button variant="contained" color="primary" className="mt-4">
        View Habit Tracker
      </Button>
    </div>
  );
};

export default HabitTrackerCard;
