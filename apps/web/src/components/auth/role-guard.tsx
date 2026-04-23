'use client';

import React from 'react';
import { useAuth, Role } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: Role[];
  redirectTo?: string;
}

/**
 * RoleGuard Component
 * Protects components/pages based on user roles.
 */
export function RoleGuard({ 
  children, 
  allowedRoles, 
  redirectTo = '/login' 
}: RoleGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoading && (!user || !allowedRoles.includes(user.role))) {
      console.warn('Access denied. Redirecting to:', redirectTo);
      router.push(redirectTo);
    }
  }, [user, isLoading, allowedRoles, router, redirectTo]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent shadow-lg shadow-primary/20" />
      </div>
    );
  }

  if (user && allowedRoles.includes(user.role)) {
    return <>{children}</>;
  }

  return null;
}
