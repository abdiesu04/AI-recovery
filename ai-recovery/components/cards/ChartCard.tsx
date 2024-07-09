import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(...registerables);

// Chart data and options
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', // Red
        'rgba(54, 162, 235, 0.2)', // Blue
        'rgba(255, 206, 86, 0.2)', // Yellow
        'rgba(75, 192, 192, 0.2)', // Green
        'rgba(153, 102, 255, 0.2)', // Purple
        'rgba(255, 159, 64, 0.2)', // Orange
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const ChartCard = ({ title, chartType }) => {
  return (
    <Card className="h-full bg-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h6" component="h2" className="text-gray-900 font-bold">
          {title}
        </Typography>
        {chartType === 'line' && <Line data={data} />}
        {chartType === 'bar' && <Bar data={data} />}
        {chartType === 'pie' && <Pie data={data} />}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
