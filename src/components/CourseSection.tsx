import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { useTranslation } from '../i18n';

const CourseContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: `linear-gradient(135deg,
    #E8D5F2 0%,
    #D4C5F9 20%,
    #C8B6FF 40%,
    #B8A7E8 60%,
    #E0CFE7 80%,
    #F5E6FF 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '30%',
    left: '-20%',
    width: '140%',
    height: '140%',
    background: 'radial-gradient(circle at 30% 50%, rgba(255, 192, 203, 0.15) 0%, transparent 50%)',
    animation: 'float 25s ease-in-out infinite'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '20%',
    right: '-20%',
    width: '140%',
    height: '140%',
    background: 'radial-gradient(circle at 70% 50%, rgba(216, 191, 216, 0.15) 0%, transparent 50%)',
    animation: 'float 25s ease-in-out infinite reverse'
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)'
    },
    '50%': {
      transform: 'translate(30px, -30px) scale(1.1)'
    }
  }
}))

const CourseCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.75)',
  backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 187, 208, 0.2) 100%)',
  backdropFilter: 'blur(25px)',
  WebkitBackdropFilter: 'blur(25px)',
  borderRadius: '32px',
  padding: theme.spacing(7),
  border: '1px solid rgba(255, 255, 255, 0.5)',
  boxShadow: '0 30px 60px rgba(139, 90, 159, 0.2), 0 10px 20px rgba(0, 0, 0, 0.05)',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, transparent 0%, rgba(216, 191, 216, 0.1) 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease'
  },
  '&:hover': {
    transform: 'translateY(-8px) scale(1.01)',
    boxShadow: '0 40px 80px rgba(139, 90, 159, 0.3), 0 15px 30px rgba(0, 0, 0, 0.08)',
    '&::before': {
      opacity: 1
    }
  }
}))

const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2.5),
  background: 'rgba(255, 255, 255, 0.6)',
  backgroundImage: `linear-gradient(135deg, rgba(248, 187, 208, 0.2) 0%, rgba(200, 182, 255, 0.2) 100%)`,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '18px',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateX(8px)',
    background: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 8px 25px rgba(139, 90, 159, 0.15)',
    '& svg': {
      transform: 'scale(1.2) rotate(5deg)'
    }
  },
  '& svg': {
    transition: 'transform 0.3s ease'
  }
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, #B8A7E8 0%, #F8BBD0 50%, #C8B6FF 100%)`,
  color: 'white',
  padding: '16px 48px',
  fontSize: '1.15rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 10px 30px rgba(184, 167, 232, 0.4), 0 3px 10px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.6s, height 0.6s'
  },
  '&:hover': {
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(184, 167, 232, 0.5), 0 5px 15px rgba(0, 0, 0, 0.15)',
    background: `linear-gradient(135deg, #C8B6FF 0%, #FFB6C1 50%, #E0CFE7 100%)`,
    '&::before': {
      width: '300px',
      height: '300px'
    }
  }
}));

const CourseSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <SchoolOutlinedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />,
      text: t('courses.feature.certification')
    },
    {
      icon: <GroupsOutlinedIcon sx={{ color: 'secondary.main', fontSize: '1.5rem' }} />,
      text: t('courses.feature.smallGroups')
    },
    {
      icon: <SelfImprovementOutlinedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />,
      text: t('courses.feature.materials')
    }
  ];

  return (
    <CourseContainer>
      <Container maxWidth="lg">
        <CourseCard>
          <SelfImprovementOutlinedIcon 
            sx={{ 
              fontSize: '4rem', 
              color: 'primary.main', 
              mb: 3,
              animation: 'pulse 2s infinite'
            }} 
          />
          <Typography variant="h2" sx={{ mb: 3, color: 'text.primary' }}>
            {t('courses.title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}>
            {t('courses.description')}
          </Typography>
          
          <Stack spacing={2} sx={{ mb: 4 }}>
            {features.map((feature, index) => (
              <FeatureBox key={index}>
                {feature.icon}
                <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  {feature.text}
                </Typography>
              </FeatureBox>
            ))}
          </Stack>

          <GradientButton 
            size="large"
            onClick={() => window.open('https://wa.me', '_blank')}
          >
            {t('courses.cta')}
          </GradientButton>
        </CourseCard>
      </Container>
    </CourseContainer>
  );
};

export default CourseSection;
