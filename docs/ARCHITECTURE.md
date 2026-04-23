# ARCHITECTURE - FINBOOKS Technical Stack

## Monorepo Strategy
We use **Nx** to manage our workspace. This allows us to scale by adding more applications (e.g., an Admin Dashboard, a Customer App) while sharing common libraries, types, and configurations.

## Stack Overview

### Frontend (`apps/web`)
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui (Mandatory)
- **State Management**: React Context / Zustand (optional)
- **Data Fetching**: Axios

### Backend (`apps/api`)
- **Environment**: Node.js
- **Framework**: Express.js
- **Bundler**: esbuild (for fast production builds)
- **API Documentation**: Swagger (via `api-docs`)

### Database & Persistence
- **Primary DB**: MongoDB (Mongoose for ODM)
- **Environment Management**: `.env` files (Gitignored)

## Directory Structure
```text
hotel-management/
├── apps/
│   ├── api/          # Express Backend
│   └── web/          # Next.js Frontend
├── docs/             # PRDs, flows, architecture guides
└── components/       # (Future) Shared libs and UI
```
