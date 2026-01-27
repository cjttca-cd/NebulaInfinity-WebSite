# NebulaInfinity Website Redesign Proposal

## Executive Summary

Transform the current dark, Linear-inspired design into a **clean, light-toned, professional** aesthetic. The goal: warmth without flashiness, sophistication without complexity.

---

## Part 1: Design Direction

### 1.1 Color Palette

```css
/* Core Light Palette */
--background:           #fafafa;      /* warm off-white */
--background-secondary: #ffffff;      /* pure white for cards */
--surface:              #ffffff;      
--surface-hover:        #f5f5f5;      /* subtle hover state */
--surface-elevated:     #ffffff;

/* Text Hierarchy */
--text-primary:         #18181b;      /* near-black for headings */
--text-secondary:       #52525b;      /* dark gray for body */
--text-tertiary:        #a1a1aa;      /* light gray for meta */
--text-muted:           #d4d4d8;      /* disabled states */

/* Accent (restrained teal-gray, professional) */
--accent-primary:       #2d3748;      /* charcoal - primary CTAs */
--accent-primary-hover: #1a202c;      /* darker on hover */
--accent-secondary:     #718096;      /* muted blue-gray */
--accent-subtle:        #e2e8f0;      /* very light accent for badges */

/* Borders */
--border:               #e4e4e7;      /* light gray */
--border-hover:         #d4d4d8;      /* slightly darker */
--border-focus:         #a1a1aa;      /* focus ring */

/* Status (kept subtle) */
--success:              #059669;      /* teal-green */
--warning:              #d97706;      /* amber */
--error:                #dc2626;      /* red */
```

### 1.2 Typography

**Font Stack** (system fonts, no extra dependencies):
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

Optional: Load **Inter** from Google Fonts (or use system default). Inter is neutral, professional, excellent for UI.

**Type Scale:**
| Element | Size | Weight | Letter-spacing |
|---------|------|--------|----------------|
| H1 | clamp(2rem, 4vw, 3rem) | 600 | -0.02em |
| H2 | clamp(1.5rem, 3vw, 2.25rem) | 600 | -0.015em |
| H3 | 1.25rem | 600 | -0.01em |
| Body | 1rem (16px) | 400 | 0 |
| Small | 0.875rem | 400 | 0.01em |
| Caption | 0.75rem | 500 | 0.02em |

**Line Heights:**
- Headings: 1.2
- Body: 1.6
- Tight (buttons, labels): 1.4

### 1.3 Spacing System

Use an 8px base grid with named tokens:

```css
--space-1:  4px;   /* micro */
--space-2:  8px;   /* tight */
--space-3:  12px;  /* compact */
--space-4:  16px;  /* base */
--space-5:  24px;  /* relaxed */
--space-6:  32px;  /* section-gap */
--space-7:  48px;  /* section */
--space-8:  64px;  /* large section */
--space-9:  96px;  /* hero */
```

### 1.4 Shadows

Light, diffuse shadows for depth without drama:

```css
--shadow-xs:  0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-sm:  0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md:  0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03);
--shadow-lg:  0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.02);
--shadow-xl:  0 20px 25px rgba(0, 0, 0, 0.06), 0 8px 10px rgba(0, 0, 0, 0.03);
```

### 1.5 Border Radius

Keep current values (already good):
```css
--radius-sm:   4px;
--radius-md:   8px;
--radius-lg:   12px;
--radius-xl:   16px;
--radius-full: 9999px;
```

### 1.6 Transitions

Subtle, professional timing:
```css
--transition-fast: 120ms ease-out;
--transition-base: 200ms ease-out;
--transition-slow: 300ms ease-out;
```

---

## Part 2: File-by-File Implementation Plan

### Phase 1: Design System Foundation

#### Task 1.1: Update `styles/theme.css`
**Priority:** Critical  
**Effort:** 30 min

- [ ] Replace all dark color values with light palette
- [ ] Update shadow tokens
- [ ] Update gradient values (simplify to none/minimal)
- [ ] Update selection colors
- [ ] Remove unused gradient variables

#### Task 1.2: Update `styles/globals.css`
**Priority:** Critical  
**Effort:** 20 min

- [ ] Update `::selection` to use charcoal bg + white text
- [ ] Update scrollbar colors for light theme
- [ ] Simplify `.glass` class (remove gradient, use subtle shadow)
- [ ] Remove gradient text classes (keep solid colors)
- [ ] Update `.card-hover` effect (softer shadow, no translateY—just shadow)
- [ ] Add `--font-sans` loading if using Inter

---

### Phase 2: Core Components

#### Task 2.1: Update `components/ui/Button.module.css`
**Priority:** High  
**Effort:** 20 min

Changes:
- [ ] `.primary`: `background: var(--accent-primary); color: white;`
- [ ] `.primary:hover`: Darken background, subtle shadow
- [ ] `.secondary`: Light gray bg with border
- [ ] `.outline`: Transparent with charcoal border
- [ ] `.ghost`: No bg, text only, hover adds bg

New styling:
```css
.primary {
  background: var(--accent-primary);
  color: #ffffff;
  border: none;
}
.primary:hover:not(:disabled) {
  background: var(--accent-primary-hover);
  box-shadow: var(--shadow-sm);
}
```

#### Task 2.2: Update `components/ui/Card.module.css`
**Priority:** High  
**Effort:** 15 min

- [ ] Set white background
- [ ] Use lighter border color
- [ ] Simplify hover: shadow only, no transform
- [ ] Remove glass effects (solid background)

```css
.card {
  background: var(--background-secondary);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xs);
}
.hover:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-hover);
}
```

---

### Phase 3: Layout Components

#### Task 3.1: Update `components/layout/Header.module.css`
**Priority:** High  
**Effort:** 25 min

- [ ] Light background (`--background`)
- [ ] Bottom border always visible (subtle)
- [ ] Scrolled state: add shadow, no color change
- [ ] Remove logo drop-shadow
- [ ] Language button: outline style
- [ ] Update mobile menu styling

#### Task 3.2: Update `components/layout/Footer.module.css`
**Priority:** Medium  
**Effort:** 15 min

- [ ] Light gray background (`#f5f5f5`)
- [ ] Update text colors
- [ ] Social links: outline style, not filled

---

### Phase 4: Page Styles

#### Task 4.1: Update `app/[lang]/page.module.css` (Home)
**Priority:** High  
**Effort:** 30 min

- [ ] Hero section: Remove dark overlay, use semi-transparent light overlay or text shadow for legibility
- [ ] OR use solid light hero bg with pattern/illustration
- [ ] Service icons: Remove drop-shadow (emoji look better clean on light)
- [ ] CTA card: Light accent bg, no gradient

#### Task 4.2: Update `app/[lang]/about/page.module.css`
**Priority:** Medium  
**Effort:** 15 min

- [ ] Same patterns as home
- [ ] Simplify description card

#### Task 4.3: Update `app/[lang]/services/page.module.css`
**Priority:** Medium  
**Effort:** 15 min

- [ ] Remove accent gradient references (`--accent-cyan`)
- [ ] Checkmarks use `var(--success)` or charcoal

#### Task 4.4: Update `app/[lang]/contact/page.module.css`
**Priority:** Medium  
**Effort:** 20 min

- [ ] Form inputs: white bg, light border
- [ ] Focus states: subtle focus ring (no glow)
- [ ] Success/error messages: softer colors
- [ ] Social links: outline style

#### Task 4.5: Update `app/[lang]/projects/page.module.css` and `[slug]/page.module.css`
**Priority:** Medium  
**Effort:** 15 min

- [ ] Same card treatment
- [ ] Tag badges: light accent bg

#### Task 4.6: Update `app/not-found.module.css` and `app/[lang]/not-found.module.css`
**Priority:** Low  
**Effort:** 10 min

- [ ] Match light theme

---

### Phase 5: Final Polish

#### Task 5.1: Hero Image Strategy
**Priority:** High  
**Effort:** Variable

Options:
1. **Keep existing image** with light overlay (rgba(255,255,255,0.85))
2. **Replace** with abstract light-toned SVG pattern
3. **Remove** and use solid off-white + subtle geometric pattern

Recommendation: Option 1 or 3 (simplest).

#### Task 5.2: Typography Enhancement (Optional)
**Effort:** 10 min

Add Inter from Google Fonts in `app/[lang]/layout.tsx`:
```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

---

## Part 3: Optional Lightweight Dependencies

### Recommended (if any animation polish needed):
1. **None required** — CSS transitions suffice for this design.

### Optional nice-to-haves:
1. **`clsx`** (418 bytes gzipped) — cleaner className logic  
   `npm install clsx`  
   Already doing manual joining; clsx is cleaner.

2. **CSS `@layer`** — organize base/components/utilities (native, no dep)

---

## Part 3: Acceptance Checklist

### Functional Requirements
- [ ] All pages render without errors
- [ ] Form submissions work (contact page)
- [ ] Language switching works
- [ ] Mobile responsive (≤768px)
- [ ] Links/navigation functional

### Visual Requirements
- [ ] Consistent light backgrounds across all pages
- [ ] No dark remnants (check `:root` variables)
- [ ] Text contrast meets WCAG AA (4.5:1 for body)
- [ ] Buttons visually distinct (primary vs secondary)
- [ ] Cards have consistent styling
- [ ] Hover states visible but subtle
- [ ] Focus states accessible (visible ring)
- [ ] No jarring color transitions on scroll

### Typography
- [ ] Headings use `var(--text-primary)` (#18181b)
- [ ] Body uses `var(--text-secondary)` (#52525b)
- [ ] No oversized type (hero max ~3rem)
- [ ] Consistent line-height (1.6 for body)

### Specific Components
- [ ] Header: Light bg, subtle bottom border
- [ ] Footer: Light gray bg, proper link colors
- [ ] Buttons: Charcoal primary, clear states
- [ ] Cards: White bg, light border, soft shadow
- [ ] Forms: Clean inputs, visible focus

### Performance
- [ ] No new JS dependencies
- [ ] No layout shifts on load
- [ ] Fonts load gracefully (optional Inter)

### Cross-browser
- [ ] Chrome ✓
- [ ] Safari ✓
- [ ] Firefox ✓
- [ ] Mobile Safari ✓

---

## Quick Reference: Color Mapping

| Current (Dark) | New (Light) | Usage |
|----------------|-------------|-------|
| `#0d0e11` | `#fafafa` | Page background |
| `#1a1b1f` | `#ffffff` | Card/surface |
| `#f6f8fa` | `#18181b` | Primary text |
| `#b4b4b4` | `#52525b` | Secondary text |
| `#27272a` | `#e4e4e7` | Borders |
| `#ffffff` (btn) | `#2d3748` | Primary button |

---

## Estimated Total Effort

| Phase | Effort |
|-------|--------|
| Phase 1: Foundation | 50 min |
| Phase 2: Components | 35 min |
| Phase 3: Layout | 40 min |
| Phase 4: Pages | 1h 45min |
| Phase 5: Polish | 30 min |
| **Total** | **~4 hours** |

---

## Summary

This redesign delivers:
- **Warmth**: Off-white backgrounds, charcoal accents
- **Professionalism**: Restrained palette, no flashy gradients
- **Consistency**: Unified spacing/typography/shadow tokens
- **Simplicity**: Zero new heavy dependencies
- **Maintainability**: CSS variable-driven, easy to tweak

The result will feel like a polished SaaS marketing site — trustworthy, modern, readable.
