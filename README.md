# Jijau Diagnostics — MERN Starter

**Stack**
- Frontend: React (Vite) + TailwindCSS
- Backend: Node.js + Express + MongoDB (Mongoose)
- Authentication: JWT
- Mobile-friendly, simple image slider on Home.

## Contents
- `/frontend` — React + Vite app
- `/backend` — Express API server
- `.env.example` files in backend

## How to run (local dev)

### Backend
```bash
cd backend
npm install
# Create .env from .env.example, set MONGO_URI and JWT_SECRET
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend expects the API at `http://localhost:5000/api`.

## Notes
- Slider images are SVG placeholders in `/frontend/src/assets`.
- Replace with real images and update content as needed.
- This is a starter scaffold — extend tests, validation, roles, file uploads, and UI per your needs.
