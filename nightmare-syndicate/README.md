# Nightmare Syndicate Records

Front-end archive for Nightmare Syndicate Records: a classified-themed catalog that tracks releases, dossiers, and field promotions. The site is built with React, TypeScript, and Vite, using Tailwind utilities layered with custom components to keep the radioactive intelligence terminal aesthetic intact.

## Features
- Hero terminal with radioactive copy, quick navigation, and intel links.
- Release dossiers with catalog metadata, cover art lightbox, availability stamps, and external distribution links.
- Roster and dossier pages that serve expandable bios, operative activity logs, and multimedia evidence.
- Media grids for posters, tour dispatches, and embedded live footage.
- Contact surface with encrypted-first submission language and canonical Nightmare Syndicate inboxes.

## Tech Stack
- React 18 with TypeScript and Vite for fast local development.
- Tailwind CSS (layered through src/styles/theme.css) for layout primitives and typography tokens.
- Radix UI primitives plus custom Panel, Stamp, WarningBox, LightboxImage, and RedactedText components.
- React Router for multi-page navigation.

## Getting Started
1. Install dependencies:
   `ash
   npm install
   `
2. Run the development server on http://localhost:5173:
   `ash
   npm run dev
   `
3. Create a production build:
   `ash
   npm run build
   `
4. Preview the built output:
   `ash
   npm run preview
   `
5. Lint the project:
   `ash
   npm run lint
   `

## Project Structure
`
+-- guidelines/Guidelines.md   # Brand system and design rules
+-- img/                       # Posters, logos, album art, textured backgrounds
+-- public/                    # Static assets served as-is
+-- src/
¦   +-- app/
¦   ¦   +-- components/        # Panel, Stamp, WarningBox, Lightbox, etc.
¦   ¦   +-- data/mockData.ts   # Releases, rosters, dossier copy, contact details
¦   ¦   +-- pages/             # Home, Releases, Roster, Dossiers, Contact
¦   +-- styles/theme.css       # Color tokens, typography, global resets
¦   +-- main.tsx               # App bootstrap
+-- vite.config.ts
`

## Content Authoring Notes
- Update release information inside src/app/data/mockData.ts. Each entry should include catalog ID, formats, distribution partners, media links, and dossier copy.
- Hero and footer strings live in the corresponding page components; keep messaging aligned with the classified narrative from the guidelines.
- Images referenced in data entries must exist under img/. Prefer .webp to keep payloads small.
- Contact emails for General, Submissions, and Distro should point to info@nightmaresyndicaterecords.com unless a new inbox is formally issued.

## Design System Summary
- Primary colors: Spent Graphite #878785, Fallout Obsidian overlay #242422 at 50%, Irradiated Cyan #7FD1AE, and Hazmat Brass #896000 for accents.
- Typography: Black Ops One for headings and hero statements; Special Elite for subtitles, metadata, and long-form copy. Avoid proportional fallback fonts.
- Buttons are outline-first with hover fills; cards rely on thin cyan borders and never use drop shadows.
- All imagery should open in the LightboxImage component and include descriptive alt copy.
- Reference guidelines/Guidelines.md before shipping any new UI or narrative element.

## Deployment
- The project is framework-agnostic on the hosting side. Any static host that supports Vite build output (Netlify, Vercel, Cloudflare Pages, S3) will work.
- Cache immutable assets (img, /dist/assets) aggressively; HTML should remain no-cache to surface new drops immediately.

## License
Copyright © Nightmare Syndicate Records. Internal use only unless explicit permission is granted.
