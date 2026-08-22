# Expo Boilerplate — Uniwind + HeroUI Native

> **Stack:** Expo SDK 55 + React Native 0.83 + React 19 + TypeScript  
> **Styling:** Tailwind CSS v4 via Uniwind + HeroUI Native components  
> **State:** Zustand  
> **Form:** TanStack React Form + Zod  
> **Navigation:** Expo Router (file-based routing)  
> **Animation:** Reanimated 4 + Gesture Handler

---

## Directory Layout

```
expo_boilerplat_uniwind_heroui/
├── app.json                          # Expo config
├── expo-env.d.ts                     # Expo env type declarations
├── metro.config.js                   # Metro bundler config (Uniwind integration)
├── package.json
├── tsconfig.json
├── .gitignore
│
├── .vscode/
│   ├── settings.json
│   └── extensions.json
│
├── assets/
│   ├── images/                       # PNG assets (icons, logos, splash, badges)
│   │   ├── tabIcons/                 # Tab bar icons (home, explore)
│   │   └── ...
│   └── expo.icon/                    # Expo icon tooling
│       ├── icon.json
│       └── Assets/
│
├── src/
│   ├── app/                          # Expo Router pages (file-based routing)
│   │   ├── _layout.tsx               # Root layout (providers, fonts, theme)
│   │   │
│   │   ├── (auth)/                   # Auth route group
│   │   │   ├── _layout.tsx           # Auth stack layout
│   │   │   └── login.tsx             # Login screen
│   │   │
│   │   └── (tabs)/                   # Main tab navigator
│   │       ├── _layout.tsx           # Tab bar layout
│   │       ├── index.tsx             # Home tab route
│   │       └── explore.tsx           # Explore tab route
│   │
│   ├── screens/                      # Screen components (called by routes)
│   │   ├── auth/
│   │   │   └── Login.tsx
│   │   └── tabs/
│   │       ├── Home.tsx
│   │       └── Explore.tsx
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── ActionButton.tsx      # Reusable action button
│   │   │   └── Icons.ts             # Icon definitions/helpers
│   │   ├── form/
│   │   │   ├── FormButton.tsx        # Form submit button
│   │   │   └── FormInput.tsx         # Form input field
│   │   └── providers/
│   │       ├── index.tsx             # Provider composition (exports all providers)
│   │       └── ThemeProvider/         # Theme provider module
│   │           ├── index.tsx         # Theme context + provider component
│   │           └── hook.ts           # useThemeColor hook
│   │
│   ├── hooks/
│   │   ├── form.hook.tsx             # Form validation hook (TanStack + Zod)
│   │   └── loading.async.ts         # Async loading state helpers
│   │
│   ├── services/
│   │   └── zustand/
│   │       └── auth.zustand.ts       # Auth state store
│   │
│   ├── theme/
│   │   ├── global.css                # Global Tailwind/Uniwind imports
│   │   └── theme.css                 # @theme definitions + CSS variables
│   │
│   ├── types/
│   │   ├── index.d.ts                # Project type declarations
│   │   └── uniwind-types.d.ts        # Uniwind type augmentations
│   │
│   └── utils/
│       └── helper.ts                 # Utility functions
│
├── README.md
└── yarn.lock
```

---

## Architecture Overview

### Routing (`src/app/`)
- **Root `_layout.tsx`** — wraps app with providers (ThemeProvider, GestureHandler, etc.), loads fonts/splash
- **`(auth)/_layout.tsx`** — stack navigator for auth screens
- **`(tabs)/_layout.tsx`** — bottom tab navigator with custom icons

### Data Flow
1. **Screens** (`src/screens/`) — compose UI per route
2. **Components** (`src/components/`) — reusable UI primitives
3. **Hooks** (`src/hooks/`) — form validation (TanStack + Zod), async loading
4. **Services** (`src/services/zustand/`) — Zustand stores for global state (auth)

### Styling Strategy
- **Uniwind** — Tailwind CSS v4 `className` in React Native (see `uniwind` skill for usage)
- **HeroUI Native** — pre-built component library
- **CSS variables** — defined in `src/theme/theme.css` via `@theme` directive
- **Dark mode** — Uniwind `dark:` variant support

### Key Patterns
- Arrow function components with explicit `React.FC` typing
- File-based routing via Expo Router
- Zustand for auth state management
- TanStack React Form + Zod for form validation
- Reanimated 4 worklets for animations