import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  height: '500px',
  margin: '0 auto',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0 25px 70px rgba(139, 90, 159, 0.35)',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '4px solid rgba(255, 255, 255, 0.2)',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-80px',
    borderRadius: '50%',
    background: `radial-gradient(circle, 
      ${theme.palette.primary.main}25 0%, 
      ${theme.palette.secondary.main}20 30%, 
      transparent 70%)`,
    filter: 'blur(40px)',
    animation: 'pulseGlow 10s ease-in-out infinite',
    zIndex: -1
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    background: `conic-gradient(
      from 0deg at 50% 50%,
      ${theme.palette.primary.main}10,
      transparent 60deg,
      transparent 120deg,
      ${theme.palette.secondary.main}10 180deg,
      transparent 240deg,
      transparent 300deg,
      ${theme.palette.primary.main}10 360deg
    )`,
    animation: 'rotate 30s linear infinite',
    opacity: 0.3
  },
  '@keyframes pulseGlow': {
    '0%, 100%': {
      opacity: 0.5,
      transform: 'scale(0.9) rotate(0deg)'
    },
    '50%': {
      opacity: 0.8,
      transform: 'scale(1.1) rotate(180deg)'
    }
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '350px',
    height: '350px'
  }
}));

const CarouselImage = styled('img')<{ isActive: boolean }>(({ isActive }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  opacity: isActive ? 1 : 0,
  transform: isActive ? 'scale(1)' : 'scale(1.1)',
  transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: '50%',
  filter: isActive ? 'brightness(1)' : 'brightness(0.7)'
}));

const images = [
  {
    src: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=100',
    alt: 'Mãos em posição de Reiki - cura energética'
  },
  {
    src: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=100',
    alt: 'Cristais de cura e energia'
  },
  {
    src: 'https://images.unsplash.com/photo-1601966835315-0f3c3d464c90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=100',
    alt: 'Velas aromáticas e ambiente de meditação'
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=100',
    alt: 'Óleos essenciais e aromaterapia'
  },
  {
    src: 'https://images.unsplash.com/photo-1559595500-e15296bdbb48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=100',
    alt: 'Pedras e cristais para terapia holística'
  }
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Troca de imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselImage
          key={index}
          src={image.src}
          alt={image.alt}
          isActive={index === currentIndex}
          loading="lazy"
        />
      ))}
    </CarouselContainer>
  );
};

export default ImageCarousel;