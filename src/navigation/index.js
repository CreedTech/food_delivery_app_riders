import React from 'react';
import { AuthProvider } from '../components/context';
import Routes from './routes';

export default function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
