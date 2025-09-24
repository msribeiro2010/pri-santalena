import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  attribution: string;
  ctaLabel: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.75)',
  backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 170, 165, 0.1) 100%)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  borderRadius: '24px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, transparent 0%, rgba(255, 139, 148, 0.05) 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease'
  },
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    boxShadow: '0 30px 60px rgba(255, 139, 148, 0.25)',
    border: '1px solid rgba(255, 139, 148, 0.2)',
    '&::before': {
      opacity: 1
    },
    '& .product-image': {
      transform: 'scale(1.08)'
    },
    '& .price-tag': {
      transform: 'scale(1.1)'
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
  background: `linear-gradient(135deg, #FF8B94 0%, #FFAAA5 100%)`,
  color: 'white',
  padding: '10px 20px',
  borderRadius: '25px',
  fontWeight: 600,
  fontSize: '1.15rem',
  display: 'inline-block',
  marginBottom: theme.spacing(2),
  boxShadow: '0 4px 15px rgba(255, 139, 148, 0.3)',
  transition: 'transform 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    transform: 'translateY(-50%)',
    transition: 'left 0.6s ease'
  },
  '&:hover::before': {
    left: '100%'
  }
}));

const PurchaseButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, #FFD3B6 0%, #FFAAA5 50%, #FF8B94 100%)`,
  color: 'white',
  borderRadius: '30px',
  padding: '12px 28px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  width: '100%',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 6px 20px rgba(255, 139, 148, 0.25)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.6s, height 0.6s'
  },
  '&:hover': {
    transform: 'translateY(-3px) scale(1.03)',
    boxShadow: '0 10px 30px rgba(255, 139, 148, 0.35)',
    background: `linear-gradient(135deg, #FFAAA5 0%, #FF8B94 50%, #FFB6C1 100%)`,
    '&::before': {
      width: '250px',
      height: '250px'
    }
  }
}));

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  description, 
  price, 
  attribution,
  ctaLabel
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
          <PriceTag className="price-tag">
            {price}
          </PriceTag>
        )}
        <PurchaseButton 
          onClick={() => window.open('https://wa.me', '_blank')}
        >
          {ctaLabel}
        </PurchaseButton>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
