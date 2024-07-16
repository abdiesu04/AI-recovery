
import React from 'react';
import { Container, Typography, Box, Paper, Avatar, List, ListItem, ListItemText } from '@material-ui/core';
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
        <Paper className="p-4">
          <Box display="flex" alignItems="center">
            <Avatar src={therapist.profile.photo_url} alt={therapist.name} className="w-24 h-24 mr-4" />
            <div>
              <Typography variant="h4">{therapist.name}</Typography>
              <Typography variant="body1">{therapist.specialization}</Typography>
              <Typography variant="body2">{therapist.description}</Typography>
              <Typography variant="body2">Rating: {therapist.rating}</Typography>
              <Typography variant="body2">Experience: {therapist.profile.experience}</Typography>
              <Typography variant="body2">Qualifications: {therapist.profile.qualifications.join(', ')}</Typography>
              <Typography variant="body2">Languages: {therapist.profile.languages.join(', ')}</Typography>
            </div>
          </Box>
          <Box mt={4}>
            <Typography variant="h5">Reviews</Typography>
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
