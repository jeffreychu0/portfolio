import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue
    },
    secondary: {
      main: '#f48fb1', // Light red
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Dark paper
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 600,
      color: '#ffffff',
    },
    h2: {
      fontWeight: 600,
      color: '#ffffff',
    },
    body1: {
      fontWeight: 400,
      color: '#ffffff',
    },
  },
});

export default muiTheme;