"use client";

import React, { useState } from 'react';
import { Box, TextField, Button, Paper, List, ListItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { sendMessage } from './api';
import { green, grey } from '@mui/material/colors';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const initialSuggestionPrompts = [
  "Hi! I am feeling dizzy 😊",
  "How can I stop smoking? 🚭",
  "Tell me about the cons of smoking ⚠️",
];

const ChatWithAI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const userId = "6690b520c3501fb2363cf995"; // Replace with actual user ID
  const [suggestionPrompts, setSuggestionPrompts] = useState<string[]>(initialSuggestionPrompts);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSend = async (message: string) => {
    const newMessages: Message[] = [...messages, { role: 'user', content: message }];
    setMessages(newMessages);
    setLoading(true);

    // Remove suggestion prompts once user starts communicating
    setSuggestionPrompts([]);
    try {
      const aiResponse = await sendMessage(userId, message);
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setLoading(false);
    }

    // Clear the input field after sending the message
    setInput('');
  };

  const handleSuggestionClick = (prompt: string) => {
    handleSend(prompt);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: 'white',
      p: 2,
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        p: 2,
        flexWrap: 'wrap',
        gap: 2,
        alignItems: 'center',
        justifyContent: isMobile ? 'center' : 'flex-start',
      }}>
        {suggestionPrompts.map((prompt, index) => (
          <Paper
            key={index}
            sx={{
              minWidth: 'fit-content',
              color:'black',
              cursor: 'pointer',
              borderRadius: 4,
              bgcolor: green[50],
              color: '#000',
              '&:hover': {
                bgcolor: green[100],
              },
              marginRight: 2,
              p: 1,
            }}
            onClick={() => handleSuggestionClick(prompt)}
          >
            <Typography variant="body1">{prompt}</Typography>
          </Paper>
        ))}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflow: 'auto',
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <Paper sx={{ p: 1, bgcolor: message.role === 'user' ? green[50] : grey[300], color: message.role === 'user' ? theme.palette.text.primary : theme.palette.text.primary, borderRadius: 2 }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
              </Paper>
            </ListItem>
          ))}
          {loading && (
            <ListItem sx={{ justifyContent: 'flex-start' }}>
              <Typography variant="body2" color="text.secondary">
                AI is typing...
              </Typography>
            </ListItem>
          )}
        </List>
      </Box>
      <Box sx={{ display: 'flex', p: 2, bgcolor: grey[100], borderRadius: 2, mt: 2, boxShadow: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend(input);
            }
          }}
          sx={{ bgcolor: 'white', '& .MuiOutlinedInput-root': { borderRadius: 20 }, '& .MuiOutlinedInput-input': { color: theme.palette.primary.dark } }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSend(input)}
          disabled={loading || input.trim() === ''}
          sx={{ bgcolor: green[50], ml: 1, borderRadius: 20, '&:hover': { bgcolor: green[100] } }}
        >
          <EmojiObjectsIcon sx={{ fontSize: 20, marginRight: 1 }} />
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWithAI;