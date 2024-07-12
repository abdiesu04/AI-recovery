import React from 'react';
import { Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';

const CalendarIntegrationCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <EventIcon style={{ fontSize: 40, color: '#FF5722' }} />
        <h2 className="text-2xl font-bold ml-2 text-gray-900">Calendar Integration</h2>
      </div>
      <p className="mt-2 text-gray-700">
        Sync your personal calendar for seamless appointment scheduling and reminders.
      </p>
      <div className="flex items-center mt-4">
        <ScheduleIcon style={{ fontSize: 30, color: '#9C27B0' }} />
        <p className="ml-2 text-gray-600">
          Stay organized and never miss an important event with automated notifications.
        </p>
      </div>
      <Button variant="contained" color="primary" className=" bg-gradient-to-r from-green-400 via-green-500 to-green-600 mt-4 w-full">
        Sync Calendar
      </Button>
    </div>
  );
};

export default CalendarIntegrationCard;
