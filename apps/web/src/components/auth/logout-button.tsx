'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UI_CONTENT } from '@/lib/content';

interface LogoutButtonProps {
  className?: string;
  variant?: 'outline' | 'ghost' | 'default';
  showIcon?: boolean;
}

export function LogoutButton({
  className,
  variant = 'outline',
  showIcon = true
}: LogoutButtonProps) {
  const handleLogout = async () => {
    // Logic to clear tokens/session would go here
    console.log('Logging out...');
    window.location.href = '/login';
  };

  return (
    <Button
      variant={variant}
      onClick={handleLogout}
      className={cn('w-full justify-start text-destructive hover:bg-destructive/10', className)}
    >
      {showIcon && <LogOut className="mr-2 h-4 w-4" />}
      {UI_CONTENT.auth.logout.label}
    </Button>
  );
}
