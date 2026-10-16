---
title: "shadcn/ui — Компоненты Дизайн-системы"
tags: [shadcn, ui, design-system, react, components, jobyte]
date: 2026-07-29
status: ✅ Активен
category: "Vibe_Design/shadcn"
---

# 🎨 shadcn/ui — Раздел Компонентов и Дизайн-системы

Данный раздел предназначен для документации, шаблонов, спецификаций компонентов и кастомизации **shadcn/ui** в проекте **Jobyte**.

---

## 🛠️ Основные концепты shadcn/ui
- **Копируемый код вместо библиотеки пакетов**: Полный контроль над исходным кодом компонентов.
- **Стилизация**: Tailwind CSS + Radix UI Primitives + Lucide Icons.
- **Доступность (a11y)**: Полная поддержка WCAG и клавиатурной навигации через Radix UI.

## ⚡ MCP Сервер `shadcn`

Конфигурация в `/root/mcp_config.json`:

```json
"shadcn": {
  "command": "npx",
  "args": [
    "-y",
    "shadcn@latest",
    "mcp"
  ]
}
```

---

## 📁 Структура раздела (`Vibe_Design/shadcn/`)
- `00_shadcn_UI_Overview.md` — Главный обзор и руководства.
- Документация компонентов, рецепты интеграции с Webflow и React.
