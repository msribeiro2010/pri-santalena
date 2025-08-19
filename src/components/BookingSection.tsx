import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const BookingContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main}15 0%, 
    ${theme.palette.secondary.main}15 100%)`,
  position: 'relative'
}));

const BookingCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(15px)',
  borderRadius: '24px',
  padding: theme.spacing(6),
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 20px 40px rgba(139, 90, 159, 0.15)',
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto'
}));

const WhatsAppButton = styled(Button)(({ theme }) => ({
  background: '#25D366',
  color: 'white',
  padding: '14px 32px',
  fontSize: '1.1rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 6px 25px rgba(37, 211, 102, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 35px rgba(37, 211, 102, 0.4)',
    background: '#128C7E'
  }
}));

const EmailButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  color: 'white',
  padding: '14px 32px',
  fontSize: '1.1rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 6px 25px rgba(90, 155, 139, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 35px rgba(90, 155, 139, 0.4)',
    background: `linear-gradient(45deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})`
  }
}));

const BookingSection: React.FC = () => {
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
            Agende seu Atendimento
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}>
            Pronto para iniciar sua jornada de cura e bem-estar? Entre em contato e marque seu horário. 
            Oferecemos atendimento personalizado e acolhedor em um ambiente tranquilo e harmonioso.
          </Typography>
          
          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary', fontStyle: 'italic' }}>
            📍 Santalena.nl – Goudvinkstraat 114, 7132EA Lichtenvoorde, NL
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
              Agendar via WhatsApp
            </WhatsAppButton>
            <EmailButton 
              size="large"
              startIcon={<EmailOutlinedIcon />}
              onClick={() => window.open('mailto:info@santalena.nl', '_blank')}
            >
              Enviar E-mail
            </EmailButton>
          </Stack>
        </BookingCard>
      </Container>
    </BookingContainer>
  );
};

export default BookingSection;