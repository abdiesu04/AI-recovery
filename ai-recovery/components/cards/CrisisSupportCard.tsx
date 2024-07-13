import React from 'react';
import { Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const CrisisSupportCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <PhoneIcon style={{ fontSize: 40, color: '#F44336' }} />
        <h2 className="text-2xl font-bold ml-2 text-gray-900">Crisis Support</h2>
      </div>
      <p className="mt-2 text-gray-700">
        Access emergency contact options and immediate chat support with licensed counselors.
      </p>
      <div className="flex items-center mt-4">
        <EmojiObjectsIcon style={{ fontSize: 30, color: '#FF9800' }} />
        <p className="ml-2 text-gray-600">
          Receive compassionate assistance and guidance during critical times.
        </p>
      </div>
      <Button variant="contained" color="primary" className=" bg-gradient-to-r from-green-400 via-green-500 to-green-600 mt-4 w-full">
        Contact Crisis Support
      </Button>
    </div>
  );
};

export default CrisisSupportCard;
