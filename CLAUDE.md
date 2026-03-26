# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (runs on port 3000)
- **Build:** `npm run build`
- **Type check:** `npm run lint` (runs `tsc --noEmit`)
- **Package manager:** pnpm

## Architecture

Single-page event website for "Kingdomlympics" — a youth church competition event by NextGen DUMC. Built with React + TypeScript + Vite + Tailwind CSS v4.

### Routing

- `/` — Main landing page (`src/App.tsx`)
- `/leaderboard` — Leaderboard page (`src/pages/Leaderboard.tsx`, currently locked/placeholder)

Routing via `react-router-dom` in `src/main.tsx`.

### Page Structure (App.tsx)

The landing page is a single scrollable page composed of sections in order:
1. **Hero** — Logo, badge, recap video
2. **Countdown** — Live countdown timer to event date (Aug 23, 2026)
3. **Description** — "What is Kingdomlympics?" explanation
4. **EventDetails** — Date/time/location/age grid
5. **Timeline** — Vertical timeline of Battle Games + Grand Finale
6. **LeaderboardPreview** — Locked placeholder (has commented-out unlocked version)

### Design System

**Style:** Retro Gaming UI / RPG Game HUD with pixel art elements and neon glow effects.

**Fonts:**
- Headings: "Press Start 2P" (pixel font) via `font-display`
- Body: "Inter" via `font-sans`
- Accent: "Space Grotesk" via `font-accent`

**Colors:** Pink (`#ff00ff`), Cyan/Blue (`#00ffff`), Dark (`#0A0A0A`), Gold (`#FFD700`)

**Key CSS classes in `src/index.css`:**
- `.pixel-card` — Card with cyan border, corner bracket decorations, neon glow on hover
- `.pixel-text` / `.pixel-text-sm` — Text with pink/cyan offset text-shadow
- `.gradient-box` — Pink/cyan gradient background with neon glow (used for badges, Grand Finale)
- `.glass-card` — Frosted glass effect (used for video container)
- `.pixel-blink` — Blinking cursor animation

**Icons:** `@iconify/react` with `pixelarticons` icon set (pixel art style icons).

**Animations:** `motion` (framer-motion) for scroll-triggered animations and progress bar.

### Static Assets

Public assets in `/public/`: `logo.png`, `recap.mp4`, `logo-original.png`.
Video is imported as `/recap.mp4` in Hero component.
