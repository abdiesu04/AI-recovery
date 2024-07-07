import React from 'react';
import { Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const AIAssistantCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ChatIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">AI Assistant</h2>
      <p className="mt-2 text-gray-600">24/7 conversational support and chatbot functionality.</p>
      <Button variant="contained" color="primary" className="mt-4">
        Chat with AI
      </Button>
    </div>
  );
};

export default AIAssistantCard;
