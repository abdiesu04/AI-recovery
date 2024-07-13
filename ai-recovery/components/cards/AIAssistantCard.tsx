import React from 'react';
import { Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const AIAssistantCard: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <ChatIcon style={{ fontSize: 40, color: '#4CAF50' }} />
        <h2 className="text-2xl font-bold ml-2 text-gray-900">AI Assistant</h2>
      </div>
      <p className="mt-2 text-gray-700">
        Get 24/7 support with our AI Assistant and experience seamless conversational interaction.
      </p>
      <div className="flex items-center mt-4">
        <EmojiObjectsIcon style={{ fontSize: 30, color: '#FF9800' }} />
        <p className="ml-2 text-gray-600">
          Enhance your user experience with instant responses and personalized assistance.
        </p>
      </div>
      <Button variant="contained" color="primary" className="  bg-gradient-to-r from-green-400 via-green-500 to-green-600 mt-4 w-full">
        Chat with AI
      </Button>
    </div>
  );
};

export default AIAssistantCard;
