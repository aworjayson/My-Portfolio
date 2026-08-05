# Jayson Awori — Portfolio Design Brainstorm

## Approach: "Kinetic Minimalism" (Maintained from Original)

The chosen approach is the original "Kinetic Minimalism" design from the first portfolio build, now polished with content from a second refined version.

### Design Movement
Swiss/International Typographic Style meets modern digital minimalism. Think Dieter Rams' "less but better" philosophy applied to a personal portfolio.

### Core Principles
1. **Ruthless clarity** — Every element earns its place. No decorative noise.
2. **Typographic dominance** — Typography is the primary visual language, not images.
3. **Intentional asymmetry** — Off-grid placement creates visual tension and interest.
4. **Restrained motion** — Animations serve function (reveal, guide) not decoration.

### Color Philosophy
- **Primary**: Near-black (#0A0A0A) — authority, professionalism
- **Background**: Warm off-white (#F8F7F4) — approachable, not sterile
- **Accent**: Electric amber (#F59E0B) — energy, attention, warmth
- **Muted**: Stone gray (#A8A29E) — hierarchy without shouting
- **Online green**: (#3B7A57) — for status indicators

### Layout Paradigm
- Full-width sections with generous vertical rhythm
- Left-aligned typography with deliberate right-side negative space
- Staggered content blocks that break the conventional "centered card" pattern
- Asymmetric two-column layouts that shift between sections
- Section numbers as massive watermark compositional anchors

### Signature Elements
1. **Massive headline numbers** — Section numbers (01, 02, 03) rendered at 200px+ as watermark-style background elements
2. **Thin horizontal rule system** — Hairline dividers that create rhythm and structure
3. **Monospaced accents** — Small technical details in monospace font against serif headlines

### Interaction Philosophy
- Hover states reveal additional context
- Smooth scroll-triggered reveals — content appears as you scroll
- Minimal but precise — 200ms max for all transitions

### Animation
- Sections fade + slide up (translateY: 30px → 0, opacity 0 → 1) on scroll into view
- Staggered reveals: 60ms delay between child elements
- Skill bars animate width on first visibility
- Navigation underline grows from center on hover

### Typography System
- **Headlines**: "DM Serif Display" — elegant serif for name and section titles
- **Body**: "Inter" — clean, highly readable sans-serif for all body text
- **Accents**: "JetBrains Mono" — monospace for technical details, certifications, dates
- **Display**: "Space Grotesk" — for hero name (polished from v2)

### Brand Essence
**Jayson Awori — IT infrastructure that just works.** A portfolio for employers and clients who value reliability, precision, and quiet competence.

**Personality**: Precise · Grounded · Capable

### Brand Voice
- Headlines: Direct, confident, no fluff
- CTAs: Action-oriented, warm
- Microcopy: Technical but accessible

### Wordmark & Logo
A geometric monogram — interlocking "JA" formed by network-node shapes (circles connected by amber lines) on dark background. The logo from the second portfolio (favicon.svg) is used — a dark square with amber connection lines and white nodes.

### Signature Brand Color
**Electric Amber (#F59E0B)** — warm, energetic, distinctive. The "signal" color in an otherwise restrained palette.

## Style Decisions
- Amber accent line (`w-8 h-[1.5px] bg-accent`) precedes every section label as a brand motif
- Section numbers are compositional anchors — placed at alternating sides (left/right), overlapping content
- Skills grid uses internal borders between columns to create editorial table feel
- Contact icons are boxed in small bordered squares with amber hover states
- Monogram appears in nav, hero, contact section, and footer
- Period dots after section titles (`text-accent`) are a signature punctuation mark
- No decorative background images — only subtle hero texture at 30% opacity
- Experience items have thin amber vertical rule between period and content on desktop
- Stat labels use `[10px] tracking-[0.15em] uppercase` monospace for technical precision
- "Available for hire" status chip with pulsing green dot
- Downloadable CV link in navigation
- Volunteer section in credentials
- Education added alongside certifications
