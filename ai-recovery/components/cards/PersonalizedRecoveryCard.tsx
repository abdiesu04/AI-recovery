import React from 'react';
import { Button } from '@mui/material';
import HealingIcon from '@mui/icons-material/Healing';

const PersonalizedRecoveryCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <HealingIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">Personalized Recovery</h2>
      <p className="mt-2 text-gray-600">Customize your program based on individual needs and assessments.</p>
      <div className="flex mt-4">
        <div className="mr-4">
          <h3 className="font-bold">2</h3>
          <p>Assessments Completed</p>
        </div>
        <div>
          <h3 className="font-bold">1</h3>
          <p>Recovery Plan</p>
        </div>
      </div>
      <Button variant="contained" color="primary" className="mt-4">
        View Recovery Plans
      </Button>
    </div>
  );
};

export default PersonalizedRecoveryCard;
