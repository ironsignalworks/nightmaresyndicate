# Nightmare Syndicate - Minimalist Record Label Website

This repository hosts a Vite + React build of the [Minimalist Record Label Website](https://www.figma.com/design/5gMsWiwIA9bZg0Ttb0Tk1F/Minimalist-Record-Label-Website) concept tailored for the Nightmare Syndicate brand. It ships with routing, theming, and data mocks so you can explore roster dossiers, releases, and contact flows locally.

## Stack

- React 18 with React Router 7 for page routing
- Tailwind CSS v4 (via @tailwindcss/vite) layered with custom CSS tokens in src/styles
- shadcn/ui, Radix primitives, Lucide icons, and supporting utilities (cmdk, sonner, vaul, react-hook-form, etc.)

## Getting Started

```bash
npm install
npm run dev     # start Vite on http://localhost:5173
npm run build   # type-check + production build
npm run preview # preview the production build
npm run lint    # run ESLint
```

## Project Structure

- src/main.tsx - client entry point that applies global styles from src/styles
- src/app/App.tsx - router shell with page registrations
- src/app/pages - top-level pages (Home, Roster, Releases, Dossiers, Submit, Contact, etc.)
- src/app/components - layout primitives plus shadcn/ui wrappers used throughout pages
- src/app/data/mockData.ts - placeholder bands, releases, dossiers used by the UI
- src/styles/*.css - font import, Tailwind 4 directives, and shared theme tokens

## Guidelines & Attributions

- Customization principles live in guidelines/Guidelines.md. Update that document with any brand rules you want to enforce.
- Third-party asset credits are tracked in ATTRIBUTIONS.md (shadcn/ui + Unsplash). Keep this file in sync as you add new libraries or imagery.

## Deployment Notes

The build output is the standard Vite dist/ folder. Serve it behind any static host or pair it with your preferred SSR solution. Remember to run `npm run build` before deploying so Tailwind + Radix styles are compiled and tree-shaken.
