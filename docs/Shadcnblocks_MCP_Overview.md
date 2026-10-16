---
title: "Shadcnblocks — shadcn CLI & MCP Server Интеграция"
tags: [shadcn, shadcnblocks, cli, mcp, blocks, tailwind, react, components, ai-assistant]
date: 2026-10-16
status: ✅ Активен
category: "Vibe_Design/shadcn"
docs: "https://www.shadcnblocks.com/docs/shadcn-mcp/overview"
cli_url: "https://www.shadcnblocks.com/shadcn-cli"
---

# 🧱 Shadcnblocks — shadcn CLI & MCP Server

> **Официальный гайд по CLI**: [shadcnblocks.com/shadcn-cli](https://www.shadcnblocks.com/shadcn-cli)  
> **Официальная документация по MCP**: [shadcnblocks.com/docs/shadcn-mcp/overview](https://www.shadcnblocks.com/docs/shadcn-mcp/overview)  
> **Объем каталога**: 2 295+ готовых блоков интерфейса и 43+ компонента  
> **Команда установки**: `npx shadcn@latest add @shadcnblocks/<block>`  
> **Навык агента**: `/root/.agent/skills/shadcnblocks`  

---

## ⚡ Преимущества установки через CLI
- **Одна команда делает всё**:
  - Автоматически устанавливает недостающие UI-примитивы shadcn/ui (`Button`, `Card`, `Badge`, `Avatar`).
  - Автоматически устанавливает npm-пакеты (`lucide-react`, `cn`, `radix-ui`).
  - Размещает файлы точно по путям, заданным в `components.json`.
- **Полное владение исходным кодом**:
  - Никаких внешних библиотек-оберток или vendor lock-in. Код блока копируется непосредственно в проект.
- **Поддержка естественного языка через MCP**:
  - AI-ассистент в Cursor, VS Code, Codex или Antigravity может сам найти нужный блок по описанию задачи и установить его в проект.

---

## ⚙️ Настройка реестра в `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "registries": {
    "@shadcnblocks": "https://www.shadcnblocks.com/r/{name}",
    "@altetsa": "https://raw.githubusercontent.com/altetsa/ShadCN/main/public/r/{name}.json"
  }
}
```

---

## 💻 Популярные команды установки блоков

```bash
# Установка Hero-блока (Split Hero с кнопками и бейджем)
npx shadcn@latest add @shadcnblocks/hero1

# Другие варианты Hero
npx shadcn@latest add @shadcnblocks/hero8
npx shadcn@latest add @shadcnblocks/hero55

# Тарифные сетки (Pricing)
npx shadcn@latest add @shadcnblocks/pricing1
npx shadcn@latest add @shadcnblocks/compare1

# Сетки фич и Bento
npx shadcn@latest add @shadcnblocks/feature1
npx shadcn@latest add @shadcnblocks/bento1

# Отзывы и логотипы
npx shadcn@latest add @shadcnblocks/testimonial1
npx shadcn@latest add @shadcnblocks/logos1

# Прямая установка без регистрации в components.json
npx shadcn@latest add https://www.shadcnblocks.com/r/hero1.json
```

---

## 🤖 Инструменты MCP для агентов

- **`search_items_in_registries`**: поиск блоков по ключевым словам среди 2295+ блоков.
- **`view_items_in_registries`**: предпросмотр кода и зависимостей блока до его установки.
- **`get_add_command_for_items`**: генерация точной команды `npx shadcn@latest add ...`.

---

## 🛠️ Установка MCP сервера в клиенты (CLI `mcp init`)

Команды автоматической инициализации:
```bash
# Cursor
npx shadcn@latest mcp init --client cursor

# VS Code / GitHub Copilot
npx shadcn@latest mcp init --client vscode

# Claude Code
npx shadcn@latest mcp init --client claude

# Codex (OpenAI)
npx shadcn@latest mcp init --client codex

# OpenCode
npx shadcn@latest mcp init --client opencode
```

Все конфигурационные файлы на хосте (`.cursor/mcp.json`, `.vscode/mcp.json`, `.mcp.json`, `~/.codex/config.toml`, `opencode.json` и `mcp_config.json`) полностью настроены и активны.
