import type { PolicySection } from "./privacy";
import { onedevsLegal } from "./onedevs-legal";

/**
 * Hand-written legal documents, for apps whose practices the generated
 * policies in lib/privacy.ts cannot describe -- an app with accounts and a
 * server of its own. Each document is served at /<kind>/<slug>.
 */
export type LegalKind = "privacy" | "terms" | "refund" | "delete";

export type LegalDoc = {
  title: string;
  lede: string;
  effective: string;
  sections: PolicySection[];
};

const documents: Record<string, Partial<Record<LegalKind, LegalDoc>>> = {
  onedevs: onedevsLegal,
};

export const legalDoc = (kind: LegalKind, slug: string): LegalDoc | undefined =>
  documents[slug]?.[kind];

/** Every slug that has a document of this kind. */
export const legalSlugs = (kind: LegalKind): string[] =>
  Object.keys(documents).filter((slug) => documents[slug][kind]);

export const legalLabels: Record<LegalKind, string> = {
  privacy: "Privacy policy",
  terms: "Terms of service",
  refund: "Refund policy",
  delete: "Delete your account",
};
