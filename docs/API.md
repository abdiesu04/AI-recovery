# API Reference

The backend runs on **http://localhost:8000** by default. All AI endpoints use Google Gemini under the hood.

## Authentication

### POST `/auth/login`

Authenticate a user and receive a JWT token.

**Request body:**

```json
{
  "username": "user123",
  "password": "your-password"
}
```

**Response:**

```json
{
  "access_token": "eyJ...",
  "token_type": "bearer"
}
```

### POST `/auth/register`

Register a new user account.

## AI Endpoints

### GET `/api/plan`

Generate a personalized recovery plan based on user profile and chat history.

**Response:**

```json
{
  "recovery_plan": "Step 1: ..."
}
```

### POST `/api/chat`

Send a message to the AI recovery assistant.

**Request body:**

```json
{
  "user_id": "6690b520c3501fb2363cf995",
  "message": "I'm feeling stressed today"
}
```

**Response:** Plain-text AI response string.

### POST `/api/checkin`

Submit a daily check-in with progress and mood.

**Request body:**

```json
{
  "user_id": "6690b520c3501fb2363cf995",
  "progress": "Completed morning meditation",
  "feeling": "Calm and focused"
}
```

**Response:** Plain-text AI summary and suggestions.

### POST `/api/habits`

Log habit progress.

**Request body:**

```json
{
  "user_id": "6690b520c3501fb2363cf995",
  "habit": "Exercise 30 minutes",
  "done": "Went for a 20-minute walk"
}
```

**Response:** Plain-text AI feedback and next-step suggestions.

## Health check

### GET `/`

**Response:**

```json
{
  "Hello": "World"
}
```

## Frontend API helpers

The Next.js app wraps these endpoints in helper modules:

| Helper | File | Backend route |
|--------|------|---------------|
| Chat | `app/chat/api.js` | `POST /api/chat` |
| Check-in | `app/checkin/api.js` | `POST /api/checkin` |
| Habits | `app/habit/api.js` | `POST /api/habits` |
| Plan | `app/plan/api.js` | `GET /api/plan` |

All helpers use axios with base URL `http://localhost:8000`.

## CORS

The backend allows requests from:

- `http://localhost:3000`
- `http://127.0.0.1:3000`
- `http://localhost:8080`
- `http://localhost:5173`

## Error handling

API errors return standard HTTP status codes. The frontend helpers catch errors and log them to the console. In production, implement user-facing error messages and retry logic.
