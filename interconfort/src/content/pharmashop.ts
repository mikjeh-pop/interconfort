import type { Spec, Atout, Faq } from "./solutions";

export const pharmashop = {
  seo: {
    title: "Pharmashop — distributeur automatique pour pharmacie 24 h/24",
    description:
      "Délivrance automatisée en officine : retrait d'ordonnance 24 h/24, guichet de garde, liaison avec le robot de la pharmacie, écran tactile 22 pouces et contrôle du produit avant remise.",
    h1: "Pharmashop — délivrance automatisée en officine, 24 h/24",
  },
  accroche: "L'officine reste ouverte quand la porte est fermée.",
  intro:
    "Pharmashop prolonge le service de l'officine au-delà des heures d'ouverture. Intégrée en façade, la console délivre les produits réservés pour un patient, gère les ordonnances électroniques et permet au pharmacien de garder la main : contrôle du produit avant remise, dialogue par écran, annulation de la vente en cas d'erreur. Elle peut être alimentée directement depuis le robot de l'officine.",
  atouts: [
    {
      titre: "Raccordement au robot de l'officine",
      texte:
        "La console peut être alimentée en produits venant du robot. Le lien direct avec le logiciel de la pharmacie évite la double saisie et permet de préparer une commande à distance.",
    },
    {
      titre: "Retrait sécurisé par identification",
      texte:
        "Le patient récupère un produit qui lui est réservé après identification : carte d'identité, carte de fidélité, code secret, code-barres ou QR code.",
    },
    {
      titre: "Ordonnances électroniques",
      texte:
        "Le lecteur de cartes d'identité prend en charge les ordonnances électroniques, par puce, code-barres ou QR code.",
    },
    {
      titre: "Contrôle avant remise",
      texte:
        "Une caméra interne permet au pharmacien de vérifier l'exactitude du produit livré avant l'ouverture de la porte de distribution. En cas d'erreur, la vente est annulée et le produit éjecté automatiquement par l'arrière.",
    },
    {
      titre: "Guichet de nuit",
      texte:
        "En option, le pharmacien peut voir le patient et converser avec lui en toute sécurité. La porte de distribution s'ouvre et se ferme automatiquement, sous son contrôle.",
    },
    {
      titre: "Écran tactile 22 pouces",
      texte:
        "Le patient consulte les produits disponibles en photos et vidéos, dialogue avec le pharmacien et suit les étapes de la délivrance. Une posologie ou un message complémentaire peuvent être imprimés.",
    },
    {
      titre: "Accessible à tous",
      texte:
        "Clavier et produits restent à portée des personnes âgées ou à mobilité réduite.",
    },
    {
      titre: "Conçue pour la façade",
      texte:
        "Blindage extérieur acier 2 mm et vernissage époxydique. Unité de gestion à microprocesseur programmable, autodiagnostic, liaison GSM/GPRS et LAN pour le contrôle à distance.",
    },
  ] as Atout[],
  specsConsole: [
    { label: "Modèle", valeur: "Console Pharma « Night & Safe »" },
    { label: "Fabricant", valeur: "PharmaShop24" },
    { label: "Dimensions", valeur: "750 × 860 × 1 990 mm" },
    { label: "Capacité", valeur: "Limitée au robot et/ou à l'armoire produits" },
    { label: "Écran", valeur: "Tactile 22 pouces en façade" },
    { label: "Versions", valeur: "« Night & Safe » et « Spider », raccordées au robot" },
    { label: "Paiement", valeur: "Billets, monnaie, cartes de crédit et de débit" },
    { label: "Accessoires", valeur: "Imprimante, alarme" },
  ] as Spec[],
  specsStore: [
    { label: "Modèle", valeur: "Pharma 24H « Store »" },
    { label: "Sélections", valeur: "72" },
    { label: "Autonomie", valeur: "1 440 articles" },
    { label: "Distribution", valeur: "Modulable et sécurisée" },
    { label: "Mécanique", valeur: "Ascenseur robotisé" },
  ] as Spec[],
  faq: [
    {
      q: "Le patient peut-il retirer une ordonnance en dehors des heures d'ouverture ?",
      r: "Oui. Le produit préparé et réservé lui est délivré après identification, à toute heure. Le pharmacien décide de ce qui est mis à disposition et garde la possibilité de contrôler la remise.",
    },
    {
      q: "Faut-il un robot de pharmacie pour installer Pharmashop ?",
      r: "Non. La console peut être alimentée depuis le robot de l'officine lorsque celui-ci existe, mais elle fonctionne aussi avec une armoire produits dédiée. La capacité dépend de la solution retenue.",
    },
    {
      q: "Quelle différence entre la console et le modèle Store ?",
      r: "La console s'intègre en façade et sert principalement au retrait de commandes et au guichet de garde. Le modèle Store est un distributeur à ascenseur robotisé de 72 sélections, destiné à la vente directe de parapharmacie.",
    },
    {
      q: "Le pharmacien garde-t-il le contrôle sur la délivrance ?",
      r: "Oui. Une caméra interne permet de vérifier le produit avant l'ouverture de la porte, la vente peut être annulée avec éjection automatique du produit, et l'option guichet de nuit permet de voir le patient et de lui parler.",
    },
    {
      q: "L'appareil peut-il être personnalisé ?",
      r: "La configuration est adaptée aux besoins du pharmacien : agencement, capacité, options d'identification et d'impression. L'intégration en façade fait l'objet d'une étude sur place.",
    },
  ] as Faq[],
};
