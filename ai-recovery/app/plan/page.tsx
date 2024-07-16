'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress, Box, Avatar } from '@mui/material';
import { green } from '@mui/material/colors';
import HealingIcon from '@mui/icons-material/Healing';
import { fetchPersonalizedRecoveryPlan } from './api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PersonalizedRecoveryPlan = () => {
  const [recoveryPlan, setRecoveryPlan] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchPersonalizedRecoveryPlan();
        // console.log('API Response:', response); 
        const data = JSON.parse(response);
        // console.log('Parsed Data:', data); 
        setRecoveryPlan(data.recovery_plan);
      } catch (error) {
        console.error('Error fetching recovery plan:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)',
        p: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 800,
          p: 3,
          backgroundColor: green[50],
          boxShadow: 5,
          borderRadius: 3,
          textAlign: 'center',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <CardContent>
          <Avatar
            sx={{
              bgcolor: green[700],
              width: 56,
              height: 56,
              margin: '0 auto',
              mb: 2,
            }}
          >
            <HealingIcon sx={{ color: 'white', fontSize: 32 }} />
          </Avatar>
          <Typography variant="h5" component="div" gutterBottom>
            Personalized Recovery Plan
          </Typography>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Box
              sx={{
                mt: 2,
                p: 2,
                backgroundColor: green[100],
                borderRadius: 2,
                textAlign: 'left',
              }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{recoveryPlan}</ReactMarkdown>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PersonalizedRecoveryPlan;
