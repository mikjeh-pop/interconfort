# Site Inter-Confort

Site vitrine multipage pour Inter-Confort SA (Nivelles, Belgique), construit avec Next.js (App Router), TypeScript et Tailwind CSS, prêt pour un déploiement sur Vercel.

**Statut : version de démonstration.** Le contenu rédactionnel et les données techniques proviennent de sources vérifiées (voir « Provenance » plus bas). Les visuels manquants sont matérialisés par des emplacements explicitement marqués « Visuel à fournir » plutôt que remplacés par des images approchantes.

---

## Installation

```bash
npm install
cp .env.example .env.local   # renseigner les variables
npm run dev                  # http://localhost:3000
```

Autres commandes : `npm run build` (build de production), `npm start` (serveur de production), `npm run lint`.

## Déploiement sur Vercel

1. Pousser le dépôt sur GitHub, GitLab ou Bitbucket.
2. Dans Vercel, « Add New Project » et importer le dépôt. Le framework Next.js est détecté automatiquement, aucune configuration de build n'est nécessaire.
3. Renseigner les variables d'environnement ci-dessous dans Settings → Environment Variables, pour les environnements Production et Preview.
4. Déployer. Les pages sont générées statiquement ; seule la route `/api/contact` s'exécute à la demande.
5. Une fois le domaine branché, mettre `NEXT_PUBLIC_SITE_URL` à sa valeur définitive et redéployer, afin que les canonical, l'Open Graph et le sitemap pointent vers la bonne adresse.

### Variables d'environnement

| Variable | Obligatoire | Rôle |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommandée | URL publique du site. Sert aux balises canonical, à l'Open Graph et au `sitemap.xml`. Par défaut `https://www.interconfort.be`. |
| `RESEND_API_KEY` | Oui en production | Clé API Resend pour l'envoi des demandes du formulaire. |
| `CONTACT_TO_EMAIL` | Oui en production | Adresse recevant les demandes. |
| `CONTACT_FROM_EMAIL` | Oui en production | Adresse expéditrice, sur un domaine vérifié chez Resend. |

Aucune clé n'est présente dans le code. Si les variables d'envoi ne sont pas définies, le formulaire répond normalement à l'utilisateur mais la demande est seulement écrite dans les logs serveur : **ne pas mettre en production sans les configurer.**

---

## Pages

| URL | Contenu |
|---|---|
| `/` | Accueil : positionnement, marchés, aperçu des solutions, bloc Fresh Food Store, Pharmashop, Magex, logiciel, méthode, références |
| `/solutions` | Synthèse et tableau comparatif des modèles |
| `/secteurs` | Index des huit pages métier |
| `/secteurs/[slug]` | Huit pages métier : traiteurs, boulangerie, chocolatiers, producteurs, pharmacies, surgelés, entreprises, commerces spécialisés |
| `/solutions/fresh-food-store` | Fiche complète : gestion du froid, plateaux, capacités, exploitation, galerie, FAQ |
| `/solutions/multi-610` | Fiche complète : ascenseur, systèmes de stockage, configurations, options, galerie, FAQ |
| `/solutions/igloo` | Fiche complète : froid négatif, stockage, installation, galerie, FAQ |
| `/pharmashop` | Parcours de délivrance, caractéristiques, deux fiches techniques, FAQ |
| `/technologies-magex` | Principes, modèles historiques, secteurs |
| `/logiciel` | Fonctions de pilotage à distance, organisation de l'interface |
| `/realisations` | Galerie classée par catégorie |
| `/inter-confort` | Histoire, philosophie, interlocuteurs |
| `/contact` | Formulaire d'étude de projet |
| `/contact/confirmation` | Confirmation après envoi (non indexée) |
| `/sitemap.xml`, `/robots.txt`, 404 personnalisée | |

Les anciennes URL WordPress sont redirigées en 301 vers les nouvelles (voir `next.config.ts`).

## Positionnement face à la concurrence

Le concurrent français de référence est Magex France (magexfrance.fr), distributeur des mêmes technologies italiennes. Analyse comparative et choix retenus :

| Point | Magex France | Ce site |
|---|---|---|
| Pages métier | 9 pages sectorielles — leur principal atout SEO | 8 pages métier structurées autour de la contrainte propre à chaque activité |
| Données techniques | Aucune cote, aucune capacité publiée | Dimensions, capacités, températures et puissances sur chaque fiche |
| Comparatif entre modèles | Absent | Tableau comparatif sur trois machines |
| FAQ | Une page générique | FAQ dédiée par solution, en données structurées |
| Antériorité | Fondé en 1998 | Depuis 1986 |
| Conception propre | Distributeur uniquement | Fresh Food Store conçu par Inter-Confort |
| Design | Gabarit d'agence | Direction graphique spécifique |

Deux forces du concurrent restent à reprendre plus tard : les pages de référencement local par ville, et les études de cas clients nommés utilisées comme preuve sociale.

## Référencement

Chaque page dispose d'un `title` et d'une `meta description` uniques, d'un H1 unique, d'un canonical, de métadonnées Open Graph et Twitter, d'un fil d'Ariane et de liens internes. Données structurées : `Organization` et `LocalBusiness` (global), `Product` (chaque solution), `FAQPage` (chaque FAQ), `BreadcrumbList` (toutes les pages internes).

## Accessibilité

Lien d'évitement vers le contenu, navigation clavier complète (mega-menu et lightbox fermables par Échap, galerie navigable aux flèches), états focus visibles, libellés de formulaire associés, textes alternatifs descriptifs sur toutes les images, structure sémantique (`header`, `main`, `nav`, `footer`, listes de définition pour les caractéristiques), respect de `prefers-reduced-motion` et repli sans JavaScript pour les blocs animés.

## Structure du contenu

Tout le texte modifiable est centralisé dans `src/content/` : `site.ts` (coordonnées, navigation, marchés), `solutions.ts` (les trois machines, spécifications, FAQ, galeries, comparatif), `pharmashop.ts`, `magex.ts`, `logiciel.ts`, `realisations.ts`. Aucune chaîne rédactionnelle n'est codée en dur dans les composants.

**Préparation du néerlandais.** `src/content/site.ts` déclare `LOCALES`, `DEFAULT_LOCALE` et `ACTIVE_LOCALES`. Pour ajouter le néerlandais : dupliquer les modules de contenu par locale, introduire un segment `[locale]` dans `src/app/`, brancher un middleware de détection et ajouter `nl` à `ACTIVE_LOCALES`. Aucune traduction automatique partielle n'a été mise en place.

## Images et provenance

29 visuels sont intégrés dans `public/images/`, répartis en trois dossiers (`fresh-food-store/`, `multi-610/`, `igloo/`), tous au format WebP.

**Deux sources.** Les visuels des trois machines principales sont des fichiers locaux, en WebP, dans `public/images/`. Le logo, les cinq machines Magex et les sept photos Pharmashop sont en revanche servis depuis le site actuel, via `src/content/medias-distants.ts` et les `remotePatterns` déclarés dans `next.config.ts`.

**C'est une solution de transition, à remplacer.** Elle permet à la démonstration d'afficher les vraies photos sans attendre la récupération des fichiers, mais elle crée une dépendance au site actuel : si celui-ci change ou disparaît, ces images cassent. Avant la mise en production définitive, télécharger ces fichiers, les convertir en WebP, les déposer dans `public/images/` et mettre à jour `medias-distants.ts`. Ces images utilisent `unoptimized` afin d'être chargées directement par le navigateur plutôt que par l'optimiseur Vercel, ce qui évite un échec de rendu si le domaine distant devient inaccessible côté serveur.

**Provenance des fichiers locaux :** archive statique de distri-popfrais.fr fournie par le client. Les fichiers ont été renommés pour supprimer toute référence aux marques commerciales françaises ; un doublon strict et un logo de marque tierce ont été écartés.

**Contrôle des noms interdits.** Aucune occurrence de POP'FRAIS, POP'TOUT, POP'ICE, POP'BOX ni Multi Pro Matik dans les noms de fichiers, les textes, les balises alt, les métadonnées ou le code source. Le contrôle est reproductible :

```bash
grep -rniE "pop.?(frais|tout|ice|box)|multi.?pro.?matik" src public next.config.ts
```

**Visuels écartés volontairement.** Les rendus « univers », le kiosque extérieur, l'intégration intérieure et le module secondaire du MULTI 610 sont des illustrations non contractuelles, pas des photographies. Ils ne figurent pas dans le projet.

**Visuels manquants.** Les photos Pharmashop, Magex et les 62 réalisations du site actuel n'ont pas pu être récupérées. Partout où elles manquent, le composant `PhotoManquante` affiche un emplacement explicite décrivant le visuel attendu. Une fois les fichiers disponibles, il suffit de les déposer dans `public/images/` et de remplacer l'appel au composant par un `next/image`.

Pour récupérer la médiathèque du site actuel, l'API WordPress est la voie la plus rapide : `https://interconfort.be/wp-json/wp/v2/media?per_page=100&page=N`.

---

## À faire valider par Inter-Confort

Ces points sont signalés dans l'interface par un marqueur ▲ ou par un encadré.

1. **Hauteur du Fresh Food Store** — 1 904 mm sur le site actuel, 1 969 mm sur la fiche technique. Écart de 65 mm à trancher.
2. **Taille de l'écran** — 22 pouces ou 21,5 pouces selon la source.
3. **Ancienneté** — le site actuel affiche « 35 ans », « 34 ans » et « depuis 1986 » selon les pages. Le site retenu la formulation « depuis 1986 », qui ne se périme pas. En 2026, cela représente 40 ans.
4. **MULTI 610 double** — confirmé comme étant la configuration console principale + module secondaire ? L'appellation n'apparaît pas dans les sources.
5. **Périmètre du logiciel** — les fonctions listées sont celles documentées à ce jour. Chacune doit être confirmée par version et par machine.
6. **Statut Magex et PharmaShop24** — préciser la nature exacte de la relation actuelle.
7. **Réalisations** — droit de citer les clients nommément, et légendes vérifiables (lieu, date).

## Contenus volontairement non repris

- **Tableau de bord chiffré** — les sources affichaient des données d'exploitation fictives (température, stock, ventes du jour). La page Logiciel présente une organisation d'interface sans aucune donnée.
- **Arguments de rentabilité** — « retour sur investissement inférieur à 24 mois » et estimations de chiffre d'affaires : allégations commerciales invérifiables, écartées.
- **Allégations réglementaires** — régulation « à ±0,01 °C », mentions du règlement CE 852/2004 et « au-delà des exigences HACCP » : engageantes juridiquement, à confirmer par écrit avant publication.

## Reste à faire

- Rapatrier localement les visuels encore servis par interconfort.be (logo, Magex, Pharmashop).
- Récupérer les 62 réalisations photographiées du site actuel.
- Ajouter des pages de référencement local par ville, et des études de cas clients nommés.
- Trancher les points de validation ci-dessus.
- Déployer une prévisualisation Vercel et effectuer la recette visuelle sur ordinateur et mobile (non réalisable dans l'environnement de développement utilisé pour ce livrable, sans accès navigateur ni CLI Vercel).
- Décider du sort de la quatrième solution présente dans l'archive source (casiers automatisés), absente du périmètre initial.
