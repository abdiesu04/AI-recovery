'use client'
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

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

import FeatureCard from './FeatureCard'; // Ensure this path is correct

const Features: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-16 bg-green-100">
      <Box className="text-center mb-12">
        <Typography variant="h4" component="h1" className="font-bold mb-4">
          Comprehensive Support for Your Recovery
        </Typography>
        <Typography variant="body1" component="p">
          Our recovery app offers a wide range of features to support you throughout your addiction recovery journey.
        </Typography>
      </Box>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <FeatureCard >
          <InspirationalQuotesCard />
        </FeatureCard>

        {/* Coming Soon Features */}
        <FeatureCard comingSoon>
          <DashboardCard />
        </FeatureCard>
        <FeatureCard comingSoon>
          <CommunitySupportCard />
        </FeatureCard>
        <FeatureCard comingSoon>
          <CrisisSupportCard />
        </FeatureCard>
        <FeatureCard comingSoon>
          <CalendarIntegrationCard />
        </FeatureCard>
        <FeatureCard comingSoon>
          <AchievementsCard />
        </FeatureCard>
      </div>
    </Container>
  );
};

export default Features;
