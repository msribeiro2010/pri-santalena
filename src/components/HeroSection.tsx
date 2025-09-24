import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import LanguageSwitcher from './LanguageSwitcher';
import ImageCarousel from './ImageCarousel';
import AnimatedBackground from './AnimatedBackground';
import { useTranslation } from '../i18n';

const HeroContainer = styled(Box)(() => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '@keyframes fadeInRight': {
    '0%': {
      opacity: 0,
      transform: 'translateX(50px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  },
  '@keyframes fadeInLeft': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-50px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  }
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  maxWidth: '800px',
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.08)', // Quase transparente
  backdropFilter: 'blur(30px)', // Muito blur para criar contraste
  WebkitBackdropFilter: 'blur(30px)', // Safari support
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.02), 0 0 120px rgba(255, 255, 255, 0.05) inset'
}));

const HeroLayout = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left'
  }
}));

const HeroText = styled(Box)(({ theme }) => ({
  maxWidth: '480px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    margin: 0
  }
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

/* const IllustrationWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '500px',
  height: '500px',
  margin: '0 auto',
  overflow: 'hidden',
  borderRadius: '50%',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-60px',
    borderRadius: '50%',
    background: `radial-gradient(circle, 
      ${theme.palette.primary.main}20 0%, 
      ${theme.palette.secondary.main}15 40%, 
      transparent 70%)`,
    filter: 'blur(30px)',
    animation: 'pulseGlow 8s ease-in-out infinite'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '-30px',
    borderRadius: '50%',
    background: `conic-gradient(
      from 0deg,
      transparent,
      ${theme.palette.primary.main}10,
      transparent,
      ${theme.palette.secondary.main}10,
      transparent
    )`,
    animation: 'rotate 20s linear infinite',
    opacity: 0.5
  },
  '@keyframes pulseGlow': {
    '0%, 100%': {
      opacity: 0.4,
      transform: 'scale(0.95)'
    },
    '50%': {
      opacity: 0.6,
      transform: 'scale(1.05)'
    }
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '350px',
    height: '350px'
  }
})); */

/* const HeroImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  zIndex: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  border: `3px solid rgba(255, 255, 255, 0.3)`,
  boxShadow: '0 20px 60px rgba(139, 90, 159, 0.3)',
  animation: 'levitate 6s ease-in-out infinite',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  },
  '@keyframes levitate': {
    '0%, 100%': {
      transform: 'translateY(0px) scale(1)'
    },
    '50%': {
      transform: 'translateY(-15px) scale(1.02)'
    }
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
    height: '300px'
  }
})); */

const FloatingParticle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '4px',
  height: '4px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  opacity: 0.6,
  animation: 'floatUp 15s linear infinite',
  '@keyframes floatUp': {
    '0%': {
      transform: 'translateY(100vh) translateX(0)',
      opacity: 0
    },
    '10%': {
      opacity: 0.6
    },
    '90%': {
      opacity: 0.6
    },
    '100%': {
      transform: 'translateY(-100vh) translateX(100px)',
      opacity: 0
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
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <AnimatedBackground />
      <HeroContent>
        <Stack
          direction="row"
          justifyContent={{ xs: 'center', md: 'flex-end' }}
          sx={{ mb: 3 }}
        >
          <LanguageSwitcher />
        </Stack>
        <HeroLayout direction={{ xs: 'column-reverse', md: 'row' }}>
          <HeroText sx={{ animation: 'fadeInLeft 1.5s ease-out' }}>
            <FloatingIcon />
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 2, 
                color: '#2D3748',
                animation: 'fadeInLeft 1.5s ease-out 0.2s both',
                textShadow: '0 2px 20px rgba(255, 255, 255, 0.9), 0 1px 3px rgba(0, 0, 0, 0.2), 0 0 40px rgba(255, 255, 255, 0.5)',
                fontWeight: 800,
                letterSpacing: '-0.02em'
              }}
            >
              {t('hero.welcome')}
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4, 
                color: '#4A5568', 
                fontWeight: 600,
                animation: 'fadeInLeft 1.5s ease-out 0.4s both',
                textShadow: '0 2px 15px rgba(255, 255, 255, 0.9), 0 1px 3px rgba(0, 0, 0, 0.15)',
                letterSpacing: '-0.01em'
              }}
            >
              {t('hero.subtitle')}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                color: '#2D3748', 
                maxWidth: '600px', 
                mx: { xs: 'auto', md: 0 },
                animation: 'fadeInLeft 1.5s ease-out 0.6s both',
                textShadow: '0 1px 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)',
                fontWeight: 600,
                fontSize: '1.05rem',
                lineHeight: 1.7
              }}
            >
              {t('hero.description')}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <GradientButton 
                size="large"
                onClick={() => window.open('https://wa.me', '_blank')}
              >
                {t('hero.schedule')}
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
                {t('hero.learnMore')}
              </Button>
            </Stack>
          </HeroText>
          <Box sx={{ 
            position: 'relative',
            animation: 'fadeInRight 1.5s ease-out'
          }}>
            <ImageCarousel />
            {/* Partículas flutuantes para efeito mágico */}
            {[...Array(8)].map((_, i) => (
              <FloatingParticle
                key={i}
                sx={{
                  left: `${10 + i * 11}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${12 + i * 3}s`,
                  backgroundColor: i % 2 === 0 ? 'primary.main' : 'secondary.main',
                  width: `${3 + (i % 3)}px`,
                  height: `${3 + (i % 3)}px`
                }}
              />
            ))}
          </Box>
        </HeroLayout>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
