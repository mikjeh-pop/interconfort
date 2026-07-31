export const logiciel = {
  seo: {
    title: "Logiciel et gestion à distance des distributeurs",
    description:
      "Pilotage à distance des distributeurs automatiques Inter-Confort : statistiques de vente, suivi des stocks et des températures, alertes, gestion du catalogue et des prix, codes de retrait, parc multi-machines.",
    h1: "Pilotage et gestion à distance",
  },
  intro:
    "Chaque machine embarque une unité de gestion à microprocesseur programmable avec autodiagnostic, reliée par GSM, GPRS, 4G, 5G ou LAN. Depuis un ordinateur, une tablette ou un téléphone, l'exploitant suit son parc sans se déplacer : ce qui s'est vendu, ce qui manque, et si le froid a tenu.",
  avertissement:
    "Les fonctions décrites ci-dessous correspondent à celles documentées à ce jour. Leur disponibilité peut varier selon la machine, la version logicielle et les options retenues. Le périmètre exact est confirmé lors de l'étude.",
  groupes: [
    {
      titre: "Exploitation",
      fonctions: [
        { nom: "Statistiques de vente", texte: "Transmission des ventes par produit, par machine et par période." },
        { nom: "Suivi du stock", texte: "État du stock disponible référence par référence, pour anticiper le réassort." },
        { nom: "Historique", texte: "Consultation des données passées et export pour analyse." },
        { nom: "Parc multi-machines", texte: "Plusieurs appareils suivis depuis une même interface." },
      ],
    },
    {
      titre: "Chaîne du froid",
      fonctions: [
        { nom: "Suivi des températures", texte: "Relevés issus des sondes digitales calibrées installées dans l'appareil." },
        { nom: "Alertes", texte: "Notification en cas de dérive de température ou d'événement machine." },
        { nom: "Historique des relevés", texte: "Données horodatées conservées et exportables pour vos contrôles." },
      ],
    },
    {
      titre: "Catalogue",
      fonctions: [
        { nom: "Gestion du catalogue", texte: "Création et mise à jour des références proposées à l'écran." },
        { nom: "Prix et promotions", texte: "Modification des tarifs et mise en avant de références." },
        { nom: "Images, titres et descriptions", texte: "Contenu affiché sur l'écran tactile, aux couleurs de l'exploitant." },
        { nom: "Mapping des produits", texte: "Affectation des références aux emplacements et sélection des positions." },
      ],
    },
    {
      titre: "Retrait de commande",
      fonctions: [
        { nom: "Codes de réservation", texte: "Génération des codes ou QR codes permettant le retrait d'une commande prépayée." },
        { nom: "Validation sur machine", texte: "Contrôle du code à l'écran avant délivrance, lorsque la configuration le prévoit." },
      ],
    },
    {
      titre: "Fidélité et paiement",
      fonctions: [
        { nom: "Cartes de fidélité", texte: "Reconnaissance par code-barres ou QR code." },
        { nom: "Moyens de paiement", texte: "Cartes de crédit et de débit, Bancontact, Payconiq, sans contact NFC, billets et monnaie." },
      ],
    },
  ],
};
