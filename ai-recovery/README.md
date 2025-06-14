# AI Recovery — Frontend

Next.js 14 application for the [Addiction Recovery Support Project](../README.md).

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check Prettier formatting |

## Project Structure

```
ai-recovery/
├── app/              # Next.js App Router pages and API helpers
├── components/       # Reusable React components
├── public/           # Static assets
└── AI-hackaton-Backend/  # FastAPI backend
```

## Documentation

See the [docs/](../docs/) folder at the repository root for full documentation:

- [Getting Started](../docs/GETTING_STARTED.md)
- [Architecture](../docs/ARCHITECTURE.md)
- [API Reference](../docs/API.md)

## Backend

The FastAPI backend must be running on port 8000 for AI features. See [Getting Started](../docs/GETTING_STARTED.md#3-backend-setup-fastapi).
