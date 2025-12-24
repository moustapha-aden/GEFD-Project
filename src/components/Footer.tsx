'use client';

import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto flex h-12 w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs sm:flex-row sm:px-6 sm:py-8 sm:text-sm">
        <p className="text-muted-foreground">&copy; {year} GEFD Project.</p>

        <p className="text-muted-foreground flex items-center gap-1">
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
