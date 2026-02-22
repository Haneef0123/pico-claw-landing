# PicoClaw Landing Page - Design Document

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| --claw-bg | #0D1117 | Page background |
| --claw-terminal | #161B22 | Terminal backgrounds |
| --claw-border | #30363D | Borders, dividers |
| --claw-text | #E6EDF3 | Primary text |
| --claw-muted | #8B949E | Secondary text |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| --claw-orange | #FF6B35 | Lobster accent, CTAs |
| --claw-go | #00ADD8 | Go language reference |
| --claw-success | #3FB950 | Success states |
| --claw-warning | #D29922 | Warnings, highlights |

### Terminal Colors
| Token | Hex | Usage |
|-------|-----|-------|
| --term-prompt | #FF6B35 | $ prompt |
| --term-command | #E6EDF3 | Typed commands |
| --term-output | #8B949E | Command output |
| --term-success | #3FB950 | Success messages |
| --term-path | #58A6FF | File paths |

## Typography

### Font Stack
```css
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-mono: ui-monospace, "JetBrains Mono", "Fira Code", "Cascadia Code", Menlo, Monaco, Consolas, monospace;
```

### Type Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 4rem / 64px | 700 | 1.1 |
| H2 (Section) | 2rem / 32px | 600 | 1.2 |
| H3 | 1.5rem / 24px | 600 | 1.3 |
| Body | 1rem / 16px | 400 | 1.6 |
| Code | 0.875rem / 14px | 400 | 1.5 |
| Small | 0.75rem / 12px | 400 | 1.5 |

## Spacing System

### Section Spacing
| Size | Value | Usage |
|------|-------|-------|
| Section Y | 6rem / 96px | Vertical section padding |
| Container X | 1.5rem / 24px | Horizontal page padding |
| Content Max | 72rem / 1152px | Max content width |

### Component Spacing
| Size | Value | Usage |
|------|-------|-------|
| xs | 0.25rem / 4px | Tight gaps |
| sm | 0.5rem / 8px | Small gaps |
| md | 1rem / 16px | Standard gaps |
| lg | 1.5rem / 24px | Large gaps |
| xl | 2rem / 32px | Section internal spacing |

## Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| sm | 4px | Buttons, small elements |
| md | 8px | Terminal windows |
| lg | 12px | Cards (if any) |
| full | 9999px | Pills, badges |

## Shadows
| Token | Value | Usage |
|-------|-------|-------|
| terminal | 0 8px 32px rgba(0,0,0,0.4) | Terminal windows |
| glow | 0 0 20px rgba(255,107,53,0.3) | Orange accent glow |

## Animation Timing

### Easing Functions
| Name | Value | Usage |
|------|-------|-------|
| default | cubic-bezier(0.22, 1, 0.36, 1) | Most animations |
| bounce | cubic-bezier(0.34, 1.56, 0.64, 1) | Playful elements |
| linear | linear | Continuous animations |

### Durations
| Type | Value | Usage |
|------|-------|-------|
| fast | 150ms | Micro-interactions |
| normal | 300ms | Standard transitions |
| slow | 500ms | Enter animations |
| typing | 50ms | Character reveal |

## Terminal Styling

```css
.terminal {
  background: #161B22;
  border: 1px solid #30363D;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}

.terminal-header {
  background: #21262D;
  border-bottom: 1px solid #30363D;
  padding: 12px 16px;
}

.terminal-body {
  padding: 16px;
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.6;
}

/* Window controls */
.terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.terminal-btn.close { background: #FF5F56; }
.terminal-btn.minimize { background: #FFBD2E; }
.terminal-btn.maximize { background: #27C93F; }
```

## Responsive Breakpoints

| Name | Min Width | Key Changes |
|------|-----------|-------------|
| sm | 640px | Larger text, more padding |
| md | 768px | Two-column layouts |
| lg | 1024px | Full desktop layout |
| xl | 1280px | Max width container |

## Iconography

- Use Lucide React icons
- Size: 16px inline, 24px standalone
- Color: inherit from text
- Stroke width: 2

## Accessibility

- Color contrast: All text meets WCAG AA (4.5:1 minimum)
- Focus states: Visible outline on interactive elements
- Reduced motion: Respect `prefers-reduced-motion`
- Semantic HTML: Proper heading hierarchy
