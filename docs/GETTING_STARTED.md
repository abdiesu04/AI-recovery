# Getting Started

This guide walks you through setting up the **AI Recovery** project on your local machine.

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| [Node.js](https://nodejs.org/) | 18+ (LTS recommended) | Next.js frontend |
| [npm](https://www.npmjs.com/) | 9+ | Package management |
| [Python](https://www.python.org/) | 3.10+ | FastAPI backend |
| [MongoDB](https://www.mongodb.com/) | 6+ | Chat history & user data |
| [Git](https://git-scm.com/) | 2.x | Version control |

## 1. Clone the repository

```bash
git clone https://github.com/abdiesu04/AI-recovery.git
cd AI-recovery
```

## 2. Frontend setup (Next.js)

```bash
cd ai-recovery
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without writing |

## 3. Backend setup (FastAPI)

The Python API lives in `ai-recovery/AI-hackaton-Backend/`.

```bash
cd ai-recovery/AI-hackaton-Backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file in the backend directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/AIdb
GOOGLE_API_KEY=your-gemini-api-key
```

Start MongoDB, then run the API:

```bash
uvicorn src.main:app --reload --port 8000
```

The API will be available at [http://localhost:8000](http://localhost:8000).

## 4. Environment variables

| Variable | Location | Description |
|----------|----------|-------------|
| `MONGO_URI` | Backend `.env` | MongoDB connection string |
| `GOOGLE_API_KEY` | Backend `.env` | Google Gemini API key for AI features |

## 5. Project structure

```
AI-recovery/
├── docs/                  # Project documentation
├── public/                # Root-level static assets
├── ai-recovery/           # Next.js frontend application
│   ├── app/               # Pages, routes, and API helpers
│   ├── components/        # Reusable React components
│   ├── public/            # Frontend static assets
│   └── AI-hackaton-Backend/  # FastAPI backend
└── README.md
```

## Troubleshooting

**Port already in use**

```bash
# Find and kill process on port 3000 or 8000
lsof -i :3000
kill -9 <PID>
```

**MongoDB connection failed**

Ensure MongoDB is running:

```bash
brew services start mongodb-community   # macOS with Homebrew
```

**Module not found after clone**

```bash
cd ai-recovery && npm install
```

For more details, see [Architecture](./ARCHITECTURE.md) and [API Reference](./API.md).
