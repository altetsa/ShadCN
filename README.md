# ShadCN — Custom Component Registry

[![Validate Registry](https://github.com/altetsa/ShadCN/actions/workflows/validate.yml/badge.svg)](https://github.com/altetsa/ShadCN/actions/workflows/validate.yml)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-registry-black?logo=shadcnui)](https://ui.shadcn.com/docs/registry)

A custom, production-ready component registry compatible with [shadcn/ui](https://ui.shadcn.com). Provides UI components, React hooks, utilities, composite blocks, and agent workflow specifications.

---

## 🚀 Quick Start

You can install any component directly using the [shadcn CLI](https://ui.shadcn.com/docs/cli) without any prior configuration:

```bash
# Add UI component
npx shadcn@latest add altetsa/ShadCN/button

# Add React hooks
npx shadcn@latest add altetsa/ShadCN/use-media-query
npx shadcn@latest add altetsa/ShadCN/use-copy-to-clipboard

# Add Composite Hero block
npx shadcn@latest add altetsa/ShadCN/hero-section

# Add Agent rules convention file
npx shadcn@latest add altetsa/ShadCN/agent-rules
```

---

## 📦 Registry Catalog

| Item | Type | Dependencies | Description |
| :--- | :--- | :--- | :--- |
| **`button`** | `registry:ui` | `@radix-ui/react-slot`, `cva` | Accessible button with multiple variants & sizes |
| **`utils`** | `registry:lib` | `clsx`, `tailwind-merge` | `cn()` helper function for Tailwind CSS |
| **`use-media-query`** | `registry:hook` | — | Reactive media query viewport hook |
| **`use-copy-to-clipboard`** | `registry:hook` | — | Clipboard text copying hook with timer state |
| **`hero-section`** | `registry:block` | `button` | Responsive landing hero with primary and secondary CTA |
| **`agent-rules`** | `registry:file` | — | Coding standards & conventions for AI coding agents (`~/AGENTS.md`) |

---

## ⚙️ Configuration in `components.json`

To register this catalog under a namespace (e.g. `@altetsa`) in your project:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "registries": {
    "@altetsa": "https://raw.githubusercontent.com/altetsa/ShadCN/main/public/r/{name}.json",
    "@shadcnblocks": "https://www.shadcnblocks.com/r/{name}"
  }
}
```

Then install items using the namespace:

```bash
npx shadcn@latest add @altetsa/button
npx shadcn@latest add @altetsa/hero-section
```

---

## ⚡ MCP Server Support

This registry works seamlessly with the [shadcn MCP Server](https://ui.shadcn.com/docs/registry/mcp). AI assistants (Claude, Cursor, Codex, OpenCode) can automatically inspect, search, and install components from this registry:

```bash
# Initialize MCP for your editor
npx shadcn@latest mcp init --client cursor
npx shadcn@latest mcp init --client claude
```

---

## 🛠️ Development & Validation

```bash
# Validate registry schema and files
npx shadcn@latest registry validate ./registry.json

# Build static JSON registry files
npx shadcn@latest build ./registry.json
```
