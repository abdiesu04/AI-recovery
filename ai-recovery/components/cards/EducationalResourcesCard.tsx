import React from 'react';
import { Button } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const EducationalResourcesCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <MenuBookIcon style={{ fontSize: 40, color: '#FFC107' }} />
        <h2 className="text-2xl font-bold ml-2 text-gray-900">Educational Resources</h2>
      </div>
      <p className="mt-2 text-gray-700">
        Access a comprehensive library of articles, videos, and materials on addiction recovery.
      </p>
      <div className="flex items-center mt-4">
        <EmojiObjectsIcon style={{ fontSize: 30, color: '#FF9800' }} />
        <p className="ml-2 text-gray-600">
          Expand your knowledge and gain insights to support your recovery journey.
        </p>
      </div>
      <Button variant="contained" color="primary" className=" bg-gradient-to-r from-green-400 via-green-500 to-green-600 mt-4 w-full">
        Explore Resources
      </Button>
    </div>
  );
};

export default EducationalResourcesCard;
