# Antigravity — Engineering Portfolio

A dark, immersive engineering portfolio. Deep space aesthetic meets precision engineering.

## Tech Stack

| Layer | Library |
|-------|---------|
| UI framework | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 |
| 3D / WebGL | Three.js + @react-three/fiber + @react-three/drei |
| Scroll animations | GSAP + ScrollTrigger + @gsap/react |
| Smooth scroll | Lenis |
| Routing | React Router v7 |
| Icons | Lucide React |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

## Deploying to Vercel

`vercel.json` is included with SPA rewrites, asset caching, and security headers.

```bash
npm i -g vercel
vercel login
vercel --prod
```

Or connect the repo in the Vercel dashboard — it auto-detects Vite.

## Swapping In Real Content

### `src/data/projects.ts`
Replace the four placeholder projects. Each entry:
```ts
{
  id: string            // URL slug  → /project/:id
  number: string        // "01" etc.
  title: string
  tagline: string       // one-line hook
  category: string      // badge text
  description: string   // 2–3 sentence overview
  challenge: string     // "The Challenge" body
  solution: string      // "The Solution" body
  tech: string[]        // stack chips (first 5 shown on card)
  year: number
  duration: string      // e.g. "6 months"
  role: string          // e.g. "Lead Engineer"
  gradient: [string, string]   // visual panel gradient colors
  accentColor: string          // per-project highlight color
  results: { label: string; value: string }[]  // 3 stat cards
}
```

### `src/components/sections/About.tsx`
- Lines ~108–114: replace the three bio paragraph strings
- `STATS` array at the top: update project count, years, domains

### `src/components/sections/Contact.tsx`
- Replace `mailto:hello@antigravity.dev` with your email
- Update the `SOCIALS` array `href` values

### `src/data/skills.ts`
Edit skill domains and their tag lists to match your real stack.

## Project Structure

```
src/
├── components/
│   ├── layout/    Navbar · CustomCursor · PageWrapper · Footer
│   ├── three/     HeroScene · ParticleField · GlowSphere
│   ├── sections/  Hero · About · Projects · Skills · Process · Contact
│   └── ui/        GlowButton · GlassCard · StatCard · SkillColumn · ProjectCard
├── pages/         Home · ProjectDetail
├── data/          projects.ts · skills.ts
├── hooks/         useSmoothScroll · useCustomCursor · useScrollAnimation
├── styles/        globals.css (design tokens + base styles)
└── lib/           utils.ts
```

## Performance Notes

- Three.js hero is **lazy-loaded** — excluded from main bundle, loads after text reveal
- Particles: **150 on mobile** (≤768 px / DPR < 1.5), **200 on desktop**
- Mouse repulsion uses **squared-distance pre-check** — `sqrt()` only fires for nearby particles
- GSAP ScrollTrigger instances are **scoped and auto-killed** on unmount via `useGSAP`
- Lenis is **destroyed on route change**

## Design Tokens

All colours, shadows, and font variables live in `src/styles/globals.css` under `:root`.

```css
--bg-void:       #030308   /* page background   */
--glow-primary:  #4F6EF7   /* electric blue     */
--glow-accent:   #8B5CF6   /* violet            */
--glow-warm:     #E07B39   /* warm orange pop   */
```
