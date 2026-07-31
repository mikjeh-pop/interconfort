import { machinesMagex, photosPharmashop } from "./medias-distants";

export type Realisation = {
  titre: string;
  categorie: string;
  legende?: string;
  image?: { src: string; alt: string; w: number; h: number };
  /** Aucune photo disponible : un emplacement est affiché en attendant le visuel Inter-Confort. */
  aFournir?: string;
};

export const categories = [
  "Fresh Food Store",
  "MULTI 610",
  "IGLOO",
  "Pharmashop",
  "Alimentation",
  "Chocolatiers",
  "Boulangeries",
  "Magex",
  "Installations personnalisées",
] as const;

export const realisations: Realisation[] = [
  {
    titre: "Fresh Food Store en extérieur",
    categorie: "Fresh Food Store",
    legende: "Installation extérieure avec toit de protection",
    image: {
      src: "/images/fresh-food-store/fresh-food-store-exterieur.webp",
      alt: "Fresh Food Store installé en extérieur avec toit de protection",
      w: 900,
      h: 1105,
    },
  },
  {
    titre: "Fresh Food Store habillé aux couleurs d'un traiteur",
    categorie: "Fresh Food Store",
    legende: "Habillage complet et signalétique de l'exploitant",
    image: {
      src: "/images/fresh-food-store/fresh-food-store-installations.webp",
      alt: "Fresh Food Store personnalisé aux couleurs d'un traiteur",
      w: 896,
      h: 1070,
    },
  },
  {
    titre: "Fresh Food Store en exploitation",
    categorie: "Fresh Food Store",
    image: {
      src: "/images/fresh-food-store/fresh-food-store-installation.webp",
      alt: "Fresh Food Store en situation d'exploitation",
      w: 900,
      h: 1200,
    },
  },
  {
    titre: "IGLOO en installation extérieure",
    categorie: "IGLOO",
    legende: "Toit de protection contre les intempéries",
    image: {
      src: "/images/igloo/igloo-installation-exterieure.webp",
      alt: "IGLOO installé en extérieur avec toit de protection",
      w: 1105,
      h: 1210,
    },
  },
  {
    titre: "MULTI 610 en configuration standard",
    categorie: "MULTI 610",
    image: {
      src: "/images/multi-610/multi-610-face.webp",
      alt: "Distributeur MULTI 610 vu de face",
      w: 284,
      h: 408,
    },
  },
  { titre: "Console Pharma « Night & Safe »", categorie: "Pharmashop", legende: photosPharmashop[0].legende, image: { ...photosPharmashop[0], w: 1200, h: 1600 } },
  { titre: "Guichet de garde", categorie: "Pharmashop", legende: photosPharmashop[5].legende, image: { ...photosPharmashop[5], w: 1200, h: 1600 } },
  { titre: "Pharma 24H « Store »", categorie: "Pharmashop", legende: "72 sélections, ascenseur robotisé", image: { ...machinesMagex.pharma24h, w: 900, h: 1200 } },
  { titre: "Big store chocolatiers", categorie: "Chocolatiers", legende: "112 sélections, écran tactile 22 pouces", image: { ...machinesMagex.bigStoreChocolatiers, w: 900, h: 1200 } },
  { titre: "Big store écran 17 pouces", categorie: "Chocolatiers", legende: "Contrôle du produit avant livraison", image: { ...machinesMagex.bigStore17, w: 900, h: 1200 } },
  { titre: "Evo boulangerie", categorie: "Boulangeries", aFournir: "Distributeur installé en boulangerie" },
  { titre: "SMART sandwicheries", categorie: "Boulangeries", aFournir: "Distributeur de sandwicherie" },
  { titre: "Easy Touch saucissons", categorie: "Alimentation", aFournir: "Distributeur de charcuterie sèche" },
  { titre: "Distribution de produits laitiers", categorie: "Alimentation", aFournir: "Vente directe producteur" },
  { titre: "Big store", categorie: "Magex", legende: "Contrôle actif de température", image: { ...machinesMagex.bigStore, w: 900, h: 1200 } },
  { titre: "Double Evo", categorie: "Magex", legende: "Stock réfrigéré à l'arrière", image: { ...machinesMagex.doubleEvo, w: 900, h: 1200 } },
  { titre: "Intégration en façade", categorie: "Installations personnalisées", legende: photosPharmashop[2].legende, image: { ...photosPharmashop[2], w: 1200, h: 1600 } },
  { titre: "Implantation sous abri", categorie: "Installations personnalisées", aFournir: "Distributeur protégé par un abri sur mesure" },
];

/** Le site actuel recense 62 réalisations photographiées. */
export const totalRealisationsSiteActuel = 62;
