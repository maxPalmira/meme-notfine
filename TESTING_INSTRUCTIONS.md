# Testing Analytics Setup

## Quick Test Steps

1. Create a `.env.local` file in your project root:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
(Replace with your actual Google Analytics Measurement ID)

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to http://localhost:3000

4. Open Developer Tools (F12) → Network tab

5. Look for these requests:
   - `google-analytics.com` or `googletagmanager.com` (Google Analytics)
   - `vitals.vercel-analytics.com` (Vercel Analytics)

## What You Should See

✅ **Google Analytics Working**: Requests to `gtag/js` and `analytics.js`
✅ **Vercel Analytics Working**: Requests to `vitals.vercel-analytics.com`

## Debugging

If Google Analytics isn't working:
- Check that `.env.local` exists and has the correct GA ID
- Check browser console for errors
- Verify the GA ID format: `G-XXXXXXXXXX`

If Vercel Analytics isn't working:
- Check that your project is deployed to Vercel
- Verify Analytics is enabled in Vercel Dashboard 