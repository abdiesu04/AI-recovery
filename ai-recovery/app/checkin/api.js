// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',  
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'stream', 
});

export const checkin_resp = async (userId, progress,feeling) => {
  try {
    const response = await apiClient.post('/api/checkin', { user_id: userId, progress,feeling });
    // console.log(response.data.response);
    return response.data; 
  } catch (error) {
    console.error('Error sending message to AI:', error);
    throw error;
  }
};
