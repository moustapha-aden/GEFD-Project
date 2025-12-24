import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from '@/components/ui/sonner';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'GEFD - Guide Ecampus France Djibouti',
    template: '%s | GEFD - Guide Ecampus France Djibouti',
  },
  description:
    "Ce site est un guide pour les étudiants de l'Ecampus France Djibouti.",
  metadataBase: new URL('https://gefd-project.vercel.app'),
  openGraph: {
    title: 'GEFD - Guide Ecampus France Djibouti',
    description:
      "Ce site est un guide pour les étudiants de l'Ecampus France Djibouti.",
  },
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
