import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Animações
const kenBurns = keyframes`
  0% {
    transform: scale(1) translateX(0) translateY(0);
  }
  50% {
    transform: scale(1.2) translateX(-5%) translateY(-5%);
  }
  100% {
    transform: scale(1) translateX(0) translateY(0);
  }
`;


const BackgroundContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: -1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(180deg, 
      rgba(139, 90, 159, 0.2) 0%, 
      rgba(90, 155, 139, 0.15) 20%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.6) 100%)`,
    pointerEvents: 'none',
    zIndex: 2
  }
});

const AnimatedImage = styled('div')<{ bgImage: string; isActive: boolean }>(({ bgImage, isActive }) => ({
  position: 'absolute',
  top: '-10%',
  left: '-10%',
  width: '120%',
  height: '120%',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: isActive ? 1 : 0,
  transition: 'opacity 10s ease-in-out',  // Transição muito mais lenta
  animation: isActive ? `${kenBurns} 45s ease-in-out infinite` : 'none',  // Animação Ken Burns mais lenta
  filter: 'brightness(0.95) saturate(1.15) contrast(1.05)', // Melhor nitidez e contraste
  imageRendering: 'crisp-edges', // Renderização nítida
  backfaceVisibility: 'hidden', // Previne blur durante animação
  transform: 'translateZ(0)', // Force GPU acceleration
  willChange: 'transform, opacity'
}));

const ParallaxOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `radial-gradient(ellipse at center top, 
    transparent 0%, 
    rgba(139, 90, 159, 0.05) 50%, 
    rgba(90, 155, 139, 0.1) 100%)`,
  pointerEvents: 'none',
  zIndex: 1
});

// Imagens em Ultra HD 4K - Máxima qualidade e nitidez (SEM dispositivos eletrônicos)
const backgroundImages = [
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Yoga ao pôr do sol - 4K
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Meditation nature - 4K
  'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Yoga prática serena - 4K
  'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Meditação ao ar livre - 4K
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Yoga ao ar livre - 4K
  'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100'   // Meditation outdoors - 4K
];

const AnimatedBackground: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setNextImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 8000); // Tempo mais longo para completar a transição
    }, 25000); // Troca a cada 25 segundos (ainda mais lento)

    return () => clearInterval(interval);
  }, []);

  // Pré-carregar próxima imagem
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImages[nextImageIndex];
  }, [nextImageIndex]);

  return (
    <BackgroundContainer>
      <AnimatedImage 
        bgImage={backgroundImages[currentImageIndex]} 
        isActive={!isTransitioning}
      />
      <AnimatedImage 
        bgImage={backgroundImages[nextImageIndex]} 
        isActive={isTransitioning}
      />
      <ParallaxOverlay />
    </BackgroundContainer>
  );
};

export default AnimatedBackground;