import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Bouton, Container, RuleTick, TitreSection } from "@/components/Ui";
import { societe } from "@/content/site";
import { secteurs } from "@/content/secteurs";
import { machinesMagex, photosPharmashop } from "@/content/medias-distants";
import { freshFoodStore, solutions } from "@/content/solutions";
import { magex } from "@/content/magex";
import { logiciel } from "@/content/logiciel";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Inter-Confort — concepteur de points de vente automatisés",
  description:
    "Concepteur et intégrateur de solutions de vente automatisée réfrigérées : Fresh Food Store, MULTI 610, IGLOO, Pharmashop et technologies Magex. Nivelles, Belgique, depuis 1986.",
  path: "/",
  image: freshFoodStore.photo.src,
});

const methode = [
  {
    titre: "Étude des produits",
    texte:
      "Formats, emballages, poids, fragilité et température de conservation. C’est ce qui détermine le type de plateau, l’espacement et le mode de livraison.",
  },
  {
    titre: "Étude de l’emplacement",
    texte:
      "Sol, accès, exposition, raccordement électrique, flux de clientèle. Une machine bien conçue mal implantée ne fonctionne pas.",
  },
  {
    titre: "Configuration",
    texte:
      "Choix de la machine, agencement des plateaux, niveau de froid, moyens de paiement, options de retrait et personnalisation graphique.",
  },
  {
    titre: "Installation et mise en service",
    texte:
      "Livraison, raccordement, paramétrage du catalogue et prise en main du pilotage à distance.",
  },
  {
    titre: "Suivi",
    texte:
      "Service après-vente, pièces et accompagnement dans la durée. Inter-Confort assure la représentation, la commercialisation et le service des appareils qu’elle intègre.",
  },
];

export default function Accueil() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink/10">
        <Container>
          <div className="grid items-end gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
            <div>
              <p className="eyebrow mb-8">
                Concepteur · Intégrateur · {societe.adresse.ville}, depuis{" "}
                {societe.depuis}
              </p>
              <h1 className="display text-[clamp(2.4rem,6.4vw,5.1rem)] text-ink">
                Concepteur de points de vente automatisés.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">
                Inter-Confort conçoit, configure et installe des distributeurs
                professionnels capables de tenir la chaîne du froid, de
                manipuler des produits fragiles et de fonctionner sans personnel
                — en boutique comme en plein air.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Bouton href="/contact">Présenter mon projet</Bouton>
                <Bouton href="/solutions" variante="ligne">
                  Voir les solutions
                </Bouton>
              </div>
            </div>

            <Reveal>
              <div className="relative aspect-[4/5] w-full bg-paper-2">
                <Image
                  src={freshFoodStore.photo.src}
                  alt={freshFoodStore.photo.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-steel">
                Fresh Food Store — conception Inter-Confort
              </p>
            </Reveal>
          </div>
        </Container>
        <RuleTick />
      </section>

      {/* Chiffres clés Fresh Food Store */}
      <section className="border-b border-ink/10 bg-paper-2">
        <Container>
          <dl className="grid grid-cols-2 divide-ink/10 py-10 sm:grid-cols-4 sm:divide-x">
            {freshFoodStore.chiffres.map((c) => (
              <div
                key={c.label}
                className="px-0 py-4 sm:px-8 sm:py-0 sm:first:pl-0"
              >
                <dt className="sr-only">{c.label}</dt>
                <dd>
                  <span className="data block text-2xl text-ink sm:text-3xl">
                    {c.valeur}
                  </span>
                  <span className="mt-2 block text-xs leading-snug text-steel">
                    {c.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Positionnement */}
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <TitreSection eyebrow="Notre métier">
              Nous ne vendons pas des machines. Nous résolvons des contraintes.
            </TitreSection>
            <Reveal>
              <div className="space-y-6 text-lg leading-relaxed text-ink-2">
                <p>
                  Un distributeur automatique ne pose aucun problème tant qu’il
                  s’agit de canettes. Tout change avec une barquette de sushis,
                  un ballotin de pralines ou une boîte d’œufs : il faut tenir
                  une température exacte, saisir l’article sans le heurter et
                  garantir que le client repartira avec le bon produit, intact.
                </p>
                <p>
                  C’est le métier d’Inter-Confort depuis {societe.depuis}. Nous
                  étudions les produits et les emballages avant de parler
                  d’équipement, nous configurons la machine autour d’eux, et
                  nous restons disponibles une fois l’installation en service.
                </p>
                <p>
                  Nos conceptions s’appuient sur des décennies d’intégration des
                  technologies Magex et Pharmashop, dont nous assurons la
                  représentation, la commercialisation et le service.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Secteurs */}
      <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <TitreSection eyebrow="Par métier">
              Chaque métier a sa contrainte.
            </TitreSection>
            <Link
              href="/secteurs"
              className="text-sm text-cold underline-offset-4 hover:underline"
            >
              Toutes les pages métier →
            </Link>
          </div>
          <ul className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {secteurs.map((sec, i) => (
              <li key={sec.slug} className="bg-paper-2">
                <Reveal delay={i * 35}>
                  <Link
                    href={`/secteurs/${sec.slug}`}
                    className="group flex h-full flex-col bg-paper p-6 transition-colors hover:bg-paper-2"
                  >
                    <span className="data text-[0.68rem] text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display mt-3 text-lg text-ink group-hover:text-cold">
                      {sec.titreCourt}
                    </span>
                    <span className="mt-2 flex-1 text-xs leading-relaxed text-steel">
                      {sec.accroche}
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Aperçu solutions */}
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <TitreSection eyebrow="Nos solutions">
              Trois familles, une même exigence.
            </TitreSection>
            <Link
              href="/solutions"
              className="text-sm text-cold underline-offset-4 hover:underline"
            >
              Comparer les modèles →
            </Link>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link href={s.href} className="group block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-2">
                    <Image
                      src={s.photo.src}
                      alt={s.photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="eyebrow mt-5">{s.categorie}</p>
                  <h3 className="display mt-2 text-2xl text-ink group-hover:text-cold">
                    {s.nom}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">
                    {s.accroche}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Bloc Fresh Food Store — section sombre */}
      <section className="bg-cold text-white">
        <RuleTick clair />
        <Container>
          <div className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <TitreSection eyebrow="Solution principale" clair>
                Fresh Food Store
              </TitreSection>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-frost">
                {freshFoodStore.resume}
              </p>

              <ul className="mt-10 space-y-6 border-t border-white/15 pt-8">
                {freshFoodStore.atouts.slice(0, 4).map((a) => (
                  <li key={a.titre}>
                    <h3 className="display text-lg text-white">{a.titre}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-frost/85">
                      {a.texte}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex flex-wrap gap-4">
                <Bouton href="/solutions/fresh-food-store" variante="clair">
                  Découvrir le Fresh Food Store
                </Bouton>
              </div>
            </div>

            <Reveal>
              <div className="grid gap-4">
                <div className="relative aspect-[4/5] w-full bg-cold-2">
                  <Image
                    src="/images/fresh-food-store/fresh-food-store-exterieur.webp"
                    alt="Fresh Food Store installé en extérieur, façade vitrée et toit de protection, dans un environnement rural"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square w-full bg-cold-2">
                    <Image
                      src="/images/fresh-food-store/fresh-food-store-plateaux-modulables.webp"
                      alt="Plateaux numérotés et séparateurs modulables à l’intérieur du Fresh Food Store"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square w-full bg-cold-2">
                    <Image
                      src="/images/fresh-food-store/fresh-food-store-installations.webp"
                      alt="Fresh Food Store habillé aux couleurs d’un traiteur"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pharmashop */}
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="relative aspect-[3/4] w-full bg-paper-2">
                <Image
                  src={photosPharmashop[0].src}
                  unoptimized
                  alt={photosPharmashop[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <TitreSection eyebrow="Pharmacie">
                Pharmashop — l’officine reste ouverte 24 h/24.
              </TitreSection>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2">
                Intégrée en façade, la console délivre les produits réservés
                pour un patient après identification, gère les ordonnances
                électroniques et peut être alimentée depuis le robot de
                l’officine. Le pharmacien garde la main : contrôle du produit
                par caméra avant remise, dialogue par écran, annulation de la
                vente en cas d’erreur.
              </p>
              <div className="mt-10">
                <Bouton href="/pharmashop" variante="ligne">
                  Découvrir Pharmashop
                </Bouton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Magex */}
      <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-28">
        <Container>
          <TitreSection eyebrow="Héritage technique">
            Technologies Magex
          </TitreSection>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-2">
            {magex.intro}
          </p>
          <div className="mt-12 grid gap-x-10 gap-y-8 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {magex.principes.slice(0, 6).map((p, i) => (
              <Reveal key={p.titre} delay={i * 60}>
                <div className="flex gap-5">
                  <span className="data pt-1 text-xs text-steel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-lg text-ink">{p.titre}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">
                      {p.texte}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
            {Object.values(machinesMagex).map((m, i) => (
              <li key={m.src}>
                <Reveal delay={i * 60}>
                  <div className="relative aspect-[3/4] w-full bg-paper">
                    <Image
                      src={m.src}
                      unoptimized
                      alt={m.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-contain p-3 transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Bouton href="/technologies-magex" variante="ligne">
              Explorer les technologies Magex
            </Bouton>
          </div>
        </Container>
      </section>

      {/* Logiciel */}
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <TitreSection eyebrow="Logiciel">
                Savoir ce qui s’est vendu, et si le froid a tenu.
              </TitreSection>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2">
                {logiciel.intro}
              </p>
              <div className="mt-10">
                <Bouton href="/logiciel" variante="ligne">
                  Voir les fonctions de pilotage
                </Bouton>
              </div>
            </div>
            <Reveal>
              <ul className="border-t border-ink/15">
                {logiciel.groupes.map((g) => (
                  <li key={g.titre} className="border-b border-ink/10 py-5">
                    <p className="eyebrow">{g.titre}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">
                      {g.fonctions.map((f) => f.nom).join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Méthode */}
      <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-28">
        <Container>
          <TitreSection eyebrow="Notre méthode">
            Cinq étapes, dans cet ordre.
          </TitreSection>
          <ol className="mt-12 border-t border-ink/15">
            {methode.map((m, i) => (
              <li
                key={m.titre}
                className="grid gap-3 border-b border-ink/10 py-6 sm:grid-cols-[3rem_1fr_1.4fr] sm:gap-8"
              >
                <span className="data text-sm text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-lg text-ink">{m.titre}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{m.texte}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Réalisations */}
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <TitreSection eyebrow="Références">
              Des installations en service.
            </TitreSection>
            <Link
              href="/realisations"
              className="text-sm text-cold underline-offset-4 hover:underline"
            >
              Toutes les réalisations →
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                src: "/images/fresh-food-store/fresh-food-store-installations.webp",
                alt: "Fresh Food Store personnalisé aux couleurs d’un traiteur, installé devant un bâtiment",
              },
              {
                src: "/images/igloo/igloo-installation-exterieure.webp",
                alt: "IGLOO installé en extérieur avec toit de protection",
              },
              {
                src: "/images/fresh-food-store/fresh-food-store-installation.webp",
                alt: "Fresh Food Store en situation d’exploitation",
              },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 70}>
                <div className="relative aspect-[3/4] w-full bg-paper-2">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
            <Reveal delay={210}>
              <div className="relative aspect-[3/4] w-full bg-paper-2">
                <Image
                  src={photosPharmashop[1].src}
                  unoptimized
                  alt={photosPharmashop[1].alt}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Appel */}
      <section className="bg-ink text-white">
        <Container>
          <div className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <TitreSection eyebrow="Votre projet" clair>
                Décrivez-nous vos produits. Nous vous dirons ce qui est
                possible.
              </TitreSection>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-frost">
                Formats d’emballage, température, capacité, lieu d’installation
                : ce sont ces éléments qui déterminent la configuration. Plus
                vous êtes précis, plus la réponse l’est.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Bouton href="/contact" variante="clair">
                Présenter mon projet
              </Bouton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
