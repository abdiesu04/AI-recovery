# Contributing

Thank you for your interest in contributing to AI Recovery!

## Getting started

1. Fork the repository on GitHub.
2. Clone your fork locally.
3. Follow the [Getting Started](./GETTING_STARTED.md) guide to set up your environment.
4. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

## Development workflow

1. Make your changes in the `ai-recovery/` directory.
2. Format your code:

```bash
cd ai-recovery
npm run format
```

3. Lint your code:

```bash
npm run lint
```

4. Test manually by running both the frontend and backend.
5. Commit with a clear message (see below).
6. Push and open a pull request.

## Commit message format

Use conventional commit prefixes:

| Prefix | Use for |
|--------|---------|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation changes |
| `style:` | Formatting, no logic changes |
| `refactor:` | Code restructuring |
| `test:` | Adding or updating tests |
| `chore:` | Maintenance, dependencies, config |

**Examples:**

```
feat: add community forum page
fix: correct therapist detail routing
docs: update API reference for check-in endpoint
style: format components with Prettier
```

## Code style

See [Code Style Guide](./CODE_STYLE.md) for formatting rules. The project uses:

- **ESLint** — linting (extends `next/core-web-vitals`)
- **Prettier** — code formatting

Run both before submitting:

```bash
npm run lint
npm run format:check
```

## Pull request guidelines

- Keep PRs focused on a single feature or fix.
- Update documentation if you change APIs or add features.
- Include screenshots for UI changes.
- Ensure the app builds without errors: `npm run build`.

## Reporting issues

Open an issue on GitHub with:

- A clear title and description
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots if applicable

## Code of conduct

Be respectful and supportive. This project supports people in recovery — maintain an empathetic tone in both code comments and community interactions.
