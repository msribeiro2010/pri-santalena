import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const VideoContainer = styled(Box)(({ theme }) => ({
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
      rgba(139, 90, 159, 0.4) 0%, 
      rgba(90, 155, 139, 0.3) 30%,
      rgba(255, 255, 255, 0.7) 60%,
      rgba(255, 255, 255, 0.95) 100%)`,
    pointerEvents: 'none'
  }
}));

const StyledVideo = styled('video')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  transform: 'translate(-50%, -50%)',
  objectFit: 'cover',
  filter: 'brightness(0.8) saturate(1.2)'
});

const FallbackImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(0.8) saturate(1.2)'
});

const VideoBackground: React.FC = () => {
  // Usando vídeos gratuitos do Pexels/Pixabay sobre meditação e natureza
  const videoUrls = [
    'https://cdn.pixabay.com/video/2023/05/27/165055-833115199_large.mp4', // Água fluindo suavemente
    'https://cdn.pixabay.com/video/2019/04/20/23420-334031530_large.mp4', // Natureza calma
    'https://cdn.pixabay.com/video/2020/04/26/37846-414736327_large.mp4'  // Flores ao vento
  ];

  const fallbackImage = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=90';

  return (
    <VideoContainer>
      <StyledVideo
        autoPlay
        loop
        muted
        playsInline
        poster={fallbackImage}
      >
        <source src={videoUrls[0]} type="video/mp4" />
        <source src={videoUrls[1]} type="video/mp4" />
        <FallbackImage src={fallbackImage} alt="Background" />
      </StyledVideo>
    </VideoContainer>
  );
};

export default VideoBackground;