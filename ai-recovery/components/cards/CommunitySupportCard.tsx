import React from 'react';
import { Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const CommunitySupportCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <GroupIcon style={{ fontSize: 40, color: '#673AB7' }} />
        <h2 className="text-2xl font-bold ml-2 text-gray-900">Community Support</h2>
      </div>
      <p className="mt-2 text-gray-700">
        Connect with others on a similar journey, share experiences, and find encouragement.
      </p>
      <div className="flex items-center mt-4">
        <EmojiObjectsIcon style={{ fontSize: 30, color: '#FF9800' }} />
        <p className="ml-2 text-gray-600">
          Build a supportive network and access resources that inspire growth and recovery.
        </p>
      </div>
      <Button variant="contained" color="primary" className="mt-4 w-full">
        Join the Community
      </Button>
    </div>
  );
};

export default CommunitySupportCard;
