import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductCard from './ProductCard';
import { useTranslation } from '../i18n';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: `linear-gradient(135deg,
    #FFE5E5 0%,
    #FFD3B6 20%,
    #FFAAA5 40%,
    #FF8B94 60%,
    #FFC0CB 80%,
    #FFE0F0 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-30%',
    right: '-15%',
    width: '130%',
    height: '130%',
    background: 'radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)',
    animation: 'shimmer 20s ease-in-out infinite'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-30%',
    left: '-15%',
    width: '130%',
    height: '130%',
    background: 'radial-gradient(circle at 40% 70%, rgba(255, 192, 203, 0.15) 0%, transparent 40%)',
    animation: 'shimmer 20s ease-in-out infinite reverse'
  },
  '@keyframes shimmer': {
    '0%, 100%': {
      transform: 'translate(0, 0) rotate(0deg)'
    },
    '50%': {
      transform: 'translate(20px, 20px) rotate(3deg)'
    }
  }
}))

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

const ProductsGrid = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    '& > *': {
      flex: '1 1 calc(33.333% - 16px)',
      minWidth: '300px'
    }
  }
}));

const products = [
  {
    image: 'https://images.unsplash.com/photo-1647934174420-07feec3a850c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxlc3NlbnRpYWwlMjBvaWwlMjBib3R0bGUlMjBhcm9tYXRoZXJhcHl8ZW58MHwxfHx8MTc1NTYzMDY2NHww&ixlib=rb-4.1.0&q=85',
    titleKey: 'products.oils.title',
    descriptionKey: 'products.oils.description',
    price: '€ 35,00',
    attribution: 'Jacob Spaccavento on Unsplash'
  },
  {
    image: 'https://images.unsplash.com/photo-1664786908163-85ca46f85138?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxzdXBwbGVtZW50JTIwcGlsbHMlMjB2aXRhbWlucyUyMGhlYWx0aHxlbnwwfDJ8fHwxNzU1NjMwNjY0fDA&ixlib=rb-4.1.0&q=85',
    titleKey: 'products.supplement.title',
    descriptionKey: 'products.supplement.description',
    price: '€ 89,00',
    attribution: 'Supliful - Supplements On Demand on Unsplash'
  },
  {
    image: 'https://images.unsplash.com/photo-1630450410790-f61145f6c28e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHxjcnlzdGFscyUyMGdlbXN0b25lcyUyMGhlYWxpbmclMjBzcGlyaXR1YWx8ZW58MHwyfHxwdXJwbGV8MTc1NTYzMDY2NHww&ixlib=rb-4.1.0&q=85',
    titleKey: 'products.kit.title',
    descriptionKey: 'products.kit.description',
    price: '€ 125,00',
    attribution: 'Trevor Gerzen on Unsplash'
  }
];

const ProductsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          {t('products.title')}
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
          {t('products.subtitle')}
        </Typography>
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={t(product.titleKey)}
              description={t(product.descriptionKey)}
              price={product.price}
              attribution={product.attribution}
              ctaLabel={t('products.buy')}
            />
          ))}
        </ProductsGrid>
      </Container>
    </SectionContainer>
  );
};

export default ProductsSection;
