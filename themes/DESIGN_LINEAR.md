# 📐 Design System Specification: Linear Theme

> **Theme**: `linear`  
> **Source**: [Shadcnblocks Themes](https://www.shadcnblocks.com/themes)  
> **Format**: Design System Prompt & Specification for **Vercel v0**, **Claude Code**, **Cursor**, **Lovable**  
> **Stack**: React 19 / 18, Tailwind CSS v4, Radix UI Primitives, `cn()` helper  

---

## 🤖 Instructions for AI Coding Assistant (Vercel v0 / Claude / Cursor)

When generating pages, components, and layouts for this project:
1. **Strictly adhere to the CSS variables and color tokens** defined below. Never use arbitrary Tailwind colors (e.g. `bg-blue-600`, `text-slate-900`, `border-gray-200`).
2. Always use semantic Tailwind classes: `bg-background`, `text-foreground`, `bg-card`, `text-card-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, `border-input`, `ring-ring`.
3. Support both **Light** and **Dark** modes automatically through these tokens without writing manual `dark:` color overrides.
4. Merge dynamic classes using `import { cn } from "cn"` (or `@/lib/utils`).
5. Use `data-slot` attributes and Radix UI / Base UI accessible primitives for all interactive components.

---

## 🎨 1. CSS Variables (`globals.css`)

Copy and paste this exact block into your `app/globals.css` or Tailwind configuration:

```css
@import "tailwindcss";

@layer base {
  :root {
    --background: oklch(0.9881 0.0000 0.0000);
    --foreground: oklch(0.2221 0.0000 0.0000);
    --card: oklch(1.0000 0.0000 0.0000);
    --card-foreground: oklch(0.0000 0.0000 0.0000);
    --popover: oklch(1.0000 0.0000 0.0000);
    --popover-foreground: oklch(0.0000 0.0000 0.0000);
    --primary: oklch(0.6076 0.1404 276.7418);
    --primary-foreground: oklch(1.0000 0.0000 0.0000);
    --secondary: oklch(0.2221 0.0000 0.0000);
    --secondary-foreground: oklch(0.9881 0.0000 0.0000);
    --muted: oklch(0.9439 0.0040 286.3226);
    --muted-foreground: oklch(0.5561 0.0110 273.2406);
    --accent: oklch(0.8963 0.0194 276.3236);
    --accent-foreground: oklch(0.0000 0.0000 0.0000);
    --destructive: oklch(0.5475 0.1038 77.6126);
    --destructive-foreground: oklch(0.98 0 0);
    --border: oklch(0.9310 0.0000 0.0000);
    --input: oklch(0.8051 0.0057 274.9478);
    --ring: oklch(0.5365 0.0025 17.2345);

    --chart-1: oklch(0.5296 0.0025 17.2358);
    --chart-2: oklch(0.5009 0.0975 171.0601);
    --chart-3: oklch(0.7107 0.0023 17.2118);
    --chart-4: oklch(0.3635 0.0731 168.6280);
    --chart-5: oklch(0.3466 0.0028 17.2907);

    --sidebar: oklch(0.9881 0.0000 0.0000);
    --sidebar-foreground: oklch(0.0000 0.0000 0.0000);
    --sidebar-primary: oklch(0.4368 0.0026 17.2571);
    --sidebar-primary-foreground: oklch(1.0000 0.0000 0.0000);
    --sidebar-accent: oklch(1.0000 0.0000 0.0000);
    --sidebar-accent-foreground: oklch(0.0000 0.0000 0.0000);
    --sidebar-border: oklch(0.9040 0.0055 274.9596);
    --sidebar-ring: oklch(0.5365 0.0025 17.2345);

    --radius: 0.375rem;
    --font-display: "Inter", ui-sans-serif, system-ui, sans-serif;
    --font-text: "Inter", ui-sans-serif, system-ui, sans-serif;
    --font-mono: JetBrains Mono, ui-monospace, SFMono-Regular, monospace;
  }

  .dark {
    --background: oklch(0.1735 0.0020 286.1848);
    --foreground: oklch(0.9187 0.0029 264.5414);
    --card: oklch(0.2088 0.0042 264.4766);
    --card-foreground: oklch(1.0000 0.0000 0.0000);
    --popover: oklch(0.1452 0.0021 286.1313);
    --popover-foreground: oklch(1.0000 0.0000 0.0000);
    --primary: oklch(0.9249 0.0000 0.0000);
    --primary-foreground: oklch(0.0000 0.0000 0.0000);
    --secondary: oklch(0.6518 0.1348 275.3355);
    --secondary-foreground: oklch(0.9187 0.0029 264.5414);
    --muted: oklch(0.1917 0.0020 286.2102);
    --muted-foreground: oklch(0.7123 0.0045 271.3506);
    --accent: oklch(0.3331 0.0361 273.4393);
    --accent-foreground: oklch(1.0000 0.0000 0.0000);
    --destructive: oklch(0.7210 0.1130 95.0663);
    --destructive-foreground: oklch(0.98 0 0);
    --border: oklch(0.2655 0.0094 276.7468);
    --input: oklch(0.3612 0.0140 274.5258);
    --ring: oklch(0.6263 0.0064 264.5173);

    --chart-1: oklch(0.6292 0.0083 260.7307);
    --chart-2: oklch(0.6597 0.1295 170.7535);
    --chart-3: oklch(0.8227 0.0047 258.3273);
    --chart-4: oklch(0.4653 0.0954 166.9717);
    --chart-5: oklch(0.4347 0.0121 267.2367);

    --sidebar: oklch(0.1390 0.0029 246.2561);
    --sidebar-foreground: oklch(1.0000 0.0000 0.0000);
    --sidebar-primary: oklch(0.9187 0.0029 264.5414);
    --sidebar-primary-foreground: oklch(0.0000 0.0000 0.0000);
    --sidebar-accent: oklch(0.1349 0.0024 286.0738);
    --sidebar-accent-foreground: oklch(1.0000 0.0000 0.0000);
    --sidebar-border: oklch(0.2605 0.0058 271.1914);
    --sidebar-ring: oklch(0.6263 0.0064 264.5173);
  }
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --radius-xs: calc(var(--radius) - 4px);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --font-display: var(--font-display);
  --font-text: var(--font-text);
  --font-mono: var(--font-mono);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-text);
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    letter-spacing: -0.025em;
  }
}
```

---

## 🔤 2. Typography Hierarchy

- **Display & Headings (`--font-display`)**: `"Inter", ui-sans-serif, system-ui, sans-serif`  
  Apply to: `h1`, `h2`, `h3`, hero banners, pricing headers, feature titles.
- **Body & Text (`--font-text`)**: `"Inter", ui-sans-serif, system-ui, sans-serif`  
  Apply to: paragraphs, descriptions, input labels, table cell content.
- **Code & Numeric Data (`--font-mono`)**: `JetBrains Mono, ui-monospace, SFMono-Regular, monospace`  
  Apply to: badges, timestamps, IDs, code snippets, financial metrics.

---

## 🧩 3. Component Blueprints for Vercel v0

### Primary Button
```tsx
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
  Get Started
</button>
```

### Outline Button
```tsx
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
  Documentation
</button>
```

### Card Container
```tsx
<div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
  <div className="flex flex-col space-y-1.5">
    <h3 className="font-semibold leading-none tracking-tight">Feature Title</h3>
    <p className="text-sm text-muted-foreground">Short description of this capability.</p>
  </div>
  <div className="pt-4">
    Content goes here.
  </div>
</div>
```

### Form Input Field
```tsx
<input 
  type="email"
  placeholder="Enter your email" 
  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
/>
```

### Status Badge
```tsx
<span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors">
  Active Status
</span>
```

---

## 📐 4. Page Layout Structure

### Marketing Hero Section
```tsx
<section className="relative overflow-hidden py-24 md:py-32 bg-background text-foreground">
  <div className="container mx-auto px-4 text-center max-w-4xl">
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
      ✨ Introducing Linear Edition
    </span>
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
      Ship remarkable web applications at the speed of thought.
    </h1>
    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
      Crafted with pure OKLCH design tokens, accessible components, and full dark-mode parity.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <button className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
        Start Free Trial
      </button>
      <button className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors">
        Live Demo
      </button>
    </div>
  </div>
</section>
```

---

## 🚀 How to Use in Vercel v0

1. **Upload or Paste**: Open your project in [v0.dev](https://v0.dev) or the Vercel dashboard.
2. In the initial prompt or project custom instructions, paste:
   ```
   Follow the design tokens, typography, and component blueprints specified in this DESIGN.md.
   [Paste this document content]
   ```
3. Prompt v0 with your feature request: e.g. *"Build an analytics dashboard with a left sidebar, KPI stat cards, and a recent orders table matching this design system."*
