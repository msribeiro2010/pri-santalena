import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Animação de queda das pétalas
const fall = keyframes`
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
`;

const sway = keyframes`
  0%, 100% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-30px);
  }
  75% {
    transform: translateX(30px);
  }
`;

const PetalContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  overflow: 'hidden',
  zIndex: 1000
});

const Petal = styled(Box)<{ delay: number; duration: number; left: number; size: number; color: string }>(
  ({ delay, duration, left, size, color }) => ({
    position: 'absolute',
    top: '-50px',
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    background: color,
    borderRadius: '0 100% 0 100%',
    opacity: 0.8,
    animation: `${fall} ${duration}s linear ${delay}s infinite, ${sway} 3s ease-in-out ${delay}s infinite`,
    filter: 'blur(0.5px)',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: `linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3))`,
      borderRadius: 'inherit'
    }
  })
);

// Cores das pétalas - tons de rosa, lavanda e branco
const petalColors = [
  'linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 100%)', // Rosa claro
  'linear-gradient(135deg, #E6E6FA 0%, #DDA0DD 100%)', // Lavanda
  'linear-gradient(135deg, #FFFFFF 0%, #FFE4E1 100%)', // Branco rosado
  'linear-gradient(135deg, #F8BBD0 0%, #FCE4EC 100%)', // Rosa pastel
  'linear-gradient(135deg, #D8BFD8 0%, #E0BBE4 100%)', // Lavanda claro
  'linear-gradient(135deg, #FFF0F5 0%, #FFDAB9 100%)', // Pêssego suave
];

interface PetalData {
  id: number;
  delay: number;
  duration: number;
  left: number;
  size: number;
  color: string;
}

const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<PetalData[]>([]);

  useEffect(() => {
    const generatedPetals: PetalData[] = [];
    const numberOfPetals = 15; // Quantidade de pétalas

    for (let i = 0; i < numberOfPetals; i++) {
      generatedPetals.push({
        id: i,
        delay: Math.random() * 15, // Delay aleatório até 15 segundos
        duration: 15 + Math.random() * 10, // Duração entre 15 e 25 segundos
        left: Math.random() * 100, // Posição horizontal aleatória
        size: 15 + Math.random() * 15, // Tamanho entre 15 e 30px
        color: petalColors[Math.floor(Math.random() * petalColors.length)]
      });
    }

    setPetals(generatedPetals);
  }, []);

  return (
    <PetalContainer>
      {petals.map((petal) => (
        <Petal
          key={petal.id}
          delay={petal.delay}
          duration={petal.duration}
          left={petal.left}
          size={petal.size}
          color={petal.color}
        />
      ))}
    </PetalContainer>
  );
};

export default FloatingPetals;