---
title: "shadcn-ui-blocks — Локальная коллекция готовых блоков UI"
tags: [shadcn, shadcnblocks, ui-blocks, react, tailwind, components, templates]
date: 2026-10-16
status: ✅ Активен
category: "Vibe_Design/shadcn"
upstream: "https://github.com/shadcnblocks/shadcn-ui-blocks"
local_path: "/root/shadcn-ui-blocks"
---

# 🧱 `shadcn-ui-blocks` — Локальная коллекция блоков и компонентов

> **Официальный репозиторий**: [github.com/shadcnblocks/shadcn-ui-blocks](https://github.com/shadcnblocks/shadcn-ui-blocks)  
> **Локальный путь**: `/root/shadcn-ui-blocks`  
> **Стек**: React 19 / 18, Tailwind CSS v4, Radix UI, Lucide Icons, `cn`  
> **Содержимое**: 55+ готовых блоков (Hero, Feature, Pricing, Bento, Testimonials) и 50+ UI-примитивов  

---

## 📂 Структура репозитория

```
/root/shadcn-ui-blocks/
├── src/
│   ├── block/               # 55+ готовых секций страниц (Hero, Pricing, etc.)
│   ├── components/ui/       # 50+ примитивов shadcn/ui (Button, Dialog, etc.)
│   ├── hooks/               # Хуки (use-mobile.ts)
│   └── lib/                 # Утилиты (utils.ts с cn)
├── public/                  # Графика и изображения
└── components.json          # Конфигурация компонентов shadcn
```

---

## 📋 Каталог готовых секций (`src/block/`)

| Категория | Файлы компонентов | Описание |
| :--- | :--- | :--- |
| **Hero (Главные экраны)** | `hero1.tsx`, `hero3.tsx`, `hero7.tsx`, `hero45.tsx`, `hero47.tsx`, `hero115.tsx` | Сплит-экраны, отзывы с рейтингом, видео-фоны |
| **Фичи и Bento-сетки** | `feature1.tsx` .. `feature197.tsx` (10 вариантов) | Bento-сетки, иконки, списки возможностей |
| **Тарифы (Pricing)** | `pricing2.tsx`, `pricing4.tsx`, `pricing6.tsx`, `compare7.tsx` | Карточки планов, переключатели периодов, матрица сравнения |
| **Социальные доказательства** | `testimonial10.tsx`, `logos8.tsx`, `stats8.tsx` | Карусели отзывов, логотипы партнеров, счетчики |
| **Конверсионные блоки (CTA)**| `cta10.tsx`, `cta11.tsx`, `banner1.tsx` | Баннеры и полосы призыва к действию |
| **Навигация и футеры** | `navbar1.tsx`, `footer2.tsx` | Меню с выпадающими списками и многоколоночный футер |
| **Авторизация и формы** | `login1.tsx`, `signup1.tsx`, `waitlist1.tsx`, `contact7.tsx` | Экраны входа/регистрации, список ожидания, контактная форма |
| **Кейсы и блог** | `blog7.tsx`, `blogpost1.tsx`, `casestudies2.tsx`, `codeexample1.tsx` | Оформление статей, кейсов и блоков кода |

---

## 🚀 Способы использования

### 1. Установка через официальный shadcn CLI
```bash
npx shadcn@latest add @shadcnblocks/hero1
npx shadcn@latest add @shadcnblocks/pricing2
```

### 2. Прямое копирование из локального репозитория
```bash
cp /root/shadcn-ui-blocks/src/block/hero1.tsx ./components/hero1.tsx
```
Любой блок можно использовать без ожидания сетевых запросов напрямую из локального исходного кода.
