import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';

const EventsMeetupsCard: React.FC = () => {
  return (
    <Card className="h-full bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <CardContent>
        <div className="flex items-center mb-4">
          <EventIcon style={{ fontSize: 40, color: '#9C27B0' }} />
          <Typography variant="h5" component="h2" className="text-gray-900 font-bold ml-2">
            Events and Meetups
          </Typography>
        </div>
        <ul className="mt-2 text-gray-700">
          <li className="flex items-center mb-2">
            <GroupIcon style={{ color: '#FF4081' }} />
            <span className="ml-2">Support Group: May 15, 6pm</span>
          </li>
          <li className="flex items-center mb-2">
            <EventIcon style={{ color: '#2196F3' }} />
            <span className="ml-2">Local Recovery Meetup: May 20, 5pm</span>
          </li>
        </ul>
        <Button variant="contained" color="primary" className=" bg-gradient-to-r from-green-400 via-green-500 to-green-600 mt-4 w-full">
          View Calendar
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventsMeetupsCard;
