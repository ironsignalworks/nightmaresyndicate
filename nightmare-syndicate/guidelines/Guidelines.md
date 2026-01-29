# Nightmare Syndicate Brand Manual

## 1. Mission and Voice
- Operate with the tone of a classified field briefing: concise, hostile, and declarative.
- Content hierarchy is always uppercase for section labels and sentence case for long-form copy.
- Messaging highlights surveillance, scarcity, and radioactive lore; humor is dry and tactical.

## 2. Color System
Primary palette values and their required use:
- #878785 (Spent Graphite): global background wash and navbar shells.
- #242422 at 50% opacity (Fallout Obsidian): card overlays and panel fills. Never use at 100% except inside lightbox scrims.
- #7FD1AE (Irradiated Cyan): default body text, icons, stamps, and outlines.
- #896000 (Hazmat Brass): accent buttons, hover fills, and stamped warnings.
- #ffffff at 80% opacity (Bone Static): long-form copy blocks when higher readability is needed on darker images.

Usage rules:
1. Maintain a minimum contrast ratio of 4.5:1 for any text layered over photography. Increase cyan saturation rather than introducing new colors.
2. Only one accent may appear per component: either Hazmat Brass borders or cyan text, not both.
3. Textured photos must be dimmed with the 50% obsidian overlay before placing typography on top.

## 3. Typography
- Display / hero headings: Black Ops One, uppercase, tracking 0.08em, only in sizes 40px, 32px, or 24px.
- Subtitles, UI labels, and body copy: Special Elite with backup Courier New, tracking 0.05em.
- Numeric or metadata ticks use the same Special Elite string to preserve the intelligence-terminal look.
- Never mix additional fonts. If a font is missing, fall back to Courier New rather than a proportional typeface.

## 4. Layout and Spacing
- Global layout width caps at 1200px with 24px gutters; mobile padding is 16px.
- Panels stack vertically on small screens; use CSS grid or flex with gap utilities rather than manual margins.
- Borders stay at 1px and use #7FD1AE at 30% opacity. Rounded corners are 4px max.
- Hero sequence: logo, tagline “CAME FOR THE RIFFS, STAYED FOR THE RADIATION,” action buttons. The tagline must sit directly under the logo with 16px spacing.

## 5. Core Components
### Panel
- Border #242422 at 60% opacity, fill #242422 at 50%, padding 24px.
- Panels may embed grids but never add drop shadows.

### Stamp / Status Chips
- Primary text uppercase, letter spacing 0.3em.
- Red variants only for warnings, white for available or archival states.

### Release and Dossier Cards
- Cover imagery always precedes metadata.
- Catalog, artist, title, and format rows are separated with thin cyan dividers.
- Cards auto-grow to fit copy; remove fixed heights to avoid dead space.

### Lightbox Imagery
- All posters, album covers, and logos must open inside the lightbox component. Provide descriptive alt text (“Fatal Exposure promo poster,” etc.).

## 6. Media Assets
- Background art: img/bg1.webp at full bleed, fixed attachment for parallax stability.
- Primary hero logo: img/syndicate_logo2 (SVG or PNG) anchored left desktop, centered mobile.
- Record art: psdw.png for “The Human Crust of War,” psde.png for the back panel, 3500.webp for low-opacity texture layers, and poster1.webp + 	our1.png for promo grids.
- Band dossier imagery (band1, band2, logos) sits inside the bio section with object-fit: cover and the same border treatment as cards.

## 7. Interaction Patterns
- Buttons: outline-only by default; hover fills with Hazmat Brass, text flips to cyan. Keep transitions at 150ms ease-out.
- Lightbox and video overlays fade in using 0.4 opacity scrim; no scaling animations.
- “Back to top” control is text plus arrow icon with no button chrome.
- Links referencing email addresses underline on hover; external links open in a new tab with el="noreferrer".

## 8. Accessibility and Content Governance
- Provide descriptive aria-labels for interactive icons, especially stamp controls and lightbox triggers.
- All copy blocks should switch to pure white when placed over textured photography.
- Hero and footer text uses the same color logic: blue for headings (#7FD1AE) and white for supporting copy.
- Contact information must always surface info@nightmaresyndicaterecords.com as the canonical inbox.
- Remove social media mentions unless explicitly authorized (currently only @vortex_associacao).

Use this manual when designing new sections to stay aligned with the Nightmare Syndicate visual language.
