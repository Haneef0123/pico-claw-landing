# PicoClaw Landing Page - Product Requirements Document

## Overview
A distinctive landing page for PicoClaw - an ultra-lightweight AI assistant written in Go, targeting tech-savvy developers who value efficiency and minimal resource usage.

---

## Core Identity

### Brand Philosophy
- **"Every bit helps, every bit matters"**
- No CLI tool bureaucracy - direct action
- $10 boards, <10MB RAM - extreme efficiency
- Built in Go - systems programming heritage

### Visual Identity
- **Mascot:** Subtle lobster theme (🦞) - referencing the "claw"
- **Colors:**
  - Background: #0D1117 (GitHub dark)
  - Terminal: #161B22
  - Text: #E6EDF3
  - Secondary: #8B949E
  - Accent: #FF6B35 (lobster orange)
  - Go Blue: #00ADD8
- **Typography:**
  - Body: system-ui, -apple-system, sans-serif
  - Code: JetBrains Mono, Fira Code, monospace

---

## Section Specifications

### 1. Hero Section
**Layout:** Full viewport height, centered content with terminal simulation

**Content:**
- Logo: Minimalist lobster claw SVG (1KB max)
- Headline: "PicoClaw"
- Subheadline: "An AI assistant that respects your hardware"
- Terminal animation showing real PicoClaw interaction

**Visual Elements:**
- [ ] Animated typing effect in terminal
- [ ] Blinking cursor
- [ ] Command history scroll
- [ ] No gradients, no abstract shapes

**Animations:**
```json
{
  "typing_speed": "50ms per character",
  "cursor_blink": "530ms interval",
  "terminal_scroll": "smooth auto-scroll"
}
```

### 2. Features Section (as Terminal Output)
**Layout:** Full-width terminal window showing "picoclaw --features"

**Content:**
- Each feature as a CLI output line
- No cards, no icons, just terminal text
- Color-coded output (green for success, yellow for info)

**Features to Display:**
- Local LLM inference (no API keys)
- <10MB RAM footprint
- <50ms cold start
- Markdown rendering
- File system integration
- Multi-model support (llama.cpp, etc.)

### 3. Performance Stats Section
**Layout:** Side-by-side comparison as terminal output

**Content:**
```
$ picoclaw benchmark --compare

Tool          RAM Usage    Startup    Binary Size
────────────  ──────────   ────────   ───────────
PicoClaw      8.2 MB       45ms       12 MB      
Competitor A  284 MB       2.1s       180 MB
Competitor B  1.2 GB       4.5s       450 MB
```

### 4. Installation Section
**Layout:** Copy-paste ready code blocks

**Content:**
- One-liner install command
- Docker run command
- Build from source
- System requirements

### 5. GitHub Integration
**Layout:** Stats bar showing GitHub metrics

**Content:**
- Stars count (animated)
- Forks count
- Latest release tag
- CI status badge

### 6. Footer
**Layout:** Minimal footer

**Content:**
- Copyright
- GitHub link
- License info (MIT)
- "Built with Go, deployed on Vercel"

---

## Animation Specifications

### Terminal Typewriter
```typescript
interface TypewriterConfig {
  typingSpeed: 50;        // ms per char
  deleteSpeed: 30;        // ms per char
  pauseBetween: 1500;     // ms
  cursorBlink: 530;       // ms
  cursorChar: "▋";        // block cursor
}
```

### Scroll Reveal
```typescript
interface ScrollReveal {
  duration: 0.6;          // seconds
  ease: [0.22, 1, 0.36, 1]; // custom bezier
  stagger: 0.1;           // seconds between items
}
```

### Counter Animation (GitHub stats)
```typescript
interface CounterAnimation {
  duration: 2;            // seconds
  ease: "easeOut";
  separator: ",";
}
```

---

## Technical Requirements

### Performance Budget
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total JS Bundle: < 100KB (gzipped)
- No external fonts (use system fonts)

### Accessibility
- Keyboard navigation
- Screen reader friendly
- Reduced motion support
- WCAG 2.1 AA compliant

### SEO
- Meta description
- Open Graph tags
- Twitter Card
- Structured data

---

## Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x"
  }
}
```

---

## File Structure

```
app/
├── sections/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Performance.tsx
│   ├── Installation.tsx
│   ├── GitHubStats.tsx
│   └── Footer.tsx
├── components/
│   ├── Terminal.tsx
│   ├── Typewriter.tsx
│   ├── CodeBlock.tsx
│   └── ClawLogo.tsx
├── hooks/
│   └── useTypewriter.ts
├── lib/
│   └── utils.ts
├── page.tsx
├── layout.tsx
└── globals.css
public/
└── (static assets)
```

---

## Success Criteria
- [ ] Distinctive design (not generic AI landing page)
- [ ] Terminal animations working smoothly
- [ ] <100KB JS bundle
- [ ] Lighthouse score > 90
- [ ] Responsive on all devices
- [ ] Deployed to Vercel with live URL
