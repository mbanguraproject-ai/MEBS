import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CurveDivider } from "@/components/CurveDivider";
import { LegalBody } from "@/components/LegalBody";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { appBySlug } from "@/lib/apps";
import { type LegalKind, legalDoc, legalLabels } from "@/lib/legal";
import { site } from "@/lib/site";

const order: LegalKind[] = ["privacy", "terms", "refund", "delete"];

export function legalMetadata(kind: LegalKind, slug: string): Metadata {
  const doc = legalDoc(kind, slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.lede,
    alternates: { canonical: `${site.url}/${kind}/${slug}` },
    robots: { index: true, follow: true },
  };
}

/** One hand-written document, with links to the same app's other documents. */
export function LegalPage({ kind, slug }: { kind: LegalKind; slug: string }) {
  const doc = legalDoc(kind, slug);
  if (!doc) notFound();
  const app = appBySlug(slug);
  const others = order.filter((k) => k !== kind && legalDoc(k, slug));

  return (
    <>
      <PageHeader
        eyebrow={`Effective ${doc.effective}`}
        title={doc.title}
        lede={doc.lede}
        backHref={app ? `/apps/${slug}` : "/"}
        backLabel={app?.name ?? site.name}
      />

      <CurveDivider above="#000000" below="#ffffff" />

      <main className="bg-paper text-ink">
        <div className="mx-auto max-w-4xl px-6 pb-20">
          <LegalBody sections={doc.sections} />

          {others.length ? (
            <p className="mt-16 text-sm text-graphite">
              Also for {app?.name ?? slug}:{" "}
              {others.map((k, i) => (
                <span key={k}>
                  {i > 0 ? " · " : null}
                  <Link href={`/${k}/${slug}`} className="underline underline-offset-4">
                    {legalLabels[k]}
                  </Link>
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </main>

      <CurveDivider above="#ffffff" below="#000000" flip />
      <SiteFooter />
    </>
  );
}
