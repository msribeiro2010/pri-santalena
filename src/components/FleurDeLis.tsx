import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const FleurContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(3, 0),
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    height: '1px',
    width: '30%',
    background: `linear-gradient(90deg, 
      transparent 0%, 
      ${theme.palette.primary.light}40 50%, 
      transparent 100%)`,
    top: '50%'
  },
  '&::before': {
    left: '5%'
  },
  '&::after': {
    right: '5%'
  }
}));

const FleurSymbol = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  color: theme.palette.primary.main,
  opacity: 0.6,
  transform: 'rotate(0deg)',
  animation: 'gentleGlow 4s ease-in-out infinite',
  zIndex: 1,
  background: theme.palette.background.default,
  padding: '0 20px',
  '@keyframes gentleGlow': {
    '0%, 100%': {
      opacity: 0.4,
      transform: 'scale(1) rotate(0deg)'
    },
    '50%': {
      opacity: 0.8,
      transform: 'scale(1.1) rotate(5deg)'
    }
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem'
  }
}));

interface FleurDeLisProps {
  variant?: 'simple' | 'double' | 'ornate';
}

const FleurDeLis: React.FC<FleurDeLisProps> = ({ variant = 'simple' }) => {
  const symbols = {
    simple: '⚜',
    double: '⚜ ✦ ⚜',
    ornate: '❦ ⚜ ❦'
  };

  return (
    <FleurContainer>
      <FleurSymbol>
        {symbols[variant]}
      </FleurSymbol>
    </FleurContainer>
  );
};

// Componente alternativo: Divisor com pétalas de lotus
export const LotusDivider = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(4, 0),
  position: 'relative',
  '&::before': {
    content: '"✿"',
    position: 'absolute',
    left: '20%',
    fontSize: '1.2rem',
    color: theme.palette.primary.light,
    opacity: 0.3,
    animation: 'float 8s ease-in-out infinite'
  },
  '&::after': {
    content: '"✿"',
    position: 'absolute',
    right: '20%',
    fontSize: '1.2rem',
    color: theme.palette.secondary.light,
    opacity: 0.3,
    animation: 'float 8s ease-in-out infinite reverse'
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0) rotate(0deg)',
      opacity: 0.3
    },
    '50%': {
      transform: 'translateY(-5px) rotate(180deg)',
      opacity: 0.6
    }
  }
}));

// Componente de ornamento central
export const OrnamentDivider: React.FC = () => {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      my: 3,
      position: 'relative',
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        width: '35%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(139, 90, 159, 0.2), transparent)'
      },
      '&::before': {
        left: 0
      },
      '&::after': {
        right: 0
      }
    }}>
      <Box component="span" sx={{ 
        position: 'relative',
        display: 'inline-block',
        padding: '0 20px',
        background: 'white',
        color: 'primary.main',
        fontSize: '1.5rem',
        animation: 'pulse 3s ease-in-out infinite',
        '@keyframes pulse': {
          '0%, 100%': {
            opacity: 0.5
          },
          '50%': {
            opacity: 1
          }
        }
      }}>
        ⚜️
      </Box>
    </Box>
  );
};

export default FleurDeLis;