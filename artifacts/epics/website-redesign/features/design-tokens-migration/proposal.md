# Proposal: Design Tokens Migration

## Problem
Current site uses hardcoded dark-theme colors scattered across CSS files. No centralized token system exists, making redesign fragile and inconsistent.

## Solution
Introduce CSS custom properties (design tokens) as the single source of truth for colors, typography, spacing, and shadows — based on the palette defined in `REDESIGN-PROPOSAL.md`.

## Impact
- All existing pages affected (token swap)
- No content or structural changes
- Foundation for all subsequent redesign features

## Open Questions
- Do we keep a dark mode toggle or go light-only for v2?
- Token naming convention: semantic (`--text-primary`) vs. scale (`--gray-900`)?
