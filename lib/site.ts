/**
 * Single place for the details that change. Edit here, not in the components.
 */
export const site = {
  name: "MEBS",
  legalName: "Mohameds Engineering and Build Studio",
  location: "Freetown, Sierra Leone",
  email: "mebssoftware9@gmail.com",
  playDeveloper: "DEVBANGS",
  /** Set NEXT_PUBLIC_SITE_URL in Vercel once the domain is attached. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
