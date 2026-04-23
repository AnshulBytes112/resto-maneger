'use client';

import React from 'react';
import { AuthShell } from '@/components/auth/auth-shell';
import { usePathname } from 'next/navigation';
import { UI_CONTENT } from '@/lib/content';

/**
 * Shared Layout for all Auth pages (Login, Register, Verify).
 * Uses the AuthShell to provide a consistent centered card UI.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { login, register, verify } = UI_CONTENT.auth;

  // Determine dynamic title and description based on current route
  let title = login.title;
  let description = login.description;

  if (pathname.includes('register')) {
    title = register.title;
    description = register.description;
  } else if (pathname.includes('verify')) {
    title = verify.title;
    description = verify.description;
  }

  return (
    <AuthShell title={title} description={description}>
      {children}
    </AuthShell>
  );
}
