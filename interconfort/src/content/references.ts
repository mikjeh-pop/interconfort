/**
 * Installations Fresh Food Store en service.
 *
 * `afficherNom` contrôle l'affichage du nom de l'enseigne en légende.
 * Réglé sur false : les photos sont publiées sans citer les clients.
 * Passer une entrée à true si l'accord de l'enseigne concernée est obtenu.
 */
export type Reference = {
  slug: string;
  nomClient: string;
  afficherNom: boolean;
  activite: string;
  lieu?: string;
  contexte: string;
  image: { src: string; alt: string; w: number; h: number };
};

export const references: Reference[] = [
  {
    slug: "chefs-de-la-region",
    nomClient: "Des chefs de la région",
    afficherNom: false,
    activite: "Plats de chefs, circuit court",
    contexte:
      "Installation en bord de route, habillage bois blanchi bilingue français-néerlandais. Toit de protection intégré, ouverture continue.",
    image: {
      src: "/images/references/fresh-food-store-chefs-de-la-region.webp",
      alt: "Fresh Food Store en bord de route au coucher du soleil, habillage bois blanchi, vitrine réfrigérée garnie de bocaux et de plats",
      w: 1500,
      h: 2000,
    },
  },
  {
    slug: "sushic",
    nomClient: "Sushic",
    afficherNom: false,
    activite: "Sushis et poisson cru",
    contexte:
      "Machine noire installée en façade de commerce, sous auvent. Le froid maintenu entre 0 et 4 °C permet la vente de poisson cru en libre-service.",
    image: {
      src: "/images/references/fresh-food-store-sushic.webp",
      alt: "Fresh Food Store noir installé en façade d’un commerce de sushis, écran tactile et trappe de récupération Auto Open",
      w: 1418,
      h: 1132,
    },
  },
  {
    slug: "atelier-bon-wagon",
    nomClient: "L’Atelier du Bon Wagon",
    afficherNom: false,
    activite: "Plats régionaux faits maison",
    contexte:
      "Kiosque bois sur un parking de commerces, service take away en continu. Habillage complet reprenant l’identité et le parcours d’achat.",
    image: {
      src: "/images/references/fresh-food-store-atelier-bon-wagon.webp",
      alt: "Fresh Food Store sous kiosque bois sur un parking de commerces, vitrine garnie de plats régionaux",
      w: 2000,
      h: 1500,
    },
  },
  {
    slug: "den-artiest",
    nomClient: "Afhaalboutique Den Artiest",
    afficherNom: false,
    activite: "Plats du jour à emporter",
    contexte:
      "Version blanche installée à l’entrée d’un établissement, complétée par une seconde implantation réfrigérée sous abri.",
    image: {
      src: "/images/references/fresh-food-store-den-artiest.webp",
      alt: "Fresh Food Store blanc installé devant un établissement, aux côtés d’une seconde installation réfrigérée sous abri bois",
      w: 792,
      h: 768,
    },
  },
  {
    slug: "ruchers-de-normandie",
    nomClient: "Les Ruchers de Normandie",
    afficherNom: false,
    activite: "Miel et produits de la ruche",
    contexte:
      "Vente directe de producteur, vitrine éclairée par LED visible de nuit. Les bocaux en verre sont livrés par convoyeur, sans chute.",
    image: {
      src: "/images/references/fresh-food-store-ruchers-de-normandie.webp",
      alt: "Fresh Food Store éclairé à la tombée de la nuit, vitrine garnie de bocaux de miel",
      w: 1080,
      h: 1080,
    },
  },
];

/** Photos retenues pour le carrousel d’ouverture. */
export const heroReferences = references.filter((r) =>
  ["chefs-de-la-region", "ruchers-de-normandie", "sushic"].includes(r.slug),
);
