import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

// Fonts are self-hosted (OFL, see app/fonts/LICENSE-*.txt) rather than pulled
// from Google Fonts: no third-party request at runtime, and the build works
// on networks where fonts.googleapis.com is unreachable.
const syne = localFont({
  src: [
    { path: "./fonts/syne-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/syne-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/syne-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-syne",
  display: "swap",
});

const chivo = localFont({
  src: [
    { path: "./fonts/chivo-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/chivo-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-chivo",
  display: "swap",
});

const description = `${site.legalName} — an independent software studio in ${site.location} building native Android apps and games.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.legalName}`,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: site.name,
  // Icons come from the file conventions in app/: favicon.ico, icon.png and
  // apple-icon.png. Each was rendered at its own size rather than scaled from
  // one source, so Next emits the right links without a manual icons block.
  openGraph: {
    title: `${site.name} — ${site.legalName}`,
    description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/mebs-og.png", width: 1200, height: 630, alt: site.name }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.legalName}`,
    description,
    images: ["/mebs-og.png"],
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${chivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
