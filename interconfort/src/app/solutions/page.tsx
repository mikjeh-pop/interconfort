import Image from "next/image";
import Link from "next/link";
import Fil from "@/components/Fil";
import PhotoManquante from "@/components/PhotoManquante";
import Reveal from "@/components/Reveal";
import { Bouton, Container, RuleTick, TitreSection } from "@/components/Ui";
import { comparatif, solutions } from "@/content/solutions";
import { breadcrumbLd } from "@/lib/jsonld";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Solutions de vente automatisée — comparatif des modèles",
  description:
    "Comparez les solutions Inter-Confort : Fresh Food Store pour le frais, MULTI 610 pour le multi-produits, IGLOO pour le surgelé, Pharmashop pour l’officine et les technologies Magex.",
  path: "/solutions",
});

const fil = [
  { nom: "Accueil", href: "/" },
  { nom: "Solutions", href: "/solutions" },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(fil)) }}
      />
      <Fil items={fil} />

      <section className="border-b border-ink/10">
        <Container>
          <div className="max-w-4xl py-16 sm:py-24">
            <p className="eyebrow mb-7">Catalogue</p>
            <h1 className="display text-[clamp(2.2rem,5.6vw,4.4rem)] text-ink">
              Nos solutions de vente automatisée
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
              La bonne machine dépend de trois choses : la température que vos
              produits exigent, la façon dont ils supportent d’être manipulés,
              et l’endroit où l’appareil sera installé. Voici comment nos
              solutions se répartissent.
            </p>
          </div>
        </Container>
        <RuleTick />
      </section>

      <section className="border-b border-ink/10 py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
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
                  <h2 className="display mt-2 text-2xl text-ink group-hover:text-cold">
                    {s.nom}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">
                    {s.accroche}
                  </p>
                  <p className="mt-4 text-sm text-cold underline-offset-4 group-hover:underline">
                    Voir la fiche →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2 py-16 sm:py-24">
        <Container>
          <TitreSection eyebrow="Comparatif">
            Choisir selon la contrainte principale.
          </TitreSection>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">
                Comparatif des solutions Fresh Food Store, MULTI 610 et IGLOO
              </caption>
              <thead>
                <tr className="border-b border-ink/25">
                  <th
                    scope="col"
                    className="eyebrow py-4 pr-6 align-bottom font-normal"
                  >
                    Critère
                  </th>
                  {comparatif.colonnes.map((c) => (
                    <th
                      key={c.slug}
                      scope="col"
                      className="py-4 pr-6 align-bottom"
                    >
                      <Link
                        href={c.href}
                        className="display text-lg text-ink hover:text-cold"
                      >
                        {c.nom}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparatif.lignes.map((l) => (
                  <tr key={l.label} className="border-b border-ink/10">
                    <th
                      scope="row"
                      className="py-4 pr-6 text-sm font-normal text-steel"
                    >
                      {l.label}
                    </th>
                    {l.valeurs.map((v, i) => (
                      <td key={i} className="data py-4 pr-6 text-sm text-ink">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-steel">
            Le nombre de sélections de l’IGLOO correspond à six plateaux de neuf
            sélections. Les valeurs indiquées sont des maxima : la configuration
            réelle dépend des emballages.
          </p>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-16 sm:py-24">
        <Container>
          <TitreSection eyebrow="Également au catalogue">
            Pharmacie et technologies historiques.
          </TitreSection>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <Reveal>
              <PhotoManquante
                description="Console Pharma « Night & Safe » en façade d’officine."
                ratio="16 / 10"
              />
              <h3 className="display mt-5 text-2xl text-ink">Pharmashop</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-2">
                Délivrance automatisée en officine : retrait de commande après
                identification, ordonnances électroniques, guichet de garde et
                raccordement possible au robot de la pharmacie.
              </p>
              <p className="mt-5">
                <Link
                  href="/pharmashop"
                  className="text-sm text-cold underline-offset-4 hover:underline"
                >
                  Découvrir Pharmashop →
                </Link>
              </p>
            </Reveal>
            <Reveal delay={80}>
              <PhotoManquante
                description="Big store chocolatiers, 112 sélections à ascenseur robotisé."
                ratio="16 / 10"
              />
              <h3 className="display mt-5 text-2xl text-ink">
                Technologies Magex
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-2">
                Ascenseur robotisé, grandes capacités jusqu’à 112 sélections,
                écrans tactiles et contrôle du produit avant livraison. Le socle
                technique sur lequel nos conceptions se sont construites.
              </p>
              <p className="mt-5">
                <Link
                  href="/technologies-magex"
                  className="text-sm text-cold underline-offset-4 hover:underline"
                >
                  Explorer les technologies Magex →
                </Link>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container>
          <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <TitreSection eyebrow="Vous hésitez ?" clair>
              Décrivez vos produits, nous vous orienterons.
            </TitreSection>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Bouton href="/contact" variante="clair">
                Demander une étude
              </Bouton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
