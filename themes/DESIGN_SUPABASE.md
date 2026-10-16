# 📐 Design System Specification: Supabase Theme

> **Theme**: `supabase`  
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
    --background: oklch(0.99 0 0);
    --foreground: oklch(0.20 0 0);
    --card: oklch(0.99 0 0);
    --card-foreground: oklch(0.20 0 0);
    --popover: oklch(0.99 0 0);
    --popover-foreground: oklch(0.44 0 0);
    --primary: oklch(0.83 0.13 160.91);
    --primary-foreground: oklch(0.26 0.01 166.46);
    --secondary: oklch(0.99 0 0);
    --secondary-foreground: oklch(0.20 0 0);
    --muted: oklch(0.95 0 0);
    --muted-foreground: oklch(0.24 0 0);
    --accent: oklch(0.95 0 0);
    --accent-foreground: oklch(0.24 0 0);
    --destructive: oklch(0.55 0.19 32.73);
    --destructive-foreground: oklch(0.98 0 0);
    --border: oklch(0.90 0 0);
    --input: oklch(0.97 0 0);
    --ring: oklch(0.83 0.13 160.91);

    --chart-1: oklch(0.83 0.13 160.91);
    --chart-2: oklch(0.62 0.19 259.81);
    --chart-3: oklch(0.61 0.22 292.72);
    --chart-4: oklch(0.77 0.16 70.08);
    --chart-5: oklch(0.70 0.15 162.48);

    --sidebar: oklch(0.99 0 0);
    --sidebar-foreground: oklch(0.55 0 0);
    --sidebar-primary: oklch(0.83 0.13 160.91);
    --sidebar-primary-foreground: oklch(0.26 0.01 166.46);
    --sidebar-accent: oklch(0.95 0 0);
    --sidebar-accent-foreground: oklch(0.24 0 0);
    --sidebar-border: oklch(0.90 0 0);
    --sidebar-ring: oklch(0.83 0.13 160.91);

    --radius: 0.5rem;
    --font-display: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
    --font-text: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
    --font-mono: monospace;
  }

  .dark {
    --background: oklch(0.18 0 0);
    --foreground: oklch(0.93 0.01 255.51);
    --card: oklch(0.20 0 0);
    --card-foreground: oklch(0.93 0.01 255.51);
    --popover: oklch(0.26 0 0);
    --popover-foreground: oklch(0.73 0 0);
    --primary: oklch(0.44 0.10 156.76);
    --primary-foreground: oklch(0.92 0.01 167.16);
    --secondary: oklch(0.26 0 0);
    --secondary-foreground: oklch(0.99 0 0);
    --muted: oklch(0.24 0 0);
    --muted-foreground: oklch(0.71 0 0);
    --accent: oklch(0.31 0 0);
    --accent-foreground: oklch(0.99 0 0);
    --destructive: oklch(0.31 0.09 29.79);
    --destructive-foreground: oklch(0.98 0 0);
    --border: oklch(0.28 0 0);
    --input: oklch(0.26 0 0);
    --ring: oklch(0.80 0.18 151.71);

    --chart-1: oklch(0.80 0.18 151.71);
    --chart-2: oklch(0.71 0.14 254.62);
    --chart-3: oklch(0.71 0.16 293.54);
    --chart-4: oklch(0.84 0.16 84.43);
    --chart-5: oklch(0.78 0.13 181.91);

    --sidebar: oklch(0.18 0 0);
    --sidebar-foreground: oklch(0.63 0 0);
    --sidebar-primary: oklch(0.44 0.10 156.76);
    --sidebar-primary-foreground: oklch(0.92 0.01 167.16);
    --sidebar-accent: oklch(0.31 0 0);
    --sidebar-accent-foreground: oklch(0.99 0 0);
    --sidebar-border: oklch(0.28 0 0);
    --sidebar-ring: oklch(0.80 0.18 151.71);
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

- **Display & Headings (`--font-display`)**: `"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif`  
  Apply to: `h1`, `h2`, `h3`, hero banners, pricing headers, feature titles.
- **Body & Text (`--font-text`)**: `"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif`  
  Apply to: paragraphs, descriptions, input labels, table cell content.
- **Code & Numeric Data (`--font-mono`)**: `monospace`  
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
      ✨ Introducing Supabase Edition
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
