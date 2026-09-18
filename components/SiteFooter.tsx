import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { MebsMark } from "./MebsMark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 border-t border-white/12 px-6 py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <MebsMark size={36} className="h-9 w-9" />
            <span className="font-display text-lg font-bold tracking-[0.34em]">
              MEBS
            </span>
          </div>
          <p className="mt-4 max-w-[42ch] text-ash">
            {site.legalName}, {site.location}.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href="/privacy"
            className="text-paper transition-colors hover:text-ash"
          >
            Privacy
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 text-paper transition-colors hover:text-ash"
          >
            <EnvelopeSimple size={20} aria-hidden="true" />
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-paper transition-colors hover:text-ash"
          >
            <GithubLogo size={20} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-10 text-sm text-graphite">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
