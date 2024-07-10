'use client';
import { useState } from 'react';
import { Button, TextField, MenuItem, Card, CardContent, CardHeader, Typography, Alert, AlertTitle } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AccountCircle,
  Lock,
  Person,
  Cake,
  Wc,
  SportsSoccer,
  Warning,
  EmojiPeople,
  Spa,
  Flag,
} from '@mui/icons-material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const questions = [
  { key: 'username', label: 'Username', description: 'Please enter a unique username for your account.', icon: <AccountCircle style={{ color: '#FFD700' }} /> },
  { key: 'password', label: 'Password', type: 'password', description: 'Enter a strong password to secure your account.', icon: <Lock style={{ color: '#FFD700' }} /> },
  { key: 'name', label: 'Name', description: 'What is your full name?', icon: <Person style={{ color: '#FFD700' }} /> },
  { key: 'age', label: 'Age', type: 'number', description: 'How old are you?', icon: <Cake style={{ color: '#FFD700' }} /> },
  { key: 'gender', label: 'Gender', type: 'select', options: ['male', 'female', 'other'], description: 'What is your gender?', icon: <Wc style={{ color: '#FFD700' }} /> },
  { key: 'hobbies', label: 'Hobbies', description: 'List your hobbies and interests.', icon: <SportsSoccer style={{ color: '#FFD700' }} /> },
  { key: 'triggers', label: 'Triggers', description: 'Identify any triggers that affect you.', icon: <Warning style={{ color: '#FFD700' }} /> },
  { key: 'solutions_tried', label: 'Solutions Tried', description: 'What solutions have you tried so far?', icon: <EmojiPeople style={{ color: '#FFD700' }} /> },
  { key: 'cooling_methods', label: 'Cooling Methods', description: 'What methods do you use to stay calm?', icon: <Spa style={{ color: '#FFD700' }} /> },
  { key: 'goals', label: 'Goals', description: 'What are your goals for recovery?', icon: <Flag style={{ color: '#FFD700' }} /> }
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h3: {
      fontWeight: 'bold',
      color: '#333',
    },
    body1: {
      color: '#555',
    },
    body2: {
      color: '#777',
    }
  }
});

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: '8px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#888',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const FormContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '4rem',
  maxWidth: '800px',
  width: '100%',
  margin: '3rem auto',
  boxShadow: theme.shadows[3],
  borderRadius: '16px',
}));

const DescriptionBox = styled('div')(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  borderRadius: '16px',
  boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
}));

const Form = () => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [openAlert, setOpenAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const emptyFields = questions.filter(q => !formData[q.key]);
    if (emptyFields.length > 0) {
      setOpenAlert(true);
    } else {
      setOpenAlert(false);
      console.log(formData);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
        <FormContainer>
          <div className="flex items-center justify-center mb-4">
            <EnergySavingsLeafIcon style={{ color: '#64b5f6', fontSize: 50 }} />
            <Typography variant="h3" className="ml-2">
              Mindful Recovery
            </Typography>
          </div>
          <DescriptionBox>
            <Typography variant="body1">
              Embark on a transformative journey with our AI-powered personalized recovery plans and habit-building strategies. Share your details to begin crafting your unique path to wellness.
            </Typography>
          </DescriptionBox>
          {openAlert && (
            <Alert severity="warning" onClose={() => setOpenAlert(false)} className="mb-4">
              <AlertTitle>Warning</AlertTitle>
              Please fill in all the fields before submitting.
            </Alert>
          )}
          <Card className="mb-4">
            <CardContent>
              {questions.map((question) => (
                <div key={question.key}>
                  <CardHeader avatar={<div>{question.icon}</div>} title={question.label} />
                  <Typography variant="body2" className="mb-4">{question.description}</Typography>
                  <CustomTextField
                    label={question.label}
                    variant="outlined"
                    fullWidth
                    name={question.key}
                    type={question.type || 'text'}
                    value={formData[question.key] || ''}
                    onChange={handleChange}
                    select={question.type === 'select'}
                  >
                    {question.type === 'select' && question.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </FormContainer>
      </div>
    </ThemeProvider>
  );
};

export default Form;
