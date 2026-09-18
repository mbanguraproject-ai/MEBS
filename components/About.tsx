import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-ink pb-24 text-paper md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          About
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-ash md:col-span-7">
            <p>
              {site.name} stands for {site.legalName}. It is a small studio in{" "}
              {site.location} run by Mohamed, who handles the design, the Kotlin,
              the backend, the store listings and the support mail.
            </p>
            <p>
              The work is native Android first — Jetpack Compose for apps, Godot
              for games, Cloudflare Workers and Supabase when something has to
              live on a server. Releases go out under the {site.playDeveloper}{" "}
              developer account on Google Play.
            </p>
            <p>
              Apps are built to current Android standards from the first commit:
              edge-to-edge layouts, no deprecated APIs, real assets, and known
              bugs fixed before release rather than logged for later.
            </p>
          </div>

          <dl className="space-y-6 md:col-span-4 md:col-start-9">
            <div className="border-t border-white/12 pt-4">
              <dt className="text-sm text-graphite">Based in</dt>
              <dd className="mt-1 text-paper">{site.location}</dd>
            </div>
            <div className="border-t border-white/12 pt-4">
              <dt className="text-sm text-graphite">Builds</dt>
              <dd className="mt-1 text-paper">Android apps and games</dd>
            </div>
            <div className="border-t border-white/12 pt-4">
              <dt className="text-sm text-graphite">Publishes as</dt>
              <dd className="mt-1 text-paper">{site.playDeveloper}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
