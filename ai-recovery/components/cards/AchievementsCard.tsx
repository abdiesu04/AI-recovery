import React from 'react';
import { Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';

const AchievementsCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white">
          <EmojiEventsIcon style={{ fontSize: 40 }} />
        </div>
        <h2 className="text-2xl font-bold ml-4">Achievements</h2>
      </div>
      <p className="mt-2 text-gray-60 0">Earn badges, points, and rewards to boost your engagement.</p>
      <div className="flex mt-4">
        <div className="mr-8 flex items-center">
          <MilitaryTechIcon style={{ fontSize: 30, color: '#FFD700' }} />
          <h3 className="font-bold ml-2">12</h3>
          <p className="ml-1 text-gray-600">Badges Earned</p>
        </div>
        <div className="flex items-center">
          <StarsRoundedIcon style={{ fontSize: 30, color: '#FFD700' }} />
          <h3 className="font-bold ml-2">1250</h3>
          <p className="ml-1 text-gray-600">Points</p>
        </div>
      </div>
      <Button variant="contained" color="primary" className="mt-6 w-full">
        View Achievements
      </Button>
    </div>
  );
};

export default AchievementsCard;
