import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CurveDivider } from "@/components/CurveDivider";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { detailedApps } from "@/lib/apps";
import { EFFECTIVE_DATE } from "@/lib/privacy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy policies for every ${site.name} app, one per app.`,
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyIndex() {
  return (
    <>
      <PageHeader
        eyebrow={`Effective ${EFFECTIVE_DATE}`}
        title="Privacy"
        lede="Each app gets its own policy, because each one handles different things. None of them have accounts, analytics or crash reporting."
      />

      <CurveDivider above="#000000" below="#ffffff" />

      <main className="bg-paper text-ink">
        <div className="mx-auto max-w-4xl px-6 pb-20">
          <p className="max-w-[66ch] text-lg leading-relaxed text-ink/80">
            {site.legalName} operates no server that stores your data and keeps
            no record of you. What differs between the apps is how much leaves
            your device at all — so rather than one policy that hedges, there is
            a policy per app that says exactly what that app does.
          </p>

          <ul className="mt-12 border-t border-ink/12">
            {detailedApps.map((app) => (
              <li key={app.slug} className="border-b border-ink/12">
                <Link
                  href={`/privacy/${app.slug}`}
                  className="flex items-center justify-between gap-6 py-6 transition-colors hover:bg-fog"
                >
                  <span>
                    <span className="font-display text-xl font-bold tracking-tight md:text-2xl">
                      {app.name}
                    </span>
                    <span className="mt-1 block max-w-[52ch] text-sm text-graphite">
                      {app.data.onDeviceOnly
                        ? "Nothing leaves the device."
                        : [
                            app.data.cloudProcessing && "Cloud conversions",
                            app.data.aiProcessing && "AI tools",
                            app.data.ads && "Ads on the free tier",
                            app.data.billing && "Play purchases",
                          ]
                            .filter(Boolean)
                            .join(" · ")}
                    </span>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" className="shrink-0" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-[66ch] text-graphite">
            Questions about any of these: {site.email}.
          </p>
        </div>
      </main>

      <CurveDivider above="#ffffff" below="#000000" flip />
      <SiteFooter />
    </>
  );
}
