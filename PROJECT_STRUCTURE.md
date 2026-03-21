# Project Structure - Flying Bird Tours

This project follows a clean, feature-based directory structure for maximum maintainability and scalability in Next.js.

## Directory Overview

### `src/app/`
Contains the Next.js App Router pages and global layouts.
- `(pages)/`: Main routes like `blog`, `destinations`, `vehicles`, etc.
- `globals.css`: Global styles and Tailwind directives.

### `src/components/`
React components organized by feature or category.
- `ui/`: Low-level, reusable design system primitives (buttons, inputs, logos).
- `layout/`: Shared layout elements like `Navbar` and `Footer`.
- `home/`: Components exclusive to the landing page.
- `vehicles/`: Vehicle-related display components.
- `booking/`: Forms and logic for the booking experience.

### `src/constants/`
Globally shared constants and configuration.
- `navigation.ts`: Site-wide menu items and routes.

### `src/data/`
Static data files that act as the single source of truth for content.
- `vehicles.ts`: Centralized list of available vehicles and their specs.

### `src/hooks/`
Custom React hooks for shared logic (e.g., scroll tracking, form handling).

### `src/lib/`
Pure utility functions and shared logic (e.g., formatting, date calculations).

### `src/services/`
External service integrations (e.g., API clients, database wrappers).

### `src/types/`
TypeScript interfaces and types for a type-safe codebase.

---

## Import Best Practices
Always use path aliases for clean imports:
- `import { ... } from "@/components/ui/..."`
- `import { ... } from "@/data/..."`
- `import { ... } from "@/constants/..."`
