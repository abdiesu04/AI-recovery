import React from 'react';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const GetTherapistCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <PersonIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">Get a Therapist</h2>
      <p className="mt-2 text-gray-600">Search and book a therapy session, rate, and review therapists.</p>
      <div className="flex mt-4">
        <div className="mr-4">
          <h3 className="font-bold">3</h3>
          <p>Upcoming Sessions</p>
        </div>
        <div>
          <h3 className="font-bold">12</h3>
          <p>Therapists Seen</p>
        </div>
      </div>
      <Button variant="contained" color="primary" className="mt-4">
        Find a Therapist
      </Button>
    </div>
  );
};

export default GetTherapistCard;
