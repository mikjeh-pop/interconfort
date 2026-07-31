import Image from "next/image";
import Fil from "./Fil";
import FaqBloc from "./FaqBloc";
import Galerie from "./Galerie";
import Reveal from "./Reveal";
import SpecTable from "./SpecTable";
import { Bouton, Container, RuleTick, TitreSection } from "./Ui";
import type { Solution } from "@/content/solutions";
import { breadcrumbLd, faqLd, productLd } from "@/lib/jsonld";

export default function PageSolution({
  solution,
  sections,
}: {
  solution: Solution;
  sections?: React.ReactNode;
}) {
  const fil = [
    { nom: "Accueil", href: "/" },
    { nom: "Solutions", href: "/solutions" },
    { nom: solution.nom, href: solution.href },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd(solution)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(solution.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(fil)) }}
      />

      <Fil items={fil} />

      <section className="border-b border-ink/10">
        <Container>
          <div className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-7">{solution.categorie}</p>
              <h1 className="display text-[clamp(2.1rem,5.4vw,4.2rem)] text-ink">
                {solution.seo.h1}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2">{solution.accroche}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Bouton href="/contact">Demander une étude</Bouton>
                <Bouton href="#donnees-techniques" variante="ligne">
                  Données techniques
                </Bouton>
              </div>
            </div>
            <Reveal>
              <div className="relative aspect-[3/4] w-full bg-paper-2">
                <Image
                  src={solution.photo.src}
                  alt={solution.photo.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </Container>
        <RuleTick />
      </section>

      <section className="border-b border-ink/10 bg-paper-2">
        <Container>
          <dl className="grid grid-cols-2 divide-ink/10 py-10 sm:grid-cols-4 sm:divide-x">
            {solution.chiffres.map((c) => (
              <div key={c.label} className="px-0 py-4 sm:px-8 sm:py-0 sm:first:pl-0">
                <dt className="sr-only">{c.label}</dt>
                <dd>
                  <span className="data block text-2xl text-ink sm:text-3xl">{c.valeur}</span>
                  <span className="mt-2 block text-xs leading-snug text-steel">{c.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <TitreSection eyebrow="Présentation">{solution.nom}</TitreSection>
            <p className="text-lg leading-relaxed text-ink-2">{solution.resume}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Caractéristiques">Ce qui fait la différence.</TitreSection>
          <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {solution.atouts.map((a, i) => (
              <Reveal key={a.titre} delay={i * 60}>
                <div className="flex gap-5">
                  <span className="data pt-1 text-xs text-steel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-lg text-ink">{a.titre}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">{a.texte}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {sections}

      <section id="donnees-techniques" className="scroll-mt-24 bg-cold text-white">
        <RuleTick clair />
        <Container>
          <div className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <TitreSection eyebrow="Données techniques" clair>
              Les chiffres.
            </TitreSection>
            <div>
              <SpecTable specs={solution.specs} clair />
              <p className="mt-6 text-xs leading-relaxed text-frost/70">
                Données indicatives. La configuration finale est validée après étude des produits,
                des emballages et de l’emplacement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Galerie">{solution.nom} en images.</TitreSection>
          <div className="mt-12">
            <Galerie images={solution.galerie} />
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
            <TitreSection eyebrow="Questions fréquentes">Avant de démarrer.</TitreSection>
            <FaqBloc faq={solution.faq} />
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container>
          <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <TitreSection eyebrow="Étude de projet" clair>
              Parlons de vos produits et de votre emplacement.
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
