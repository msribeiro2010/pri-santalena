import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CourseSection from './components/CourseSection';
import BookingSection from './components/BookingSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import FloatingPetals from './components/FloatingPetals';
import { LanguageProvider } from './i18n';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

const App: React.FC = () => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageProvider>
          <FloatingPetals />
          <HeroSection />
          <ServicesSection />
          <CourseSection />
          <BookingSection />
          <ProductsSection />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
