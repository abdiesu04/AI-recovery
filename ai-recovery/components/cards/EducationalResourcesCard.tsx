import React from 'react';
import { Button } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const EducationalResourcesCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <MenuBookIcon style={{ fontSize: 40 }} />
      <h2 className="text-xl font-bold mt-4">Educational Resources</h2>
      <p className="mt-2 text-gray-600">Access a library of articles, videos, and materials on addiction recovery.</p>
      <div className="flex mt-4">
        <div className="mr-4">
          <h3 className="font-bold">125</h3>
          <p>Articles</p>
        </div>
        <div>
          <h3 className="font-bold">42</h3>
          <p>Videos</p>
        </div>
      </div>
      <Button variant="contained" color="primary" className="mt-4">
        Explore Resources
      </Button>
    </div>
  );
};

export default EducationalResourcesCard;
