# Nebula Infinity Site v2 - Design System & Implementation Plan

> **Branch:** `redesign/site-v2-bento-fresh`  
> **Theme:** AI Agents / Automation Workflows / Web3.0  
> **Style:** Light Premium Bento | Navy + Gold | Orbitron/Exo2

---

## 1. DESIGN SYSTEM DELTA (Current vs Target)

### 1.1 What to KEEP (Already Aligned with Home v2)

| Element | Status | Location |
|---------|--------|----------|
| Color palette | KEEP | `styles/theme.css` - Navy (#0f172a), Gold (#ca8a04), light bg (#f8fafc) |
| Typography | KEEP | `styles/globals.css` - Orbitron headings, Exo 2 body |
| CSS variables | KEEP | All spacing, radius, shadows, transitions |
| Container system | KEEP | `.container` max-width 1200px |
| Card component base | KEEP | `components/ui/Card.tsx` - glass/hover variants |
| Button component | KEEP | `components/ui/Button.tsx` - primary/outline/ghost variants |
| Header layout | KEEP | `components/layout/Header.tsx` - sticky, scroll effect |
| Footer layout | KEEP | `components/layout/Footer.tsx` - grid layout, social icons |
| Home page | KEEP | Reference implementation - bento grid, SVG icons, hero panel |
| Responsive breakpoints | KEEP | 1024px, 768px, 480px |

### 1.2 What to CHANGE

#### A. CRITICAL - Emoji Removal (Replace with Inline SVG)

| File | Current | Target SVG |
|------|---------|------------|
| `app/[lang]/projects/page.tsx` | `{project.icon ? '🚀' : '📦'}` | Inline SVG rocket/box icons |
| `app/[lang]/projects/[slug]/page.tsx` | `✓` checkmark character | Inline SVG checkmark |
| `app/[lang]/projects/[slug]/page.tsx` | `🎯` target emoji | Inline SVG target/bullseye icon |

#### B. Page Hero Sections - Standardize Pattern

**Target Pattern (from Home v2):**
```jsx
<section className={styles.hero}>
  <div className="container">
    <span className={styles.eyebrow}>CATEGORY / CONTEXT</span>
    <h1 className={styles.heroTitle}>Main Title</h1>
    <p className={styles.heroSubtitle}>Subtitle description</p>
  </div>
</section>
```

| Page | Current | Change Needed |
|------|---------|---------------|
| `/about` | Simple hero | Add eyebrow text, use `heroTitle` class with Orbitron |
| `/services` | Simple hero | Add eyebrow text |
| `/projects` | Simple hero | Add eyebrow text |
| `/projects/[slug]` | Has back link | Add eyebrow text after back link |
| `/contact` | Simple hero | Add eyebrow text |
| `/not-found` (both) | No eyebrow | Add subtle eyebrow "404 ERROR" |

#### C. Section Headers - Standardize Pattern

**Target Pattern:**
```jsx
<div className={styles.sectionHeader}>
  <h2 className={styles.sectionTitle}>Section Title</h2>
  <p className={styles.sectionSubtitle}>Supporting description text.</p>
</div>
```

| Page | Sections Needing Update |
|------|------------------------|
| `/about` | Mission/Vision section |
| `/projects/[slug]` | Overview, Tech Stack, Features, Results sections |

#### D. Bento Grid Layout - Apply Consistently

**Target CSS Pattern:**
```css
.bentoGrid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 20px;
}
.bentoFeatured { grid-column: span 6; }
.bentoCompact { grid-column: span 3; }
.bentoWide { grid-column: span 12; }
```

| Page | Current Layout | Target |
|------|----------------|--------|
| `/about` | 2-column auto-fit | 12-col bento grid with featured Mission card |
| `/contact` | 2:1 grid | Keep but add bento-style info cards |
| `/projects` | auto-fill grid | 12-col bento grid |
| `/projects/[slug]` | auto-fill grids | 12-col bento for tech/features |

#### E. Card Icon Styling - Standardize

**Target Pattern:**
```jsx
<span className={styles.cardIconWrap}>
  <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
    {/* SVG path */}
  </svg>
</span>
```

**CSS:**
```css
.cardIconWrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(202, 138, 4, 0.12);
  color: var(--accent-primary);
}
.cardIcon {
  width: 22px;
  height: 22px;
}
```

#### F. Status Badges - Align with Design System

Current status badges in projects are good but should use consistent naming:
- Add `styles.statusBadge` base class
- Use gold accent for "Live" / "Active" states

#### G. CTA Sections - Standardize Pattern

**Target Pattern:**
```jsx
<section className={styles.ctaSection}>
  <div className="container">
    <Card className={styles.ctaCard}>
      <div>
        <h2 className={styles.ctaTitle}>CTA Headline</h2>
        <p className={styles.ctaDescription}>Supporting text</p>
      </div>
      <div className={styles.ctaActions}>
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
      </div>
    </Card>
  </div>
</section>
```

---

## 2. FILE-BY-FILE IMPLEMENTATION PLAN

### Phase 1: Shared UI Components (Foundation)

**Goal:** Ensure UI primitives support all required patterns.

#### 1.1 `components/ui/Card.module.css`
- ADD `.cardIconWrap` and `.cardIcon` classes
- ADD `.bentoCard` variant class
- VERIFY `.featured` gradient matches Home v2

**Acceptance Criteria:**
- [ ] `.cardIconWrap` renders 44x44 gold-tinted icon container
- [ ] `.cardIcon` is 22x22
- [ ] No visual regression on existing Card usage

#### 1.2 `components/ui/Button.module.css`
- VERIFY focus ring uses gold accent
- No changes expected (already aligned)

**Acceptance Criteria:**
- [ ] Focus state shows `rgba(202, 138, 4, 0.25)` ring
- [ ] Primary button uses `--accent-primary` (#ca8a04)

---

### Phase 2: Shared Layout Components

**Goal:** Ensure Header/Footer are fully aligned.

#### 2.1 `components/layout/Header.tsx` + `Header.module.css`
- VERIFY logo text uses Orbitron
- ADD `.logoText { font-family: var(--font-heading); }`

**Acceptance Criteria:**
- [ ] "Nebula Infinity" text uses Orbitron font
- [ ] Mobile menu slides in smoothly
- [ ] Language toggle button has hover state

#### 2.2 `components/layout/Footer.tsx` + `Footer.module.css`
- VERIFY brand description alignment
- No major changes expected

**Acceptance Criteria:**
- [ ] Social icons have hover states
- [ ] Grid collapses properly on mobile
- [ ] Copyright year is current

---

### Phase 3: Not-Found Pages

**Goal:** Align 404 pages with design language.

#### 3.1 `app/not-found.tsx` + `app/not-found.module.css`
- ADD eyebrow text "404 ERROR"
- USE Orbitron for "404" number
- ADD subtle gold glow effect on 404

**Changes:**
```jsx
// ADD eyebrow
<span className={styles.eyebrow}>404 ERROR</span>
<h1 className={styles.title}>404</h1>
```

```css
/* ADD */
.eyebrow {
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  font-weight: 600;
  margin-bottom: 16px;
  display: block;
}
.title {
  font-family: var(--font-heading);
  /* ADD subtle gold text-shadow */
  text-shadow: 0 0 40px rgba(202, 138, 4, 0.15);
}
```

**Acceptance Criteria:**
- [ ] 404 pages show eyebrow "404 ERROR"
- [ ] "404" uses Orbitron font
- [ ] Buttons use primary/outline variants correctly
- [ ] Responsive on mobile

#### 3.2 `app/[lang]/not-found.tsx` + `app/[lang]/not-found.module.css`
- Same changes as 3.1

---

### Phase 4: About Page

**Goal:** Transform to bento-style layout.

#### 4.1 `app/[lang]/about/page.tsx`
- ADD eyebrow text in hero
- RESTRUCTURE to bento grid layout
- ADD SVG icons for Mission/Vision cards
- ADD credentials bar (like Home v2)

**New Structure:**
```jsx
<section className={styles.hero}>
  <div className="container">
    <span className={styles.eyebrow}>{isJa ? '会社概要' : 'About Us'}</span>
    <h1 className={styles.heroTitle}>{t.about.title}</h1>
    <p className={styles.heroSubtitle}>{t.about.subtitle}</p>
  </div>
</section>

<section className={styles.descriptionSection}>
  <div className="container">
    <Card className={styles.descriptionCard}>
      <p>{t.about.description}</p>
    </Card>
  </div>
</section>

<section className={styles.bentoSection}>
  <div className="container">
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{isJa ? '私たちの方針' : 'Our Direction'}</h2>
    </div>
    <div className={styles.bentoGrid}>
      <Card className={`${styles.bentoCard} ${styles.bentoFeatured}`}>
        <span className={styles.cardIconWrap}>{missionIcon}</span>
        <h3>{t.about.mission.title}</h3>
        <p>{t.about.mission.description}</p>
      </Card>
      <Card className={`${styles.bentoCard} ${styles.bentoCompact}`}>
        <span className={styles.cardIconWrap}>{visionIcon}</span>
        <h3>{t.about.vision.title}</h3>
        <p>{t.about.vision.description}</p>
      </Card>
    </div>
  </div>
</section>
```

**SVG Icons to Add:**
- Mission: Target/crosshair icon
- Vision: Eye/horizon icon

#### 4.2 `app/[lang]/about/page.module.css`
- ADD bento grid classes (copy from Home v2)
- ADD eyebrow, heroTitle, heroSubtitle classes
- ADD sectionHeader, sectionTitle, sectionSubtitle
- ADD cardIconWrap, cardIcon

**Acceptance Criteria:**
- [ ] Hero has eyebrow text
- [ ] Mission card spans 2 columns (featured)
- [ ] Vision card is compact (1 column)
- [ ] Cards have SVG icons with gold tint
- [ ] Responsive: stacks to single column on mobile
- [ ] No emojis anywhere

---

### Phase 5: Services Page

**Goal:** Refine existing bento layout, ensure full alignment.

#### 5.1 `app/[lang]/services/page.tsx`
- ADD eyebrow text in hero
- VERIFY all icons are inline SVG (already done)
- ADD section header to bento grid

**Changes:**
```jsx
// ADD eyebrow
<span className={styles.eyebrow}>{isJa ? 'サービス' : 'Services'}</span>
```

#### 5.2 `app/[lang]/services/page.module.css`
- ADD eyebrow class
- VERIFY bento grid matches Home v2 exactly

**Acceptance Criteria:**
- [ ] Hero has eyebrow text
- [ ] Featured service card has gold gradient background
- [ ] All icons are SVG with gold accent
- [ ] Principles section aligned
- [ ] CTA section matches Home v2 pattern
- [ ] Responsive layout works

---

### Phase 6: Projects List Page

**Goal:** Remove emojis, add bento grid, standardize cards.

#### 6.1 `app/[lang]/projects/page.tsx`

**Critical Changes:**
```jsx
// REMOVE emoji
<div className={styles.projectIcon}>{project.icon ? '🚀' : '📦'}</div>

// REPLACE WITH SVG
const projectIcon = (
  <svg className={styles.projectIconSvg} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 4.5l-1.5 4.5H6l3.7 2.7-1.4 4.3L12 13.3l3.7 2.7-1.4-4.3L18 9H13.5z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>
);
```

- ADD eyebrow text in hero
- CONVERT to 12-column bento grid
- ADD section header

#### 6.2 `app/[lang]/projects/page.module.css`
- REMOVE `.projectIcon` font-size (emoji sizing)
- ADD `.projectIconWrap` and `.projectIconSvg` classes
- ADD bento grid classes
- ADD eyebrow, section header classes

**Acceptance Criteria:**
- [ ] NO emojis in project cards
- [ ] Project cards use SVG icons with gold accent
- [ ] Hero has eyebrow text
- [ ] Grid uses 12-column bento system
- [ ] Status badges (completed/in-progress) render correctly
- [ ] Tags have proper hover states
- [ ] Responsive layout

---

### Phase 7: Project Detail Page

**Goal:** Remove emojis, standardize all sections.

#### 7.1 `app/[lang]/projects/[slug]/page.tsx`

**Critical Changes:**

```jsx
// REMOVE checkmark character
<span className={styles.checkmark}>✓</span>

// REPLACE WITH SVG
const checkIcon = (
  <svg className={styles.checkIcon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M6 12.5l4 4 8-9"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);
```

```jsx
// REMOVE target emoji
<span className={styles.resultIcon}>🎯</span>

// REPLACE WITH SVG
const targetIcon = (
  <svg className={styles.resultIconSvg} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7"/>
    <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.7"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>
);
```

- ADD eyebrow text after back link
- ADD section headers to all sections
- CONVERT tech grid and features grid to bento

#### 7.2 `app/[lang]/projects/[slug]/page.module.css`
- ADD eyebrow class
- ADD sectionHeader classes
- REPLACE `.checkmark` with `.checkIcon` (SVG styling)
- REPLACE `.resultIcon` with `.resultIconWrap` + `.resultIconSvg`
- ADD bento grid classes

**Acceptance Criteria:**
- [ ] NO emojis anywhere
- [ ] Checkmarks are SVG with success color
- [ ] Result icons are SVG with gold accent
- [ ] All sections have proper headers
- [ ] Back link has hover animation
- [ ] Tech stack in bento grid
- [ ] Features in bento grid
- [ ] CTA section matches pattern
- [ ] Responsive layout

---

### Phase 8: Contact Page

**Goal:** Add eyebrow, refine info cards to bento style.

#### 8.1 `app/[lang]/contact/page.tsx`
- ADD eyebrow text in hero
- ADD SVG icons to info cards (email, social)
- WRAP info cards in proper bento structure

**Changes:**
```jsx
<span className={styles.eyebrow}>{isJa ? 'お問い合わせ' : 'Contact'}</span>
```

#### 8.2 `app/[lang]/contact/page.module.css`
- ADD eyebrow class
- ADD card icon styling for info cards
- VERIFY form inputs match design system

**Acceptance Criteria:**
- [ ] Hero has eyebrow text
- [ ] Info cards have icon wrappers with gold accent
- [ ] Form inputs have focus states with gold ring
- [ ] Success/error messages styled correctly
- [ ] Social links have proper hover states
- [ ] Responsive: info section moves above form on mobile

---

## 3. QA CHECKLIST FOR OPUS ACCEPTANCE

### Global Checks (All Pages)

| # | Check | PASS Criteria |
|---|-------|---------------|
| G1 | No emojis | `grep -r "emoji\|🚀\|📦\|✓\|🎯" app/` returns nothing |
| G2 | Orbitron headings | All h1/h2/h3 use `font-family: var(--font-heading)` |
| G3 | Gold accent | Primary buttons, icons, focus rings use #ca8a04 |
| G4 | Navy text | Primary text uses #0f172a or #020617 |
| G5 | Light background | Page bg is #f8fafc |
| G6 | No hero images | No `<img>` in hero sections (except logo) |
| G7 | No chart libraries | No recharts/chart.js imports |
| G8 | Routing intact | All `/${lang}/page` routes work |
| G9 | i18n intact | JA/EN translations render correctly |
| G10 | No new deps | `package.json` unchanged (no new dependencies) |

### Page-Specific Checks

#### Home Page (Reference - Should Already Pass)
| # | Check | PASS Criteria |
|---|-------|---------------|
| H1 | Eyebrow | Has uppercase eyebrow text |
| H2 | Hero panel | Right-side panel with workflow blueprint |
| H3 | Bento grid | 6 cards in 12-col grid |
| H4 | SVG icons | All cards have inline SVG icons |
| H5 | Credentials bar | 4-item grid with check icons |
| H6 | Principles | 3-col grid |
| H7 | CTA | Gradient background card |

#### About Page
| # | Check | PASS Criteria |
|---|-------|---------------|
| A1 | Eyebrow | Hero shows "会社概要" / "About Us" |
| A2 | Bento layout | Mission featured (span 6), Vision compact |
| A3 | SVG icons | Mission/Vision have icon wrappers |
| A4 | Section header | "Our Direction" section has header |

#### Services Page
| # | Check | PASS Criteria |
|---|-------|---------------|
| S1 | Eyebrow | Hero shows "サービス" / "Services" |
| S2 | Featured card | Smart Contract card spans 2 cols |
| S3 | All SVG | All service icons are inline SVG |
| S4 | Principles | 3-item list with gold bullets |

#### Projects List Page
| # | Check | PASS Criteria |
|---|-------|---------------|
| P1 | Eyebrow | Hero shows "プロジェクト" / "Projects" |
| P2 | No emojis | Project icons are SVG, not 🚀/📦 |
| P3 | Bento grid | Cards in 12-col grid |
| P4 | Status badges | Completed=green, In Progress=orange |

#### Project Detail Page
| # | Check | PASS Criteria |
|---|-------|---------------|
| PD1 | Eyebrow | Shows after back link |
| PD2 | No checkmark emoji | Uses SVG checkmark |
| PD3 | No target emoji | Uses SVG target icon |
| PD4 | Section headers | All sections have h2 + subtitle |
| PD5 | Bento grids | Tech stack and features use bento |

#### Contact Page
| # | Check | PASS Criteria |
|---|-------|---------------|
| C1 | Eyebrow | Hero shows "お問い合わせ" / "Contact" |
| C2 | Form focus | Inputs show gold focus ring |
| C3 | Info cards | Have icon wrappers |
| C4 | Social icons | SVG with hover states |

#### Not-Found Pages (Both)
| # | Check | PASS Criteria |
|---|-------|---------------|
| NF1 | Eyebrow | Shows "404 ERROR" |
| NF2 | Orbitron 404 | Large 404 uses heading font |
| NF3 | Dual buttons | JA primary, EN outline |
| NF4 | Centered | Content vertically centered |

### Responsive Checks (All Pages)

| Width | Check | PASS Criteria |
|-------|-------|---------------|
| 1280px | Wide desktop | Full bento grid visible |
| 1024px | Desktop | Grids reduce columns |
| 768px | Tablet | Mobile menu appears, grids stack |
| 480px | Mobile | Single column, full-width buttons |

### Accessibility Checks

| # | Check | PASS Criteria |
|---|-------|---------------|
| ACC1 | SVG aria-hidden | All decorative SVGs have `aria-hidden="true"` |
| ACC2 | Focus visible | All interactive elements have focus states |
| ACC3 | Color contrast | Text passes WCAG AA (4.5:1 minimum) |
| ACC4 | Reduced motion | `prefers-reduced-motion` respected |

---

## 4. IMPLEMENTATION ORDER SUMMARY

```
Phase 1: UI Components (Card.module.css refinements)
    ↓
Phase 2: Layout Components (Header/Footer tweaks)
    ↓
Phase 3: Not-Found Pages (quick wins, low risk)
    ↓
Phase 4: About Page (medium complexity)
    ↓
Phase 5: Services Page (refinement only)
    ↓
Phase 6: Projects List Page (emoji removal critical)
    ↓
Phase 7: Project Detail Page (emoji removal critical)
    ↓
Phase 8: Contact Page (refinement)
```

**Estimated Effort per Phase:**
- Phase 1-2: 30 min
- Phase 3: 30 min
- Phase 4: 1 hour
- Phase 5: 30 min
- Phase 6: 1 hour
- Phase 7: 1.5 hours
- Phase 8: 30 min

**Total: ~6 hours**

---

## 5. SVG ICON LIBRARY (Copy-Paste Ready)

### Mission Icon (Target/Crosshair)
```jsx
<svg viewBox="0 0 24 24" aria-hidden="true">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7"/>
  <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.7"/>
  <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
</svg>
```

### Vision Icon (Eye/Horizon)
```jsx
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    d="M12 5.5C7 5.5 2.7 8.7 1 12c1.7 3.3 6 6.5 11 6.5s9.3-3.2 11-6.5c-1.7-3.3-6-6.5-11-6.5z"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.7"
  />
  <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7"/>
</svg>
```

### Project Icon (Star/Rocket)
```jsx
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    d="M12 4.5l-1.5 4.5H6l3.7 2.7-1.4 4.3L12 13.3l3.7 2.7-1.4-4.3L18 9H13.5z"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.7"
  />
</svg>
```

### Checkmark Icon (for features)
```jsx
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    d="M6 12.5l4 4 8-9"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
  />
</svg>
```

### Target/Bullseye Icon (for results)
```jsx
<svg viewBox="0 0 24 24" aria-hidden="true">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7"/>
  <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.7"/>
  <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
</svg>
```

---

## 6. NOTES FOR CODEX IMPLEMENTATION

1. **Always preserve existing imports** - Don't remove i18n, routing, or translation imports
2. **Test both languages** - Run dev server and check /ja/ and /en/ routes
3. **Mobile-first testing** - After each phase, resize to 375px width
4. **Git commits** - One commit per phase with descriptive message
5. **No new dependencies** - Everything uses existing CSS + inline SVG

---

*Document generated for Codex implementation. Reference Home v2 (`app/[lang]/page.tsx` + `page.module.css`) as the canonical design.*
