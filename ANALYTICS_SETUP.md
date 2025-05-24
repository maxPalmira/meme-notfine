# Analytics Setup Guide

## Google Analytics Setup

1. Go to [Google Analytics Console](https://analytics.google.com/)
2. Create a new property or use existing one
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID.

## Vercel Analytics Setup

Vercel Analytics is already configured in your project. To enable it:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Analytics tab
4. Enable Analytics for your project

## Testing Locally

To test the analytics setup locally:

1. Create `.env.local` with your Google Analytics ID
2. Run `npm run dev`
3. Open browser developer tools → Network tab
4. Look for requests to `google-analytics.com` (for GA)
5. Look for requests to `vitals.vercel-analytics.com` (for Vercel Analytics)

## Environment Variables Needed

```bash
# .env.local (create this file)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
``` 