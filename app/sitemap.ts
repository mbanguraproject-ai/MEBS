import type { MetadataRoute } from "next";
import { detailedApps } from "@/lib/apps";
import { type LegalKind, legalSlugs } from "@/lib/legal";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...detailedApps.map((app) => ({
      url: `${site.url}/apps/${app.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...detailedApps.map((app) => ({
      url: `${site.url}/privacy/${app.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...(["terms", "refund", "delete"] as LegalKind[]).flatMap((kind) =>
      legalSlugs(kind).map((slug) => ({
        url: `${site.url}/${kind}/${slug}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      })),
    ),
  ];
}
