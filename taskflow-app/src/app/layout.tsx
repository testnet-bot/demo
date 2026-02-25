import './globals.css';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import React from 'react';

export const metadata = {
  title: 'TaskFlow App',
  description: 'Premium task manager with automation, stats, and theme toggle',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full bg-black/90 border-b border-white/10 backdrop-blur-lg flex items-center justify-between px-[clamp(1rem,4vw,3rem)] py-[clamp(0.75rem,2vw,2rem)]">
          <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-purple-400">
            TaskFlow
          </h1>
          {/* ThemeToggle is a client component */}
          <ThemeToggle />
        </header>

        {/* Main content */}
        <main className="flex-1 px-[clamp(1rem,4vw,3rem)] py-[clamp(1rem,3vw,2rem)] flex flex-col gap-[clamp(1rem,2vw,2rem)]">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-black/90 border-t border-white/10 text-gray-400 text-[clamp(0.75rem,1.5vw,1rem)] text-center py-[clamp(0.5rem,1.5vw,1rem)]">
          &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
