# Authentication Standards

## Overview

All authentication in this application is handled exclusively by **Clerk**. No other authentication methods or libraries should be used.

## Core Requirements

### 1. Clerk-Only Authentication

- **Use Clerk exclusively** for all authentication and user management
- Do NOT implement custom auth logic, JWT handling, or session management
- Leverage Clerk's built-in components and hooks:
  - `useAuth()` for client-side auth state
  - `auth()` for server-side auth state
  - `currentUser()` for user data access

### 2. Protected Routes

- **`/dashboard` is a protected route** and requires authentication
- Implement protection using Clerk's middleware or auth checks
- Redirect unauthenticated users to sign-in when accessing protected routes

### 3. Homepage Redirect Logic

- **If a user is logged in and accesses the homepage (`/`), redirect them to `/dashboard`**
- This ensures authenticated users land directly in the app experience
- Implement this check in the homepage component or layout

### 4. Sign In/Sign Up Modals

- **Always launch sign-in and sign-up flows as modals**, not separate pages
- Use Clerk's modal-based components:
  - Configure `<SignIn>` and `<SignUp>` components with modal display
  - Set appropriate appearance options for modal styling
- Maintain consistent user experience by keeping users on the same page

## Implementation Patterns

### Server Components (Preferred)

```typescript
import { auth } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // Protected content
}
```

### Client Components

```typescript
'use client';
import { useAuth } from '@clerk/nextjs';

export function ProtectedComponent() {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) return <Loading />;
  if (!userId) return <AccessDenied />;

  // Protected content
}
```

### Middleware Protection

```typescript
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

## Key Reminders

- ✅ Use Clerk components and hooks exclusively
- ✅ Protect /dashboard route
- ✅ Redirect logged-in users from homepage to /dashboard
- ✅ Launch auth modals, not separate pages
- ❌ Do NOT use other auth libraries (NextAuth, Passport, etc.)
- ❌ Do NOT implement custom JWT/session handling
- ❌ Do NOT create separate sign-in/sign-up pages

---

_Last Updated: April 2026_
