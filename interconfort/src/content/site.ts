/**
 * Données transverses du site.
 * Préparation multilingue : tout le contenu rédactionnel est centralisé dans /src/content.
 * Pour ajouter le néerlandais, dupliquer ces modules sous une clé de locale
 * et brancher le segment [locale] sur l'App Router. Aucune chaîne n'est codée en dur
 * dans les composants.
 */

export const LOCALES = ["fr", "nl"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";
export const ACTIVE_LOCALES: Locale[] = ["fr"];

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.interconfort.be";

export const societe = {
  nom: "Inter-Confort",
  raisonSociale: "Inter-Confort SA",
  depuis: 1986,
  adresse: {
    rue: "13 rue de la Maîtrise",
    codePostal: "1400",
    ville: "Nivelles",
    region: "Brabant wallon",
    pays: "Belgique",
    paysCode: "BE",
  },
  telephone: "+32 67 89 32 89",
  telephoneAffichage: "+32 (0)67 89 32 89",
  fax: "+32 (0)67 89 32 99",
  email: "info@inter-confort.be",
  geo: { lat: 50.582973, lng: 4.357234 },
  contacts: [
    {
      nom: "Philippe Vergught",
      zone: "Wallonie, Bruxelles, Grand-Duché de Luxembourg et nord de la France",
      email: "ph.vergught@inter-confort.be",
      gsm: "+32 (0)476 47 17 81",
    },
    {
      nom: "Jean-Pierre Michiels",
      zone: "Flandre, Bruxelles et Pays-Bas",
      email: "jp.michiels@inter-confort.be",
      gsm: "+32 (0)475 64 57 31",
    },
  ],
};

import { secteurs } from "./secteurs";

export type NavItem = {
  libelle: string;
  href: string;
  description?: string;
  enfants?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    libelle: "Solutions",
    href: "/solutions",
    enfants: [
      {
        libelle: "Fresh Food Store",
        href: "/solutions/fresh-food-store",
        description: "Distributeur réfrigéré grande capacité, intérieur et extérieur",
      },
      {
        libelle: "MULTI 610",
        href: "/solutions/multi-610",
        description: "Distributeur multi-produits à ascenseur de précision",
      },
      {
        libelle: "IGLOO",
        href: "/solutions/igloo",
        description: "Distribution de produits surgelés jusqu'à −25 °C",
      },
      {
        libelle: "Pharmashop",
        href: "/pharmashop",
        description: "Délivrance automatisée en officine, 24 h/24",
      },
      {
        libelle: "Technologies Magex",
        href: "/technologies-magex",
        description: "Ascenseur robotisé, grandes capacités, projets sur mesure",
      },
    ],
  },
  {
    libelle: "Secteurs",
    href: "/secteurs",
    enfants: secteurs.map((s) => ({
      libelle: s.nom,
      href: `/secteurs/${s.slug}`,
      description: s.accroche,
    })),
  },
  { libelle: "Logiciel", href: "/logiciel" },
  { libelle: "Réalisations", href: "/realisations" },
  { libelle: "Inter-Confort", href: "/inter-confort" },
  { libelle: "Contact", href: "/contact" },
];

export const boutons = {
  projet: "Présenter mon projet",
  etude: "Demander une étude",
  solutions: "Voir les solutions",
  technique: "Données techniques",
  toutesRealisations: "Toutes les réalisations",
};

/**
 * Camion showroom : dispositif présent sur chaque fiche du site actuel
 * (« Demandez le passage de notre camion-expo »).
 * Le visuel disponible ne fait que 100 × 58 px : ne jamais l'afficher
 * au-delà d'environ 120 px de large, il deviendrait flou.
 * Le contenu du camion et la zone couverte restent à préciser par Inter-Confort.
 */
export const camionExpo = {
  titre: "Le camion showroom vient à vous",
  texte:
    "Voir une machine en photo ne dit rien de son encombrement réel, de la hauteur de la trappe ou de la façon dont un produit est déposé. Nous nous déplaçons avec notre camion showroom : vous manipulez l'appareil sur place, avec vos propres produits et vos propres emballages, avant toute décision.",
  bouton: "Demandez le passage de notre camion showroom",
};

export const marches = [
  "Traiteurs et restaurateurs",
  "Boulangeries et pâtisseries",
  "Chocolatiers",
  "Producteurs et artisans",
  "Pharmacies et parapharmacies",
  "Fruits et légumes",
  "Produits laitiers",
  "Produits surgelés",
  "Sites industriels et horaires décalés",
  "Collectivités et établissements",
];
