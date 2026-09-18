import { About } from "@/components/About";
import { Apps } from "@/components/Apps";
import { CurveDivider } from "@/components/CurveDivider";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { apps, playUrl } from "@/lib/apps";
import { site } from "@/lib/site";

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Freetown",
    addressCountry: "SL",
  },
  makesOffer: apps
    .filter((app) => app.packageId)
    .map((app) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MobileApplication",
        name: app.storeTitle ?? app.name,
        operatingSystem: "Android",
        applicationCategory: "MobileApplication",
        url: playUrl(app.packageId as string),
      },
    })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <CurveDivider above="#000000" below="#ffffff" />
        <Apps />
        <CurveDivider above="#ffffff" below="#000000" flip />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}
