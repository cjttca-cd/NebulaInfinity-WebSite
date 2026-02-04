# Plan: Design Tokens Migration

## Phases

### Phase A — Create token file
- Extract palette from REDESIGN-PROPOSAL.md into `styles/tokens.css`
- Import in root layout

### Phase B — Audit existing CSS
- Grep all hardcoded color values
- Map each to a semantic token

### Phase C — Replace
- Swap hardcoded values → `var(--token-name)`
- Component by component, page by page

### Phase D — Verify
- Visual regression check (manual screenshots)
- Build + deploy preview

## Estimated Effort
- Phase A: 1h
- Phase B: 1h
- Phase C: 3-4h
- Phase D: 1h
