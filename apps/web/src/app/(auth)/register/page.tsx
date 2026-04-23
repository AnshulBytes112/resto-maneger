'use client';

import React from 'react';
import { RegisterForm } from '@/components/auth/register-form';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    // Navigate to verify page after successful registration
    router.push('/verify');
  };

  return <RegisterForm onSuccess={handleRegisterSuccess} />;
}
