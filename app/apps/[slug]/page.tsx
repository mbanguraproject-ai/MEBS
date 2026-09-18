import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GooglePlayLogo, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { CurveDivider } from "@/components/CurveDivider";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { appBySlug, detailedApps, playUrl } from "@/lib/apps";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return detailedApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const app = appBySlug(slug);
  if (!app) return {};

  return {
    title: app.name,
    description: app.summary,
    alternates: { canonical: `${site.url}/apps/${app.slug}` },
    openGraph: {
      title: `${app.name} — ${site.name}`,
      description: app.summary,
      url: `${site.url}/apps/${app.slug}`,
    },
  };
}

export default async function AppPage({ params }: Params) {
  const { slug } = await params;
  const app = appBySlug(slug);
  if (!app || app.body.length === 0) notFound();

  const live = app.status === "live";
  const href = app.packageId ? playUrl(app.packageId) : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: app.storeTitle ?? app.name,
    description: app.summary,
    operatingSystem: "Android",
    applicationCategory: "MobileApplication",
    ...(href ? { url: href } : {}),
    author: { "@type": "Organization", name: site.legalName },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHeader eyebrow={live ? "On Google Play" : "In development"} title={app.name} lede={app.tagline} />

      <div className="bg-ink">
        <div className="mx-auto max-w-4xl px-6 pb-16">
          {live && href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              <GooglePlayLogo size={18} weight="fill" aria-hidden="true" />
              Get it on Google Play
            </a>
          ) : (
            <p className="text-sm text-graphite">
              Not released yet. It will appear on Google Play under the{" "}
              {site.playDeveloper} developer account.
            </p>
          )}
        </div>
      </div>

      <CurveDivider above="#000000" below="#ffffff" />

      <main className="bg-paper text-ink">
        <div className="mx-auto max-w-4xl px-6 pb-20">
          <div className="space-y-6 text-lg leading-relaxed text-ink/80">
            {app.body.map((para) => (
              <p key={para.slice(0, 40)} className="max-w-[66ch]">
                {para}
              </p>
            ))}
          </div>

          {app.highlights.length ? (
            <section className="mt-16">
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                What it does
              </h2>
              <ul className="mt-6 border-t border-ink/12">
                {app.highlights.map((item) => (
                  <li key={item} className="border-b border-ink/12 py-4 text-ink/80">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {app.permissions.length ? (
            <section className="mt-16">
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                What it asks for
              </h2>
              <p className="mt-3 max-w-[60ch] text-graphite">
                Every permission the app requests, and the reason it needs it.
              </p>
              <dl className="mt-6 border-t border-ink/12">
                {app.permissions.map((perm) => (
                  <div
                    key={perm.name}
                    className="grid gap-1 border-b border-ink/12 py-4 md:grid-cols-3 md:gap-6"
                  >
                    <dt className="font-medium">{perm.name}</dt>
                    <dd className="text-ink/80 md:col-span-2">{perm.reason}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Built with
            </h2>
            <p className="mt-3 text-ink/80">
              {app.platform}. {app.stack}.
            </p>
          </section>

          <Link
            href={`/privacy/${app.slug}`}
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-3 text-sm transition-colors hover:bg-fog"
          >
            <ShieldCheck size={18} aria-hidden="true" />
            Privacy policy for {app.name}
          </Link>
        </div>
      </main>

      <CurveDivider above="#ffffff" below="#000000" flip />
      <SiteFooter />
    </>
  );
}
