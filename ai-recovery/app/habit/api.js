// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',  
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'stream', 
});


export const habit_check = async (userId, habit,done) => {
  try {
    const response = await apiClient.post('/api/habits', { user_id: userId, habit ,done });
    return response.data; 
  } catch (error) {
    console.error('Error sending message to AI:', error);
    throw error;
  }
};