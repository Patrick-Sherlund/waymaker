# Waymaker

Executive & Defense Tech Recruiting platform built with React, TypeScript, and Tailwind CSS.

## Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd waymaker
```

2. Install dependencies
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

The static files will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment to GitHub Pages

### Initial Setup

1. Ensure your GitHub repository is set up and you have push access.

2. The project is configured with `base: './'` which works for both development and GitHub Pages deployment with relative paths.

### Deploy

Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the production bundle
- Deploy to the `gh-pages` branch
- Make the site available at `https://your-username.github.io/waymaker/`

### Enable GitHub Pages

After the first deployment:
1. Go to your repository settings on GitHub
2. Navigate to Pages section
3. Set Source to `gh-pages` branch
4. Save

Your site will be live at `https://your-username.github.io/waymaker/`

## Project Structure

```
waymaker/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── search-group/   # Search group specific components
├── contexts/           # React contexts
├── styles/            # Global styles and CSS
├── public/            # Static assets
│   └── assets/        # Images and logos
├── dist/              # Production build output
├── index.html         # HTML entry point
├── main.tsx          # Application entry point
├── App.tsx           # Root component
└── vite.config.ts    # Vite configuration
```

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Motion** - Animations
- **Lucide React** - Icons

## Notes

- The project uses placeholder SVG images for logos and founder photos in `public/assets/`
- Replace these with your actual images before deploying to production
- Videos are hosted externally on GitHub
