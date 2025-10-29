# Course Selling Frontend

React + Vite app for the Week-8 Course Selling backend.

## Prerequisites
- Node.js 18+
- Backend running on http://localhost:3000

## Install & Run
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

The dev server proxies API calls starting with `/api` to `http://localhost:3000`.

## Pages
- Home: list courses, buy (requires user sign-in)
- User: sign up, sign in, purchases
- Admin: sign up, sign in, list courses, create, edit

## Auth
- User token stored as localStorage.userToken
- Admin token stored as localStorage.adminToken
- Sent via header `token` as expected by the backend

## Notes
- Edit page loads all admin courses then filters by id (backend lacks a single-course endpoint for admins).
