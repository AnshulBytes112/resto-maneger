'use client';

import React from 'react';
import { Button as ShadcnButton, type ButtonProps as ShadcnButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Global re-usable button wrapper if specific project-wide logic is needed.
// By default, it just passes through to shadcn/ui button.

interface ButtonProps extends ShadcnButtonProps {
  isLoading?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton
      className={cn(className)}
      variant={variant}
      size={size}
      asChild={asChild}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </ShadcnButton>
  );
}
