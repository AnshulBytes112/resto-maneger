'use client';

import React from 'react';
import { RoleGuard } from '@/components/auth/role-guard';
import { UserDashboardShell } from '@/components/dashboard/user-dashboard-shell';

/**
 * Root Layout for the POS Terminal Module.
 * Wraps terminal in a RoleGuard ensuring 'staff' or 'admin' or 'manager' can enter.
 */
export default function PosLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard allowedRoles={['admin', 'manager', 'staff']}>
      <UserDashboardShell>
        {children}
      </UserDashboardShell>
    </RoleGuard>
  );
}
