import React from 'react';
import { Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const CrisisSupportCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <PhoneIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">Crisis Support</h2>
      <p className="mt-2 text-gray-600">Emergency contact options and instant chat with licensed counselors.</p>
      <Button variant="contained" color="primary" className="mt-4">
        Contact Crisis Support
      </Button>
    </div>
  );
};

export default CrisisSupportCard;
