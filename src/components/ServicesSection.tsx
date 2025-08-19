import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ServiceCard from './ServiceCard';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(180deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.grey[50]} 100%)`,
  position: 'relative'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-16px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px'
  }
}));

const ServicesGrid = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    '& > *': {
      flex: '1 1 calc(33.333% - 16px)',
      minWidth: '300px'
    }
  }
}));

const services = [
  {
    icon: <SelfImprovementOutlinedIcon />,
    title: 'Reiki',
    description: 'Técnica japonesa de cura energética que promove relaxamento profundo e equilíbrio dos chakras através da imposição de mãos.'
  },
  {
    icon: <FilterVintageOutlinedIcon />,
    title: 'Aromaterapia',
    description: 'Terapia natural que utiliza óleos essenciais puros para harmonizar corpo, mente e espírito, promovendo bem-estar integral.'
  },
  {
    icon: <HealthAndSafetyOutlinedIcon />,
    title: 'Terapia Holística',
    description: 'Abordagem integrativa que trata o ser humano como um todo, considerando aspectos físicos, emocionais e espirituais.'
  },
  {
    icon: <ContactlessOutlinedIcon />,
    title: 'Cura Energética',
    description: 'Técnicas avançadas de limpeza e alinhamento energético para desbloqueio de padrões limitantes e restauração do fluxo vital.'
  },
  {
    icon: <LocalFloristOutlinedIcon />,
    title: 'Florais de Bach',
    description: 'Essências florais que atuam nos estados emocionais, promovendo equilíbrio e harmonia interior de forma suave e natural.'
  },
  {
    icon: <VolunteerActivismOutlinedIcon />,
    title: 'Terapia de Cristais',
    description: 'Utilização de cristais e pedras preciosas para harmonização energética e amplificação do processo de cura natural.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          Serviços Oferecidos
        </SectionTitle>
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          O espaço Santalena.nl é dedicado ao cuidado integral. Entre as terapias e serviços oferecidos estão:
        </Typography>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ServicesGrid>
      </Container>
    </SectionContainer>
  );
};

export default ServicesSection;