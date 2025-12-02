'use client';

import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between py-8 text-sm">
        <p className="text-slate-700 dark:text-slate-300">
          &copy; Copyright {year}. All rights reserved.
        </p>

        <p className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
          Hosted on
          <span className="flex items-center gap-1 font-semibold">
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
              className="invert dark:invert-0"
            />
            Vercel
          </span>
        </p>
      </div>
    </footer>
  );
}
