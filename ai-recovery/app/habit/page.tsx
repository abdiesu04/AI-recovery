'use client'
import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Avatar,
  Alert,
} from '@mui/material';
import { green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const HabitTracking = () => {
  const [habit, setHabit] = useState('');
  const [action, setAction] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackHabit = async () => {
    if (!habit || !action) {
      setError('Both fields are required.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const { data } = await axios.post('http://localhost:8000/api/chat', {
        user_id: 'user123', // Replace with dynamic user ID if necessary
        message: `Habit: ${habit}, Action: ${action}`,
      });
      setResponse(data.response);
    } catch (error) {
      console.error('Error tracking habit:', error);
      setError('Failed to send habit data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          maxWidth: 600,
          p: 3,
          backgroundColor: green[50],
          boxShadow: 5,
          borderRadius: 3,
          textAlign: 'center',
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
            <AssignmentIcon sx={{ color: 'white', fontSize: 32 }} />
          </Avatar>
          <Typography variant="h5" component="div" gutterBottom>
            Habit Tracking
          </Typography>
          <TextField
            label="Habit"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <EmojiEventsIcon sx={{ mr: 1, color: green[700] }} />,
            }}
            error={!!error && !habit}
            helperText={!!error && !habit ? 'Habit is required' : ''}
          />
          <TextField
            label="What have you done today?"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <EmojiEventsIcon sx={{ mr: 1, color: green[700] }} />,
            }}
            error={!!error && !action}
            helperText={!!error && !action ? 'Action is required' : ''}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleTrackHabit}
              sx={{
                backgroundColor: green[700],
                '&:hover': {
                  backgroundColor: green[800],
                },
                width: '100%',
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Track Habit'}
            </Button>
          </Box>
          {response && (
            <Box sx={{ mt: 2, p: 2, backgroundColor: green[100], borderRadius: 2 }}>
              <Typography variant="body1" component="p">
                {response}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default HabitTracking;
