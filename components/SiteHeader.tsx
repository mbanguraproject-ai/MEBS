import Link from "next/link";
import { MebsMark } from "./MebsMark";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/12 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-3 text-paper"
          aria-label={`${site.name} home`}
        >
          <MebsMark size={36} priority className="h-8 w-8 md:h-9 md:w-9" />
          <span className="font-display text-lg font-bold tracking-[0.34em] md:text-xl">
            MEBS
          </span>
        </Link>

        <nav className="flex items-center gap-7 text-sm text-ash md:gap-9">
          <Link href="#apps" className="transition-colors hover:text-paper">
            Apps
          </Link>
          <Link href="#about" className="transition-colors hover:text-paper">
            About
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="hidden transition-colors hover:text-paper sm:inline"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
