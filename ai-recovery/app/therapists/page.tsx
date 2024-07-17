'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, CardContent, Typography, Button, Avatar, Box } from '@mui/material';
import { People, Visibility, SentimentSatisfied } from '@mui/icons-material';
import TestimonyCard from './TestimonyCard'
import TherapistCard from './TherapistCard';

const TherapistsPage = () => {
  const [therapists, setTherapists] = useState([]);
  const [text, setText] = useState("");
  const fullText = "Starting Your Recovery Journey with Us";

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await axios.get('/therapists.json');
        setTherapists(response.data.therapists);
      } catch (error) {
        console.error('Error fetching therapists:', error);
      }
    };
    fetchTherapists();
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <Container className='bg-green-50 p-8'>
      <Box className='text-center mb-8'>
        <Typography variant="h3" className='text-green-700 font-bold'>
          <span style={{ color: '#67B680' }}>{text}</span>
        </Typography>
        <Typography variant="body1" className='mt-4 text-gray-700'>
          Discover experienced therapists ready to guide you on your path to mental wellness. Choose a therapist that matches your needs and embark on a transformative healing journey today.
        </Typography>
      </Box>

      <Box className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
        <Card className='bg-white shadow-md rounded-lg p-4' style={{ borderRadius: '15px', boxShadow: '7px 7px 20px #cbced1, -7px -7px 20px #fff' }}>
          <CardContent className='flex items-center'>
            <People className='text-blue-500 mr-4' />
            <Box>
              <Typography variant="h4" className='text-green-700 font-bold'>
                1234
              </Typography>
              <Typography variant="body1" className='text-gray-700'>
                Customers
              </Typography>
              <Typography variant="body2" className='text-gray-600'>
                We have helped over 1200 individuals on their journey to better mental health.
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card className='bg-white shadow-md rounded-lg p-4' style={{ borderRadius: '15px', boxShadow: '7px 7px 20px #cbced1, -7px -7px 20px #fff' }}>
          <CardContent className='flex items-center'>
            <Visibility className='text-green-500 mr-4' />
            <Box>
              <Typography variant="h4" className='text-green-700 font-bold'>
                34234
              </Typography>
              <Typography variant="body1" className='text-gray-700'>
                Visits
              </Typography>
              <Typography variant="body2" className='text-gray-600'>
                Our platform has been visited by thousands, providing valuable resources and support.
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card className='bg-white shadow-md rounded-lg p-4' style={{ borderRadius: '15px', boxShadow: '7px 7px 20px #cbced1, -7px -7px 20px #fff' }}>
          <CardContent className='flex items-center'>
            <SentimentSatisfied className='text-yellow-500 mr-4' />
            <Box>
              <Typography variant="h4" className='text-green-700 font-bold'>
                1500+
              </Typography>
              <Typography variant="body1" className='text-gray-700'>
                Happy Clients
              </Typography>
              <Typography variant="body2" className='text-gray-600'>
                Join our satisfied client base today and start your journey towards mental wellness.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box mt={8}>
        <TestimonyCard />
      </Box>

      <Box mt={8}>
        <Typography variant="h4" className='text-green-700 font-semibold'>
          Select a Therapist
        </Typography>
        <Box mt={2}>
          {therapists.map(therapist => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default TherapistsPage;
