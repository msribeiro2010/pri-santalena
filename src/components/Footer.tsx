import React from 'react';
import { Box, Typography, Container, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from '../i18n';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg,
    #1A0033 0%,
    #2E1065 20%,
    #4A148C 40%,
    #6A1B9A 60%,
    #8E24AA 80%,
    #9C27B0 100%)`,
  color: 'white',
  padding: theme.spacing(8, 0, 3),
  marginTop: 'auto',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
    animation: 'shimmerLine 3s ease-in-out infinite'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '30%',
    left: '-20%',
    width: '140%',
    height: '140%',
    background: 'radial-gradient(circle at 50% 50%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)',
    animation: 'float 25s ease-in-out infinite'
  },
  '@keyframes shimmerLine': {
    '0%, 100%': {
      transform: 'translateX(-100%)'
    },
    '50%': {
      transform: 'translateX(100%)'
    }
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

const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4)
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  color: 'rgba(255, 255, 255, 0.8)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  padding: theme.spacing(0.5, 0),
  borderRadius: '8px',
  '& svg': {
    color: '#E1BEE7',
    transition: 'all 0.3s ease'
  },
  '&:hover': {
    color: 'white',
    transform: 'translateX(8px)',
    '& svg': {
      color: '#FFD3B6',
      transform: 'scale(1.2) rotate(10deg)'
    }
  }
}))

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <LogoSection>
          <SelfImprovementOutlinedIcon sx={{ fontSize: '2.5rem', color: 'primary.light' }} />
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'white' }}>
            Priscila.nl
          </Typography>
        </LogoSection>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          sx={{ mb: 4 }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
              {t('footer.about.title')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', maxWidth: '300px' }}>
              {t('footer.about.description')}
            </Typography>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
              {t('footer.contact.title')}
            </Typography>
            <ContactItem>
              <LocationOnOutlinedIcon />
              <Typography variant="body2">
                {t('footer.contact.address')}
              </Typography>
            </ContactItem>
            <ContactItem>
              <EmailOutlinedIcon />
              <Typography variant="body2">
                {t('footer.contact.email')}
              </Typography>
            </ContactItem>
            <ContactItem>
              <WhatsAppIcon />
              <Typography variant="body2">
                {t('footer.contact.whatsapp')}
              </Typography>
            </ContactItem>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
              {t('footer.services.title')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 1 }}>
              • {t('footer.services.item.reiki')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 1 }}>
              • {t('footer.services.item.aroma')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 1 }}>
              • {t('footer.services.item.holistic')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300' }}>
              • {t('footer.services.item.courses')}
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ borderColor: 'grey.700', mb: 3 }} />

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: 'grey.400',
            fontSize: '0.875rem',
            mb: 2
          }}
        >
          {t('footer.legal')}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: 'grey.500',
            fontSize: '0.825rem',
            mt: 2,
            '& a': {
              color: '#E1BEE7',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontWeight: 500,
              '&:hover': {
                color: '#FFD3B6',
                textDecoration: 'underline',
                transform: 'scale(1.05)',
                display: 'inline-block'
              }
            }
          }}
        >
          Desenvolvido com 💜 por{' '}
          <a 
            href="https://msribeiro2010.github.io/landing-page-msribeiro" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              textDecoration: 'none', 
              color: '#E1BEE7',
              cursor: 'pointer',
              fontWeight: 500
            }}
            onClick={(e) => {
              e.preventDefault();
              window.open('https://msribeiro2010.github.io/landing-page-msribeiro', '_blank');
            }}
          >
            MSRibeiro
          </a>
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
