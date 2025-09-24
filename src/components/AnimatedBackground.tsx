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

// Imagens em Ultra HD 4K - Temas de Reiki, energia e espiritualidade
const backgroundImages = [
  'https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Mãos em posição de Reiki - 4K
  'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Cristais e energia - 4K
  'https://images.unsplash.com/photo-1601966835315-0f3c3d464c90?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Velas e meditação - 4K
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Sessão de cura energética - 4K
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100',  // Óleos essenciais e flores - 4K
  'https://images.unsplash.com/photo-1559595500-e15296bdbb48?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100'   // Pedras e cristais de cura - 4K
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