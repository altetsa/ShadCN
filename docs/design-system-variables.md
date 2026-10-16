# 🎨 ShadCN Design System — Master Tokens & Variables Reference

> **Repository**: [github.com/altetsa/ShadCN](https://github.com/altetsa/ShadCN)  
> **Architecture**: Tailwind CSS v4 (`@theme inline`), CSS Custom Properties, OKLCH Color Space, Radix UI & Base UI Primitives  
> **Status**: Production Reference Specification  

This document serves as the single source of truth for all design tokens, CSS variables, typography scales, elevation layers, and keyframe animations implemented across the **ShadCN** design system and component registry.

---

## 📑 Table of Contents

1. [Architecture & Philosophy](#1-architecture--philosophy)
2. [Color Token System (Semantic Matrix)](#2-color-token-system-semantic-matrix)
3. [Sidebar Token Subsystem](#3-sidebar-token-subsystem)
4. [Chart & Data Visualization Tokens](#4-chart--data-visualization-tokens)
5. [Border Radius System](#5-border-radius-system)
6. [Elevation & Shadow Tokens](#6-elevation--shadow-tokens)
7. [Responsive Breakpoint Tokens](#7-responsive-breakpoint-tokens)
8. [Typography & Font Family Tokens](#8-typography--font-family-tokens)
9. [Animation & Keyframe Tokens](#9-animation--keyframe-tokens)
10. [Headless Primitive Variables (Radix / Base UI)](#10-headless-primitive-variables-radix--base-ui)
11. [Component Token Mapping & Best Practices](#11-component-token-mapping--best-practices)

---

## 1. Architecture & Philosophy

The ShadCN design system is built on modern CSS standards and Tailwind CSS v4:

- **OKLCH Color Space**: All perceptual colors are declared using `oklch(L C H)` ensuring uniform perceptual lightness across light and dark themes without muddy middle tones.
- **Dynamic CSS Variables**: Colors, radii, and shadows are exposed as CSS variables (`--variable-name`) on `:root` and `.dark` allowing real-time runtime theme switching without JavaScript re-renders.
- **Tailwind v4 `@theme inline` Integration**: Custom properties map automatically to utility classes:
  - `--background` ➔ `bg-background`, `text-background`, `border-background`
  - `--primary` ➔ `bg-primary`, `text-primary-foreground`
  - `--radius` ➔ `rounded-lg`, `rounded-md`, `rounded-sm`

---

## 2. Color Token System (Semantic Matrix)

### Core Semantic Tokens

| Token Name | Light Mode Value (OKLCH) | Dark Mode Value (OKLCH) | Semantic Purpose | Tailwind Classes |
| :--- | :--- | :--- | :--- | :--- |
| **`--background`** | `oklch(1 0 0)` (#ffffff) | `oklch(0.141 0.005 285.823)` | Base canvas background | `bg-background` |
| **`--foreground`** | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` (#ffffff) | Default body copy / primary text | `text-foreground` |
| **`--card`** | `oklch(1 0 0)` | `oklch(0.21 0.006 285.885)` | Elevated surface / card canvas | `bg-card` |
| **`--card-foreground`** | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` | Text inside elevated surfaces | `text-card-foreground` |
| **`--popover`** | `oklch(1 0 0)` | `oklch(0.21 0.006 285.885)` | Dropdown, popover, dialog backdrop | `bg-popover` |
| **`--popover-foreground`**| `oklch(0.141 0.005 285.823)`| `oklch(0.985 0 0)` | Text inside popovers & dialogs | `text-popover-foreground` |
| **`--primary`** | `oklch(0.21 0.006 285.885)` | `oklch(0.92 0.004 286.32)` | Primary CTA, active interactive states| `bg-primary`, `text-primary` |
| **`--primary-foreground`**| `oklch(0.985 0 0)` | `oklch(0.21 0.006 285.885)` | Text on top of primary background | `text-primary-foreground` |
| **`--secondary`** | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Secondary buttons, subtle badges | `bg-secondary` |
| **`--secondary-foreground`**|`oklch(0.21 0.006 285.885)` | `oklch(0.985 0 0)` | Text on top of secondary elements | `text-secondary-foreground`|
| **`--muted`** | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Neutral backgrounds (tabs, skeletons)| `bg-muted` |
| **`--muted-foreground`** | `oklch(0.552 0.016 285.938)` | `oklch(0.705 0.015 286.067)` | Secondary descriptions, captions | `text-muted-foreground` |
| **`--muted-2`** | `oklch(92.5% 0% 89.876)` | `oklch(30.1% 0% 89.876)` | Subdued auxiliary container background | `bg-muted-2` |
| **`--muted-2-foreground`**| `oklch(55.2% 3.5% 285.938)` | `oklch(80.2% 1% 286.305)` | Text on top of auxiliary container | `text-muted-2-foreground`|
| **`--accent`** | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Hover feedback on lists & menus | `bg-accent` |
| **`--accent-foreground`** | `oklch(0.21 0.006 285.885)` | `oklch(0.985 0 0)` | Text on active hovered items | `text-accent-foreground` |
| **`--destructive`** | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` | Destructive actions, errors, alerts | `bg-destructive`, `text-destructive`|
| **`--destructive-foreground`**| `oklch(0.985 0 0)` | `oklch(0.985 0 0)` | Text on top of destructive buttons | `text-destructive-foreground`|
| **`--border`** | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 10%)` | Subtle borders and dividing lines | `border-border` |
| **`--input`** | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 15%)` | Form input borders and boundaries | `border-input` |
| **`--ring`** | `oklch(0.705 0.015 286.067)` | `oklch(0.552 0.016 285.938)` | Accessible keyboard focus ring | `ring-ring`, `outline-ring` |

### Decorative Gradient Tokens

| Token Name | Light Mode Value | Dark Mode Value | Usage |
| :--- | :--- | :--- | :--- |
| **`--gradient-1`** | `oklch(64.3% 40.75% 269.926)` | `oklch(27% 39.25% 269.284)` | Hero badge glow / accent violet |
| **`--gradient-2`** | `oklch(72.7% 46.75% 144.688)` | `oklch(72.7% 46.75% 144.688)`| Radiant emerald / success shimmer |
| **`--gradient-3`** | `oklch(70.1% 37.75% 339.956)` | `oklch(70.1% 37.75% 339.956)`| Magenta / warm ambient glow |

---

## 3. Sidebar Token Subsystem

The application shell provides an isolated token subsystem to support independent sidebar contrast:

| Token Name | Light Mode (OKLCH) | Dark Mode (OKLCH) | Purpose |
| :--- | :--- | :--- | :--- |
| **`--sidebar`** | `oklch(0.985 0 0)` | `oklch(0.21 0.006 285.885)` | Sidebar background canvas |
| **`--sidebar-foreground`** | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` | Default navigation label color |
| **`--sidebar-primary`** | `oklch(0.21 0.006 285.885)` | `oklch(0.488 0.243 264.376)` | Active item indicator / badge |
| **`--sidebar-primary-foreground`**| `oklch(0.985 0 0)` | `oklch(0.985 0 0)` | Text on active item indicator |
| **`--sidebar-accent`** | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Hover state on sidebar buttons |
| **`--sidebar-accent-foreground`** | `oklch(0.21 0.006 285.885)` | `oklch(0.985 0 0)` | Text on hovered sidebar buttons |
| **`--sidebar-border`** | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 10%)` | Dividing edge between sidebar & body |
| **`--sidebar-ring`** | `oklch(0.705 0.015 286.067)` | `oklch(0.552 0.016 285.938)` | Focus indicator inside navigation |

---

## 4. Chart & Data Visualization Tokens

A 5-color categorical palette calibrated for accessible contrast:

| Token Name | Light Mode (OKLCH) | Dark Mode (OKLCH) | Visual Hue |
| :--- | :--- | :--- | :--- |
| **`--chart-1`** | `oklch(0.646 0.222 41.116)` | `oklch(0.488 0.243 264.376)` | Warm Tangerine / Indigo Blue |
| **`--chart-2`** | `oklch(0.6 0.118 184.704)` | `oklch(0.696 0.17 162.48)` | Teal / Mint Green |
| **`--chart-3`** | `oklch(0.398 0.07 227.392)` | `oklch(0.769 0.188 70.08)` | Deep Slate / Amber |
| **`--chart-4`** | `oklch(0.828 0.189 84.429)` | `oklch(0.627 0.265 303.9)` | Yellow-Gold / Purple-Violet |
| **`--chart-5`** | `oklch(0.769 0.188 70.08)` | `oklch(0.645 0.246 16.439)` | Coral / Crimson |

---

## 5. Border Radius System

Corner radii derive formulaically from the single root parameter `--radius`:

```css
:root {
  --radius: 8px; /* 0.5rem base radius */
}
```

| Radius Token | Formula | Resolved Default | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **`--radius-xs`** | `calc(var(--radius) - 4px)` | `4px` | `rounded-xs` |
| **`--radius-sm`** | `calc(var(--radius) - 4px)` | `4px` | `rounded-sm` |
| **`--radius-md`** | `calc(var(--radius) - 2px)` | `6px` | `rounded-md` |
| **`--radius-lg`** | `var(--radius)` | `8px` | `rounded-lg` |
| **`--radius-xl`** | `calc(var(--radius) + 4px)` | `12px` | `rounded-xl` |

---

## 6. Elevation & Shadow Tokens

Layered shadows with fine ambient and direct occlusion components:

| Shadow Token | CSS Definition | Purpose |
| :--- | :--- | :--- |
| **`--shadow-2xs`** | `0 1px 3px 0px hsl(0 0% 0% / 0.05)` | Micro-buttons, subtle input borders |
| **`--shadow-xs`** | `0 1px 3px 0px hsl(0 0% 0% / 0.05)` | Badges, pills, flat elements |
| **`--shadow-sm`** | `0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)` | Base cards, table headers |
| **`--shadow`** | `0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)` | Standard elevation |
| **`--shadow-md`** | `0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 2px 4px -1px hsl(0 0% 0% / 0.1)` | Hovered cards, floating tools |
| **`--shadow-lg`** | `0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 4px 6px -1px hsl(0 0% 0% / 0.1)` | Dropdown menus, popovers |
| **`--shadow-xl`** | `0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 8px 10px -1px hsl(0 0% 0% / 0.1)` | Modal dialogs, side sheets |
| **`--shadow-2xl`**| `0 1px 3px 0px hsl(0 0% 0% / 0.25)` | Lightbox previews, floating hero cards |

---

## 7. Responsive Breakpoint Tokens

| Breakpoint | Value | Target Devices |
| :--- | :--- | :--- |
| **`--breakpoint-sm`** | `640px` | Landscape phones, small phablets |
| **`--breakpoint-md`** | `768px` | Tablets, mobile breakpoint boundary |
| **`--breakpoint-lg`** | `1024px` | Small laptops, desktop content switch |
| **`--breakpoint-xl`** | `1280px` | Standard desktop screens |
| **`--breakpoint-2xl`**| `1400px` | Wide desktop monitors / enterprise displays |

---

## 8. Typography & Font Family Tokens

The design system embeds a comprehensive typographic hierarchy:

| Token | Font Family | Recommended Usage |
| :--- | :--- | :--- |
| **`--font-sans`** | `"Inter", sans-serif` | Default application body & UI controls |
| **`--font-serif`** | `"Roboto Serif", serif` | Longform editorial articles & quotes |
| **`--font-mono`** | `"Roboto Mono", monospace` | Code blocks, hashes, numeric stats |
| **`--font-playfair`** | `"Playfair Display", serif` | Luxury & editorial hero headlines |
| **`--font-caveat`** | `"Caveat", cursive` | Handcrafted notes, arrows, callouts |
| **`--font-calSans`** | `"Cal Sans", sans-serif` | Modern SaaS product headings |
| **`--font-bebasNeue`**| `"Bebas Neue", sans-serif` | High-impact marketing metrics & stats |
| **`--font-anton`** | `"Anton", sans-serif` | Bold poster typography |
| **`--font-instrumentSerif`**| `"Instrument Serif", serif`| Refined, high-fashion headings |
| **`--font-merriweather`** | `"Merriweather", serif` | Academic & reading copy |
| **`--font-figtree`** | `"Figtree", sans-serif` | Friendly SaaS product interfaces |
| **`--font-ubuntu`** | `"Ubuntu", sans-serif` | Technical and developer portals |
| **`--font-geist`** | `"Geist", sans-serif` | High-precision engineering UI |
| **`--font-poppins`** | `"Poppins", sans-serif` | Consumer apps & friendly dashboards |
| **`--font-dm-sans`** | `"DM Sans", sans-serif` | Clean tech landing pages |

---

## 9. Animation & Keyframe Tokens

Over 20 preconfigured animations configured in `@theme inline`:

| Animation Token | Timing & Curve | Description |
| :--- | :--- | :--- |
| **`--animate-accordion-down`** | `accordion-down 0.2s ease-out` | Smooth expansion of accordion items |
| **`--animate-accordion-up`** | `accordion-up 0.2s ease-out` | Smooth collapse of accordion items |
| **`--animate-fade-in`** | `fade-in 0.7s ease-out forwards` | Subtle fade and upward translate |
| **`--animate-fade-in-out`** | `fade-in-out 4s ease-in-out` | Pulsing presence indicator |
| **`--animate-marquee`** | `marquee var(--duration) linear infinite` | Horizontal infinite client logo ticker |
| **`--animate-marquee-vertical`** | `marquee-vertical var(--duration) linear infinite` | Vertical infinite review roll |
| **`--animate-infinite-slider`** | `infiniteSlider 20s linear infinite` | Smooth continuous product slider |
| **`--animate-shimmer-slide`** | `shimmer-slide var(--speed) ease-in-out infinite`| Shimmer reflection across buttons |
| **`--animate-spin-around`** | `spin-around calc(var(--speed)*2) infinite linear`| Stepped border rotation on cards |
| **`--animate-shine`** | `shine var(--duration) infinite linear` | Moving metallic reflection |
| **`--animate-ripple`** | `ripple var(--duration, 2s) ease infinite` | Expanding water-drop ripple wave |
| **`--animate-orbit`** | `orbit calc(var(--duration)*1s) linear infinite` | Planetary orbital rotation around hub |
| **`--animate-meteor`** | `meteor 5s linear infinite` | Diagonal shooting-star streak |
| **`--animate-line-shadow`** | `line-shadow 15s linear infinite` | Continuous background line pattern |
| **`--animate-aurora`** | `aurora 8s ease-in-out infinite alternate` | Ambient northern lights displacement |
| **`--animate-slide-down`** | `slideDown 100ms ease-out` | Collapsible drawer vertical drop |
| **`--animate-slide-up`** | `slideUp 100ms ease-out` | Collapsible drawer vertical retract |
| **`--animate-slide-left`** | `slideLeft 250ms ease-out` | Horizontal panel collapse |
| **`--animate-slide-right`** | `slideRight 250ms ease-out` | Horizontal panel expansion |

---

## 10. Headless Primitive Variables (Radix / Base UI)

Headless state and dimension variables injected at runtime:

- `--radix-accordion-content-height`: Measured height of active accordion panel.
- `--radix-collapsible-content-height`: Measured height of collapsible drawer.
- `--radix-collapsible-content-width`: Measured width of horizontal drawer.
- `--radix-popover-content-transform-origin`: Transform origin for popover zoom/fade entry.
- `--radix-tooltip-content-transform-origin`: Transform origin for tooltip bubble emergence.

---

## 11. Component Token Mapping & Best Practices

### Critical Styling Rules
1. **Never use raw color values**:  
   - ❌ `bg-blue-500`, `text-gray-900`, `border-black`  
   - ✅ `bg-primary`, `text-foreground`, `border-border`
2. **Never use manual `dark:` overrides for standard tokens**:  
   - ❌ `bg-white dark:bg-zinc-950`  
   - ✅ `bg-background` (automatically switches via CSS variable)
3. **Always merge classes using `cn()`**:  
   ```tsx
   import { cn } from "cn"

   <div className={cn("rounded-lg bg-card p-6 shadow-sm", className)} />
   ```
4. **Use `size-*` for symmetrical shapes**:  
   - ❌ `w-8 h-8`  
   - ✅ `size-8` (applies to avatars, button icons, spinners)
5. **Form elements must leverage semantic borders**:  
   - Base state: `border-input`
   - Focus ring: `focus-visible:ring-ring focus-visible:ring-2`
   - Invalid error state: `aria-invalid:border-destructive aria-invalid:ring-destructive/20`
