import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CurveDivider } from "@/components/CurveDivider";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { appBySlug, detailedApps } from "@/lib/apps";
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

  return {
    title: `${app.name} privacy policy`,
    description: `What ${app.name} does with your data, and what it does not.`,
    alternates: { canonical: `${site.url}/privacy/${app.slug}` },
    robots: { index: true, follow: true },
  };
}

/** Turns a bare URL inside a sentence into a link, leaving the rest as text. */
function withLink(text: string) {
  const match = text.match(/https?:\/\/[^\s.]+(?:\.[^\s.,)]+)*\/?/);
  if (!match) return text;

  const url = match[0];
  const [before, after] = text.split(url);
  return (
    <>
      {before}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
      >
        {url}
      </a>
      {after}
    </>
  );
}

export default async function AppPrivacyPage({ params }: Params) {
  const { slug } = await params;
  const app = appBySlug(slug);
  if (!app || app.body.length === 0) notFound();

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
          {sections.map((section) => (
            <section key={section.heading} className="mt-14 first:mt-0">
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {section.heading}
              </h2>

              {section.paragraphs?.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="mt-4 max-w-[66ch] leading-relaxed text-ink/80"
                >
                  {para}
                </p>
              ))}

              {section.bullets ? (
                <ul className="mt-6 border-t border-ink/12">
                  {section.bullets.map((bullet) => (
                    <li
                      key={(bullet.term ?? "") + bullet.text.slice(0, 30)}
                      className="max-w-[72ch] border-b border-ink/12 py-4 leading-relaxed text-ink/80"
                    >
                      {bullet.term ? (
                        <span className="font-medium text-ink">{bullet.term}: </span>
                      ) : null}
                      {withLink(bullet.text)}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

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
