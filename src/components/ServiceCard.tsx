import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StyledCard = styled(Card)(() => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.7)',
  backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 240, 245, 0.4) 100%)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  borderRadius: '24px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, transparent 0%, rgba(139, 90, 159, 0.05) 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease'
  },
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 25px 60px rgba(139, 90, 159, 0.25)',
    border: '1px solid rgba(139, 90, 159, 0.2)',
    '&::before': {
      opacity: 1
    },
    '& .icon-container': {
      transform: 'rotate(5deg) scale(1.1)',
      background: 'linear-gradient(135deg, #9F7AEA, #ED64A6)'
    }
  }
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
  color: 'white',
  fontSize: '2.5rem',
  boxShadow: '0 8px 20px rgba(139, 90, 159, 0.3)'
}));

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <StyledCard>
      <CardContent sx={{ p: 4, textAlign: 'center' }}>
        <IconContainer>
          {icon}
        </IconContainer>
        <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ServiceCard;