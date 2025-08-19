import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const CourseContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main}10 0%, 
    ${theme.palette.secondary.main}10 100%)`,
  position: 'relative'
}));

const CourseCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(15px)',
  borderRadius: '24px',
  padding: theme.spacing(6),
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 20px 40px rgba(139, 90, 159, 0.1)',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto'
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  background: `linear-gradient(45deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
  borderRadius: '12px',
  marginBottom: theme.spacing(2)
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: 'white',
  padding: '14px 40px',
  fontSize: '1.1rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 6px 25px rgba(139, 90, 159, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 35px rgba(139, 90, 159, 0.4)',
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
  }
}));

const CourseSection: React.FC = () => {
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
            Curso de Reiki
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}>
            Desenvolva seu potencial de cura aprendendo Reiki. Oferecemos cursos em português e neerlandês, com 
            certificação internacional e acompanhamento personalizado para sua jornada de crescimento espiritual.
          </Typography>
          
          <Stack spacing={2} sx={{ mb: 4 }}>
            <FeatureBox>
              <SchoolOutlinedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                Certificação Internacional Reconhecida
              </Typography>
            </FeatureBox>
            <FeatureBox>
              <GroupsOutlinedIcon sx={{ color: 'secondary.main', fontSize: '1.5rem' }} />
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                Turmas Pequenas para Atendimento Personalizado
              </Typography>
            </FeatureBox>
            <FeatureBox>
              <SelfImprovementOutlinedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                Prática Supervisionada e Material Didático Completo
              </Typography>
            </FeatureBox>
          </Stack>

          <GradientButton 
            size="large"
            onClick={() => window.open('https://wa.me', '_blank')}
          >
            Inscreva-se via WhatsApp
          </GradientButton>
        </CourseCard>
      </Container>
    </CourseContainer>
  );
};

export default CourseSection;