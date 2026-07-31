import type { Spec } from "./solutions";

export const magex = {
  seo: {
    title: "Technologies Magex — ascenseur robotisé et distribution délicate",
    description:
      "Les technologies Magex intégrées par Inter-Confort : ascenseur robotisé, grandes capacités, écrans tactiles, distribution de produits délicats pour la pharmacie, le chocolat, la boulangerie et le frais.",
    h1: "Technologies Magex",
  },
  intro:
    "Inter-Confort intègre les technologies Magex depuis des décennies. Elles reposent sur un principe constant : un ascenseur robotisé qui va chercher le produit et l'accompagne jusqu'au client, au lieu de le laisser tomber. C'est ce qui rend possible la distribution automatique de pralines, de pâtisseries ou de médicaments, et c'est le socle sur lequel les conceptions Inter-Confort se sont construites.",
  principes: [
    {
      titre: "Ascenseur robotisé",
      texte:
        "Le mécanisme prélève l'article à son emplacement et le dépose dans la zone de retrait. Il autorise des produits que les spirales classiques abîmeraient.",
    },
    {
      titre: "Grandes capacités",
      texte:
        "Les configurations à huit plateaux atteignent 112 sélections et une autonomie de 2 240 articles selon le modèle.",
    },
    {
      titre: "Écrans tactiles",
      texte:
        "Écrans de 17 ou 22 pouces permettant photos et vidéos, affichage des étapes d'utilisation et mise en valeur des références.",
    },
    {
      titre: "Contrôle du produit avant livraison",
      texte:
        "Certains modèles vérifient l'article avant sa remise au client, ce qui limite les erreurs de délivrance.",
    },
    {
      titre: "Froid actif",
      texte:
        "Contrôle actif de la température par groupe froid sur les configurations destinées aux denrées.",
    },
    {
      titre: "Projets personnalisés",
      texte:
        "Configurations sur mesure selon les produits, les emballages et le lieu d'installation.",
    },
  ],
  modeles: [
    {
      nom: "Big store chocolatiers",
      specs: [
        { label: "Plateaux", valeur: "8" },
        { label: "Sélections", valeur: "112" },
        { label: "Écran", valeur: "Tactile 22 pouces, photos et vidéos" },
        { label: "Éclairage", valeur: "LED" },
        { label: "Mécanique", valeur: "Ascenseur robotisé" },
      ] as Spec[],
      texte:
        "Distribue pralines, ganaches, crèmes, tablettes et pâtes de fruits quelle que soit leur forme ou leur présentation : ballotins, briquettes, bocaux, blisters.",
    },
    {
      nom: "Big store",
      specs: [
        { label: "Sélections", valeur: "112" },
        { label: "Autonomie", valeur: "2 240 articles" },
        { label: "Froid", valeur: "Contrôle actif par groupe froid" },
        { label: "Écran", valeur: "Tactile 22 pouces" },
        { label: "Paiement", valeur: "Tout système" },
      ] as Spec[],
      texte:
        "Configuration grande capacité à froid actif, destinée aux volumes importants et aux gammes étendues.",
    },
    {
      nom: "Big store 17 pouces",
      specs: [
        { label: "Plateaux", valeur: "8" },
        { label: "Sélections", valeur: "112" },
        { label: "Autonomie", valeur: "2 240 articles" },
        { label: "Écran", valeur: "Tactile 17 pouces, photos et vidéos" },
        { label: "Contrôle", valeur: "Vérification du produit avant livraison" },
      ] as Spec[],
      texte:
        "Variante à écran 17 pouces intégrant le contrôle du produit avant remise au client.",
    },
    {
      nom: "Double Evo",
      specs: [
        { label: "Capacité", valeur: "2 880 articles maximum" },
        { label: "Stock", valeur: "Réfrigéré à l'arrière" },
        { label: "Abri", valeur: "Abri dédié pour Double Evo" },
        { label: "Éclairage", valeur: "LED" },
        { label: "Affichage", valeur: "Display électronique LCD" },
      ] as Spec[],
      texte:
        "Configuration double à stock réfrigéré arrière, pour les implantations à forte rotation.",
    },
  ],
  secteurs: [
    { nom: "Pharmacie et parapharmacie", texte: "Délivrance sécurisée, retrait de commande, guichet de garde." },
    { nom: "Chocolatiers", texte: "Pralines, ganaches, tablettes et pâtes de fruits, tous conditionnements." },
    { nom: "Boulangerie et pâtisserie", texte: "Viennoiseries, entremets et desserts, y compris le dimanche." },
    { nom: "Produits frais et traiteurs", texte: "Plats cuisinés, barquettes et entrées froides sous froid contrôlé." },
    { nom: "Produits laitiers", texte: "Lait, fromages et yaourts en vente directe producteur." },
    { nom: "Produits surgelés", texte: "Glaces, sorbets et aliments surgelés en froid négatif." },
    { nom: "Fruits et légumes", texte: "Vente directe à la ferme et circuits courts." },
    { nom: "Multi-produits", texte: "Gammes mixtes réunies dans une même machine." },
    { nom: "Librairie et bibliothèque", texte: "Prêt et retrait automatisés d'ouvrages." },
    { nom: "Distribution délicate", texte: "Articles fragiles que la chute libre endommagerait." },
  ],
};
