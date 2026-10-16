---
title: "shadcn/ui cn — Новый высокоскоростной движок слияния классов Tailwind"
tags: [shadcn, cn, tailwind, tailwind-merge, clsx, nextjs, react, performance]
date: 2026-10-16
status: ✅ Активен
category: "Vibe_Design/shadcn"
upstream: "https://github.com/shadcn-ui/cn"
---

# ⚡ `cn` — Высокопроизводительный движок слияния классов Tailwind CSS

> **Официальный репозиторий**: [github.com/shadcn-ui/cn](https://github.com/shadcn-ui/cn)  
> **Локальный репозиторий**: `/root/shadcn-cn`  
> **Навык агента**: `/root/.agent/skills/shadcn-cn` (или алиас `cn`)  
> **Авторы**: Aiden Bai ([@aidenybai](https://x.com/aidenybai)) & Shadcn ([@shadcn](https://x.com/shadcn))

`cn` — это официальный современный движок от создателей **shadcn/ui** для слияния классов Tailwind CSS и разрешения конфликтов. Он полностью заменяет связку `clsx` + `tailwind-merge`, предоставляя те же самые API, 100% семантическую эквивалентность и ускорение **в 30–170 раз**.

---

## 🏎️ Ключевые преимущества

| Сценарий вызова | clsx + tailwind-merge | cn | Ускорение |
| :--- | :---: | :---: | :---: |
| Обычный вызов в компоненте (`cn(base, variant, cond && extra)`) | 320 ns | **10 ns** | **30×** |
| Cache hit (те же классы при ререндере) | 14 ns | **7 ns** | **1.9×** |
| 1000+ повторяющихся строк в реальном проекте | 2.4 µs | **14 ns** | **172×** |
| Холодный рендер (первый вызов) | 3.2 ms | **0.4 ms** | **7×** |

### Архитектурные инновации
1. **Предварительно скомпилированные таблицы**: Конфигурация Tailwind парсится не на каждый вызов в рантайме через регулярные выражения, а компилируется в плоские типизированные массивы (typed arrays).
2. **Аргументное кэширование (Argument-Identity Cache)**: Запоминает указатели на переданные аргументы и предугадывает последовательности вызовов внутри рендер-цикла React.
3. **Нативная поддержка Tailwind CSS v4**: Полная поддержка синтаксиса префиксов и правил v4 (`createCn({ prefix: "tw" })`).
4. **Zero Dependencies**: 0 внешних зависимостей, 26 КБ в минифицированном виде.
5. **Сборка таблиц (`cn build`)**: Сканирует кодовую базу и удаляет неиспользуемые группы классов, делая бандл еще компактнее.

---

## 📦 Установка и миграция

### 1. Установка пакета
```bash
npm i cn
# или
pnpm add cn
# или
bun add cn
```

### 2. Автоматическая миграция проектов shadcn
```bash
npx shadcn@latest migrate cn
```

### 3. Ручная миграция в `@/lib/utils.ts`
Вместо обертки над `clsx` и `twMerge`:
```typescript
// lib/utils.ts
export { cn } from "cn";
```

Затем удаляются старые зависимости:
```bash
npm rm clsx tailwind-merge
```

---

## 🔄 Алиасинг для зависимостей (`node_modules`)

Если сторонние библиотеки продолжают импортировать `clsx` или `tailwind-merge`, их можно перенаправить на `cn` без дублирования кода в бандле:

### Next.js (`next.config.ts` с Turbopack)
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      clsx: "cn",
      "tailwind-merge": "cn",
    },
  },
};

export default nextConfig;
```

### Vite (`vite.config.ts`)
```typescript
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "tailwind-merge": "cn",
      clsx: "cn",
    },
  },
});
```

---

## 🛠️ Доступные API и модули

- **`cn`**: `cn(...inputs)`, `twMerge(...)`, `twJoin(...)`, `clsx(...)`
- **`cn/config`**: `createCn(ext?)`, `extendTailwindMerge(ext?)`, `createTwMerge(fn)`, `fromTheme`, `validators`, `defaultConfig()`
- **`cn/engine`**: `createCn(tables, ...)` для загрузки заранее скомпилированных таблиц
- **`cn/lite`**: Прямой аналог `clsx/lite` (только объединение строк)
- **`cn/next`**: Плагин интеграции с Next.js (`withCn`)
- **`cn/vite`**: Плагин для Vite (`cn()`)
- **CLI**: `npx cn build` для компиляции проекта

---

## 📌 Итог для стека проектов
В новых и существующих проектах с Tailwind v4 и React 19 / Next.js переходим с громоздкой связки `clsx` + `tailwind-merge` на единый ультрабыстрый пакет `cn`.
