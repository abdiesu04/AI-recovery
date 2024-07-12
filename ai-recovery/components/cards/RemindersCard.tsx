import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AlarmIcon from '@mui/icons-material/Alarm';

const RemindersCard: React.FC = () => {
  return (
    <Card className="h-full bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <CardContent>
        <div className="flex items-center mb-4">
          <NotificationsIcon style={{ fontSize: 40, color: '#F44336' }} />
          <Typography variant="h5" component="h2" className="text-gray-900 font-bold ml-2">
            Reminders
          </Typography>
        </div>
        <ul className="mt-2 text-gray-700">
          <li className="flex items-center mb-2">
            <AlarmIcon style={{ color: '#FFC107' }} />
            <span className="ml-2">Therapy Session: May 23, 3pm</span>
          </li>
          <li className="flex items-center mb-2">
            <AlarmIcon style={{ color: '#8BC34A' }} />
            <span className="ml-2">Medication: Daily, 8am</span>
          </li>
        </ul>
        <Button variant="contained" color="primary" className=" bg-gradient-to-r from-green-400 via-green-500 to-green-600mt-4 w-full">
          View Reminders
        </Button>
      </CardContent>
    </Card>
  );
};

export default RemindersCard;
