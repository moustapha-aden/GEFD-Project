import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { RootProvider } from 'fumadocs-ui/provider/next';

export const metadata: Metadata = {
  title: 'GEFD - Guide Ecampus France Djibouti',
  description:
    "Ce site est un guide pour les étudiants de l'Ecampus France Djibouti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        <RootProvider>{children}</RootProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
