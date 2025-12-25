'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        {/* Links */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <h3 className="text-foreground mb-2 text-sm font-semibold">
              Informations
            </h3>
            <ul className="text-muted-foreground space-y-1 text-xs">
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-foreground transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground mb-2 text-sm font-semibold">
              Légal
            </h3>
            <ul className="text-muted-foreground space-y-1 text-xs">
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="hover:text-foreground transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions-d-utilisation"
                  className="hover:text-foreground transition-colors"
                >
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-border flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs sm:flex-row sm:text-sm">
          <p className="text-muted-foreground">
            &copy; {year} GEFD Project. Tous droits réservés.
          </p>

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
      </div>
    </footer>
  );
}
