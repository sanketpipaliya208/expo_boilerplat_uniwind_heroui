# Agents.md - Project Guidelines

## Core Stack
- Expo (React Native)
- Expo Router (file-based routing)
- HeroUI Native for UI components
- TypeScript

## File System & Organization
- `src/app/`: Expo Router routes and layouts.
- `src/components/`: UI components, grouped by domain/feature (e.g., `account/`, `common/`, `modals/`).
- `src/hooks/`: Custom React hooks (e.g., async state management).
- `src/screens/`: Screen-level components consumed by routes.
- `src/services/`: External integrations (API, push notifications, etc.).
- `src/theme/`: Global styling tokens and design system variables.
- `src/types/`: Global TypeScript interfaces and type definitions.
- `src/utils/`: Helper functions and pure logic.
- `assets/`: Images, fonts, and local static files.

## Component Standards
- Use Functional Components.
- Explicitly type with `React.FC<Props>`.
- Use `heroui-native` where applicable instead of raw React Native primitives.
- Export `default` at the bottom of the file.

```tsx
import React from 'react';
import { View } from 'react-native';

export type ExampleComponentProps = {
  title: string;
};

const ExampleComponent: React.FC<ExampleComponentProps> = ({ title }) => {
  return (
    <View>
      {/* Implementation */}
    </View>
  );
};

export default ExampleComponent;
```

## App Configuration
- **app.json**: Must configure `expo-router`, plugins (like `onesignal-expo-plugin`, `expo-build-properties`), and enable `reactCompiler` and `typedRoutes` in experiments.
- **app.config.ts**: Dynamically injects environment variables into `extra` (e.g., reading `process.env.ONESIGNAL_APP_ID`). Keep sensitive keys out of `app.json`.

## Build & Deploy (eas.json)
- Define base cache for `node_modules` and `.gradle`.
- Profiles:
  - `development`: `developmentClient: true`, `distribution: internal`.
  - `preview`: extends base, `distribution: internal`.
  - `beta`: extends base, `distribution: internal`, sets `environment: production`.
  - `production`: extends base, `autoIncrement: true`.
  - `local-prod`: extends base, for local production testing.

## Workflows
- Keep PRs minimal and tested.
- Adhere to YAGNI (You Aren't Gonna Need It). Build the minimum that works.
