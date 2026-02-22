# PicoClaw Landing - Technical Specification

## Component Inventory

### shadcn/ui Components
**None** - Custom components only per PRD requirements

### Third-party Registry Components
**None** - All components custom built

### Custom Components
| Component | Purpose | Props |
|-----------|---------|-------|
| `Terminal` | Terminal window wrapper | `children`, `title`, `className` |
| `Typewriter` | Animated typing text | `text`, `speed`, `onComplete`, `className` |
| `CodeBlock` | Copy-able code snippet | `code`, `language`, `filename` |
| `ClawLogo` | SVG lobster claw logo | `size`, `className` |
| `Cursor` | Blinking terminal cursor | `blink`, `className` |
| `StatCounter` | Animated number counter | `value`, `duration`, `suffix` |

### Custom Hooks
| Hook | Purpose |
|------|---------|
| `useTypewriter` | Manage typing animation state |
| `useInView` | Intersection observer for scroll triggers |
| `useClipboard` | Copy to clipboard functionality |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Terminal typing | Framer Motion | `animate` with staggered children, character-by-character reveal | Medium |
| Cursor blink | CSS + React | CSS animation with `animation: blink` | Low |
| Terminal scroll | Framer Motion | `AnimatePresence` for new lines | Low |
| Stat counters | Framer Motion | `useMotionValue` + `useTransform` + `animate` | Medium |
| Section reveals | Framer Motion | `whileInView` with `viewport` settings | Low |
| Code copy feedback | Framer Motion | `AnimatePresence` for toast/notification | Low |
| GitHub star pulse | Framer Motion | `animate` with spring physics | Low |

---

## Animation Library Choices

### Primary: Framer Motion
- **Rationale:** Best React integration, declarative API, excellent performance
- **Use for:** All animations except cursor blink

### Secondary: CSS Animations
- **Rationale:** Performance for simple, repetitive animations
- **Use for:** Cursor blink, gradient effects (if any)

### Not Using:
- GSAP (overkill for this project)
- React Spring (Framer Motion preferred)
- Three.js (no 3D needed)

---

## Project File Structure

```
pico-claw-landing/
├── app/
│   ├── sections/
│   │   ├── Hero.tsx              # Hero with terminal
│   │   ├── Features.tsx          # CLI-style features list
│   │   ├── Performance.tsx       # Benchmark comparison
│   │   ├── Installation.tsx      # Install commands
│   │   ├── GitHubStats.tsx       # GitHub integration
│   │   └── Footer.tsx            # Minimal footer
│   ├── components/
│   │   ├── Terminal.tsx          # Terminal window component
│   │   ├── Typewriter.tsx        # Typing animation
│   │   ├── CodeBlock.tsx         # Code with copy button
│   │   ├── ClawLogo.tsx          # Lobster claw SVG
│   │   ├── Cursor.tsx            # Blinking cursor
│   │   ├── StatCounter.tsx       # Animated counter
│   │   └── AnimatedSection.tsx   # Scroll reveal wrapper
│   ├── hooks/
│   │   ├── useTypewriter.ts      # Typing logic
│   │   └── useClipboard.ts       # Copy functionality
│   ├── lib/
│   │   └── utils.ts              # Utilities
│   ├── page.tsx                  # Main page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── public/
│   └── (no external assets needed)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Dependencies to Install

```bash
# Core
npm install framer-motion lucide-react

# Dev (already included with Next.js)
# typescript, tailwindcss, postcss, autoprefixer
```

---

## Color Tokens (Tailwind)

```javascript
// tailwind.config.ts colors extension
colors: {
  'claw': {
    'bg': '#0D1117',
    'terminal': '#161B22',
    'border': '#30363D',
    'text': '#E6EDF3',
    'muted': '#8B949E',
    'orange': '#FF6B35',
    'go': '#00ADD8',
    'success': '#3FB950',
    'warning': '#D29922',
  }
}
```

---

## Performance Considerations

1. **Bundle Size:** Keep framer-motion imports tree-shaken
2. **Animations:** Use `transform` and `opacity` only (GPU accelerated)
3. **Fonts:** System fonts only, no external font loading
4. **Images:** SVG only, no raster images
5. **Code Splitting:** Each section as separate component for chunking

---

## Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 640px | Single column, smaller terminal |
| Tablet | 640px - 1024px | Adjusted spacing |
| Desktop | > 1024px | Full layout |
