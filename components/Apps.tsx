import { AppRow } from "./AppRow";
import { buildingApps, liveApps } from "@/lib/apps";

export function Apps() {
  return (
    <section id="apps" className="bg-paper pb-8 text-ink">
      <div className="mx-auto max-w-6xl">
        <div className="px-6">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Apps
          </h2>
          <p className="mt-3 max-w-[56ch] text-graphite">
            Everything here is either published or actively being built. Nothing
            on this page is a concept.
          </p>
        </div>

        <ul className="mt-10 border-b border-ink/12">
          {liveApps.map((app) => (
            <AppRow key={app.name} app={app} />
          ))}
        </ul>

        <div className="mt-16 px-6">
          <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            In development
          </h3>
        </div>

        <ul className="mt-6 border-b border-ink/12">
          {buildingApps.map((app) => (
            <AppRow key={app.name} app={app} />
          ))}
        </ul>
      </div>
    </section>
  );
}
