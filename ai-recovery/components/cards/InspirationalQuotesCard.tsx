import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const InspirationalQuotesCard: React.FC = () => {
  return (
    <Card className="flex flex-col p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <CardContent className="flex-grow">
        <div className="flex items-center mb-4">
          <FormatQuoteIcon style={{ fontSize: 40, color: '#4A90E2' }} />
          <Typography variant="h5" component="h2" className="ml-2 font-bold text-gray-900">
            Inspirational Quotes
          </Typography>
        </div>
        <Typography variant="body1" className="mt-4 text-gray-700 italic">
          "The journey of a thousand miles begins with a single step."
        </Typography>
        <Typography variant="body2" className="mt-2 text-gray-600">
          - Lao Tzu
        </Typography>
      </CardContent>
      <CardActions className="mt-auto">
        <Button variant="contained" color="primary" className="w-full">
          View More Quotes
        </Button>
      </CardActions>
    </Card>
  );
};

export default InspirationalQuotesCard;
