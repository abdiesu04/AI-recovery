import React from 'react';
import { Button } from '@mui/material';
import HealingIcon from '@mui/icons-material/Healing';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const PersonalizedRecoveryCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <HealingIcon style={{ fontSize: 40, color: '#FFEB3B' }} />
        <h2 className="text-2xl font-bold ml-2 text-gray-900">Personalized Recovery</h2>
      </div>
      <p className="mt-2 text-gray-700">
        Customize your recovery journey based on individual assessments and needs.
      </p>
      <div className="flex items-center mt-4">
        <EmojiObjectsIcon style={{ fontSize: 30, color: '#FF9800' }} />
        <p className="ml-2 text-gray-600">
          Receive personalized recovery plans and support to achieve long-term wellness.
        </p>
      </div>
      <Button variant="contained" color="primary" className=" bg-gradient-to-r from-green-400 via-green-500 to-green-600 mt-4 w-full">
        View Recovery Plans
      </Button>
    </div>
  );
};

export default PersonalizedRecoveryCard;
