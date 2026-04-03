'use client';

import { useAuth } from '@clerk/nextjs';
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export function HeaderButtons() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div className="w-25" />; // Placeholder for loading state
  }

  if (isSignedIn) {
    return <UserButton />;
  }

  return (
    <>
      <SignInButton mode="modal">
        <Button variant="ghost">Sign in</Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button>Sign up</Button>
      </SignUpButton>
    </>
  );
}
