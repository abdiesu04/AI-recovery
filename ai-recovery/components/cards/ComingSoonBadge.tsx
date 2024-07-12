import React from 'react';
import { Box, Typography } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

const ComingSoonBadge: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      bgcolor="#FF204E" 
      borderRadius="20px" // Increased border radius for a larger card
      p={1.5} // Increased padding for a bigger card
      boxShadow={3}
      position="absolute"
      top={-15} // Adjusted position for increased size
      right={-15} // Adjusted position for increased size
      zIndex={1}
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)', // Rotated rectangle shape
        transform: 'rotate(-8deg)', // Rotation effect
      }}
    >
      <AccessTime fontSize="small" />
      <Typography variant="caption" ml={1}>
        Coming Soon
      </Typography>
    </Box>
  );
};

export default ComingSoonBadge;
