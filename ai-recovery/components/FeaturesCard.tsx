
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Dashboard, People, Support, CalendarToday, EmojiEvents } from '@mui/icons-material';
import './features.module.css';

import InspirationalQuotesCard from './cards/InspirationalQuotesCard';
import AIAssistantCard from './cards/AIAssistantCard';
import GetTherapistCard from './cards/GetTherapistCard';
import EducationalResourcesCard from './cards/EducationalResourcesCard';
import PersonalizedRecoveryCard from './cards/PersonalizedRecoveryCard';
import HabitTrackerCard from './cards/HabitTrackerCard';
import DashboardCard from './cards/DashboardCard';
import CommunitySupportCard from './cards/CommunitySupportCard';
import CrisisSupportCard from './cards/CrisisSupportCard';
import CalendarIntegrationCard from './cards/CalendarIntegrationCard';
import AchievementsCard from './cards/AchievementsCard';

import FeatureCard from './FeatureCard'; 

const Features: React.FC = () => {
  return (
    <Container maxWidth="lg" className="features py-16 bg-green-100">
      <Box className="text-center mb-12">
        <Typography variant="h4" component="h1" className="font-bold mb-4">
          Comprehensive Support for Your Recovery
        </Typography>
        <Typography variant="body1" component="p">
          Our recovery app offers a wide range of features to support you throughout your addiction recovery journey.
        </Typography>
      </Box>
      <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Features */}
        <FeatureCard>
          <AIAssistantCard />
        </FeatureCard>
        <FeatureCard>
          <GetTherapistCard />
        </FeatureCard>
        <FeatureCard>
          <EducationalResourcesCard />
        </FeatureCard>
        <FeatureCard>
          <PersonalizedRecoveryCard />
        </FeatureCard>
        <FeatureCard>
          <HabitTrackerCard />
        </FeatureCard>
        <FeatureCard>
          <InspirationalQuotesCard />
        </FeatureCard>
      </div>
      <Box className="text-center my-12" style={{ backgroundColor: '#ebf5f5', padding: '1rem' }}>
        <Typography variant="h5" component="h2" className="font-bold mb-4" style={{ color: '#000' }}>
          Upcoming Features
        </Typography>
        <Typography variant="body1" component="p" style={{ color: '#000' }}>
          Stay tuned for these exciting new features coming soon to our recovery app.
        </Typography>
      </Box>
      
      <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Features */}
        <FeatureCard>
          <DashboardCard/>
        </FeatureCard>
        <FeatureCard>
          <CommunitySupportCard />
        </FeatureCard>
        <FeatureCard>
          <CrisisSupportCard />
        </FeatureCard>
        
      </div>
    </Container>
  );
};

export default Features;
