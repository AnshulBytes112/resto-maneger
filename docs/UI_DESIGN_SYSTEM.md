# UI & UX Design System - FINBOOKS

This document defines the visual identity and UI patterns for the FINBOOKS platform, based on the approved reference designs.

## 1. Color Palette

All styling must use these tokens (already configured or to be added to `global.css`). Do not use hardcoded hex values.

| Token | Role | Estimated Hex |
|---|---|---|
| `--background` | Main App Background | `#fdfbf7` (Warm Cream) |
| `--primary` | Action Buttons, Active States | `#e67e22` (Orange/Amber) |
| `--primary-foreground` | Text on Primary | `#ffffff` |
| `--secondary` | Sidebar/Muted Action | `#f1e9da` (Beige) |
| `--accent` | Success Actions (e.g., Print) | `#27ae60` (Emerald Green) |
| `--muted` | Secondary Buttons/Input BG | `#f8f4eb` |
| `--foreground` | Main Text | `#2c3e50` (Dark Charcoal) |
| `--muted-foreground` | Subtext/Metadata | `#7f8c8d` |
| `--card` | Surface level 1 | `#ffffff` |
| `--border` | Dividers/Input Borders | `#e9e2d5` |

## 2. Layout & Components

### Sidebar
- **Background**: White or soft beige.
- **Active Item**: Full-width rounded background using `--primary`.
- **Icons**: Clean, line-based icons (Lucide React).

### Cards & Containers
- **Rounding**: Use `rounded-xl` or `rounded-2xl` for main containers.
- **Shadow**: Subtle elevation using `shadow-sm`.
- **padding**: Generous whitespace (typically `p-6` or `p-8`).

### Buttons
- **Primary Actions**: Orange background, white text.
- **Secondary Actions**: Beige background, dark text.
- **Success Actions**: Green background (specifically for "Bill & Print" or "Complete").
- **Hover Effects**: Subtle darken/lighten on hover.

## 3. Data Visualization
- **Charts**: Use smooth, wave-like gradients.
- **Primary Line**: Orange (`--primary`).
- **Secondary Line**: Muted Brown/Gold.
- **Fill**: Semi-transparent gradients.

## 4. POS Interface
- **Categories**: Pill-shaped tab selectors using `--primary` for active state.
- **Item Cards**: Image at top (circular or rounded), name in middle, price in bold orange.
- **Cart**: Sticky right-side panel with clear totals and large action buttons at the bottom.

---
**Reference Imagery**: Hosted in project assets / design folder.
