import React from 'react';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const GetTherapistCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <PersonIcon style={{ fontSize: 40, color: '#FF5722' }} />
        <h2 className="text-2xl font-bold ml-2 text-gray-900">Get a Therapist</h2>
      </div>
      <p className="mt-2 text-gray-700">
        Search, book, and rate therapists to find the right support for your recovery journey.
      </p>
      <div className="flex items-center mt-4">
        <EmojiObjectsIcon style={{ fontSize: 30, color: '#FF9800' }} />
        <p className="ml-2 text-gray-600">
          Access personalized therapy options and foster a meaningful therapeutic relationship.
        </p>
      </div>
      <Button variant="contained" color="primary" className="mt-4 w-full">
        Find a Therapist
      </Button>
    </div>
  );
};

export default GetTherapistCard;
