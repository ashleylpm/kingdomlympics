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
1. **Hero** — Logo, badge, recap video, floating pixel squares
2. **Countdown** — Live countdown timer to event date (Aug 23, 2026)
3. **Description** — "What is Kingdomlympics?" explanation
4. **EventDetails** — Date/time/location/age grid (4 pixel-cards)
5. **Timeline** — Vertical timeline of Battle Games + Grand Finale
6. **LeaderboardPreview** — Locked placeholder (has commented-out unlocked version)

Scattered pixel squares appear throughout the page as decorative elements (in App.tsx wrapper, Hero, and Timeline).

### Design System

**Style:** Retro Gaming UI / RPG Game HUD with pixel art elements and neon glow effects.

**Fonts:**
- Headings: "Press Start 2P" (pixel font) — applied globally via `font-display` on all h1-h6 in base styles. Do NOT add `font-display` to heading elements inline.
- Body: "Inter" via `font-sans`
- Accent: "Space Grotesk" via `font-accent`

**Colors:** Pink (`#ff00ff`), Cyan/Blue (`#00ffff`), Dark (`#0A0A0A`), Gold (`#FFD700`), Green (`#00FF00`)

**Key CSS classes in `src/index.css`:**
- `.pixel-card` — Card with 2px cyan border, corner bracket pseudo-elements (::before/::after), neon glow on hover. Use `.pink-corners` modifier for pink corner brackets (Grand Finale).
- `.pixel-text` / `.pixel-text-sm` — Merged identical classes. Pink/cyan offset text-shadow (2px, 0.8 opacity).
- `.gradient-box` — Pink/cyan gradient background with 2px pink border and shadow. Used for badges and Grand Finale card. Border must stay `border-2` to match `pixel-card`.
- `.glass-card` — Frosted glass effect with rounded corners (used only for video container).
- `.pixel-blink` — Blinking cursor animation (steps, 1s).
- `.pixel-btn` — Press-down button with box-shadow shift (used in commented-out leaderboard).

**Border conventions:** Use `border-2` consistently. Tailwind's `border-3` does not exist — never use it.

**Icons:** `@iconify/react` with `pixelarticons` icon set (pixel art style). Replaces lucide-react for all icons.

**Animations:** `motion` (framer-motion) for scroll-triggered fade-in animations and scroll progress bar.

### Static Assets

Public assets in `/public/`: `logo.png`, `recap.mp4`, `logo-original.png`.
Video is imported as `/recap.mp4` in Hero component.
