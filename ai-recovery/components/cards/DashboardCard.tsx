import React from 'react';
import { Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const DashboardCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <DashboardIcon style={{ fontSize: 40, color: '#2196F3' }} />
        <h2 className="text-2xl font-bold ml-2 text-gray-900">Dashboard</h2>
      </div>
      <p className="mt-2 text-gray-700">
        Track your progress, set goals, and visualize data for continuous improvement.
      </p>
      <div className="flex items-center mt-4">
        <TrendingUpIcon style={{ fontSize: 30, color: '#4CAF50' }} />
        <p className="ml-2 text-gray-600">
          Monitor trends and celebrate achievements along your journey to recovery.
        </p>
      </div>
      <Button variant="contained" color="primary" className="mt-4 w-full">
        View Dashboard
      </Button>
    </div>
  );
};

export default DashboardCard;
