// src/api.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',  
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'stream', 
});


export const sendMessage = async (userId, message) => {
  try {
    const response = await apiClient.post('/api/chat', { user_id: userId, message });
    return response.data; 
  } catch (error) {
    console.error('Error sending message to AI:', error);
    throw error;
  }
};