// Added: Custom analytics hook for tracking events across both Google Analytics and Vercel Analytics
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview, event } from '../lib/gtag';

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  // Return tracking functions for manual event tracking
  return {
    trackEvent: (action: string, category: string, label?: string, value?: number) => {
      event({ action, category, label, value });
    },
    trackPageView: (url: string) => {
      pageview(url);
    }
  };
} 