import { SITE_URL, societe } from "@/content/site";
import type { Faq, Solution } from "@/content/solutions";

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: societe.raisonSociale,
  url: SITE_URL,
  email: societe.email,
  telephone: societe.telephone,
  foundingDate: String(societe.depuis),
  address: {
    "@type": "PostalAddress",
    streetAddress: societe.adresse.rue,
    postalCode: societe.adresse.codePostal,
    addressLocality: societe.adresse.ville,
    addressCountry: societe.adresse.paysCode,
  },
};

export const localBusinessLd = {
  ...organizationLd,
  "@type": "LocalBusiness",
  geo: {
    "@type": "GeoCoordinates",
    latitude: societe.geo.lat,
    longitude: societe.geo.lng,
  },
};

export function productLd(s: Solution) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: s.nom,
    category: s.categorie,
    description: s.resume,
    image: `${SITE_URL}${s.photo.src}`,
    url: `${SITE_URL}${s.href}`,
    brand: { "@type": "Brand", name: societe.nom },
    manufacturer: { "@type": "Organization", name: societe.raisonSociale },
  };
}

export function faqLd(faq: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.r },
    })),
  };
}

export function breadcrumbLd(items: { nom: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.nom,
      item: `${SITE_URL}${it.href}`,
    })),
  };
}
