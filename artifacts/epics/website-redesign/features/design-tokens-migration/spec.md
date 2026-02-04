# Spec: Design Tokens Migration

## Tokens to Define
1. **Colors** — background, surface, text hierarchy, accent, border, status
2. **Typography** — font families, sizes (sm→4xl), weights, line-heights
3. **Spacing** — 4px base grid (4, 8, 12, 16, 24, 32, 48, 64, 96)
4. **Shadows** — sm, md, lg (subtle, no heavy drop shadows)
5. **Borders** — radius scale, border widths

## File Structure
```
styles/
  tokens.css        ← CSS custom properties (root)
  tokens-dark.css   ← (optional) dark mode overrides
```

## Acceptance Criteria
- [ ] All pages render with tokens (no hardcoded color values in component CSS)
- [ ] `npm run build` passes
- [ ] Visual parity check against REDESIGN-PROPOSAL mockups
