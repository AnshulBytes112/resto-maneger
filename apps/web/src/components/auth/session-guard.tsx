'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SessionGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

/**
 * SessionGuard handles client-side route protection.
 * It checks for the existence of an auth token and redirects if necessary.
 */
export function SessionGuard({ children, requireAuth = true }: SessionGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const isAuthRoute = pathname === '/login' || pathname === '/register';

    if (requireAuth && !token && !isAuthRoute) {
      router.push('/login');
    } else if (token && isAuthRoute) {
      router.push('/dashboard');
    } else {
      setIsVerifying(false);
    }
  }, [requireAuth, router, pathname]);

  if (isVerifying) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return <>{children}</>;
}
