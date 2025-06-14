# Architecture

## Overview

AI Recovery is a full-stack addiction recovery support platform. It combines a **Next.js 14** frontend with a **FastAPI** backend powered by **Google Gemini** for AI-driven chat, recovery plans, check-ins, and habit tracking.

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (User)                       │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│              Next.js 14 (App Router)                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐ │
│  │  Pages   │  │Components│  │  API Helpers (axios) │ │
│  └──────────┘  └──────────┘  └──────────┬───────────┘ │
└──────────────────────────────────────────┼─────────────┘
                                           │ HTTP
┌──────────────────────────────────────────▼─────────────┐
│              FastAPI Backend (port 8000)                │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐  │
│  │   Auth   │  │  Routes  │  │  Gemini AI (LangChain)│  │
│  └──────────┘  └──────────┘  └──────────┬───────────┘  │
└──────────────────────────────────────────┼──────────────┘
                                           │
                              ┌────────────▼────────────┐
                              │       MongoDB           │
                              │  (users, chat history)  │
                              └─────────────────────────┘
```

## Frontend (`ai-recovery/`)

Built with **Next.js 14 App Router**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Material UI (MUI v5)**.

### Key routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Landing page with feature overview |
| `/login` | `app/login/page.tsx` | User authentication |
| `/register` | `app/register/page.tsx` | Multi-step user registration |
| `/home` | `app/home/page.tsx` | Recovery hub after login |
| `/dashboard` | `app/dashboard/page.tsx` | Progress dashboard |
| `/chat` | `app/chat/page.tsx` | AI chat with markdown rendering |
| `/aichat` | `app/aichat/page.tsx` | AI Coach interface |
| `/checkin` | `app/checkin/page.tsx` | Daily mood & progress check-in |
| `/habit` | `app/habit/page.tsx` | Habit tracking |
| `/plan` | `app/plan/page.tsx` | Personalized recovery plan |
| `/therapists` | `app/therapists/page.tsx` | Therapist directory |

### Component structure

```
components/
├── Navbar.tsx          # Top navigation with mobile drawer
├── Footer.tsx          # Site footer
├── Sidebar.tsx         # Collapsible side menu
├── FeaturesCard.tsx    # Landing page feature grid
├── FeatureCard.tsx     # Wrapper card for feature items
└── cards/              # Individual feature/dashboard cards
    ├── AIAssistantCard.tsx
    ├── DailyCheckInCard.tsx
    ├── HabitTrackerCard.tsx
    └── ...
```

## Backend (`ai-recovery/AI-hackaton-Backend/`)

Built with **FastAPI**, **MongoDB** (Motor/PyMongo), **LangChain**, and **Google Gemini**.

### Core modules

| Module | Path | Responsibility |
|--------|------|----------------|
| Main app | `src/main.py` | API routes, AI logic, CORS |
| Auth | `src/auth/auth.py` | JWT tokens, password hashing |
| Users | `src/routes/users.py` | User CRUD operations |
| Database | `src/database/database.py` | MongoDB connection |
| Schemas | `src/schema/userSchema.py` | Pydantic models |

### AI features

- **Chat** — Empathetic recovery-focused responses using Gemini
- **Recovery plans** — Personalized step-by-step plans from user profile + chat history
- **Check-ins** — Daily mood/progress summaries with suggestions
- **Habit tracking** — Progress feedback on habit completion

## Data flow

1. User interacts with a Next.js page (e.g., `/chat`).
2. The page calls an API helper (`app/chat/api.js`) via axios.
3. The helper sends a POST request to FastAPI (`localhost:8000`).
4. FastAPI retrieves user context from MongoDB, invokes Gemini, stores the response, and returns it.
5. The frontend renders the AI response (markdown for chat, plain text for check-ins).

## Tech stack summary

| Layer | Technology |
|-------|------------|
| Frontend framework | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS, MUI v5, CSS Modules |
| Backend | FastAPI, Python 3.10+ |
| Database | MongoDB |
| AI | Google Gemini via LangChain |
| Auth | JWT (python-jose, passlib/bcrypt) |
