import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EF6C00', // Using the main color from globals.css
    },
    secondary: {
      main: '#E0E0E0', // Using the secondary color from globals.css
    },
    background: {
      default: '#FFFFFF', // Using the light color from globals.css
    },
  },
  typography: {
    fontFamily: 'var(--font-spectral)',
  },
});

export default theme;
