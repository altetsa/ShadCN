# Engineering & UI Conventions

## Code Quality & Stack Guidelines
- Use React 19 / 18 with modern TypeScript and Tailwind CSS v4 / v3.
- All components must provide clean accessibility (ARIA compliance, keyboard navigation).
- Use `cn()` helper from `@/lib/utils` for composing dynamic CSS classes.
- Prefer Radix UI primitives (`@radix-ui/*`) for headless logic and accessibility.
- Keep components modular, composable, and tree-shakeable.
