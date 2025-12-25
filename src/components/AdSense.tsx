'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface AdSenseProps {
  adSlot?: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style,
  className,
}: AdSenseProps) {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  if (!publisherId) {
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className={`adsbygoogle ${className || ''}`}
        style={{
          display: 'block',
          ...style,
        }}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </>
  );
}

// Composant pour les annonces display (bannière)
export function AdSenseBanner() {
  return (
    <div className="my-8 flex justify-center">
      <AdSense
        adFormat="horizontal"
        fullWidthResponsive={true}
        className="min-h-[100px] w-full max-w-[728px]"
      />
    </div>
  );
}

// Composant pour les annonces dans la sidebar
export function AdSenseSidebar() {
  return (
    <div className="my-4">
      <AdSense
        adFormat="vertical"
        fullWidthResponsive={true}
        className="min-h-[250px] w-full"
      />
    </div>
  );
}

// Composant pour les annonces inline (dans le contenu)
export function AdSenseInline() {
  return (
    <div className="my-6 flex justify-center">
      <AdSense
        adFormat="rectangle"
        fullWidthResponsive={true}
        className="min-h-[250px] w-full max-w-[300px]"
      />
    </div>
  );
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

