import React from 'react';
import { Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import ComingSoonBadge from '../components/cards/ComingSoonBadge';


const FeatureCard: React.FC<{ children: React.ReactNode, comingSoon?: boolean }> = ({ children, comingSoon = false }) => {
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
      className="relative p-4 bg-white rounded shadow flex items-start"
      style={{ cursor: 'pointer', minHeight: '200px' }}
      role="button"
    >
      {comingSoon && <ComingSoonBadge />}
      <Box ml={comingSoon ? 1 : 0} width="100%">
        {children}
      </Box>
    </motion.div>
  );
};

export default FeatureCard;
