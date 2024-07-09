'use client'
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
  Stars
} from '@mui/icons-material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

const fadeStyles = {
  enter: 'opacity-0 transform -translate-y-3',
  enterActive: 'opacity-100 transform translate-y-0 transition-opacity transition-transform duration-300',
  exit: 'opacity-100 transform translate-y-0',
  exitActive: 'opacity-0 transform translate-y-3 transition-opacity transition-transform duration-300'
};

const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [openAlert, setOpenAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [questions[step].key]: e.target.value });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      nextStep();
    }
  };

  const nextStep = () => {
    if (!formData[questions[step].key]) {
      setOpenAlert(true);
    } else {
      setOpenAlert(false);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log(formData);
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
              Please fill in the {questions[step].label} field before proceeding.
            </Alert>
          )}
          <TransitionGroup>
            <CSSTransition key={step} timeout={300} classNames={fadeStyles}>
              <div>
                {step < questions.length && (
                  <Card className="mb-4">
                    <CardHeader avatar={<div>{questions[step].icon}</div>} title={questions[step].label} />
                    <CardContent>
                      <Typography variant="body2" className="mb-4">{questions[step].description}</Typography>
                      <CustomTextField
                        label={questions[step].label}
                        variant="outlined"
                        fullWidth
                        type={questions[step].type || 'text'}
                        value={formData[questions[step].key] || ''}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        select={questions[step].type === 'select'}
                      >
                        {questions[step].type === 'select' && questions[step].options.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </CustomTextField>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CSSTransition>
          </TransitionGroup>
          <div className="flex justify-between">
            {step > 0 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={prevStep}
              >
                Previous
              </Button>
            )}
            {step < questions.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={nextStep}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </div>
        </FormContainer>
      </div>
    </ThemeProvider>
  );
};
  
export default Form;
