'use client';

import { SignUpButton, SignInButton } from '@clerk/nextjs';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <SignUpButton mode="modal">
        <Button className="gap-2 px-6 h-10 text-sm font-semibold">
          Get Started for Free
          <ArrowRight className="size-4" />
        </Button>
      </SignUpButton>
      <SignInButton mode="modal">
        <Button variant="outline" className="px-6 h-10 text-sm font-semibold">
          Sign In
        </Button>
      </SignInButton>
    </div>
  );
}

export function CtaButton() {
  return (
    <SignUpButton mode="modal">
      <Button className="gap-2 px-8 h-10 text-sm font-semibold">
        Create a Free Account
        <ArrowRight className="size-4" />
      </Button>
    </SignUpButton>
  );
}
