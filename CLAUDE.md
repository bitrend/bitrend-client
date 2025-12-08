# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## BitTrend Client Project

### Development Commands
- `npm run dev`: Start development server (Vite)
- `npm run build`: TypeScript check + production build
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

### Tech Stack
- **React 19.1.1** with TypeScript 5.8
- **Vite 7** for build and dev server
- **Emotion** for CSS-in-JS (@emotion/react, @emotion/styled)
- **React Router v7** for routing
- **Statio-lib** for global state management with localStorage persistence
- **Recharts** for data visualization
- **Axios** for API requests
- **Material Symbols Rounded** for icons

### Architecture

#### Authentication Flow
- GitHub OAuth integration via `/api/auth/github/callback`
- Token stored in global state using Statio (auto-persisted to localStorage)
- Auth utilities in `src/utils/auth.ts` for token/user management
- Protected routes redirect to `/login` when unauthenticated
- API requests use Bearer token authentication

#### API Layer
- Base URL configurable via `VITE_API_BASE_URL` env variable (defaults to `http://localhost:3000`)
- Centralized API utilities in `src/utils/api.ts`
- Auto-logout on 401 responses
- Type definitions in `src/types/`

#### Component Structure
- Each component has its own directory with `Component.tsx` + `styled.ts`
- Shared components in `src/components/`
- Page components in `src/pages/`
- Layout components wrap all pages with Header/Sidebar navigation

#### Styling System
- Theme definitions in `src/Theme/theme.ts`:
  - Color palette: HotPink primary (#ff3b79, #ff709d, #ff99b9), dark theme (#060610, #141420, #26273c)
  - Gap system: 0.25rem to 2.625rem
  - Radius system: 0.25rem to 999rem
  - Typography: Main, Title, Body, Label variants
- Emotion styled components pattern with `styled.ts` files
- All measurements in `rem` units
- Icon component wrapper for Material Symbols at `src/components/Icons/Icon.tsx`

### Commit Convention
Follow conventional commits format:
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code formatting (no logic changes)
- **refactor**: Code restructuring
- **test**: Test additions/changes
- **chore**: Build, package updates
- **perf**: Performance improvements
- **ci**: CI/CD changes