import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { secteurs } from "@/content/secteurs";
import { solutions } from "@/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const maj = new Date();
  const pages = [
    { url: "/", priority: 1 },
    { url: "/solutions", priority: 0.9 },
    ...solutions.map((s) => ({ url: s.href, priority: 0.9 })),
    { url: "/pharmashop", priority: 0.9 },
    { url: "/secteurs", priority: 0.8 },
    ...secteurs.map((s) => ({ url: `/secteurs/${s.slug}`, priority: 0.8 })),
    { url: "/technologies-magex", priority: 0.7 },
    { url: "/logiciel", priority: 0.7 },
    { url: "/realisations", priority: 0.7 },
    { url: "/inter-confort", priority: 0.6 },
    { url: "/contact", priority: 0.8 },
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p.url}`,
    lastModified: maj,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
