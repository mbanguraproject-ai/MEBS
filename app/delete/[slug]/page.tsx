import { LegalPage, legalMetadata } from "@/components/LegalPage";
import { legalSlugs } from "@/lib/legal";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return legalSlugs("delete").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  return legalMetadata("delete", (await params).slug);
}

export default async function Page({ params }: Params) {
  return <LegalPage kind="delete" slug={(await params).slug} />;
}
