# Hasan Elahi - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional interface inspired by contemporary portfolio designs
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Sections**:
  - Hero section with profile image
  - Skills showcase with categorized tech stack
  - Journey timeline with work experience and education
  - Projects showcase with tabbed interface
  - Contact form with social links

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The project is organized with the following structure:

```
src/
├── components/     # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Journey.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── App.tsx        # Main app component
├── main.tsx       # Entry point
└── index.css      # Global styles
```

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- **Hero Section**: [src/components/Hero.tsx](src/components/Hero.tsx)
- **Skills**: [src/components/Skills.tsx](src/components/Skills.tsx)
- **Journey**: [src/components/Journey.tsx](src/components/Journey.tsx)
- **Projects**: [src/components/Projects.tsx](src/components/Projects.tsx)
- **Contact**: [src/components/Contact.tsx](src/components/Contact.tsx)

### Profile Image

Replace [public/me.png](public/me.png) with your own profile picture.

## Deployment

This project can be easily deployed to platforms like:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drop the `dist` folder or connect your repo
- **GitHub Pages**: Use the `gh-pages` package

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: sheikh.hasan7@gmail.com
- LinkedIn: [linkedin.com/in/hasan-elahi](https://linkedin.com/in/hasan-elahi)
- GitHub: [github.com/hasanelahi](https://github.com/hasanelahi)
