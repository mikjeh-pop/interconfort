import type { NextConfig } from "next";

/**
 * Redirections permanentes depuis les URL du site WordPress actuel.
 * Le domaine est indexé depuis 2015 : ces adresses conservent de l'historique.
 */
const anciennesUrls: { source: string; destination: string }[] = [
  { source: "/distributeur-automatique/modele-freshfood-store", destination: "/solutions/fresh-food-store" },
  { source: "/distributeur-automatique/modele-console-pharma-night-safe", destination: "/pharmashop" },
  { source: "/nos-distributeurs-automatiques", destination: "/solutions" },
  { source: "/nos-distributeurs-automatiques/nos-realisations", destination: "/realisations" },
  { source: "/nos-distributeurs-automatiques/alimentation", destination: "/solutions" },
  { source: "/nos-distributeurs-automatiques/boulangeriepatisserie", destination: "/technologies-magex" },
  { source: "/nos-distributeurs-automatiques/chocolatiers", destination: "/technologies-magex" },
  { source: "/nos-distributeurs-automatiques/frais-traiteurs", destination: "/solutions/fresh-food-store" },
  { source: "/nos-distributeurs-automatiques/fruits-legumes", destination: "/solutions" },
  { source: "/nos-distributeurs-automatiques/librairie-bibliotheque", destination: "/technologies-magex" },
  { source: "/nos-distributeurs-automatiques/multi-produits", destination: "/solutions/multi-610" },
  { source: "/nos-distributeurs-automatiques/parapharmacie", destination: "/pharmashop" },
  { source: "/nos-distributeurs-automatiques/parapharmacie-sportive", destination: "/pharmashop" },
  { source: "/nos-distributeurs-automatiques/produits-laitiers", destination: "/solutions" },
  { source: "/nos-distributeurs-automatiques/surgeles", destination: "/solutions/igloo" },
  { source: "/nos-distributeurs-automatiques/systemes-de-paiements", destination: "/solutions" },
  { source: "/qui-sommes-nous", destination: "/inter-confort" },
  { source: "/notre-proposition", destination: "/inter-confort" },
  { source: "/nos-marques", destination: "/technologies-magex" },
  { source: "/devis", destination: "/contact" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      ...anciennesUrls.map((r) => ({ ...r, permanent: true })),
      // Les fiches produit restantes retombent sur le catalogue.
      { source: "/distributeur-automatique/:slug", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;
