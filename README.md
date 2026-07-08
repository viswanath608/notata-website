# Notata — Landing Page

Stealth-mode landing page for Notata — pioneering Physical AI data
gathering, sold as raw sensor streams or expertly annotated datasets.

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

- Brand palette lives in `src/index.css` (Prussian blues #001233–#002855
  with a Smart Blue #0466C8 accent and Cool Steel #979DAC muted text).
- The contact email is currently `hello@notata.ai` — update it in
  `src/components/Contact.tsx` and `src/components/Footer.tsx`.
- Favicon: `public/favicon.svg` (the seed mark on a cream tile).
- SEO: meta/OG/Twitter tags and JSON-LD live in `index.html`;
  `public/robots.txt`, `public/sitemap.xml`, `public/og-image.png` and
  `public/apple-touch-icon.png` ship alongside. All URLs assume
  `https://notata.ai/` — search-replace if the domain differs.
