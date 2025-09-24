# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multi-page wellness website for Priscila.nl, featuring holistic therapies and Reiki services. The project uses a hybrid architecture with both vanilla HTML/CSS/JavaScript and React TypeScript components.

## Architecture

### Dual Implementation Structure
- **index.html**: Main vanilla HTML implementation with embedded CSS and JavaScript
  - Includes all content sections inline
  - Uses i18n.js for internationalization (pt-BR, en, nl)
  - Self-contained with CDN dependencies (Font Awesome, Google Fonts)
  
- **src/App.santalena.tsx**: React/TypeScript implementation
  - Material-UI (MUI) based components
  - Theme configuration in `src/theme.ts`
  - Modular component structure in `src/components/`

### Component Architecture (React)
- **HeroSection**: Landing section with animated illustrations and CTAs
- **ServicesSection**: Six service offerings cards
- **CourseSection**: Reiki course levels
- **BookingSection**: Contact and booking interface  
- **ProductsSection**: Product showcase cards
- **Footer**: Site footer with contact info

### Styling Approach
- React components use Material-UI's styled-components pattern
- Custom theme with primary (#8B5A9F) and secondary (#5A9B8B) colors
- Glassmorphism effects with backdrop filters
- Gradient animations and floating animations
- Responsive breakpoints handled via MUI theme

### Internationalization
The `i18n.js` file contains translations for:
- Portuguese (pt-BR)
- English (en)  
- Dutch (nl)

Language is stored in localStorage and defaults to 'nl'.

## Development Commands

Since this is a static site without a build system:

```bash
# Open the site locally
open index.html

# Or use a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

For React components (if build system is added):
- Components are TypeScript (.tsx) files
- Would require React build setup (webpack/vite/CRA)
- Currently components are prepared but not integrated

## Key Implementation Details

### Asset Handling
- Assets stored in `/assets/` directory
- Hero images: `hero-meditation.jpg` and `hero-meditation.svg`
- Images referenced relatively from HTML/components

### Contact Integration
- WhatsApp links use `https://wa.me` format
- Email links use `mailto:` protocol
- Form submissions would need backend integration

### Animation Patterns
- CSS keyframe animations for floating effects
- Gradient shift animations for backgrounds
- Intersection Observer for scroll animations (in vanilla JS)

### Responsive Design
- Mobile-first approach
- Breakpoints: xs (<600px), sm (600px), md (900px), lg (1200px)
- Stack layouts switch from column to row on larger screens

## Code Conventions

### React Components
- Use MUI's styled() for component styling
- Props interfaces defined with TypeScript
- Functional components with React.FC type
- Icons from @mui/icons-material

### CSS/Styling
- CSS variables defined in :root for theming
- BEM-like class naming in vanilla HTML
- Gradients and shadows defined as CSS variables
- Consistent spacing using rem units

### File Organization
```
/
├── index.html          # Main vanilla implementation
├── i18n.js            # Internationalization system
├── assets/            # Images and media
└── src/
    ├── App.santalena.tsx     # React app root
    ├── theme.ts              # MUI theme config
    └── components/           # React components
        ├── HeroSection.tsx
        ├── ServicesSection.tsx
        ├── CourseSection.tsx
        ├── BookingSection.tsx
        ├── ProductsSection.tsx
        └── Footer.tsx
```

## Current State

The project has two parallel implementations:
1. **Active**: Vanilla HTML/CSS/JS in index.html (currently functional)
2. **Prepared**: React/TypeScript components (require build setup to activate)

To work with the React version, you would need to:
1. Set up a build system (Vite recommended for modern React apps)
2. Install dependencies (react, react-dom, @mui/material, @emotion/react, @emotion/styled)
3. Create an entry point that renders App.santalena.tsx

## Important Considerations

- The site is multilingual - maintain all three language translations when adding content
- WhatsApp integration requires proper phone number configuration
- Form submissions need backend implementation or third-party service integration
- React components are prepared for future migration but not currently active