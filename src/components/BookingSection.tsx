import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useTranslation } from '../i18n';

const BookingContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: `linear-gradient(135deg,
    #B2EBF2 0%,
    #80DEEA 20%,
    #4DD0E1 40%,
    #26C6DA 60%,
    #00ACC1 80%,
    #80CBC4 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20%',
    left: '-10%',
    width: '120%',
    height: '120%',
    background: 'radial-gradient(circle at 25% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 45%)',
    animation: 'wave 30s ease-in-out infinite'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '10%',
    right: '-10%',
    width: '120%',
    height: '120%',
    background: 'radial-gradient(circle at 75% 50%, rgba(178, 235, 242, 0.2) 0%, transparent 45%)',
    animation: 'wave 30s ease-in-out infinite reverse'
  },
  '@keyframes wave': {
    '0%, 100%': {
      transform: 'translate(0, 0) rotate(0deg)'
    },
    '25%': {
      transform: 'translate(20px, -20px) rotate(1deg)'
    },
    '50%': {
      transform: 'translate(-20px, 20px) rotate(-1deg)'
    },
    '75%': {
      transform: 'translate(10px, 10px) rotate(2deg)'
    }
  }
}));

const BookingCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(178, 235, 242, 0.2) 100%)',
  backdropFilter: 'blur(25px)',
  WebkitBackdropFilter: 'blur(25px)',
  borderRadius: '32px',
  padding: theme.spacing(7),
  border: '1px solid rgba(255, 255, 255, 0.5)',
  boxShadow: '0 30px 60px rgba(77, 208, 225, 0.2), 0 10px 20px rgba(0, 0, 0, 0.05)',
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle at center, rgba(128, 203, 196, 0.1) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.4s ease'
  },
  '&:hover': {
    transform: 'translateY(-8px) scale(1.01)',
    boxShadow: '0 40px 80px rgba(77, 208, 225, 0.3), 0 15px 30px rgba(0, 0, 0, 0.08)',
    '&::before': {
      opacity: 1
    }
  }
}));

const WhatsAppButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
  color: 'white',
  padding: '16px 36px',
  fontSize: '1.15rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 8px 30px rgba(37, 211, 102, 0.35)',
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
    boxShadow: '0 12px 40px rgba(37, 211, 102, 0.45)',
    background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
    '&::before': {
      width: '300px',
      height: '300px'
    }
  }
}));

const EmailButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, #4DD0E1 0%, #26C6DA 50%, #00ACC1 100%)`,
  color: 'white',
  padding: '16px 36px',
  fontSize: '1.15rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 8px 30px rgba(77, 208, 225, 0.35)',
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
    boxShadow: '0 12px 40px rgba(77, 208, 225, 0.45)',
    background: `linear-gradient(135deg, #00ACC1 0%, #80DEEA 50%, #B2EBF2 100%)`,
    '&::before': {
      width: '300px',
      height: '300px'
    }
  }
}));

const BookingSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BookingContainer>
      <Container maxWidth="lg">
        <BookingCard>
          <CalendarTodayOutlinedIcon 
            sx={{ 
              fontSize: '4rem', 
              color: 'primary.main', 
              mb: 3,
              animation: 'bounce 2s infinite'
            }} 
          />
          <Typography variant="h2" sx={{ mb: 3, color: 'text.primary' }}>
            {t('booking.title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}>
            {t('booking.description')}
          </Typography>
          
          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary', fontStyle: 'italic' }}>
            {t('booking.address')}
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            justifyContent="center"
            alignItems="center"
          >
            <WhatsAppButton 
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={() => window.open('https://wa.me', '_blank')}
            >
              {t('booking.whatsapp')}
            </WhatsAppButton>
            <EmailButton 
              size="large"
              startIcon={<EmailOutlinedIcon />}
              onClick={() => window.open('mailto:info@santalena.nl', '_blank')}
            >
              {t('booking.email')}
            </EmailButton>
          </Stack>
        </BookingCard>
      </Container>
    </BookingContainer>
  );
};

export default BookingSection;
