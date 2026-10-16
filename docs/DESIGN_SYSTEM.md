# ShadCN Master Design System & Registry Architecture

> **Версия**: 2.5 Enterprise  
> **Реестр**: `@altetsa` (`https://raw.githubusercontent.com/altetsa/ShadCN/main/public/r/{name}.json`)  
> **Стек**: Next.js 15, React 19, Tailwind CSS v4, Radix UI / Base UI, OKLCH Tokens  
> **Общий объем каталога**: **217 валидированных компонентов и блоков** + встроенная система **`shadcn-admin`**

---

## 🏛️ 1. Архитектурная концепция и философия

Дизайн-система **ShadCN** в нашей экосистеме — это не просто библиотека разрозненных кнопок и инпутов, а **монолитный визуальный и инженерный фундамент**, обеспечивающий:
1. **Абсолютную визуальную согласованность**: Все компоненты (от простейшего бейджа до сложнейшей аналитической таблицы или анимированного луча света) подчиняются единой матрице токенов.
2. **Двойную цветовую модель (Light / Dark)**: Все цвета вычислены в современном высокоточном цветовом пространстве **OKLCH** и переключаются через CSS-переменные без захардкоженных классов.
3. **WAI-ARIA Доступность**: Полная поддержка клавиатурной навигации, скринридеров и состояний `data-[state=open|closed|checked|disabled]`.
4. **Владение кодом (Code Ownership)**: Код компонентов копируется напрямую в проект, исключая зависимость от вендорных ограничений.

```
                                  ┌───────────────────────────────┐
                                  │   OKLCH Global Design Tokens   │
                                  │   (globals.css / theme.css)   │
                                  └───────────────┬───────────────┘
                                                  │
            ┌─────────────────────────────┬───────┴─────────────────────────────┐
            ▼                             ▼                                     ▼
 ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
 │   Core UI Primitives │      │ Marketing Blocks     │      │ shadcn-admin Suite   │
 │   (@altetsa/button,  │      │ (Hero, Features,     │      │ (Data-Table, Kanban, │
 │   dialog, sidebar...)│      │ Pricing, Testimonial)│      │ Auth, Users, Charts) │
 └──────────────────────┘      └──────────────────────┘      └──────────────────────┘
            ▲                             ▲                                     ▲
            └─────────────────────────────┼─────────────────────────────────────┘
                                          │
                         ┌────────────────┴────────────────┐
                         │   Partner Registries & Plugins  │
                         │   @magicui, @cult-ui, 21st.dev  │
                         └─────────────────────────────────┘
```

---

## 🎨 2. Матрица дизайн-токенов и тем (Light & Dark)

### 2.1. Семантическая палитра OKLCH
Каждый цвет строго привязан к функциональной роли и объявляется в `:root` и `.dark`:

| Токен CSS | Семантическая роль | Светлая тема | Тёмная тема (Obsidian & Ivory) |
| :--- | :--- | :--- | :--- |
| `--background` | Основной фон полотна | `oklch(1 0 0)` (Чистый белый) | `oklch(0.145 0 0)` (Глубокий обсидиан) |
| `--foreground` | Основной цвет типографики | `oklch(0.145 0 0)` (Угольно-черный)| `oklch(0.985 0 0)` (Слоновая кость) |
| `--card` / `--card-foreground` | Карточки, модальные окна | `oklch(1 0 0)` / `oklch(0.145 0 0)` | `oklch(0.18 0 0)` / `oklch(0.985 0 0)` |
| `--primary` / `--primary-fg` | Главные кнопки, CTA, акцент | `oklch(0.205 0 0)` / `oklch(0.985 0 0)` | `oklch(0.922 0 0)` / `oklch(0.205 0 0)` |
| `--secondary` / `--secondary-fg` | Вторичные контролы, теги | `oklch(0.97 0 0)` / `oklch(0.205 0 0)` | `oklch(0.269 0 0)` / `oklch(0.985 0 0)` |
| `--muted` / `--muted-fg` | Фон инпутов, подсказки | `oklch(0.97 0 0)` / `oklch(0.556 0 0)` | `oklch(0.269 0 0)` / `oklch(0.708 0 0)` |
| `--border` | Разделители, контуры | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` (Тонкое стекло) |
| `--ring` | Кольцо фокуса доступности | `oklch(0.708 0 0)` | `oklch(0.556 0 0)` |
| `--destructive` | Ошибки, удаление, алерты | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` |

### 2.2. Геометрия скруглений (`--radius`)
Масштабируемая система скруглений задается от базового значения `var(--radius)`:
* `--radius-sm`: `calc(var(--radius) * 0.6)` (бейджи, мелкие теги)
* `--radius-md`: `calc(var(--radius) * 0.8)` (поля ввода, селекты, кнопки)
* `--radius-lg`: `var(--radius)` (карточки, модалки)
* `--radius-xl`: `calc(var(--radius) * 1.4)` (баннеры, hero-контейнеры)
* `--radius-2xl` … `--radius-4xl`: мягкие плавающие панели

---

## 📦 3. Структура и состав реестра `@altetsa` (217 компонентов)

### 3.1. Базовые примитивы интерфейса (Core UI — 50+)
* **Формы**: `button`, `input`, `textarea`, `select`, `checkbox`, `radio-group`, `switch`, `slider`, `input-otp`, `calendar`, `date-picker`, `form`.
* **Оверлеи и диалоги**: `dialog`, `alert-dialog`, `sheet`, `drawer`, `popover`, `tooltip`, `hover-card`, `dropdown-menu`, `context-menu`.
* **Навигация**: `navigation-menu`, `menubar`, `breadcrumb`, `pagination`, `tabs`, `sidebar`, `command`.
* **Данные и представление**: `card`, `table`, `chart`, `avatar`, `badge`, `progress`, `scroll-area`, `separator`, `skeleton`, `collapsible`, `accordion`, `carousel`, `resizable`.

### 3.2. Админ-комплекс `shadcn-admin` (20+ компонентов)
Интегрирован на базе эталонной архитектуры `satnaing/shadcn-admin`:
* **`admin-data-table`**: мощнейшая таблица с виртуализацией, сортировкой, URL-синхронизацией состояния, фасетными фильтрами и bulk-действиями.
* **`admin-confirm-dialog`**: типизированные асинхронные модальные подтверждения.
* **`admin-password-input`**: поле ввода пароля с переключателем видимости и индикатором сложности.
* **`admin-date-picker`**: выбор диапазона дат с пресетами.
* **`admin-profile-dropdown`**: меню пользователя с аватаром, статусом и кнопкой выхода.
* **`admin-theme-switch`**: компактный переключатель светлой/тёмной/системной темы.
* **`admin-navigation-progress`**: индикатор загрузки маршрута в шапке.

### 3.3. Визуальные эффекты (Aceternity & Kibo UI)
* **`aceternity-background-lines`**: плавные SVG-линии с мягким световым свечением для Hero-блоков.
* **`kibo-code-block`**: интерактивный блок кода с подсветкой синтаксиса, кнопкой копирования и вкладками языков.

### 3.4. Маркетинговые блоки (55+ блоков)
* **Hero**: `hero1`, `hero3`, `hero7`, `hero45`, `hero47`, `hero115`.
* **Pricing**: `pricing2`, `pricing4`, `pricing6`.
* **Features & Bento**: `feature1`, `feature2`, `feature13`, `feature43`, `feature51`, `feature72`, `feature73`, `feature166`, `feature197`.
* **Social Proof**: `testimonial10`, `logos8`, `stats8`, `casestudies2`, `casestudy8`.
* **Навигация и футеры**: `navbar1`, `footer2`, `banner1`.

---

## 💻 4. Использование в проектах (Arteefa и др.)

### 4.1. Подключение реестра в `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  },
  "registries": {
    "@altetsa": "https://raw.githubusercontent.com/altetsa/ShadCN/main/public/r/{name}.json",
    "@shadcnblocks": "https://www.shadcnblocks.com/r/{name}",
    "@magicui": "https://magicui.design/r/{name}.json",
    "@cult-ui": "https://www.cult-ui.com/r/{name}.json"
  }
}
```

### 4.2. Команды установки в терминале
```bash
# Установка базового компонента
npx shadcn@latest add @altetsa/button

# Установка компонентов админки
npx shadcn@latest add @altetsa/admin-confirm-dialog
npx shadcn@latest add @altetsa/admin-password-input
npx shadcn@latest add @altetsa/admin-date-picker

# Установка маркетинговых секций
npx shadcn@latest add @altetsa/hero1
npx shadcn@latest add @altetsa/pricing4

# Установка микроинтерфейсов из реестров партнеров
npx shadcn@latest add @magicui/border-beam
npx shadcn@latest add @cult-ui/halo-button
```

---

## 🛠️ 5. Сборка и сопровождение реестра

Все компоненты генерируют статическую манифест-схему при запуске:
```bash
# Пересборка реестра и генерация public/r/*.json
python3 /root/ShadCN/scripts/build_registry.py

# Официальная валидация схемы ShadCN
npx shadcn@latest registry validate /root/ShadCN/registry.json
```

Все обновления автоматически коммитятся и пушатся в:
* **GitHub**: `altetsa/ShadCN`
* **GitLab**: `altetsa-group-group/shadcn`
