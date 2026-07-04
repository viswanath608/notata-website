# Notata — Landing Page

Stealth-mode landing page for Notata, the marketplace for authentic,
rights-cleared training data.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Motion (framer-motion) for animations
- Jost + Spline Sans Mono (self-hosted via Fontsource)

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Notes

- Brand palette lives in `src/index.css` (forest green + ember orange,
  drawn from `public/notata-logo.svg`).
- The contact email is currently `hello@notata.ai` — update it in
  `src/components/Contact.tsx` and `src/components/Footer.tsx`.
- Favicon: `public/favicon.svg` (the seed mark on a cream tile).
