// pages/dashboard.tsx

'use client';

import React from 'react';
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
import Image from 'next/image';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      <Sidebar />
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default DashboardPage;
