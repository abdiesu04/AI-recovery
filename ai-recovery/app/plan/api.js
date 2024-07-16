
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',  
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'stream', 
});

export const fetchPersonalizedRecoveryPlan = async () => {
  try {
    const response = await apiClient.get('/api/plan'); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching personalized recovery plan:', error);
    throw error;
  }
};
