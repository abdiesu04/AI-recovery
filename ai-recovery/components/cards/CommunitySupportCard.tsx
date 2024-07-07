import React from 'react';
import { Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

const CommunitySupportCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <GroupIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">Community Support</h2>
      <p className="mt-2 text-gray-600">Connect with others on the path to recovery and share your journey.</p>
      <Button variant="contained" color="primary" className="mt-4">
        Join the Community
      </Button>
    </div>
  );
};

export default CommunitySupportCard;
