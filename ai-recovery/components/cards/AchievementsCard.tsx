import React from 'react';
import { Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const AchievementsCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <EmojiEventsIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">Achievements</h2>
      <p className="mt-2 text-gray-600">Earn badges, points, and rewards to boost user engagement.</p>
      <div className="flex mt-4">
        <div className="mr-4">
          <h3 className="font-bold">12</h3>
          <p>Badges Earned</p>
        </div>
        <div>
          <h3 className="font-bold">1250</h3>
          <p>Points</p>
        </div>
      </div>
      <Button variant="contained" color="primary" className="mt-4">
        View Achievements
      </Button>
    </div>
  );
};

export default AchievementsCard;
