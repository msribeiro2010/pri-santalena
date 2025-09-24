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
import { useTranslation } from '../i18n';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: `linear-gradient(135deg, 
    #FFF5F7 0%, 
    #FFE0F0 25%,
    #E8D5F2 50%,
    #D4C5F9 75%,
    #F5F3FF 100%)`,
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0)
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-10%',
    width: '120%',
    height: '200%',
    background: 'radial-gradient(circle at 20% 80%, rgba(139, 90, 159, 0.1) 0%, transparent 50%)',
    animation: 'float 20s ease-in-out infinite'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-50%',
    right: '-10%',
    width: '120%',
    height: '200%',
    background: 'radial-gradient(circle at 80% 20%, rgba(90, 155, 139, 0.1) 0%, transparent 50%)',
    animation: 'float 20s ease-in-out infinite reverse'
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translate(0, 0) rotate(0deg)'
    },
    '50%': {
      transform: 'translate(30px, 30px) rotate(5deg)'
    }
  }
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
    titleKey: 'services.reiki.title',
    descriptionKey: 'services.reiki.description'
  },
  {
    icon: <FilterVintageOutlinedIcon />,
    titleKey: 'services.aromatherapy.title',
    descriptionKey: 'services.aromatherapy.description'
  },
  {
    icon: <HealthAndSafetyOutlinedIcon />,
    titleKey: 'services.holistic.title',
    descriptionKey: 'services.holistic.description'
  },
  {
    icon: <ContactlessOutlinedIcon />,
    titleKey: 'services.energy.title',
    descriptionKey: 'services.energy.description'
  },
  {
    icon: <LocalFloristOutlinedIcon />,
    titleKey: 'services.flower.title',
    descriptionKey: 'services.flower.description'
  },
  {
    icon: <VolunteerActivismOutlinedIcon />,
    titleKey: 'services.crystals.title',
    descriptionKey: 'services.crystals.description'
  }
];

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          {t('services.title')}
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
          {t('services.subtitle')}
        </Typography>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
            />
          ))}
        </ServicesGrid>
      </Container>
    </SectionContainer>
  );
};

export default ServicesSection;
