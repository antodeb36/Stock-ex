'use client';

import { Camera } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Camera className="h-6 w-6 text-accent" />
            <span className="font-bold text-lg font-headline">PhotoSphere</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
