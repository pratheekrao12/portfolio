# Portfolio

A modern, premium personal portfolio website built with:

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev) for icons

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
  layout.tsx      # Root layout with fonts and metadata
  page.tsx        # Home page (placeholder)
  globals.css     # Global CSS with Tailwind and custom variables

components/
  ui/             # Reusable UI components (buttons, inputs, etc.)
  layout/         # Layout components (header, footer, etc.)
  sections/       # Page sections (hero, about, projects, etc.)

lib/              # Utility functions and helpers

public/
  images/         # Image assets
  icons/          # Icon assets (SVG)

## Features Planned

- Modern dark/light theme with smooth transitions
- Animated UI components using Framer Motion
- Clean, minimalist design focused on content
- Responsive layout for all device sizes
- Accessible and performant
- SEO optimized

## Development Philosophy

- Component-based architecture for maintainability
- Utility-first styling with Tailwind CSS
- Type-safe TypeScript throughout
- No unnecessary dependencies
- Custom UI components (no component library yet)
- Clean, readable code with proper separation of concerns

## Next Steps

This is Phase 0: Project Foundation. The next phases will include:

1. Phase 1: Implement navbar layout
2. Phase 2: Create hero section with animation
3. Phase 3: Build about/experience sections
4. Phase 4: Develop projects showcase
5. Phase 5: Add contact section and footer
6. Phase 6: Implement theme switching
7. Phase 7: Add page transitions and micro-interactions
8. Phase 8: Optimize for performance and accessibility