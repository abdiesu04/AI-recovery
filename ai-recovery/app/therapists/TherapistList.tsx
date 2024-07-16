import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, TextField, MenuItem } from '@material-ui/core';
import TherapistCard from './TherapistCard';

interface Therapist {
  id: string;
  name: string;
  specialization: string;
  description: string;
  rating: number;
  availability: boolean;
  profile: {
    photo_url: string;
  };
}

const TherapistList: React.FC = () => {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [filteredTherapists, setFilteredTherapists] = useState<Therapist[]>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await axios.get('/therapists.json');
        setTherapists(response.data.therapists);
        setFilteredTherapists(response.data.therapists);
      } catch (error) {
        console.error('Error fetching therapists:', error);
      }
    };
    fetchTherapists();
  }, []);

  const handleSpecializationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const specialization = event.target.value;
    setSelectedSpecialization(specialization);
    if (specialization) {
      setFilteredTherapists(therapists.filter(t => t.specialization === specialization));
    } else {
      setFilteredTherapists(therapists);
    }
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Available Therapists</Typography>
        <TextField
          select
          label="Filter by Specialization"
          value={selectedSpecialization}
          onChange={handleSpecializationChange}
          className="mt-2 mb-4"
          fullWidth
        >
          <MenuItem value="">
            <em>All Specializations</em>
          </MenuItem>
          {Array.from(new Set(therapists.map(t => t.specialization))).map(specialization => (
            <MenuItem key={specialization} value={specialization}>
              {specialization}
            </MenuItem>
          ))}
        </TextField>
        <div className="flex flex-wrap -mx-4">
          {filteredTherapists
            .sort((a, b) => b.rating - a.rating)
            .map(therapist => (
              <div key={therapist.id} className="w-full sm:w-1/2 md:w-1/3 p-4 flex justify-center">
                <TherapistCard therapist={therapist} />
              </div>
            ))}
        </div>
      </Box>
    </Container>
  );
};

export default TherapistList;
