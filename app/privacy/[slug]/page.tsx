import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CurveDivider } from "@/components/CurveDivider";
import { LegalBody } from "@/components/LegalBody";
import { LegalPage, legalMetadata } from "@/components/LegalPage";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { appBySlug, detailedApps } from "@/lib/apps";
import { legalDoc } from "@/lib/legal";
import { EFFECTIVE_DATE, buildPolicy } from "@/lib/privacy";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return detailedApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const app = appBySlug(slug);
  if (!app) return {};
  if (legalDoc("privacy", slug)) return legalMetadata("privacy", slug);

  return {
    title: `${app.name} privacy policy`,
    description: `What ${app.name} does with your data, and what it does not.`,
    alternates: { canonical: `${site.url}/privacy/${app.slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function AppPrivacyPage({ params }: Params) {
  const { slug } = await params;
  const app = appBySlug(slug);
  if (!app || app.body.length === 0) notFound();

  // An app with accounts and a server has a hand-written policy instead.
  if (legalDoc("privacy", slug)) return <LegalPage kind="privacy" slug={slug} />;

  const sections = buildPolicy(app);

  return (
    <>
      <PageHeader
        eyebrow={`Effective ${EFFECTIVE_DATE}`}
        title={`${app.name} privacy policy`}
        lede={`What ${app.name} does with your data, and what it does not.`}
        backHref={`/apps/${app.slug}`}
        backLabel={app.name}
      />

      <CurveDivider above="#000000" below="#ffffff" />

      <main className="bg-paper text-ink">
        <div className="mx-auto max-w-4xl px-6 pb-20">
          <LegalBody sections={sections} />

          <p className="mt-16 text-sm text-graphite">
            Policies for the other {site.name} apps are listed on the{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              privacy index
            </Link>
            .
          </p>
        </div>
      </main>

      <CurveDivider above="#ffffff" below="#000000" flip />
      <SiteFooter />
    </>
  );
}
