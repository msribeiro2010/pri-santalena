import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductCard from './ProductCard';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(180deg, 
    ${theme.palette.grey[50]} 0%, 
    ${theme.palette.background.default} 100%)`,
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
    title: 'Óleo Essencial Premium',
    description: 'Óleos essenciais puros e naturais, extraídos através de destilação artesanal. Ideais para aromaterapia, massagens e difusão ambiental.',
    price: '€ 35,00',
    attribution: 'Jacob Spaccavento on Unsplash'
  },
  {
    image: 'https://images.unsplash.com/photo-1664786908163-85ca46f85138?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxzdXBwbGVtZW50JTIwcGlsbHMlMjB2aXRhbWlucyUyMGhlYWx0aHxlbnwwfDJ8fHwxNzU1NjMwNjY0fDA&ixlib=rb-4.1.0&q=85',
    title: 'Suplemento Natural Beyuna',
    description: 'Suplementos naturais de alta qualidade para fortalecer o sistema imunológico e promover vitalidade e bem-estar integral.',
    price: '€ 89,00',
    attribution: 'Supliful - Supplements On Demand on Unsplash'
  },
  {
    image: 'https://images.unsplash.com/photo-1630450410790-f61145f6c28e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHxjcnlzdGFscyUyMGdlbXN0b25lcyUyMGhlYWxpbmclMjBzcGlyaXR1YWx8ZW58MHwyfHxwdXJwbGV8MTc1NTYzMDY2NHww&ixlib=rb-4.1.0&q=85',
    title: 'Kit Reiki Completo',
    description: 'Kit completo para iniciar sua prática de Reiki, inclui materiais de apoio, cristais energéticos e manual de instruções detalhado.',
    price: '€ 125,00',
    attribution: 'Trevor Gerzen on Unsplash'
  }
];

const ProductsSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          Produtos
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
          Descubra nossa seleção cuidadosa de produtos naturais e ferramentas terapêuticas 
          para apoiar sua jornada de bem-estar e crescimento espiritual.
        </Typography>
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              attribution={product.attribution}
            />
          ))}
        </ProductsGrid>
      </Container>
    </SectionContainer>
  );
};

export default ProductsSection;