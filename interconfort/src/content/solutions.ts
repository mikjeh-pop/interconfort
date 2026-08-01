export type Image = { src: string; alt: string; w: number; h: number; legende?: string };
export type Spec = { label: string; valeur: string; note?: string };
export type Atout = { titre: string; texte: string };
export type Faq = { q: string; r: string };

export type Solution = {
  slug: string;
  nom: string;
  href: string;
  categorie: string;
  accroche: string;
  resume: string;
  seo: { title: string; description: string; h1: string };
  photo: Image;
  chiffres: { valeur: string; label: string }[];
  atouts: Atout[];
  specs: Spec[];
  galerie: Image[];
  faq: Faq[];
};

export const freshFoodStore: Solution = {
  slug: "fresh-food-store",
  nom: "Fresh Food Store",
  href: "/solutions/fresh-food-store",
  categorie: "Produits frais et plats préparés",
  accroche: "La chaîne du froid tenue, dehors comme dedans.",
  resume:
    "Conception Inter-Confort, le Fresh Food Store est un point de vente réfrigéré autonome destiné aux professionnels du frais. Double groupe froid piloté par sondes calibrées, convoyeur motorisé qui accompagne chaque produit jusqu'à la trappe, grande façade vitrée : il expose et distribue des produits fragiles sans rupture de la chaîne du froid, y compris en installation extérieure et en plein soleil.",
  seo: {
    title: "Fresh Food Store — distributeur automatique de produits frais",
    description:
      "Distributeur automatique réfrigéré grande capacité pour plats préparés et produits frais. Double groupe froid, convoyeur motorisé, installation intérieure ou extérieure. Conception Inter-Confort.",
    h1: "Fresh Food Store — distributeur automatique réfrigéré grande capacité",
  },
  photo: {
    src: "/images/fresh-food-store/fresh-food-store-face.webp",
    alt: "Distributeur automatique Fresh Food Store vu de face, façade vitrée éclairée, écran tactile et trappe de récupération sous la vitrine",
    w: 1000,
    h: 1000,
  },
  chiffres: [
    { valeur: "0–4 °C", label: "Froid maintenu, extérieur compris" },
    { valeur: "8", label: "Plateaux configurables" },
    { valeur: "96", label: "Emplacements en très grand format" },
    { valeur: "22″", label: "Écran tactile haute luminosité" },
  ],
  atouts: [
    {
      titre: "Double groupe froid piloté par sondes",
      texte:
        "Plusieurs sondes digitales calibrées mesurent la température réelle à l'intérieur de l'appareil. Le second groupe prend le relais dès qu'une dérive est détectée. Sur les installations équipées du second système ventilé, la consigne a été tenue alors que la température extérieure dépassait 40 °C.",
    },
    {
      titre: "Livraison sans chute",
      texte:
        "Un convoyeur motorisé se déplace sur deux axes, saisit le produit et l'accompagne jusqu'à la trappe. Les barquettes, verrines et pâtisseries arrivent intactes.",
    },
    {
      titre: "Plateaux reconnus automatiquement",
      texte:
        "Doubles tapis, tapis simples couplables, poussoirs modulables en largeur ou spirales d'épaisseurs variables : l'unité de gestion identifie le type de plateau installé et met le stock à jour.",
    },
    {
      titre: "Conçu pour rester dehors",
      texte:
        "Acier 2 mm vernis époxy, vitrage anti-effraction, doubles serrures carénées et isolant polyuréthane de 5 cm. Un toit de protection est prévu pour l'installation extérieure.",
    },
    {
      titre: "Accessible d'une seule main",
      texte:
        "La trappe de récupération s'ouvre d'une seule main et reste à portée des personnes âgées ou à mobilité réduite.",
    },
    {
      titre: "Piloté à distance",
      texte:
        "Unité de gestion à microprocesseur programmable, autodiagnostic, liaison GSM/GPRS, 4G, 5G ou LAN. Ventes, stocks, températures et alertes sont consultables sans se déplacer.",
    },
  ],
  specs: [
    { label: "Fabricant", valeur: "Inter-Confort SA" },
    { label: "Dimensions hors toit", valeur: "1 926 × 1 102 × 1 969 mm" },
    { label: "Hauteur avec toit", valeur: "2 471 mm" },
    { label: "Poids", valeur: "760 à 900 kg selon configuration" },
    { label: "Alimentation", valeur: "230 V · 16 A" },
    { label: "Plateaux", valeur: "Jusqu'à 8, configurables" },
    { label: "Sélections", valeur: "Jusqu'à 96 pour de très grandes barquettes, davantage sur des formats plus compacts" },
    { label: "Capacité", valeur: "Variable selon le conditionnement, jusqu'à plusieurs milliers de produits" },
    { label: "Écran tactile", valeur: "22 pouces, haute luminosité", note: "21,5 ou 22 pouces selon la source, à trancher" },
    { label: "Isolation", valeur: "Polyuréthane 5 cm" },
    { label: "Structure", valeur: "Acier 2 mm, vernissage époxydique" },
    { label: "Livraison", valeur: "Convoyeur motorisé, sans chute" },
    { label: "Panier", valeur: "Jusqu'à 5 produits par commande" },
    { label: "Installation", valeur: "Intérieure ou extérieure" },
  ],
  galerie: [
    {
      src: "/images/fresh-food-store/fresh-food-store-exterieur.webp",
      alt: "Fresh Food Store installé en extérieur avec toit de protection, façade vitrée présentant des barquettes de plats cuisinés",
      w: 900,
      h: 1105,
      legende: "Installation extérieure avec toit de protection",
    },
    {
      src: "/images/fresh-food-store/fresh-food-store-installations.webp",
      alt: "Fresh Food Store personnalisé aux couleurs d'un traiteur, installé devant un bâtiment",
      w: 896,
      h: 1070,
      legende: "Habillage complet aux couleurs de l'exploitant",
    },
    {
      src: "/images/fresh-food-store/fresh-food-store-plateaux-modulables.webp",
      alt: "Intérieur du Fresh Food Store, plateaux numérotés et séparateurs modulables, convoyeur visible en partie basse",
      w: 450,
      h: 600,
      legende: "Plateaux numérotés et séparateurs modulables",
    },
    {
      src: "/images/fresh-food-store/fresh-food-store-installation.webp",
      alt: "Fresh Food Store en situation d'exploitation",
      w: 900,
      h: 1200,
      legende: "Fresh Food Store en exploitation",
    },
    {
      src: "/images/fresh-food-store/fresh-food-store-remplissage.webp",
      alt: "Opération de remplissage d'un plateau du Fresh Food Store",
      w: 270,
      h: 600,
      legende: "Remplissage plateau par plateau",
    },
    {
      src: "/images/fresh-food-store/fresh-food-store-habillage-rouge.webp",
      alt: "Exemple de personnalisation graphique du Fresh Food Store en habillage rouge",
      w: 900,
      h: 900,
      legende: "Exemple de personnalisation graphique — projection",
    },
  ],
  faq: [
    {
      q: "Le Fresh Food Store peut-il rester dehors toute l'année ?",
      r: "Oui. L'appareil est conçu pour l'installation extérieure : isolation renforcée, structure acier vernie, vitrage anti-effraction et toit de protection. Au-delà de 30 °C ambiants, un second système ventilé est recommandé ; les installations qui en disposent ont maintenu leur consigne alors que la température extérieure dépassait 40 °C. L'emplacement, le sol et le raccordement électrique sont vérifiés avant installation.",
    },
    {
      q: "Quels produits peut-on y distribuer ?",
      r: "Plats cuisinés, barquettes traiteur, salades, sushis, pâtisseries, fromages, charcuteries, verrines, bocaux. Les produits fragiles sont pris en charge par le convoyeur, qui les accompagne jusqu'à la trappe au lieu de les laisser tomber. Une étude des emballages est réalisée avant commande.",
    },
    {
      q: "Combien de produits l'appareil contient-il ?",
      r: "Cela dépend entièrement du conditionnement. Sur les plus grandes barquettes, comptez jusqu'à 96 emplacements répartis sur 8 plateaux. Sur des formats plus compacts — pots, desserts, verrines — la capacité est nettement supérieure. La largeur, la profondeur et la hauteur des emballages déterminent l'agencement, c'est pourquoi une étude de stockage précède toujours la commande.",
    },
    {
      q: "Faut-il un abri ou un kiosque ?",
      r: "Dans la majorité des configurations extérieures, le toit de protection intégré suffit. Un emplacement stable et une arrivée électrique conforme sont les deux prérequis. Les cas particuliers d'exposition font l'objet d'une étude.",
    },
    {
      q: "Comment se fait le paiement ?",
      r: "Cartes de crédit et de débit, Bancontact, Payconiq, paiement sans contact NFC, billets et monnaie. Les paiements mobiles et les titres-restaurant dépendent du terminal et du contrat monétique retenus. La gestion de cartes de fidélité par code-barres ou QR code est possible.",
    },
    {
      q: "Peut-on proposer du retrait de commande ?",
      r: "Oui, selon la configuration retenue : les commandes prépayées sont retirées par code ou QR code sur l'écran de la machine.",
    },
  ],
};

export const multi610: Solution = {
  slug: "multi-610",
  nom: "MULTI 610",
  href: "/solutions/multi-610",
  categorie: "Multi-produits",
  accroche: "Un ascenseur de précision pour les produits qui ne supportent pas la chute.",
  resume:
    "Le MULTI 610 associe six étagères modulables, un ascenseur de précision et un écran tactile 22 pouces. Il accepte poussoirs, tapis, spirales simples ou doubles et séparateurs réglables sur une même machine, ce qui permet de mélanger des formats très différents. Une option froid étend la plage jusqu'à 0 °C pour les denrées sensibles.",
  seo: {
    title: "MULTI 610 — distributeur automatique multi-produits à ascenseur",
    description:
      "Distributeur automatique multi-produits à ascenseur de précision : 6 étagères modulables, 60 sélections, écran tactile 22 pouces, option froid 0–4 °C. Extensible par un module secondaire.",
    h1: "MULTI 610 — distributeur automatique multi-produits à ascenseur",
  },
  photo: {
    src: "/images/multi-610/multi-610-integration-interieure.webp",
    alt: "MULTI 610 encastré dans l'agencement bois d'une boulangerie, vitrine réfrigérée éclairée et clavier de sélection",
    w: 1536,
    h: 1024,
  },
  chiffres: [
    { valeur: "60", label: "Sélections maximum" },
    { valeur: "6", label: "Étagères modulables" },
    { valeur: "22″", label: "Écran tactile" },
    { valeur: "0–4 °C", label: "Option froid" },
  ],
  atouts: [
    {
      titre: "Ascenseur de précision",
      texte:
        "Le plateau monte au niveau de la sélection, prend le produit et redescend jusqu'à la zone de retrait. Pâtisseries, bocaux en verre et boîtes d'œufs arrivent sans choc.",
    },
    {
      titre: "Quatre systèmes de stockage combinables",
      texte:
        "Poussoir, tapis, spirales simples ou doubles, séparateurs modulables. Les systèmes cohabitent sur la même machine et l'espacement se règle selon la gamme.",
    },
    {
      titre: "Capacité extensible par module secondaire",
      texte:
        "Une console principale peut piloter un module complémentaire pour élargir le choix ou augmenter le volume disponible sans multiplier les interfaces.",
    },
    {
      titre: "Option froid pour denrées sensibles",
      texte:
        "Une configuration frigorifique dédiée abaisse la plage à 0–4 °C pour les produits alimentaires fragiles. Elle ne s'adresse pas aux distributeurs de boissons ou de snacks standards.",
    },
    {
      titre: "Écran tactile 22 pouces",
      texte:
        "Photos haute résolution, vidéos et descriptions détaillées. L'écran peut reprendre les visuels et les couleurs de l'exploitant.",
    },
    {
      titre: "Paiement et connectivité",
      texte:
        "Carte bancaire, sans contact, monnayeur et lecteur de billets en option. Routeur 4G intégré, lecteur code-barres ou QR code, retrait de commande prépayée.",
    },
  ],
  specs: [
    { label: "Dimensions", valeur: "1 293 × 870 × 1 945 mm" },
    { label: "Poids", valeur: "330 kg" },
    { label: "Alimentation", valeur: "240 V / 50 Hz" },
    { label: "Puissance", valeur: "40 à 520 W" },
    { label: "Étagères", valeur: "6 maximum" },
    { label: "Sélections", valeur: "10 par étagère, 60 au total" },
    { label: "Surface de retrait", valeur: "719,6 × 193,3 mm" },
    { label: "Température standard", valeur: "+4 °C à +25 °C" },
    { label: "Option froid", valeur: "0 °C à +4 °C" },
    { label: "Écran", valeur: "Tactile 22 pouces" },
    { label: "Extension", valeur: "Module secondaire piloté par la console principale" },
  ],
  galerie: [
    {
      src: "/images/multi-610/multi-610-ascenseur-vue-dessus.webp",
      alt: "Vue de dessus du plateau de livraison et du mécanisme d'ascenseur du MULTI 610",
      w: 1448,
      h: 1086,
      legende: "Plateau de livraison vu de dessus",
    },
    {
      src: "/images/multi-610/multi-610-kiosque-exterieur.webp",
      alt: "Deux MULTI 610 abrités sous un kiosque extérieur en bois, vitrines éclairées",
      w: 1536,
      h: 1024,
      legende: "Implantation sous kiosque — projection",
    },
    {
      src: "/images/multi-610/multi-610-module-secondaire.webp",
      alt: "MULTI 610 avec son module secondaire, deux vitrines réfrigérées pilotées par une console centrale",
      w: 1536,
      h: 1024,
      legende: "Console principale et module secondaire",
    },
    {
      src: "/images/multi-610/multi-610-zone-de-retrait.webp",
      alt: "Produits déposés dans la zone de retrait du MULTI 610",
      w: 250,
      h: 216,
      legende: "Dépose en zone de retrait",
    },
    {
      src: "/images/multi-610/multi-610-dimensions.webp",
      alt: "Schémas dimensionnels de face et de profil du MULTI 610",
      w: 977,
      h: 757,
      legende: "Encombrement",
    },
  ],
  faq: [
    {
      q: "Peut-on augmenter la capacité du MULTI 610 ?",
      r: "Oui. Un module secondaire peut être ajouté et piloté depuis la console principale. Le client conserve un seul écran et un seul paiement, tout en accédant à davantage de références et de volume.",
    },
    {
      q: "Quels produits l'ascenseur permet-il de distribuer ?",
      r: "Des produits que la chute abîmerait : pâtisseries, entremets, bocaux en verre, boîtes d'œufs, plats en barquette. Le plateau accompagne l'article jusqu'à la zone de retrait au lieu de le laisser tomber.",
    },
    {
      q: "Peut-on mélanger plusieurs formats dans la même machine ?",
      r: "Oui. Poussoirs, tapis, spirales simples ou doubles et séparateurs modulables cohabitent étagère par étagère, avec un espacement réglable selon la gamme.",
    },
    {
      q: "La machine convient-elle à une installation extérieure ?",
      r: "Le MULTI 610 est prévu pour une exploitation intérieure. Une implantation extérieure ou semi-extérieure suppose une protection étudiée avec nous, ou l'orientation vers le Fresh Food Store, conçu pour l'extérieur.",
    },
    {
      q: "Quelles températures sont possibles ?",
      r: "La plage standard va de +4 °C à +25 °C. L'option froid abaisse la consigne à 0–4 °C pour les denrées sensibles. Le niveau retenu dépend des produits et fait partie de l'étude.",
    },
  ],
};

export const igloo: Solution = {
  slug: "igloo",
  nom: "IGLOO",
  href: "/solutions/igloo",
  categorie: "Produits surgelés",
  accroche: "Le surgelé disponible en continu, sans rupture du froid négatif.",
  resume:
    "L'IGLOO distribue glaces, sorbets, pâtisseries et aliments surgelés avec une température réglable jusqu'à −25 °C. Six plateaux combinant spirales, tapis et séparateurs accueillent des formats très différents, et l'ascenseur dépose chaque produit en douceur dans une zone de retrait généreuse. L'isolation renforcée autorise une installation extérieure sous toit de protection.",
  seo: {
    title: "IGLOO — distributeur automatique de produits surgelés",
    description:
      "Distributeur automatique de surgelés jusqu'à −25 °C : 6 plateaux modulables, ascenseur de précision, écran tactile 22 pouces, installation intérieure ou extérieure sous toit de protection.",
    h1: "IGLOO — distributeur automatique de produits surgelés",
  },
  photo: {
    src: "/images/igloo/igloo-face.webp",
    alt: "Distributeur automatique IGLOO vu de trois quarts, vitrine réfrigérée éclairée, écran tactile et trappe de retrait",
    w: 896,
    h: 1195,
  },
  chiffres: [
    { valeur: "−25 °C", label: "Température minimale réglable" },
    { valeur: "6", label: "Plateaux maximum" },
    { valeur: "9", label: "Sélections par étage" },
    { valeur: "22″", label: "Écran tactile" },
  ],
  atouts: [
    {
      titre: "Froid négatif réglable",
      texte:
        "La consigne descend jusqu'à −25 °C et se règle selon la nature des produits, de la crème glacée aux plats préparés surgelés.",
    },
    {
      titre: "Stockage multi-format",
      texte:
        "Spirales simples ou doubles, tapis et séparateurs se combinent sur six plateaux pour accueillir cornets, pots, boîtes, sachets ou barquettes. Une configuration dédiée aux cônes est possible.",
    },
    {
      titre: "Zone de retrait généreuse",
      texte:
        "L'ascenseur accompagne le produit jusqu'à une zone de 150 × 695 mm, dimensionnée pour les emballages volumineux.",
    },
    {
      titre: "Intérieur ou extérieur",
      texte:
        "Le système de refroidissement et l'isolation renforcée permettent une implantation extérieure. Le toit de protection est prévu pour abriter la machine des intempéries.",
    },
    {
      titre: "Vitrine éclairée par LED",
      texte:
        "L'éclairage met les produits en valeur derrière la vitre et consomme peu.",
    },
    {
      titre: "Suivi à distance",
      texte:
        "Ventes, état des stocks et température interne sont consultables depuis un appareil connecté.",
    },
  ],
  specs: [
    { label: "Largeur", valeur: "1 390 mm" },
    { label: "Hauteur", valeur: "1 954 mm" },
    { label: "Hauteur avec toit", valeur: "2 356 mm" },
    { label: "Profondeur", valeur: "876 mm" },
    { label: "Zone de retrait", valeur: "150 × 695 mm" },
    { label: "Plateaux", valeur: "6 maximum" },
    { label: "Sélections par étage", valeur: "9 maximum" },
    { label: "Alimentation", valeur: "230 V / 50 Hz" },
    { label: "Puissance", valeur: "1 200 W" },
    { label: "Température", valeur: "Réglable jusqu'à −25 °C" },
    { label: "Écran", valeur: "Tactile 22 pouces" },
    { label: "Installation", valeur: "Intérieure ou extérieure sous toit" },
  ],
  galerie: [
    {
      src: "/images/igloo/igloo-installation-exterieure.webp",
      alt: "IGLOO installé en extérieur avec son toit de protection blanc",
      w: 1105,
      h: 1210,
      legende: "Installation extérieure avec toit de protection",
    },
    {
      src: "/images/igloo/igloo-stockage-modulable.webp",
      alt: "Intérieur de l'IGLOO : plateaux numérotés combinant spirales, tapis et séparateurs",
      w: 1200,
      h: 2481,
      legende: "Spirales, tapis et séparateurs sur six plateaux",
    },
    {
      src: "/images/igloo/igloo-dimensions.webp",
      alt: "Schémas dimensionnels de face et de profil de l'IGLOO",
      w: 1194,
      h: 776,
      legende: "Encombrement",
    },
    {
      src: "/images/igloo/igloo-habillage-glaces-sorbets.webp",
      alt: "Exemple de personnalisation graphique de l'IGLOO pour une offre de glaces et sorbets",
      w: 1085,
      h: 1450,
      legende: "Exemple de personnalisation graphique — projection",
    },
    {
      src: "/images/igloo/igloo-habillage-patisseries.webp",
      alt: "Exemple de personnalisation graphique de l'IGLOO pour des pâtisseries surgelées",
      w: 1085,
      h: 1449,
      legende: "Exemple de personnalisation graphique — projection",
    },
    {
      src: "/images/igloo/igloo-habillage-surgeles.webp",
      alt: "Exemple de personnalisation graphique de l'IGLOO pour une offre d'épicerie surgelée",
      w: 1085,
      h: 1450,
      legende: "Exemple de personnalisation graphique — projection",
    },
  ],
  faq: [
    {
      q: "Quels produits peut-on vendre dans l'IGLOO ?",
      r: "Glaces, sorbets, cônes, pots, pâtisseries, viandes, poissons, légumes et plats préparés surgelés. Le stockage est adapté aux dimensions et aux emballages lors de l'étude.",
    },
    {
      q: "La machine peut-elle être installée dehors ?",
      r: "Oui, avec le toit de protection prévu à cet effet. L'emplacement, le sol, l'alimentation électrique et les conditions d'exposition sont vérifiés avant installation.",
    },
    {
      q: "Peut-on distribuer des cônes glacés ?",
      r: "Oui. Une configuration de plateau spécifique permet de maintenir et de distribuer les cônes sans les coucher.",
    },
    {
      q: "L'habillage peut-il être personnalisé ?",
      r: "Oui. Les panneaux reprennent votre identité, vos produits et votre univers graphique, les zones fonctionnelles restant accessibles.",
    },
    {
      q: "Comment suivre les ventes et la température ?",
      r: "Une interface web donne accès aux statistiques de vente, à l'état des stocks par référence et à la température interne depuis un ordinateur, une tablette ou un téléphone connecté.",
    },
  ],
};

export const solutions: Solution[] = [freshFoodStore, multi610, igloo];

export const comparatif = {
  colonnes: [freshFoodStore, multi610, igloo],
  lignes: [
    { label: "Usage principal", valeurs: ["Produits frais et plats préparés", "Multi-produits, formats mélangés", "Produits surgelés"] },
    { label: "Température", valeurs: ["0 à 4 °C maintenus", "+4 à +25 °C, option 0–4 °C", "Jusqu'à −25 °C"] },
    { label: "Sélections", valeurs: ["96 en très grand format, davantage sinon", "60", "54 (6 × 9)"] },
    { label: "Système de livraison", valeurs: ["Convoyeur motorisé deux axes", "Ascenseur de précision", "Ascenseur de précision"] },
    { label: "Installation extérieure", valeurs: ["Oui, avec toit", "Étude spécifique", "Oui, avec toit"] },
    { label: "Écran tactile", valeurs: ["22 pouces", "22 pouces", "22 pouces"] },
    { label: "Encombrement au sol", valeurs: ["1 926 × 1 102 mm", "1 293 × 870 mm", "1 390 × 876 mm"] },
  ],
};
