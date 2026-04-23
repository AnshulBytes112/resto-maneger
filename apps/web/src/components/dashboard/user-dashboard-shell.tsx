import React from 'react';
import { UserSidebar } from './user-sidebar';
import { UserTopLogoHeader } from './user-top-logo-header';

interface UserDashboardShellProps {
  children: React.ReactNode;
}

export function UserDashboardShell({ children }: UserDashboardShellProps) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 border-r border-border lg:block shrink-0">
        <UserSidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <UserTopLogoHeader />
        
        <main className="flex-1 overflow-y-auto bg-muted/20 p-4 md:p-8">
          <div className="mx-auto max-w-[1400px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
