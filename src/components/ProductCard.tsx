import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  attribution: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 25px 50px rgba(139, 90, 159, 0.2)',
    '& .product-image': {
      transform: 'scale(1.05)'
    }
  }
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250,
  transition: 'transform 0.3s ease',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}));

const PriceTag = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: 'white',
  padding: '8px 16px',
  borderRadius: '20px',
  fontWeight: 600,
  fontSize: '1.1rem',
  display: 'inline-block',
  marginBottom: theme.spacing(2)
}));

const PurchaseButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: 'white',
  borderRadius: '25px',
  padding: '10px 24px',
  textTransform: 'none',
  fontWeight: 600,
  width: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(139, 90, 159, 0.3)',
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
  }
}));

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  description, 
  price, 
  attribution 
}) => {
  return (
    <StyledCard>
      <StyledCardMedia
        className="product-image"
        image={image}
        title={`${title} - ${attribution}`}
      />
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}>
          {description}
        </Typography>
        {price && (
          <PriceTag>
            {price}
          </PriceTag>
        )}
        <PurchaseButton 
          onClick={() => window.open('https://wa.me', '_blank')}
        >
          Comprar via WhatsApp
        </PurchaseButton>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;