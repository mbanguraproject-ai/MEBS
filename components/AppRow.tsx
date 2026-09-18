import { GooglePlayLogo } from "@phosphor-icons/react/dist/ssr";
import { playUrl, type App } from "@/lib/apps";

export function AppRow({ app }: { app: App }) {
  const href = app.packageId ? playUrl(app.packageId) : null;
  const live = app.status === "live";

  const body = (
    <div className="grid grid-cols-1 gap-y-4 px-6 py-10 md:grid-cols-12 md:gap-x-10 md:py-12">
      <div className="md:col-span-4">
        <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
          {app.name}
        </h3>
        <p className="mt-2 text-sm text-graphite">
          {app.platform}, {app.stack}
        </p>
      </div>

      <div className="md:col-span-6">
        <p className="max-w-[62ch] text-base leading-relaxed text-ink/80 md:text-lg">
          {app.summary}
        </p>
        {app.storeTitle && app.storeTitle !== app.name ? (
          <p className="mt-3 text-sm text-graphite">
            Listed as {app.storeTitle}
          </p>
        ) : null}
      </div>

      <div className="md:col-span-2 md:justify-self-end">
        {live ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper">
            <GooglePlayLogo size={16} weight="fill" aria-hidden="true" />
            Google Play
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-ink/25 px-4 py-2 text-sm text-graphite">
            In development
          </span>
        )}
      </div>
    </div>
  );

  if (!href) {
    return <li className="border-t border-ink/12">{body}</li>;
  }

  return (
    <li className="border-t border-ink/12">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block transition-colors hover:bg-fog"
      >
        {body}
      </a>
    </li>
  );
}
