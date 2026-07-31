/**
 * Visuels servis depuis le site actuel interconfort.be.
 *
 * Solution de transition assumée : elle permet à la démonstration d'afficher les
 * vraies photos Magex et Pharmashop sans attendre la récupération des fichiers.
 * Avant la mise en production définitive, télécharger ces images, les convertir
 * en WebP et les déplacer dans /public/images. Le domaine est déclaré dans
 * next.config.ts (images.remotePatterns).
 */
const BASE = "https://interconfort.be/wp-content/uploads";

export const logo = {
  src: `${BASE}/2015/10/logotype.png`,
  alt: "Inter-Confort",
  w: 300,
  h: 90,
};

export type MediaDistant = { src: string; alt: string; legende?: string };

/** Visuels des machines du carrousel du site actuel. */
export const machinesMagex: Record<string, MediaDistant> = {
  bigStoreChocolatiers: {
    src: `${BASE}/2015/11/1_21.png`,
    alt: "Distributeur Big store chocolatiers à ascenseur robotisé, huit plateaux et écran tactile 22 pouces",
  },
  bigStore: {
    src: `${BASE}/2015/11/2_1.png`,
    alt: "Distributeur Big store à contrôle actif de température, 112 sélections",
  },
  bigStore17: {
    src: `${BASE}/2015/11/3_1.png`,
    alt: "Distributeur Big store à écran tactile 17 pouces avec contrôle du produit avant livraison",
  },
  pharma24h: {
    src: `${BASE}/2015/11/4_1.png`,
    alt: "Distributeur Pharma 24H Store, 72 sélections à ascenseur robotisé",
  },
  doubleEvo: {
    src: `${BASE}/2015/11/5_1.png`,
    alt: "Distributeur Double Evo avec abri et stock réfrigéré à l'arrière",
  },
};

/** Photographies des réalisations Pharmashop. */
export const photosPharmashop: MediaDistant[] = [
  {
    src: `${BASE}/2025/04/NS-Bruno.jpg`,
    alt: "Console Pharma Night & Safe installée en façade d'officine",
    legende: "Console intégrée en façade",
  },
  {
    src: `${BASE}/2025/04/20250214_155507-scaled.jpg`,
    alt: "Console de délivrance automatisée en pharmacie, écran tactile en façade",
    legende: "Écran tactile de façade",
  },
  {
    src: `${BASE}/2025/04/IMG-20240430-WA0007.jpg`,
    alt: "Installation Pharmashop en officine",
    legende: "Installation en officine",
  },
  {
    src: `${BASE}/2025/04/IMG-20240905-WA0012.jpg`,
    alt: "Console Pharmashop en service",
    legende: "Console en service",
  },
  {
    src: `${BASE}/2025/04/WhatsApp-Image-2023-05-02-a-11.54.17.jpg`,
    alt: "Réalisation Pharmashop chez un pharmacien",
    legende: "Réalisation Pharmashop",
  },
  {
    src: `${BASE}/2014/11/IMG-20191003-WA0001.jpg`,
    alt: "Guichet de nuit Pharmashop installé en façade",
    legende: "Guichet de nuit",
  },
  {
    src: `${BASE}/2015/11/1173_arriere_console_1.jpg`,
    alt: "Vue arrière d'une console Pharmashop, côté officine",
    legende: "Vue arrière, côté officine",
  },
];
