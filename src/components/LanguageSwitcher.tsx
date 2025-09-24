import React, { useState } from 'react';
import { Box, Menu, MenuItem, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import { availableLanguages, useTranslation, Language } from '../i18n';

const LanguageButton = styled(Chip)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  color: theme.palette.primary.main,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.5)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 20px rgba(139, 90, 159, 0.2)',
    borderColor: 'rgba(139, 90, 159, 0.4)'
  }
}));

const LanguageMenu = styled(Menu)(() => ({
  '& .MuiPaper-root': {
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(139, 90, 159, 0.1)',
    boxShadow: '0 8px 32px rgba(139, 90, 159, 0.15)',
    borderRadius: '12px',
    marginTop: '8px',
    minWidth: '180px'
  }
}));

const LanguageMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: '12px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: `linear-gradient(90deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
    '& .flag-emoji': {
      transform: 'scale(1.1)'
    }
  },
  '&.Mui-selected': {
    background: `linear-gradient(90deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
    '&:hover': {
      background: `linear-gradient(90deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`
    }
  }
}));

const FlagEmoji = styled('span')({
  fontSize: '1.4rem',
  transition: 'transform 0.2s ease',
  display: 'inline-flex',
  alignItems: 'center'
});

const languageFlags: Record<Language, string> = {
  'pt-BR': '🇧🇷',
  'en': '🇬🇧',
  'nl': '🇳🇱',
  'de': '🇩🇪'
};

const languageShortNames: Record<Language, string> = {
  'pt-BR': 'PT',
  'en': 'EN',
  'nl': 'NL',
  'de': 'DE'
};

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    handleClose();
  };

  return (
    <Box>
      <LanguageButton
        icon={<LanguageIcon />}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <FlagEmoji>{languageFlags[language]}</FlagEmoji>
            <span>{languageShortNames[language]}</span>
          </Box>
        }
        onClick={handleClick}
        aria-label={t('language.label')}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      />
      
      <LanguageMenu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {availableLanguages.map(({ code, labelKey }) => (
          <LanguageMenuItem
            key={code}
            onClick={() => handleLanguageSelect(code)}
            selected={language === code}
          >
            <FlagEmoji className="flag-emoji">
              {languageFlags[code]}
            </FlagEmoji>
            <Typography variant="body2" fontWeight={language === code ? 600 : 400}>
              {t(labelKey)}
            </Typography>
          </LanguageMenuItem>
        ))}
      </LanguageMenu>
    </Box>
  );
};

export default LanguageSwitcher;
