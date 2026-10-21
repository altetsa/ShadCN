# Base UI components (`components/base-ui/`)

Components imported from the former `altetsa/ShadCN-UI` repository.
They are generated in the official shadcn **`base-nova`** style and are built on
[Base UI](https://base-ui.com) (`@base-ui/react`) instead of Radix UI.

The main catalog (`components/ui/`) stays on Radix, so the two sets live side by side:
every Base UI item is registered with a **`base-`** prefix and installs into
`components/base-ui/`, so it never overwrites a Radix component of the same name.

```bash
npx shadcn@latest add @altetsa/base-field
npx shadcn@latest add @altetsa/base-combobox
npx shadcn@latest add @altetsa/base-questionnaire
```

## Items (24)

| Item | Notes |
|:--|:--|
| `base-attachment`, `base-bubble`, `base-message`, `base-message-scroller`, `base-questionnaire`, `base-trace`, `base-code-block` | Chat / AI interface building blocks (`@shadcn/react` for scroller & questionnaire) |
| `base-field`, `base-input-group`, `base-button-group`, `base-combobox`, `base-native-select` | Form primitives |
| `base-empty`, `base-item`, `base-kbd`, `base-marker`, `base-spinner`, `base-direction` | Layout & misc |
| `base-button`, `base-input`, `base-label`, `base-separator`, `base-textarea`, `base-collapsible` | Base UI versions of components the items above depend on |

## Differences from the Radix set

- Imports use `@base-ui/react` (and `@shadcn/react` for `message-scroller` / `questionnaire`).
- `cn` is imported from `@/lib/utils` (the original used the `cn` npm package).
- Internal imports point to `@/components/base-ui/*`.

## Not imported (already in the main catalog)

The 51 components that exist in both repos (button, dialog, select, …) were **not** copied:
the ShadCN-UI versions are the same components restyled for Base UI, and the Radix ones
here are the canonical versions. `use-toggle` / `use-media-query` also stay as in `hooks/`.

## Rebuild

`python3 scripts/build_registry.py` picks up `components/base-ui/*.tsx` automatically.
