# Responsive Rollover Management Interface

A responsive React application built with TypeScript and Tailwind CSS v4, featuring a rollover management interface with custom breakpoints and mobile-first design.

## Features

- ✅ Responsive design with custom breakpoints (588px, 375px, 320px)
- ✅ Two main cards with specific responsive behavior
- ✅ Mobile-first approach with proper stacking
- ✅ Language toggle with conditional text hiding
- ✅ Modern React + TypeScript setup
- ✅ Tailwind CSS v4 with custom theme

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling framework
- **Vite** - Build tool and dev server

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project files**

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist/` folder.

## Project Structure

```
├── src/
│   └── main.tsx           # React entry point
├── App.tsx                # Main app component
├── components/
│   ├── ResponsiveFlowTemplate.tsx  # Main interface component
│   ├── ui/                # ShadCN/UI components
│   └── figma/            # Figma-specific components
├── styles/
│   └── globals.css       # Global styles & Tailwind config
├── imports/
│   └── svg-z9smu39mje.ts # SVG path definitions
└── Configuration files...
```

## Responsive Breakpoints

- **Above 588px:** Cards display side by side
- **588px and below:** Cards stack vertically, "Let us help you" on top
- **375px and below:** "Español" text hidden, icon remains visible
- **320px:** Minimum supported width

## Development

- **Hot reload** enabled for instant feedback
- **TypeScript** for type checking
- **ESLint** for code quality
- **Tailwind CSS v4** for modern styling

## Browser Support

- Modern browsers (Chrome 90+, Firefox 90+, Safari 14+, Edge 90+)
- Mobile browsers (iOS Safari, Android Chrome)

## License

MIT License - feel free to use for personal or commercial projects.