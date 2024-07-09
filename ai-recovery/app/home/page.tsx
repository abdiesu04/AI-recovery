'use client';

import React, { useState } from 'react';
import InspirationalQuotesCard from '@/components/cards/InspirationalQuotesCard';
import DashboardCard from '@/components/cards/DashboardCard';
import AIAssistantCard from '@/components/cards/AIAssistantCard';
import GetTherapistCard from '@/components/cards/GetTherapistCard';
import PersonalizedRecoveryCard from '@/components/cards/PersonalizedRecoveryCard';
import CommunitySupportCard from '@/components/cards/CommunitySupportCard';
import EducationalResourcesCard from '@/components/cards/EducationalResourcesCard';
import CrisisSupportCard from '@/components/cards/CrisisSupportCard';
import HabitTrackerCard from '@/components/cards/HabitTrackerCard';
import CalendarIntegrationCard from '@/components/cards/CalendarIntegrationCard';
import AchievementsCard from '@/components/cards/AchievementsCard';
import Sidebar from '@/components/Sidebar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative flex">
      {!isSidebarOpen && (
      <Button
      variant="contained"
      color="primary"
      startIcon={<MenuIcon />}
      onClick={toggleSidebar}
      className="fixed top-20 left-0 z-50 rounded-full shadow-lg px-3 py-2 text-xs"
      style={{ animation: 'bounce 1s infinite' }}
    >
      Menu
    </Button>
      )}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 ${isSidebarOpen && isLargeScreen ? 'ml-64' : ''} transition-all duration-300 ease-in-out`}>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InspirationalQuotesCard />
          <DashboardCard />
          <AIAssistantCard />
          <GetTherapistCard />
          <PersonalizedRecoveryCard />
          <CommunitySupportCard />
          <EducationalResourcesCard />
          <CrisisSupportCard />
          <HabitTrackerCard />
          <CalendarIntegrationCard />
          <AchievementsCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
