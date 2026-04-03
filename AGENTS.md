# Link Shortener Project - Agent Instructions

This file contains workspace-level coding standards for AI assistants working on this link shortener project.

## Project Overview

A modern URL shortener built with:

- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Database**: PostgreSQL (Neon serverless) with Drizzle ORM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Icons**: Lucide React

## Quick Start for AI Assistants

When working on this project:

1. Always use TypeScript with proper type definitions
2. Follow Next.js App Router conventions (Server/Client Components)
3. Use Drizzle ORM for all database operations
4. Apply Tailwind CSS classes directly (utility-first approach)
5. Leverage shadcn/ui components from `/components/ui`
6. Ensure authentication checks via Clerk where needed

## Detailed Instructions

For comprehensive coding standards, refer to the instruction files in the `/docs` directory. ALWAYS refer to the relevant .md file BEFORE generating any code:

## Core Principles

1. **Type Safety**: Leverage TypeScript strictly; avoid `any` types
2. **Server-First**: Prefer Server Components; use Client Components only when needed
3. **Database Type Safety**: Use Drizzle's type inference for queries
4. **Consistent Styling**: Use Tailwind utilities; leverage `cn()` helper for conditionals
5. **Authentication**: Always validate user context in protected routes

## File Organization

```
/app              # Next.js App Router pages and layouts
/components       # React components (UI components in /components/ui)
/db               # Database schema and connection
/lib              # Utility functions and shared logic
/public           # Static assets
/docs             # Agent instruction files (this directory)
```

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run ESLint
npx drizzle-kit generate  # Generate database migrations
npx drizzle-kit migrate   # Run database migrations
npx drizzle-kit studio    # Open Drizzle Studio
```

## Environment Setup

Required environment variables:

- `DATABASE_URL` - Neon PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key

---

_Last Updated: April 2026_
