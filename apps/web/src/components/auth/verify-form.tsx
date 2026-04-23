'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { UI_CONTENT } from '@/lib/content';
import { mockDb } from '@/lib/mock-api';

interface VerifyFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function VerifyForm({ className, onSuccess }: VerifyFormProps) {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { verify } = UI_CONTENT.auth;

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const success = await mockDb.verifyOtp(otp);
      if (success) {
        if (onSuccess) onSuccess();
      } else {
        setError(verify.errorInvalid);
      }
    } catch (err) {
      setError(verify.errorInvalid);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn('grid gap-6', className)}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="otp">{verify.otpLabel}</Label>
            <Input
              id="otp"
              placeholder={verify.otpPlaceholder}
              type="text"
              inputMode="numeric"
              maxLength={6}
              disabled={isLoading}
              required
              className="text-center text-2xl tracking-[1em]"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          {error && (
            <p className="text-sm font-medium text-destructive">
              {error}
            </p>
          )}
          <Button disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90">
            {isLoading && (
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            )}
            {verify.submitButton}
          </Button>
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => console.log('Resending OTP...')}
            >
              {verify.resendLink}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
