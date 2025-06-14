# Code Style Guide

This project uses **Prettier** for formatting and **ESLint** for linting.

## Prettier configuration

Settings are defined in `ai-recovery/.prettierrc`:

| Option | Value |
|--------|-------|
| Semicolons | Always |
| Quotes | Double |
| Tab width | 2 spaces |
| Trailing commas | ES5 |
| Print width | 100 |
| JSX quotes | Double |

## Commands

```bash
cd ai-recovery

# Format all files
npm run format

# Check formatting without changes
npm run format:check

# Lint
npm run lint
```

## TypeScript / React conventions

### Client components

Always use double-quoted `"use client"` directive at the top of client components:

```tsx
"use client";

import React from "react";
```

### Imports

Order imports as follows:

1. React / Next.js
2. Third-party libraries (MUI, axios, etc.)
3. Local components and utilities
4. Styles (CSS modules last)

```tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
```

### Components

- Use functional components with `React.FC` or explicit prop types.
- Use PascalCase for component files and names.
- Use camelCase for functions, variables, and hooks.

### File naming

| Type | Convention | Example |
|------|------------|---------|
| Pages | `page.tsx` in route folder | `app/chat/page.tsx` |
| Components | PascalCase | `Navbar.tsx` |
| CSS Modules | camelCase + `.module.css` | `landingPage.module.css` |
| API helpers | camelCase | `api.js` |

### CSS

- Use **Tailwind CSS** utility classes for layout and spacing.
- Use **CSS Modules** for component-specific styles.
- Use **MUI `styled()`** for Material UI customizations.

## Python conventions (backend)

- Follow [PEP 8](https://peps.python.org/pep-0008/) style.
- Use type hints where possible.
- Keep route handlers in `src/routes/`, business logic in controllers/CRUD modules.

## Editor setup

An `.editorconfig` file is included for consistent editor behavior. Install the [EditorConfig](https://editorconfig.org/) plugin for your editor.

Recommended VS Code extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
