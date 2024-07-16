'use client'

import React from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Sidebar from '../../components/Sidebar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import 'tailwindcss/tailwind.css';

const AIPage: React.FC = () => {
  return (
    <Box className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Box className="flex flex-1">
        <Sidebar isOpen={false} toggleSidebar={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <Box className="flex-1 p-6 text-white">
          <Box className="flex items-center justify-between">
            <Typography variant="h5" className="font-bold">
              AI Coach
            </Typography>
            <IconButton className="text-white">
              <AccountCircle />
            </IconButton>
          </Box>
          <Box className="mt-6 flex-1 bg-gradient-to-b from-gray-800 to-gray-700 p-4 rounded-lg">
            {/* Chat area */}
            <Box className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg"></Box>
            {/* User prompt */}
            <Box className="mt-4l flex items-center">
              <TextField
                variant="outlined"
                placeholder="User Prompt..."
                fullWidth
                InputProps={{
                  className: 'text-white bg-gray-900',
                  endAdornment: (
                    <IconButton className="text-white">
                      <SendIcon />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AIPage;
