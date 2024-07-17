import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Link from 'next/link'; // Importing Link from next/link

const SupportComponents = () => {
  return (
    <Container className="bg-[#ebf2eb] p-4 rounded-lg w-full mx-auto">
      <Grid container spacing={2}>

        {/* Get Therapist Support Now */}
        <Grid item xs={12}>
          <Box className="flex flex-col md:flex-row items-start p-4 bg-green-50 rounded-lg shadow-lg relative h-64">
            <Box className="flex flex-col items-start md:w-1/2 p-4">
              <Box className="flex items-center mb-2">
                <SupportAgentIcon className="text-green-600 mr-2" style={{ fontSize: 30 }} />
                <Typography variant="h6" component="h2" className="font-bold">
                  Get Therapist Support Now
                </Typography>
              </Box>
              <Typography variant="body1" className="mb-2">
                Join our chat-based therapy service for habit tracking and addiction recovery.
              </Typography>
              <Box className="flex items-center mb-2">
                <ChatIcon className="text-green-600 mr-2" style={{ fontSize: 30 }} />
                <Typography variant="body2">Live Session</Typography>
              </Box>
              <Box className="flex items-center mb-2">
                <PhoneIcon className="text-red-600 mr-2" style={{ fontSize: 30 }} />
                <Typography variant="body2">
                  Contact <a href="tel:8009873244" className="text-blue-600">(800-987-3244)</a>
                </Typography>
              </Box>
              <Box className="mt-auto w-full">
                <Button variant="contained" className="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:opacity-70 text-xs">
                  Find Therapist
                </Button>
              </Box>
            </Box>
            <Box className="md:w-1/2 flex justify-center items-center p-4">
              <Box className="relative w-full h-full flex justify-center items-center">
                <Image
                  src="/Green.png"
                  alt="Therapist"
                  layout="intrinsic"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-neomorph"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* Get AI Support */}
        <Grid item xs={12}>
          <Box className="flex w-full flex-col md:flex-row items-start p-4 bg-white rounded-lg shadow-lg relative h-64">
            <Box className="md:w-1/2 flex w-full justify-center items-center p-4">
              <Box className="relative w-full h-full flex justify-center items-center">
                <Image
                  src="/Black.png"
                  alt="AI Support"
                  layout="intrinsic"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-neomorph"
                />
              </Box>
            </Box>
            <Box className="flex flex-col items-start md:w-1/2 p-4">
              <Box className="flex items-center mb-2">
                <ForumIcon className="text-blue-600 mr-2" style={{ fontSize: 30 }} />
                <Typography variant="h6" component="h2" className="font-bold">
                  Get AI Support
                </Typography>
              </Box>
              <Typography variant="body1" className="mb-2">
                Our AI assistant provides 24/7 support for habit tracking and addiction recovery. Start chatting now to get the help you need.
              </Typography>
              <Box className="flex items-center mb-2">
                <ChatIcon className="text-blue-600 mr-2" style={{ fontSize: 30 }} />
                <Typography variant="body2">Available 24/7</Typography>
              </Box>
              <Box className="mt-auto w-full">
                <Link href="/chat" passHref>
                  <Button variant="contained" className="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:opacity-70 text-xs mb-0">
                    <ChatIcon className="mr-2" style={{ fontSize: 30 }} />
                    Start Chat
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default SupportComponents;