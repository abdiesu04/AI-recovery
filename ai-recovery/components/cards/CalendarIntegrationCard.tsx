import React from 'react';
import { Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const CalendarIntegrationCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <EventIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">Calendar Integration</h2>
      <p className="mt-2 text-gray-600">Sync with personal calendars for appointment reminders.</p>
      <Button variant="contained" color="primary" className="mt-4">
        Sync Calendar
      </Button>
    </div>
  );
};

export default CalendarIntegrationCard;
