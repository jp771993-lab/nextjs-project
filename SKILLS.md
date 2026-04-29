# Project Skills

Use this file to document project-specific skills, conventions, and workflows for this frontend boilerplate.

## Stack

- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS
- TanStack Query
- Zustand
- Axios

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `features/` - Feature-based modules
- `hooks/` - Custom React hooks
- `lib/` - Core libraries and configuration
- `services/` - API service layer
- `store/` - Global state management
- `utils/` - Utility functions
- `types/` - TypeScript type definitions

## Common Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Coding Guidelines

- Prefer TypeScript types for shared data contracts.
- Keep reusable UI in `components/`.
- Keep feature-specific code inside `features/`.
- Put API calls and HTTP clients in `services/` or `lib/`.
- Use Tailwind CSS utilities for styling.
- Use Zustand for global client state.
- Use TanStack Query for server state and async data fetching.
