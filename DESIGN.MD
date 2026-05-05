---
name: Dark Neobrutalist Finance
colors:
  background: '#0d0d0d'
  surface: '#1a1a1a'
  surface-2: '#252525'
  surface-3: '#333333'
  border: '#000000'
  stroke: '#ffffff'
  text: '#f5f5f5'
  text-muted: '#999999'
  primary: '#ffd93d'
  primary-hover: '#ffe566'
  secondary: '#a3e635'
  accent: '#c084fc'
  negative: '#ff6b6b'
  warning: '#f59e0b'
  positive: '#a3e635'
  shadow: '#000000'
typography:
  headline-xl:
    fontFamily: Archivo Black
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
    textTransform: uppercase
  headline-lg:
    fontFamily: Archivo Black
    fontSize: 32px
    fontWeight: '900'
    lineHeight: '1.2'
    textTransform: uppercase
  headline-md:
    fontFamily: Archivo Black
    fontSize: 24px
    fontWeight: '900'
    lineHeight: '1.2'
    textTransform: uppercase
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    textTransform: uppercase
    letterSpacing: 0.05em
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  gutter: 20px
  border-width: 3px
  shadow-sm: 3px 3px 0px
  shadow-md: 5px 5px 0px
  shadow-lg: 8px 8px 0px
---

## Brand & Style

This design system embraces **Dark Neobrutalism** — a bold, high-contrast aesthetic that pairs the raw energy of brutalist design with a dark, developer-focused palette. Inspired by DevForge-style dark UIs and neobrutalism.dev component patterns, it uses thick black borders against dark surfaces, electric accent colors (yellow, lime, violet), and aggressive typography to create a fintech dashboard that feels like a command center.

The dark background reduces eye strain during extended use while the high-contrast borders and vivid accents maintain the "loud" brutalist identity. Elements feel tangible and physical through hard offset shadows, zero-blur depth, and sharp corners.

## Colors

The palette is built on layered dark neutrals with vivid functional accents:

- **Background (#0d0d0d):** Near-black base, the "void" that makes accents pop.
- **Surface (#1a1a1a):** Card and container backgrounds, slightly lifted.
- **Primary (Electric Yellow #ffd93d):** Primary actions, key data, navigation highlights.
- **Secondary (Lime #a3e635):** Positive values, growth, savings, income.
- **Accent (Violet #c084fc):** Secondary UI elements, info badges, decorative highlights.
- **Negative (Coral #ff6b6b):** Spending, debts, danger alerts.
- **Stroke (#ffffff on dark / #000000 shadows):** White borders for contrast on dark, black hard shadows for depth.

## Typography

**Archivo Black** for all headlines — heavy, industrial, uppercase by default. Used for page titles, stat values, and section headers.

**Space Grotesk** for body text — geometric, clean, excellent readability on dark backgrounds.

**Space Mono** for data, tables, financial figures — monospaced for alignment, "ledger-like" feel. All numeric data uses tabular-nums.

## Layout & Spacing

12-column grid for desktop, fluid vertical stack for mobile. 8px baseline rhythm with generous internal padding to prevent the thick borders from feeling cramped.

The sidebar uses a solid border-right with the primary accent for the active state. Content areas have maximum width constraints (1600px) to prevent overly wide reading lines.

## Elevation & Depth

**Hard Shadows** with 0px blur, solid black fill:
- Small (3px offset): Secondary elements, badges, small buttons
- Medium (5px offset): Cards, primary containers
- Large (8px offset): Modal overlays, hero elements

**Interaction:** On hover/active, elements translate toward their shadow (reducing offset), simulating physical press. Transition: 100ms ease.

## Shapes

**Sharp corners throughout.** All containers, buttons, and inputs use `border-radius: 0`. This is non-negotiable for structural elements.

Exception: Progress bars and small circular indicators (status dots) may use full rounding for contrast against the rectangular grid.

## Components

### Buttons
- 3px white/light border, 4px black hard shadow offset
- Primary: Yellow background, black text, uppercase Archivo Black
- Secondary: Transparent with white border
- On hover: translate(2px, 2px) with reduced shadow
- On active: translate(4px, 4px) with no shadow

### Cards
- 3px white/light border on dark surface
- 5px black hard shadow offset to bottom-right
- Internal padding: 20-24px
- Header area with bottom border separator

### Input Fields
- 3px border, dark surface-2 background
- On focus: border changes to primary yellow, no glow/blur
- Placeholder text in Space Mono
- Label text uppercase, tracking-wider, muted color

### Data Visualizations
- Charts use thick 4px strokes
- Bar charts with solid fills, no gradients
- Grid lines use surface-3 color
- Tooltip with hard shadow + border

### Badges/Chips
- Rectangular (0 radius), 2px border
- Solid background fills with contrasting text
- Uppercase Space Mono text at 11px

### Tables
- No row background alternation — use border-bottom only
- Header row uppercase, tracking-wider, muted
- Monospace font for all numeric columns
