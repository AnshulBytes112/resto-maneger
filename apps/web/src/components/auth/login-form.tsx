'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { UI_CONTENT } from '@/lib/content';
import { mockDb } from '@/lib/mock-api';
import { useAuth } from '@/hooks/use-auth';

interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function LoginForm({ className, onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { login: loginContent } = UI_CONTENT.auth;
  const { login: loginAction } = useAuth();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const success = await loginAction(email, password);
      if (success) {
        if (onSuccess) onSuccess();
      } else {
        setError(loginContent.errorInvalid);
      }
    } catch (err) {
      setError(loginContent.errorInvalid);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn('grid gap-6', className)}>
      <div className="flex flex-col space-y-2 text-center mb-4">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {loginContent.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {loginContent.description}
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">
              {loginContent.emailLabel}
            </Label>
            <Input
              id="email"
              placeholder={loginContent.emailPlaceholder}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={cn('rounded-xl h-11 border-border bg-muted/50 focus:bg-background transition-colors', error && 'border-destructive')}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">
              {loginContent.passwordLabel}
            </Label>
            <Input
              id="password"
              placeholder={loginContent.passwordPlaceholder}
              type="password"
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={cn('rounded-xl h-11 border-border bg-muted/50 focus:bg-background transition-colors', error && 'border-destructive')}
            />
          </div>
          {error && (
            <p className="text-sm font-medium text-destructive text-center">
              {error}
            </p>
          )}
          <Button disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-xl font-semibold transition-all mt-2 shadow-md hover:shadow-lg active:scale-[0.98]">
            {isLoading && (
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            )}
            {loginContent.submitButton}
          </Button>
        </div>
      </form>
    </div>
  );
}
