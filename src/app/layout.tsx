import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from '@/components/ui/sonner';
import { RootProvider } from 'fumadocs-ui/provider/next';
import Script from 'next/script';
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
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        {publisherId && (
          <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "${publisherId}",
                  enable_page_level_ads: true
                });
              `,
            }}
          />
        )}
        <RootProvider>{children}</RootProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
