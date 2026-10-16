#!/usr/bin/env python3
"""
Generate a Vercel v0 / AI-ready DESIGN.md file from any Shadcnblocks theme or custom theme.
Usage:
    python3 generate_v0_design_md.py <theme_name> [--output <path>]
Example:
    python3 generate_v0_design_md.py vercel
    python3 generate_v0_design_md.py supabase
    python3 generate_v0_design_md.py linear
"""

import sys
import json
import urllib.request
from pathlib import Path

def fetch_theme(theme_name: str) -> dict:
    url = f"https://www.shadcnblocks.com/r/theme/{theme_name.lower()}.json"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"Error fetching theme '{theme_name}' from {url}: {e}", file=sys.stderr)
        sys.exit(1)

def generate_markdown(data: dict) -> str:
    name = data.get("name", "theme")
    title = data.get("title", name.capitalize())
    author = data.get("author", "shadcnblocks")
    css_vars = data.get("cssVars", {})
    light = css_vars.get("light", {})
    dark = css_vars.get("dark", {})
    theme = css_vars.get("theme", {})

    radius = light.get("radius", "0.5rem")
    font_sans = light.get("font-sans", "Inter, sans-serif")
    font_display = light.get("font-display", font_sans)
    font_text = light.get("font-text", font_sans)
    font_mono = light.get("font-mono", "monospace")

    md = f"""# 📐 Design System Specification: {title} Theme

> **Theme**: `{name}`  
> **Source**: [Shadcnblocks Themes](https://www.shadcnblocks.com/themes)  
> **Format**: Design System Prompt & Specification for **Vercel v0**, **Claude Code**, **Cursor**, **Lovable**  
> **Stack**: React 19 / 18, Tailwind CSS v4, Radix UI Primitives, `cn()` helper  

---

## 🤖 Instructions for AI Coding Assistant (Vercel v0 / Claude / Cursor)

When generating pages, components, and layouts for this project:
1. **Strictly adhere to the CSS variables and color tokens** defined below. Never use arbitrary Tailwind colors (e.g. `bg-blue-600`, `text-slate-900`, `border-gray-200`).
2. Always use semantic Tailwind classes: `bg-background`, `text-foreground`, `bg-card`, `text-card-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, `border-input`, `ring-ring`.
3. Support both **Light** and **Dark** modes automatically through these tokens without writing manual `dark:` color overrides.
4. Merge dynamic classes using `import {{ cn }} from "cn"` (or `@/lib/utils`).
5. Use `data-slot` attributes and Radix UI / Base UI accessible primitives for all interactive components.

---

## 🎨 1. CSS Variables (`globals.css`)

Copy and paste this exact block into your `app/globals.css` or Tailwind configuration:

```css
@import "tailwindcss";

@layer base {{
  :root {{
    --background: {light.get('background', 'oklch(1 0 0)')};
    --foreground: {light.get('foreground', 'oklch(0.14 0 0)')};
    --card: {light.get('card', 'oklch(1 0 0)')};
    --card-foreground: {light.get('card-foreground', 'oklch(0.14 0 0)')};
    --popover: {light.get('popover', 'oklch(1 0 0)')};
    --popover-foreground: {light.get('popover-foreground', 'oklch(0.14 0 0)')};
    --primary: {light.get('primary', 'oklch(0.21 0 0)')};
    --primary-foreground: {light.get('primary-foreground', 'oklch(0.98 0 0)')};
    --secondary: {light.get('secondary', 'oklch(0.96 0 0)')};
    --secondary-foreground: {light.get('secondary-foreground', 'oklch(0.21 0 0)')};
    --muted: {light.get('muted', 'oklch(0.96 0 0)')};
    --muted-foreground: {light.get('muted-foreground', 'oklch(0.55 0 0)')};
    --accent: {light.get('accent', 'oklch(0.96 0 0)')};
    --accent-foreground: {light.get('accent-foreground', 'oklch(0.21 0 0)')};
    --destructive: {light.get('destructive', 'oklch(0.57 0.24 27)')};
    --destructive-foreground: {light.get('destructive-foreground', 'oklch(0.98 0 0)')};
    --border: {light.get('border', 'oklch(0.92 0 0)')};
    --input: {light.get('input', 'oklch(0.92 0 0)')};
    --ring: {light.get('ring', 'oklch(0.70 0 0)')};

    --chart-1: {light.get('chart-1', 'oklch(0.64 0.22 41)')};
    --chart-2: {light.get('chart-2', 'oklch(0.60 0.11 184)')};
    --chart-3: {light.get('chart-3', 'oklch(0.39 0.07 227)')};
    --chart-4: {light.get('chart-4', 'oklch(0.82 0.18 84)')};
    --chart-5: {light.get('chart-5', 'oklch(0.76 0.18 70)')};

    --sidebar: {light.get('sidebar', 'oklch(0.98 0 0)')};
    --sidebar-foreground: {light.get('sidebar-foreground', 'oklch(0.14 0 0)')};
    --sidebar-primary: {light.get('sidebar-primary', 'oklch(0.21 0 0)')};
    --sidebar-primary-foreground: {light.get('sidebar-primary-foreground', 'oklch(0.98 0 0)')};
    --sidebar-accent: {light.get('sidebar-accent', 'oklch(0.96 0 0)')};
    --sidebar-accent-foreground: {light.get('sidebar-accent-foreground', 'oklch(0.21 0 0)')};
    --sidebar-border: {light.get('sidebar-border', 'oklch(0.92 0 0)')};
    --sidebar-ring: {light.get('sidebar-ring', 'oklch(0.70 0 0)')};

    --radius: {radius};
    --font-display: {font_display};
    --font-text: {font_text};
    --font-mono: {font_mono};
  }}

  .dark {{
    --background: {dark.get('background', 'oklch(0.14 0 0)')};
    --foreground: {dark.get('foreground', 'oklch(0.98 0 0)')};
    --card: {dark.get('card', 'oklch(0.21 0 0)')};
    --card-foreground: {dark.get('card-foreground', 'oklch(0.98 0 0)')};
    --popover: {dark.get('popover', 'oklch(0.21 0 0)')};
    --popover-foreground: {dark.get('popover-foreground', 'oklch(0.98 0 0)')};
    --primary: {dark.get('primary', 'oklch(0.92 0 0)')};
    --primary-foreground: {dark.get('primary-foreground', 'oklch(0.21 0 0)')};
    --secondary: {dark.get('secondary', 'oklch(0.27 0 0)')};
    --secondary-foreground: {dark.get('secondary-foreground', 'oklch(0.98 0 0)')};
    --muted: {dark.get('muted', 'oklch(0.27 0 0)')};
    --muted-foreground: {dark.get('muted-foreground', 'oklch(0.70 0 0)')};
    --accent: {dark.get('accent', 'oklch(0.27 0 0)')};
    --accent-foreground: {dark.get('accent-foreground', 'oklch(0.98 0 0)')};
    --destructive: {dark.get('destructive', 'oklch(0.70 0.19 22)')};
    --destructive-foreground: {dark.get('destructive-foreground', 'oklch(0.98 0 0)')};
    --border: {dark.get('border', 'oklch(0.26 0 0)')};
    --input: {dark.get('input', 'oklch(0.32 0 0)')};
    --ring: {dark.get('ring', 'oklch(0.55 0 0)')};

    --chart-1: {dark.get('chart-1', 'oklch(0.48 0.24 264)')};
    --chart-2: {dark.get('chart-2', 'oklch(0.69 0.17 162)')};
    --chart-3: {dark.get('chart-3', 'oklch(0.76 0.18 70)')};
    --chart-4: {dark.get('chart-4', 'oklch(0.62 0.26 303)')};
    --chart-5: {dark.get('chart-5', 'oklch(0.64 0.24 16)')};

    --sidebar: {dark.get('sidebar', 'oklch(0.18 0 0)')};
    --sidebar-foreground: {dark.get('sidebar-foreground', 'oklch(0.98 0 0)')};
    --sidebar-primary: {dark.get('sidebar-primary', 'oklch(0.98 0 0)')};
    --sidebar-primary-foreground: {dark.get('sidebar-primary-foreground', 'oklch(0.18 0 0)')};
    --sidebar-accent: {dark.get('sidebar-accent', 'oklch(0.32 0 0)')};
    --sidebar-accent-foreground: {dark.get('sidebar-accent-foreground', 'oklch(0.98 0 0)')};
    --sidebar-border: {dark.get('sidebar-border', 'oklch(0.32 0 0)')};
    --sidebar-ring: {dark.get('sidebar-ring', 'oklch(0.72 0 0)')};
  }}
}}

@theme inline {{
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
}}

@layer base {{
  * {{
    @apply border-border outline-ring/50;
  }}
  body {{
    @apply bg-background text-foreground;
    font-family: var(--font-text);
  }}
  h1, h2, h3, h4, h5, h6 {{
    font-family: var(--font-display);
    letter-spacing: -0.025em;
  }}
}}
```

---

## 🔤 2. Typography Hierarchy

- **Display & Headings (`--font-display`)**: `{font_display}`  
  Apply to: `h1`, `h2`, `h3`, hero banners, pricing headers, feature titles.
- **Body & Text (`--font-text`)**: `{font_text}`  
  Apply to: paragraphs, descriptions, input labels, table cell content.
- **Code & Numeric Data (`--font-mono`)**: `{font_mono}`  
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
      ✨ Introducing {title} Edition
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
"""
    return md

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 generate_v0_design_md.py <theme_name> [--output <path>]")
        sys.exit(1)

    theme_name = sys.argv[1]
    output_path = None
    if "--output" in sys.argv:
        idx = sys.argv.index("--output")
        if idx + 1 < len(sys.argv):
            output_path = sys.argv[idx + 1]

    print(f"Fetching theme '{theme_name}' from Shadcnblocks...")
    data = fetch_theme(theme_name)
    md_content = generate_markdown(data)

    if not output_path:
        output_dir = Path("/root/ShadCN/themes")
        output_dir.mkdir(parents=True, exist_ok=True)
        output_path = output_dir / f"DESIGN_{theme_name.upper()}.md"
    else:
        output_path = Path(output_path)
        output_path.parent.mkdir(parents=True, exist_ok=True)

    output_path.write_text(md_content, encoding="utf-8")
    print(f"✅ Generated design system spec: {output_path}")

if __name__ == "__main__":
    main()
