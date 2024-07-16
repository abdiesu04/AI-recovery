import React from 'react';
import { Container, Typography, Box, Paper, Avatar, List, ListItem, ListItemText, Grid, Chip } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import therapistsData from '../../../public/therapists.json';

interface Therapist {
  id: string;
  name: string;
  specialization: string;
  description: string;
  rating: number;
  availability: boolean;
  profile: {
    experience: string;
    qualifications: string[];
    languages: string[];
    photo_url: string;
  };
  reviews: {
    user_id: string;
    username: string;
    comment: string;
  }[];
}

interface TherapistPageProps {
  params: {
    id: string;
  };
}

const getTherapist = (id: string): Therapist | undefined => {
  return therapistsData.therapists.find(therapist => therapist.id === id);
};

const TherapistPage: React.FC<TherapistPageProps> = ({ params }) => {
  const therapist = getTherapist(params.id);

  if (!therapist) {
    return <div>Therapist not found</div>;
  }

  return (
    <Container>
      <Box mt={4}>
        <Box
          style={{
            backgroundImage: `url('/path-to-your-banner-image.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" style={{ color: '#fff' }}>Therapist Profile</Typography>
        </Box>
        <Paper className="p-4 mt-4">
          <Box display="flex" alignItems="center" mb={4}>
            <Avatar src={therapist.profile.photo_url} alt={therapist.name} className="w-24 h-24 mr-4 rounded-full" />
            <div>
              <Typography variant="h4" gutterBottom>{therapist.name}</Typography>
              <Typography variant="body1" color="textSecondary">{therapist.specialization}</Typography>
              <Typography variant="body2" color="textSecondary">{therapist.description}</Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {Array.from({ length: therapist.rating }, (_, index) => (
                  <StarIcon key={index} className="text-yellow-500" />
                ))}
                <Typography variant="body2" color="textSecondary" ml={1}>Rating: {therapist.rating}</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">Experience: {therapist.profile.experience}</Typography>
              <Typography variant="body2" color="textSecondary">Qualifications: {therapist.profile.qualifications.join(', ')}</Typography>
              <Typography variant="body2" color="textSecondary">Languages: {therapist.profile.languages.join(', ')}</Typography>
              {therapist.availability && (
                <Chip label="Online" color="primary" size="small" className="mt-2" />
              )}
            </div>
          </Box>
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>Reviews</Typography>
            <List>
              {therapist.reviews.map(review => (
                <ListItem key={review.user_id}>
                  <ListItemText primary={review.username} secondary={review.comment} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export async function generateStaticParams() {
  return therapistsData.therapists.map(therapist => ({
    id: therapist.id,
  }));
}

export async function generateMetadata({ params }: TherapistPageProps) {
  const therapist = getTherapist(params.id);
  return {
    title: therapist ? therapist.name : 'Therapist Not Found',
  };
}

export default TherapistPage;
