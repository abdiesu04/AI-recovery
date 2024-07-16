"use client";
import React, { useState } from 'react';
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoodIcon from '@mui/icons-material/Mood';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import { habit_check } from "./api";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const HabitTracking: React.FC = () => {
  const [habit, setHabit] = useState<string>('');
  const [action, setAction] = useState<string>('');
  const userId = '6690b520c3501fb2363cf995';
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleCheckIn = async () => {
    if (!habit || !action) {
      setError('Both fields are required.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const aiResponse = await habit_check(userId, habit, action);
      setResponseMessage(aiResponse); 
    } catch (error) {
      console.error('Error during check-in:', error);
      setError('Failed to send check-in data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderResponseMessage = () => {
    const messageWithLineBreaks = responseMessage.replace(/\n\n/g, "\n<br>\n");

    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          br: ({ node, ...props }) => <br {...props} />
        }}
      >
        {messageWithLineBreaks}
      </ReactMarkdown>
    );
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
            <NaturePeopleIcon sx={{ color: 'white', fontSize: 32 }} />
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
              startAdornment: <CheckCircleIcon sx={{ mr: 1, color: green[700] }} />,
            }}
            error={!!error && !habit}
            helperText={!!error && !habit ? 'Habit is required' : ''}
          />
          <TextField
            label="Action"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <MoodIcon sx={{ mr: 1, color: green[700] }} />,
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
              onClick={handleCheckIn}
              sx={{
                backgroundColor: green[700],
                '&:hover': {
                  backgroundColor: green[800],
                },
                width: '100%',
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Check In'}
            </Button>
          </Box>
          {responseMessage && (
            <Box sx={{ mt: 2, p: 2, backgroundColor: green[100], borderRadius: 2, textAlign: 'left' }}>
              {renderResponseMessage()}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default HabitTracking;
