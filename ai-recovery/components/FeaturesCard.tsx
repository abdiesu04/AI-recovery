'use client';

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'; // Import useAnimation from framer-motion
import Footer from '../components/Footer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupportIcon from '@mui/icons-material/Support';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const features = [
  { title: 'Personalized Dashboard', description: 'Access your personalized recovery plan, track your progress, and stay organized with our intuitive dashboard.', icon: <DashboardIcon fontSize="large" /> },
  { title: 'Therapist Interaction', description: 'Connect with verified therapists and counselors for one-on-one support and guidance.', icon: <GroupIcon fontSize="large" /> },
  { title: '24/7 AI Assistant', description: 'Get instant support and answers from our compassionate AI assistant, available anytime.', icon: <SupportAgentIcon fontSize="large" /> },
  { title: 'Customized Recovery Plans', description: 'Receive personalized recovery plans tailored to your unique needs and goals.', icon: <AssignmentIcon fontSize="large" /> },
  { title: 'Progress Tracking', description: 'Monitor your progress, celebrate milestones, and identify areas for improvement.', icon: <TimelineIcon fontSize="large" /> },
  { title: 'Community Support', description: 'Connect with a supportive community of individuals on similar recovery journeys.', icon: <PeopleIcon fontSize="large" /> },
  { title: 'Educational Resources', description: 'Access a wealth of educational materials, including articles, videos, and podcasts, to deepen your understanding of addiction and recovery.', icon: <MenuBookIcon fontSize="large" /> },
  { title: 'Crisis Support', description: 'Receive immediate support and guidance during difficult moments through our crisis hotline and emergency resources.', icon: <SupportIcon fontSize="large" /> },
  { title: 'Habit Tracking', description: 'Develop and maintain healthy habits with our comprehensive habit tracking tools.', icon: <TrackChangesIcon fontSize="large" /> },
  { title: 'Calendar Integration', description: 'Seamlessly integrate your recovery activities and appointments with your calendar for better organization.', icon: <CalendarTodayIcon fontSize="large" /> },
  { title: 'Family and Friends Support', description: 'Involve your loved ones in your recovery journey through our dedicated support features.', icon: <FamilyRestroomIcon fontSize="large" /> },
  { title: 'Gamification', description: 'Stay motivated and engaged with our gamification elements, including rewards, challenges, and achievements.', icon: <EmojiEventsIcon fontSize="large" /> },
];

const Features = () => {
  return (
    <>
      <Container maxWidth="lg" className="py-16">
        <Box className="text-center mb-12">
          <Typography variant="h4" component="h1" className="font-bold mb-4">
            Comprehensive Support for Your Recovery
          </Typography>
          <Typography variant="body1" component="p">
            Our recovery app offers a wide range of features to support you throughout your addiction recovery journey.
          </Typography>
        </Box>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </Container>
    </>
  );
};

const FeatureCard = React.memo(({ feature }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="p-4 bg-white rounded shadow flex items-start"
      style={{ cursor: 'pointer' }}
      role="button"
      aria-label={`Feature: ${feature.title}`}
    >
      <div className="mr-4 text-blue-500">{feature.icon}</div>
      <div>
        <Typography variant="h6" component="h2" className="mb-2 font-semibold">
          {feature.title}
        </Typography>
        <Typography variant="body2" component="p">
          {feature.description}
        </Typography>
      </div>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default Features;
