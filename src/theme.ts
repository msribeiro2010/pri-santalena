import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B5A9F',
      light: '#B084C7',
      dark: '#5D3B6A',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#5A9B8B',
      light: '#7FB5A8',
      dark: '#3D6B5E',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#FEFEFE',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#2D3748',
      secondary: '#718096'
    },
    grey: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923'
    },
    common: {
      black: '#000000',
      white: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: '"Playfair Display", "Inter", serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.5
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 12
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(139, 90, 159, 0.1)',
    '0px 4px 8px rgba(139, 90, 159, 0.15)',
    '0px 8px 16px rgba(139, 90, 159, 0.2)',
    '0px 12px 24px rgba(139, 90, 159, 0.25)',
    '0px 16px 32px rgba(139, 90, 159, 0.3)',
    '0px 20px 40px rgba(139, 90, 159, 0.35)',
    '0px 24px 48px rgba(139, 90, 159, 0.4)',
    '0px 28px 56px rgba(139, 90, 159, 0.45)',
    '0px 32px 64px rgba(139, 90, 159, 0.5)',
    '0px 36px 72px rgba(139, 90, 159, 0.55)',
    '0px 40px 80px rgba(139, 90, 159, 0.6)',
    '0px 44px 88px rgba(139, 90, 159, 0.65)',
    '0px 48px 96px rgba(139, 90, 159, 0.7)',
    '0px 52px 104px rgba(139, 90, 159, 0.75)',
    '0px 56px 112px rgba(139, 90, 159, 0.8)',
    '0px 60px 120px rgba(139, 90, 159, 0.85)',
    '0px 64px 128px rgba(139, 90, 159, 0.9)',
    '0px 68px 136px rgba(139, 90, 159, 0.95)',
    '0px 72px 144px rgba(139, 90, 159, 1)',
    '0px 76px 152px rgba(139, 90, 159, 1)',
    '0px 80px 160px rgba(139, 90, 159, 1)',
    '0px 84px 168px rgba(139, 90, 159, 1)',
    '0px 88px 176px rgba(139, 90, 159, 1)',
    '0px 92px 184px rgba(139, 90, 159, 1)'
  ]
});

export default theme;