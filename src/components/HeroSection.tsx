import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main}20 0%, 
    ${theme.palette.secondary.main}20 50%, 
    ${theme.palette.background.default} 100%),
    url('./assets/hero-meditation.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.main}15 0%, 
      ${theme.palette.secondary.main}10 50%, 
      ${theme.palette.background.default}95 100%)`,
    backdropFilter: 'blur(1px)'
  }
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  maxWidth: '800px',
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(139, 90, 159, 0.1)'
}));

const FloatingIcon = styled(SelfImprovementOutlinedIcon)(({ theme }) => ({
  fontSize: '4rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  animation: 'float 3s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px)'
    },
    '50%': {
      transform: 'translateY(-10px)'
    }
  }
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: 'white',
  padding: '12px 32px',
  fontSize: '1.1rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 4px 20px rgba(139, 90, 159, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(139, 90, 159, 0.4)',
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
  }
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <FloatingIcon />
        <Typography variant="h1" sx={{ mb: 2, color: 'text.primary' }}>
          Bem-vindo(a) à Santalena.nl
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', fontWeight: 400 }}>
          Terapias holísticas e Reiki para equilíbrio e bem-estar
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
          Descubra o poder da cura natural através de terapias holísticas personalizadas. 
          Encontre seu equilíbrio interior e desperte sua energia vital.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <GradientButton 
            size="large"
            onClick={() => window.open('https://wa.me', '_blank')}
          >
            Agendar Consulta
          </GradientButton>
          <Button 
            variant="outlined" 
            size="large"
            sx={{ 
              borderRadius: '50px',
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'primary.main',
                color: 'white'
              }
            }}
          >
            Saiba Mais
          </Button>
        </Stack>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;