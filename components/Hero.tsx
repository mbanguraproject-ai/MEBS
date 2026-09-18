import { buildingApps, liveApps } from "@/lib/apps";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-24 pb-24 md:pt-36 md:pb-32">
      {/* Ribbons from the brand banner, sweeping off the right edge. */}
      <svg
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-[680px] md:w-[900px]"
        viewBox="0 0 600 800"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ribbon-a" x1="600" y1="0" x2="180" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.20" />
            <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.07" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbon-b" x1="600" y1="200" x2="240" y2="820" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.11" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="mebs-ribbon"
          d="M620 -40 C 430 120 470 300 300 380 C 130 460 190 660 40 840 L 620 840 Z"
          fill="url(#ribbon-a)"
        />
        <path
          className="mebs-ribbon mebs-ribbon-late"
          d="M640 120 C 500 260 540 400 380 480 C 220 560 280 720 150 860 L 640 860 Z"
          fill="url(#ribbon-b)"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6">
        <h1
          className="mebs-rise max-w-[14ch] font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-paper sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.05s" }}
        >
          Android software, built end to end.
        </h1>

        <p
          className="mebs-rise mt-7 max-w-[54ch] text-lg leading-relaxed text-ash md:mt-9 md:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          {site.name} is {site.legalName}, an independent software studio in{" "}
          {site.location}. Design, code, release and support all happen here.
        </p>

        <p
          className="mebs-rise mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-graphite md:mt-12"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="text-paper">
            {liveApps.length} apps on Google Play
          </span>
          <span aria-hidden="true" className="text-white/25">
            /
          </span>
          <span>{buildingApps.length} in development</span>
        </p>
      </div>
    </section>
  );
}
