# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install            # deps (repo uses bun.lock)
bun run start          # expo dev server
bun run ios|android|web
bun run lint           # expo lint (no tests configured)
bun run pb:c           # expo prebuild --clean; also pb:i / pb:a per platform
npx tsc --noEmit       # typecheck
```

## Stack

Expo SDK 55 · React Native 0.83 · React 19 · TypeScript strict. Styling is **Uniwind** (Tailwind CSS v4 `className` on RN) + **HeroUI Native** components. State: Zustand. Forms: TanStack React Form + Zod (`src/hooks/form.hook.tsx`).

## Architecture

- **Routing**: Expo Router file-based routing under `src/app/`. Routes are thin wrappers; screen UI lives in `src/screens/`. Root `_layout.tsx` wraps everything in `AppProvider`.
- **Providers** (`src/components/providers/index.tsx`): composition order matters — GestureHandlerRootView → KeyboardProvider → HeroUINativeProvider → ThemeProvider.
- **Styling pipeline**: `metro.config.js` runs `withUniwindConfig`, entry CSS is `src/global.css` which imports tailwindcss, uniwind, heroui-native styles, and `src/theme/theme.css` (`@theme inline` tokens + light/dark CSS variables). Dark mode via Uniwind `dark:` variant. Class typings auto-generate into `src/uniwind-types.d.ts` — don't hand-edit.
- **Theme**: colors are CSS variables defined per light/dark in `theme.css`; use Tailwind classes referencing them rather than hardcoded hex.
- **State**: Zustand stores in `src/services/zustand/` (e.g. `auth.zustand.ts`).
- **Path aliases**: `@/*` → `./src/*`, `@/assets/*` → `./assets/*`.
- **Experiments enabled**: `typedRoutes` (route hrefs are type-checked) and `reactCompiler`.

## Folder roles

`src/app/` routes · `src/screens/` screen UI consumed by routes · `src/components/ui/` shared primitives (+ `providers/`) · `src/hooks/` custom hooks · `src/services/` external integrations & stores · `src/theme/` styling tokens/CSS · `src/types/` global types · `src/utils/` pure helpers · `assets/` static files.

## Domain docs

Single-context repo: root `CONTEXT.md` + `docs/adr/` when present (created lazily). Don't flag their absence.

## Conventions

Functional components typed `React.FC<Props>`, `export default` at the bottom of the file, prefer `heroui-native` over raw RN primitives. YAGNI — minimum that works. PRs minimal and tested.

## Issue tracker

Local markdown, not GitHub issues: `.scratch/<feature-slug>/spec.md` plus `issues/NN-<slug>.md` per ticket with a `Status:` triage line. Vocabulary in `docs/agents/triage-labels.md`; wayfinding rules in `docs/agents/issue-tracker.md`.
