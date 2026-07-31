import type { Metadata } from "next";
import { SITE_URL, societe } from "@/content/site";

export function meta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: `${societe.nom} — solutions de vente automatisée`,
      locale: "fr_BE",
      type: "website",
      images: opts.image ? [{ url: `${SITE_URL}${opts.image}` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}
