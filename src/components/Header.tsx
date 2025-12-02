'use client';

import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="group flex items-center space-x-2.5">
          <GraduationCap className="text-primary h-7 w-7 transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold tracking-tight">GEFD Project</span>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
}
