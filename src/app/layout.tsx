// Updated: Added Google Analytics integration alongside existing Vercel Analytics and Speed Insights
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import GoogleAnalytics from './components/GoogleAnalytics';
import "./tailwind.css";
import './styles.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NOTFINE Meme Coin",
  description: "Join the most chaotic memecoin venture where nothing is ever quite as it seems!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="deployment-branch" content={process.env.VERCEL_GIT_COMMIT_REF || 'local'} />
        <meta name="deployment-commit" content={process.env.VERCEL_GIT_COMMIT_SHA || 'local'} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={spaceGrotesk.className}>
        <GoogleAnalytics />
        {children}
        <Analytics debug={true} />
        <SpeedInsights />
      </body>
    </html>
  );
}
