// Utilidade para remover bordas no mobile
export const removeBordersOnMobile = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    // Remove todas as bordas do hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      (heroContent as HTMLElement).style.border = 'none';
      (heroContent as HTMLElement).style.boxShadow = 'none';
      (heroContent as HTMLElement).style.outline = 'none';
    }
    
    // Remove bordas de todos os MuiBox
    const muiBoxes = document.querySelectorAll('.MuiBox-root');
    muiBoxes.forEach((box) => {
      (box as HTMLElement).style.border = 'none';
      (box as HTMLElement).style.boxShadow = 'none';
      (box as HTMLElement).style.outline = 'none';
    });
    
    // Remove bordas de elementos com classes mui-*
    const muiElements = document.querySelectorAll('[class*="mui-"]');
    muiElements.forEach((element) => {
      (element as HTMLElement).style.border = 'none';
      (element as HTMLElement).style.boxShadow = 'none';
    });
  }
};

// Executar quando a página carregar e quando redimensionar
if (typeof window !== 'undefined') {
  window.addEventListener('load', removeBordersOnMobile);
  window.addEventListener('resize', removeBordersOnMobile);
}