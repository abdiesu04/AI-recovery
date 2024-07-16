import React from 'react'
import { Button, Card, CardContent, Typography, Box, Avatar } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import HotelIcon from '@mui/icons-material/Hotel'

const RecoveryPlans = () => {
  return (
    <div className="flex justify-around bg-green-50 p-8 space-x-8">
      <Card className="w-1/3 bg-green-50 rounded-lg shadow-md p-4">
        <CardContent>
          <Typography variant="h6" component="div" className="font-bold mb-4">
            My Recovery Plan
          </Typography>
          <Box className="flex justify-between items-center mt-4">
            <Box className="flex items-center">
              <CheckCircleOutlineIcon className="mr-2 text-green-700" />
              <Typography variant="body1">Quit smoking</Typography>
            </Box>
            <Typography variant="body2" className="text-right">80%</Typography>
          </Box>
          <Box className="flex justify-between items-center mt-2">
            <Box className="flex items-center">
              <GroupAddIcon className="mr-2 text-blue-700" />
              <Typography variant="body1">Attend 3 support group meetings per week</Typography>
            </Box>
            <Typography variant="body2" className="text-right">60%</Typography>
          </Box>
          <Box className="flex justify-between items-center mt-2">
            <Box className="flex items-center">
              <FitnessCenterIcon className="mr-2 text-red-700" />
              <Typography variant="body1">Exercise for 30 minutes daily</Typography>
            </Box>
            <Typography variant="body2" className="text-right">95%</Typography>
          </Box>
          <Box className="flex justify-between items-center mt-2">
            <Box className="flex items-center">
              <HotelIcon className="mr-2 text-purple-700" />
              <Typography variant="body1">Maintain a healthy sleep schedule</Typography>
            </Box>
            <Typography variant="body2" className="text-right">75%</Typography>
          </Box>
          <Button variant="outlined" className="mt-64 w-full bg-gray-200 hover:shadow-lg hover:bg-gray-300 rounded-full" style={{ boxShadow: '5px 5px 10px #ccc, -5px -5px 10px #fff' }}>Customize Plan</Button>
        </CardContent>
      </Card>

      <Card className="w-1/3 bg-green-50 rounded-lg shadow-md p-4">
        <CardContent>
          <Typography variant="h6" component="div" className="font-bold mb-4">
            Join our Community
          </Typography>
          <Box className="flex items-center mt-4 rounded-lg p-2 bg-gray-100">
            <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" className="mr-2" />
            <Typography variant="body1">
              I've been struggling with cravings lately, but the support from this community has been so helpful. Knowing I'm not alone makes a big difference.
            </Typography>
          </Box>
          <Box className="flex items-center mt-2 rounded-lg p-2 bg-gray-100">
            <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" className="mr-2" />
            <Typography variant="body1">
              The daily check-ins and progress tracking have been game-changers for me. I feel more accountable and motivated than ever before.
            </Typography>
          </Box>
          <Box className="flex items-center mt-2 rounded-lg p-2 bg-gray-100">
            <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" className="mr-2" />
            <Typography variant="body1">
              The personalized recovery plans are so helpful. I feel like I have a clear roadmap to follow, and the support from the team has been invaluable.
            </Typography>
          </Box>
          <Button variant="outlined" className="mt-4 w-full bg-gray-200 hover:shadow-lg hover:bg-gray-300 rounded-full" style={{ boxShadow: '5px 5px 10px #ccc, -5px -5px 10px #fff' }}>Join Community</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default RecoveryPlans
