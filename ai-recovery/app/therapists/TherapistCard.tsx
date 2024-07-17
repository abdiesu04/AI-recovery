import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Button, Avatar, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { green } from '@mui/material/colors';

interface TherapistCardProps {
  therapist: {
    id: string;
    name: string;
    specialization: string;
    description: string;
    rating: number;
    profile: {
      photo_url: string;
    };
  };
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist }) => {
  return (
    <Card className="shadow-lg mb-4 rounded-3xl p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#f0f4f8', maxWidth: '400px' }}>
      <CardContent className="flex flex-col items-center text-center">
        <Avatar 
          src={therapist.profile.photo_url} 
          alt={therapist.name} 
          className="w-24 h-24 mb-4 rounded-full shadow-md" 
        />
        <Typography variant="h5" gutterBottom className="font-bold">{therapist.name}</Typography>
        <Typography variant="body2" color="textSecondary" className="italic">{therapist.specialization}</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
          {Array.from({ length: therapist.rating }, (_, index) => (
            <StarIcon key={index} className="text-yellow-500" />
          ))}
          <Typography variant="body2" color="textSecondary" ml={1}>({therapist.rating})</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" className="mt-2">{therapist.description}</Typography>
        <Box mt={2} width="100%">
          <Link href={`/therapists/${therapist.id}`} passHref>
            <Button variant="contained" style={{ backgroundColor: green[500], color: '#fff' }} className="w-full mt-4 rounded-full shadow-md">
              View Profile
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TherapistCard;
