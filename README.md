# MEBS

The site for Mohameds Engineering and Build Studio. Next.js 15 (App Router),
React 19, Tailwind v4, TypeScript. Static — the whole page prerenders, no
server runtime.

## Running it

```
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where to change things

| What | File |
| --- | --- |
| Studio name, email, GitHub, Play developer name | `lib/site.ts` |
| The app list, summaries, package IDs, live/building status | `lib/apps.ts` |
| Colours and font tokens | `app/globals.css` |
| Hero headline and intro | `components/Hero.tsx` |
| About copy | `components/About.tsx` |

Adding an app means adding one object to `apps` in `lib/apps.ts`. Give it
`status: "live"` plus a `packageId` and it renders in the published list with a
working Play link; give it `status: "building"` and it lands under **In
development** with no link. The hero counts both lists, so they stay correct on
their own.

## Deploying to Vercel

1. Push to GitHub, import the repo in Vercel. Framework detection handles the
   build — no settings to change.
2. Add an environment variable `NEXT_PUBLIC_SITE_URL` set to the live origin
   (for example `https://mebs.dev`), for all environments. Metadata, the
   OpenGraph URL, `robots.txt` and `sitemap.xml` all read it; without it they
   fall back to `http://localhost:3000`.
3. Redeploy after adding it so the metadata picks it up.

## Assets

- `public/mebs-icon.png` — the mark. Favicon, apple-touch icon, and the header
  and footer logo.
- `public/mebs-og.png` — the social preview, 1200×630, built from the brand
  banner. The source was 512×288, so it is upscaled; re-export the banner at
  1200×630 or larger and replace this file to sharpen it.

## Fonts

Syne (display) and Chivo (body) are self-hosted from `app/fonts/` rather than
fetched from Google Fonts: no third-party request at runtime, nothing to block,
and no layout shift. Both are OFL — the licences sit beside the files.
