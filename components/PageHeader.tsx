import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

/**
 * Shared shell for the inner pages: dark header strip, white body, footer
 * handled by the page. Keeps /apps/* and /privacy/* on the same rails.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  backHref = "/",
  backLabel = "MEBS",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <section className="bg-ink pt-10 pb-16 text-paper md:pt-14 md:pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-paper"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {backLabel}
        </Link>

        {eyebrow ? <p className="mt-10 text-sm text-graphite">{eyebrow}</p> : null}

        <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-6xl">
          {title}
        </h1>

        {lede ? (
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-ash">{lede}</p>
        ) : null}
      </div>
    </section>
  );
}
