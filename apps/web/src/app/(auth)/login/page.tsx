'use client';

import React from 'react';
import { LoginForm } from '@/components/auth/login-form';
import { AuthShell } from '@/components/auth/auth-shell';
import { useRouter } from 'next/navigation';
import { UI_CONTENT } from '@/lib/content';

export default function LoginPage() {
  const router = useRouter();
  const { login } = UI_CONTENT.auth;

  const handleLoginSuccess = () => {
    // Navigate to superadmin dashboard after successful login
    router.push('/admin/dashboard');
  };

  return (
    <AuthShell>
      <LoginForm onSuccess={handleLoginSuccess} />
    </AuthShell>
  );
}
