'use client';
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import Dashboard from '../components/Dashboard/Dashboard';

const Page: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  const handleLogin = (userData: { name: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn && user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <AuthForm onLogin={handleLogin} />
      )}
    </>
  );
};

export default Page;
