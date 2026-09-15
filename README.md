# ChessKidsNation — Kids Chess Academy (Next.js)

Single-column VSL landing for **ChessKidsNation** — a kid-friendly, play-based online chess academy (Ages 5–15). Built from the Upstep Academy template and rebranded for the US market.

Live stack: **Next.js 16 (Turbopack) • Tailwind 4 • shadcn/ui • Prisma 6 • SQLite • Bun**

## What changed in this rebrand

- **Brand:** Upstep Academy → ChessKidsNation (logo `https://encrypted-tbn0.gstatic.com/...`, local copy `public/logo.jpg`, `public/logo.svg` kept)
- **Palette:** Kid-friendly — `#FFD23F` (yellow), `#FF6B6B` (coral, solid CTA), `#06D6A0` (mint), `#A78BFA` (lavender), `#7C3AED` (purple), `#1A2744` (navy, cards/borders), `#FFFBEB` (cream bg)
- **Hero:** Single-column VSL — pill `Since 2005 • 30,000+ Hours • USCF & FIDE`, centered headline with simple 2-color gradient `1st Move` (`from-[#7C3AED] to-[#FF6B6B]`), play-based subhead, **YouTube VSL** (`Urx2nBbI0-U` group training), form **immediately below video**, then `Why families love us` + `Monthly fees include`
- **CTAs:** All primary CTAs are **solid `#FF6B6B` with `2px #1A2744` border** (`kid-cta-btn`) and identical copy `Book a Demo Class` — header, hero form, 4 inline strips, curriculum, floating bar, and Final CTA
- **Floating CTA:** Sticky bottom bar (`Free 30-min demo • No credit card • 1-on-1`) — smaller `11px` on desktop/mobile, shows after `scrollY > 320`
- **Copy:** Friendly, 3rd-grade-parent readable, light direct-response nudge; em dashes removed (`—` → `-`)
- **Removals:** GAP + Tournament Finder from nav (header = logo + CTA only), `ParentsReviews` (Google Reviews) section, footer 3-col `About / Useful Links / Contact` block → minimal copyright bar
- **Final CTA:** New `src/components/landing/final-cta.tsx` inserted above FAQ

## Quick start

```bash
# Node 20+ or Bun 1.3+
bun install

# DB (SQLite at db/custom.db)
# .env → DATABASE_URL=file:/absolute/path/to/db/custom.db  (or file:./db/custom.db)
bun prisma generate
bun prisma db push

# Dev (http://localhost:3000, logs to dev.log + /tmp/dev.log)
bun run dev
# Build
bun run build
bun run start  # production: bun .next/standalone/server.js
```

## Project structure

```
src/
  app/
    layout.tsx        # metadata (ChessKidsNation, openGraph, icons)
    page.tsx          # Hero → Stats → Features → Curriculum → StudentsCarousel → Enrollment → Research → FinalCta → Faq → Footer + FloatingCta
    globals.css       # kid palette + kid-cta-btn (solid), kid-card, animations
  components/landing/
    header.tsx        # logo + CTA only
    hero.tsx          # single-column VSL (video + form + why/fees)
    demo-form.tsx     # kid-card, custom validation (no native tooltip), 30-min demo
    floating-cta.tsx  # sticky bottom CTA
    final-cta.tsx     # above FAQ
    features-section.tsx, curriculum-section.tsx, stats-section.tsx, ...
public/
  logo.jpg            # gstatic mirror (13K)
  logo.svg
db/custom.db          # SQLite (gitignored via .env path, checked in via prisma)
```

## Key configs

- `next.config.ts` — `output: "standalone"`, `ignoreBuildErrors: true`, `reactStrictMode: false`
- `.env` — `DATABASE_URL=file:/.../db/custom.db` (absolute for local dev; use relative `file:./db/custom.db` if your setup prefers)
- `prisma/schema.prisma` — `sqlite`, models `User`, `Post`

## Sections & CTAs

CTAs all point to `#book-demo` (DemoForm `id="book-demo"`):

- Header logo + `Book a Demo Class`
- Hero: video (`youtube.com/embed/Urx2nBbI0-U`) → form immediately below → why/fees
- Inline strips: after Stats, Features, Curriculum, Enrollment (page.tsx)
- `FinalCta` above FAQ
- `FloatingCta` bottom sticky (smaller, same copy)

## Notes for contributors

- Keep `1st Move` gradient simple: `from-[#7C3AED] to-[#FF6B6B]` on `#FFFBEB` for readability
- Keep CTAs solid `#FF6B6B` (hover `#E55A5A`), no rainbow gradients
- Single-column hero is intentional (VSL pattern); avoid reintroducing 2-col split
- Run `bun run build` before pushing — CI expects `✓ Compiled successfully`

## Deployment

Standalone build copies `public` and `.next/static`:

```bash
bun run build
# .next/standalone/server.js + .next/standalone/.next + public
```

Caddy / Docker example in `Caddyfile`, `mini-services/`.

## License

Private — ChessKidsNation / Nomiris Growth.
