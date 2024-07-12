'use client'
import React from 'react';
import InspirationalQuotesCard from '@/components/cards/InspirationalQuotesCard';
import PersonalGoalsCard from '@/components/cards/PersonalGoalsCard';
import DailyCheckInCard from '@/components/cards/DailyCheckInCard';
import EventsMeetupsCard from '@/components/cards/EventsMeetupsCard';
import RemindersCard from '@/components/cards/RemindersCard';
import ChartCard from '@/components/cards/ComingSoonBadge';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-2">
        <InspirationalQuotesCard />
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <PersonalGoalsCard />
        <DailyCheckInCard />
      </div>
      <div className="lg:col-span-2">
        <EventsMeetupsCard />
      </div>
      <div className="lg:col-span-2">
        <RemindersCard />
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Sobriety Days" chartType="line" />
        <ChartCard title="Cravings" chartType="bar" />
        <ChartCard title="Therapy Sessions" chartType="pie" />
        <ChartCard title="Support Group Attendance" chartType="line" />
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Mood Trends" chartType="bar" />
        <ChartCard title="Sleep Quality" chartType="bar" />
      </div>
    </div>
  );
};

export default Home;
