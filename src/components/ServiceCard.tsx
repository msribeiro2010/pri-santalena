import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(139, 90, 159, 0.2)',
    background: 'rgba(255, 255, 255, 0.95)'
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