import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { AuthContextProvider } from './components/context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Copyrights from './components/Copyrights';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <NavBar />
        <Outlet />
        <Copyrights />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
