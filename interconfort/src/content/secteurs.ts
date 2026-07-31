import { freshFoodStore, igloo, multi610 } from "./solutions";

export type Secteur = {
  slug: string;
  nom: string;
  titreCourt: string;
  seo: { title: string; description: string; h1: string };
  accroche: string;
  contexte: string;
  contrainte: { titre: string; texte: string };
  produits: string[];
  solutionRecommandee: { nom: string; href: string; pourquoi: string };
  aVerifier: string[];
};

export const secteurs: Secteur[] = [
  {
    slug: "traiteurs-restaurateurs",
    nom: "Traiteurs et restaurateurs",
    titreCourt: "Traiteurs",
    seo: {
      title: "Distributeur automatique de plats préparés pour traiteurs et restaurateurs",
      description:
        "Vendez vos plats cuisinés et barquettes traiteur en dehors des heures de service. Distributeur réfrigéré 0–4 °C, livraison sans chute, installation intérieure ou extérieure.",
      h1: "Distributeur automatique pour traiteurs et restaurateurs",
    },
    accroche: "Votre production continue de se vendre quand la cuisine est fermée.",
    contexte:
      "Le service s’arrête, la demande non. Soirs, week-ends, jours de fermeture : ce sont des créneaux où vos plats ne trouvent aucun canal, alors que la production, elle, est déjà faite. Un point de vente automatisé installé devant l’établissement ou sur un axe passant prolonge la vente sans mobiliser de personnel.",
    contrainte: {
      titre: "La contrainte : une barquette ne tombe pas",
      texte:
        "Un plat en barquette scellée, une salade composée, un plateau de sushis ne supportent ni la chute libre ni une rupture de température. C’est précisément ce que résolvent le convoyeur motorisé et le double groupe froid : le produit est saisi, accompagné et déposé, à consigne tenue.",
    },
    produits: [
      "Barquettes de plats cuisinés",
      "Plateaux traiteur",
      "Salades et bowls",
      "Sushis et poisson cru",
      "Entrées froides et verrines",
      "Soupes et bocaux",
    ],
    solutionRecommandee: {
      nom: freshFoodStore.nom,
      href: freshFoodStore.href,
      pourquoi:
        "Froid maintenu entre 0 et 4 °C y compris en extérieur, convoyeur motorisé sans chute, jusqu’à 96 sélections et panier de cinq produits par commande.",
    },
    aVerifier: [
      "Dimensions exactes de vos barquettes, scellées ou non",
      "Durée de conservation et gestion des dates limites",
      "Emplacement : visibilité, accès, raccordement électrique",
    ],
  },
  {
    slug: "boulangerie-patisserie",
    nom: "Boulangeries et pâtisseries",
    titreCourt: "Boulangerie",
    seo: {
      title: "Distributeur automatique pour boulangerie et pâtisserie",
      description:
        "Vendez viennoiseries, entremets et desserts 24 h/24, y compris le dimanche. Ascenseur de précision pour les produits fragiles, écran tactile et personnalisation graphique.",
      h1: "Distributeur automatique pour boulangeries et pâtisseries",
    },
    accroche: "Le dimanche matin devient un jour de vente.",
    contexte:
      "Les horaires d’une boulangerie ne coïncident jamais avec ceux de tous ses clients. Un distributeur en façade capte les débuts de journée très matinaux, les fins de soirée et les jours de fermeture, sans ouvrir la boutique ni mobiliser quelqu’un derrière le comptoir.",
    contrainte: {
      titre: "La contrainte : un entremets ne se rattrape pas",
      texte:
        "Une tarte, un macaron, un entremets glacé perdent toute valeur commerciale s’ils arrivent abîmés. L’ascenseur de précision monte au niveau de la sélection, prend l’article et redescend vers la zone de retrait : le produit n’est jamais lâché.",
    },
    produits: [
      "Viennoiseries",
      "Entremets et parts individuelles",
      "Macarons et petits fours",
      "Pains spéciaux emballés",
      "Desserts en pot",
      "Coffrets et boîtes cadeaux",
    ],
    solutionRecommandee: {
      nom: multi610.nom,
      href: multi610.href,
      pourquoi:
        "Ascenseur de précision, six étagères modulables mêlant tapis, poussoirs et séparateurs, option froid 0–4 °C pour les produits sensibles.",
    },
    aVerifier: [
      "Hauteur et fragilité des pièces les plus délicates",
      "Faut-il du froid positif, et à quelle consigne",
      "Intégration en façade ou machine indépendante",
    ],
  },
  {
    slug: "chocolatiers",
    nom: "Chocolatiers",
    titreCourt: "Chocolatiers",
    seo: {
      title: "Distributeur automatique pour chocolatiers et confiseurs",
      description:
        "Distribuez pralines, ganaches, tablettes et pâtes de fruits quel que soit le conditionnement : ballotins, briquettes, bocaux, blisters. Ascenseur robotisé et température contrôlée.",
      h1: "Distributeur automatique pour chocolatiers",
    },
    accroche: "La praline supporte mal la chute, et encore moins la chaleur.",
    contexte:
      "Le chocolat impose deux exigences simultanées que peu de distributeurs savent tenir : une température stable et une manipulation douce. C’est l’une des applications historiques des technologies que nous intégrons, et l’un des usages où l’ascenseur robotisé fait la différence la plus visible.",
    contrainte: {
      titre: "La contrainte : la forme et l’emballage varient sans cesse",
      texte:
        "Ballotins, briquettes, bocaux, tablettes, blisters : un chocolatier ne vend pas deux produits au même format. La configuration mêle plateaux, séparateurs et espacements réglables pour absorber cette diversité sans multiplier les machines.",
    },
    produits: [
      "Pralines et ganaches",
      "Tablettes",
      "Pâtes de fruits",
      "Ballotins et coffrets",
      "Bocaux et briquettes",
      "Produits sous blister",
    ],
    solutionRecommandee: {
      nom: "Big store chocolatiers",
      href: "/technologies-magex",
      pourquoi:
        "Huit plateaux, 112 sélections, ascenseur robotisé et écran tactile 22 pouces pour photos et vidéos, avec éclairage LED de vitrine.",
    },
    aVerifier: [
      "Température de conservation souhaitée selon la saison",
      "Diversité des conditionnements à absorber",
      "Rotation attendue et volume de réassort",
    ],
  },
  {
    slug: "producteurs-artisans",
    nom: "Producteurs et artisans",
    titreCourt: "Producteurs",
    seo: {
      title: "Distributeur automatique pour producteurs et vente directe à la ferme",
      description:
        "Vente directe en circuit court, 24 h/24 : œufs, fromages, légumes, miel, viande. Distributeur réfrigéré résistant à l’extérieur, personnalisable aux couleurs de l’exploitation.",
      h1: "Distributeur automatique pour producteurs et vente directe",
    },
    accroche: "Un point de vente à la ferme, ouvert quand vous êtes aux champs.",
    contexte:
      "La vente directe se heurte à une contradiction pratique : les clients passent quand le producteur travaille ailleurs. Un distributeur installé en bord de route ou à l’entrée de l’exploitation supprime cette contrainte et supprime aussi l’intermédiaire.",
    contrainte: {
      titre: "La contrainte : l’extérieur, toute l’année",
      texte:
        "Une machine en bord de route affronte le gel, la canicule et l’humidité. L’isolation renforcée, la structure acier vernie, le vitrage anti-effraction et le toit de protection sont ce qui distingue un équipement professionnel d’un appareil d’intérieur détourné.",
    },
    produits: [
      "Œufs frais en boîte",
      "Fromages et produits laitiers",
      "Légumes et paniers",
      "Viandes et charcuteries sous vide",
      "Miel et produits de la ruche",
      "Confitures, bocaux et conserves",
    ],
    solutionRecommandee: {
      nom: freshFoodStore.nom,
      href: freshFoodStore.href,
      pourquoi:
        "Conçu pour l’extérieur, froid maintenu entre 0 et 4 °C en plein soleil, habillage personnalisable aux couleurs de l’exploitation.",
    },
    aVerifier: [
      "Exposition de l’emplacement et raccordement disponible",
      "Formats des conditionnements, notamment les boîtes d’œufs",
      "Saisonnalité de l’offre et fréquence de réassort",
    ],
  },
  {
    slug: "pharmacies",
    nom: "Pharmacies et parapharmacies",
    titreCourt: "Pharmacie",
    seo: {
      title: "Distributeur automatique pour pharmacie et retrait d’ordonnance 24 h/24",
      description:
        "Délivrance automatisée en officine : retrait de commande après identification, ordonnances électroniques, guichet de garde et raccordement au robot de la pharmacie.",
      h1: "Distributeur automatique pour pharmacies",
    },
    accroche: "Le service de garde, sans veiller.",
    contexte:
      "L’officine a une obligation de continuité que ses horaires ne permettent pas de tenir seule. La console intégrée en façade délivre les produits réservés pour un patient identifié, gère les ordonnances électroniques et laisse au pharmacien le contrôle de chaque remise.",
    contrainte: {
      titre: "La contrainte : la responsabilité ne se délègue pas à une machine",
      texte:
        "Délivrer un médicament engage le pharmacien. C’est pourquoi la caméra interne permet de vérifier l’article avant l’ouverture de la porte, la vente peut être annulée avec éjection automatique, et le guichet de nuit permet de voir le patient et de lui parler.",
    },
    produits: [
      "Médicaments réservés sur ordonnance",
      "Produits de parapharmacie",
      "Tests et autotests",
      "Matériel de premiers soins",
      "Compléments alimentaires",
      "Produits de garde",
    ],
    solutionRecommandee: {
      nom: "Pharmashop",
      href: "/pharmashop",
      pourquoi:
        "Intégration en façade, identification par carte ou code, liaison possible avec le robot de l’officine et contrôle du produit avant remise.",
    },
    aVerifier: [
      "Présence et modèle du robot de l’officine",
      "Contraintes de façade et autorisations éventuelles",
      "Logiciel de gestion en place et interfaçage possible",
    ],
  },
  {
    slug: "surgeles-glaciers",
    nom: "Surgelés et glaciers",
    titreCourt: "Surgelés",
    seo: {
      title: "Distributeur automatique de produits surgelés et de glaces",
      description:
        "Vendez glaces, sorbets, pâtisseries et plats surgelés en continu avec une température réglable jusqu’à −25 °C. Installation intérieure ou extérieure sous toit de protection.",
      h1: "Distributeur automatique de produits surgelés",
    },
    accroche: "Du froid négatif tenu, y compris dehors en plein été.",
    contexte:
      "Le surgelé est le cas le plus exigeant : la moindre remontée en température dégrade le produit de façon irréversible et visible. Un distributeur adapté permet d’ouvrir la vente en dehors des heures, sur des emplacements saisonniers ou touristiques où aucun commerce n’est ouvert le soir.",
    contrainte: {
      titre: "La contrainte : le cône ne se couche pas",
      texte:
        "Les formats du surgelé sont particulièrement hétérogènes : cornets debout, pots, boîtes, sachets, barquettes. Spirales, tapis et séparateurs se combinent sur six plateaux, avec une configuration spécifique possible pour maintenir les cônes.",
    },
    produits: [
      "Glaces et sorbets en pot",
      "Cornets et bâtonnets",
      "Pâtisseries surgelées",
      "Plats préparés surgelés",
      "Viandes et poissons",
      "Légumes et sachets",
    ],
    solutionRecommandee: {
      nom: igloo.nom,
      href: igloo.href,
      pourquoi:
        "Température réglable jusqu’à −25 °C, six plateaux multi-format, ascenseur de précision et zone de retrait de 150 × 695 mm.",
    },
    aVerifier: [
      "Consigne de température exigée par vos produits",
      "Formats et tenue des emballages au froid négatif",
      "Puissance électrique disponible sur l’emplacement",
    ],
  },
  {
    slug: "entreprises-collectivites",
    nom: "Entreprises et collectivités",
    titreCourt: "Entreprises",
    seo: {
      title: "Distributeur automatique de repas pour entreprises et collectivités",
      description:
        "Restauration disponible en horaires décalés sur les sites industriels, hôpitaux, campus et établissements sans cantine. Plats chauds ou froids, paiement sans contact, suivi à distance.",
      h1: "Distributeur automatique pour entreprises et collectivités",
    },
    accroche: "Nourrir les équipes de nuit sans ouvrir un réfectoire.",
    contexte:
      "Postes en 3×8, gardes, campus, sites isolés : partout où les horaires débordent ceux d’une cantine, l’alternative est souvent le sandwich de station-service. Un point de vente automatisé offre une vraie restauration sans coût de personnel supplémentaire.",
    contrainte: {
      titre: "La contrainte : la fiabilité prime sur tout",
      texte:
        "Une machine en panne un dimanche à trois heures du matin sur un site industriel n’est pas un incident mineur. Autodiagnostic, alertes de température et suivi à distance permettent d’intervenir avant que le service ne soit interrompu.",
    },
    produits: [
      "Plats préparés en barquette",
      "Sandwichs et snacking",
      "Salades et bowls",
      "Boissons fraîches",
      "Desserts et produits laitiers",
      "Fruits et encas",
    ],
    solutionRecommandee: {
      nom: freshFoodStore.nom,
      href: freshFoodStore.href,
      pourquoi:
        "Grande capacité, froid maintenu, panier multiple et pilotage à distance de plusieurs machines depuis une seule interface.",
    },
    aVerifier: [
      "Nombre de personnes concernées et plages horaires",
      "Emplacement intérieur, hall ou extérieur",
      "Moyens de paiement acceptés sur le site",
    ],
  },
  {
    slug: "commerces-specialises",
    nom: "Commerces spécialisés",
    titreCourt: "Commerces",
    seo: {
      title: "Distributeur automatique multi-produits pour commerces spécialisés",
      description:
        "Boucheries, fromageries, cavistes, épiceries fines, fleuristes : prolongez la vente hors des heures d’ouverture avec un distributeur multi-produits configurable.",
      h1: "Distributeur automatique pour commerces spécialisés",
    },
    accroche: "Une vitrine qui continue de vendre rideau baissé.",
    contexte:
      "Boucherie, fromagerie, cave, épicerie fine, fleuriste : ces commerces ont une clientèle fidèle qui se heurte régulièrement à une porte close. Une sélection réduite mais bien choisie, disponible en continu, capte cette demande sans étendre les horaires.",
    contrainte: {
      titre: "La contrainte : mélanger des formats qui n’ont rien en commun",
      texte:
        "Une bouteille, un fromage sous vide, un bocal et un bouquet ne se stockent pas de la même manière. Poussoirs, tapis, spirales simples ou doubles et séparateurs modulables cohabitent étagère par étagère sur une même machine.",
    },
    produits: [
      "Viandes et charcuteries sous vide",
      "Fromages affinés",
      "Bouteilles et cavistes",
      "Bocaux et épicerie fine",
      "Produits lacto-fermentés",
      "Coffrets et compositions",
    ],
    solutionRecommandee: {
      nom: multi610.nom,
      href: multi610.href,
      pourquoi:
        "Quatre systèmes de stockage combinables sur six étagères, 60 sélections et option froid 0–4 °C pour les denrées sensibles.",
    },
    aVerifier: [
      "Diversité réelle des formats à distribuer",
      "Niveau de froid exigé par le produit le plus sensible",
      "Place disponible en façade ou à l’intérieur",
    ],
  },
];

export function secteurParSlug(slug: string) {
  return secteurs.find((s) => s.slug === slug);
}
