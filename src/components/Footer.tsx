import React from 'react';
import { Box, Typography, Container, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.grey[900]} 0%, 
    ${theme.palette.grey[800]} 100%)`,
  color: 'white',
  padding: theme.spacing(6, 0, 3),
  marginTop: 'auto'
}));

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
  color: theme.palette.grey[300],
  '& svg': {
    color: theme.palette.primary.light
  }
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <LogoSection>
          <SelfImprovementOutlinedIcon sx={{ fontSize: '2.5rem', color: 'primary.light' }} />
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'white' }}>
            Santalena.nl
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
              Terapias Holísticas & Reiki
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', maxWidth: '300px' }}>
              Dedicados ao seu bem-estar integral através de terapias naturais e 
              técnicas de cura energética.
            </Typography>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
              Contato
            </Typography>
            <ContactItem>
              <LocationOnOutlinedIcon />
              <Typography variant="body2">
                Goudvinkstraat 114, 7132EA Lichtenvoorde, NL
              </Typography>
            </ContactItem>
            <ContactItem>
              <EmailOutlinedIcon />
              <Typography variant="body2">
                info@santalena.nl
              </Typography>
            </ContactItem>
            <ContactItem>
              <WhatsAppIcon />
              <Typography variant="body2">
                WhatsApp para agendamentos
              </Typography>
            </ContactItem>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
              Serviços
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 1 }}>
              • Reiki & Cura Energética
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 1 }}>
              • Aromaterapia
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 1 }}>
              • Terapia Holística
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300' }}>
              • Cursos de Reiki
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ borderColor: 'grey.700', mb: 3 }} />

        <Typography 
          variant="body2" 
          sx={{ 
            textAlign: 'center', 
            color: 'grey.400',
            fontSize: '0.875rem'
          }}
        >
          © 2025 Santalena.nl - Todos os direitos reservados. Desenvolvido com ❤️ para o seu bem-estar.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;