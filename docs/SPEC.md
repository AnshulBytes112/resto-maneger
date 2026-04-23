# Technical Specification (SPEC) - FINBOOKS

## High-Level Goals
FINBOOKS must be resilient, handle concurrent POS transactions with low latency, and maintain strict data integrity for inventory and billing.

## Frontend Requirements
- **Server Components**: Use Next.js 16 Server Components for performance where applicable.
- **Client Components**: All POS interactive elements must be optimized Client Components.
- **Form Handling**: Use standard validation for all item and billing entries.

## Backend Requirements
- **Stateless API**: The Express server should be stateless for easy horizontal scaling.
- **Validation**: All incoming API requests must be validated against the schema.
- **Error Handling**: Standardized JSON error responses.

## Security
- **Auth**: JWT-based authentication for all non-public routes.
- **RBAC**: Middleware to enforce role-based access control.
- **Environment**: Secrets must be stored in `.env` and never committed.
