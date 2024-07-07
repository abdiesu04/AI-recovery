import React from 'react';
import { Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

const DashboardCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <DashboardIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">Dashboard</h2>
      <p className="mt-2 text-gray-600">Track your progress with goal-setting, daily check-ins, and data visualization.</p>
      <div className="flex mt-4">
        <div className="mr-4">
          <h3 className="font-bold">85%</h3>
          <p>Goal Progress</p>
        </div>
        <div className="mr-4">
          <h3 className="font-bold">12</h3>
          <p>Days Sober</p>
        </div>
        <div>
          <h3 className="font-bold">92%</h3>
          <p>Habit Completion</p>
        </div>
      </div>
      <Button variant="contained" color="primary" className="mt-4">
        View Dashboard
      </Button>
    </div>
  );
};

export default DashboardCard;
