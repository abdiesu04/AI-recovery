// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',  // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'stream', // Ensure the response type is set to stream
});

// Function to fetch personalized recovery plan as a streaming response
export const fetchPersonalizedRecoveryPlan = async () => {
  try {
    const response = await apiClient.get('/api/recovery'); // Use the streaming endpoint
    return response.data; // Return the entire streaming response object
  } catch (error) {
    console.error('Error fetching personalized recovery plan:', error);
    throw error;
  }
};

export const sendMessage = async (userId, message) => {
  try {
    const response = await apiClient.post('/api/chat', { user_id: userId, message });
    // console.log(response.data.response);
    return response.data; // Ensure response.data.response is returned
  } catch (error) {
    console.error('Error sending message to AI:', error);
    throw error;
  }
};
export const checkin_resp = async (userId, message) => {
  try {
    const response = await apiClient.post('/api/checkin', { user_id: userId, message });
    // console.log(response.data.response);
    return response.data; // Ensure response.data.response is returned
  } catch (error) {
    console.error('Error sending message to AI:', error);
    throw error;
  }
};
