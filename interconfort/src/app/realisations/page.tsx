import Image from "next/image";
import Fil from "@/components/Fil";
import PhotoManquante from "@/components/PhotoManquante";
import Reveal from "@/components/Reveal";
import { Bouton, Container, RuleTick, TitreSection } from "@/components/Ui";
import { categories, realisations, totalRealisationsSiteActuel } from "@/content/realisations";
import { breadcrumbLd } from "@/lib/jsonld";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Réalisations — installations Inter-Confort",
  description:
    "Galerie des installations Inter-Confort classées par solution et par métier : Fresh Food Store, IGLOO, MULTI 610, Pharmashop, chocolatiers, boulangeries et projets personnalisés.",
  path: "/realisations",
});

const fil = [
  { nom: "Accueil", href: "/" },
  { nom: "Réalisations", href: "/realisations" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(fil)) }} />
      <Fil items={fil} />

      <section className="border-b border-ink/10">
        <Container>
          <div className="max-w-4xl py-16 sm:py-24">
            <p className="eyebrow mb-7">Références</p>
            <h1 className="display text-[clamp(2.2rem,5.6vw,4.4rem)] text-ink">Nos réalisations</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
              Installations en service chez des traiteurs, des pharmaciens, des chocolatiers, des
              boulangers et des producteurs. Le site actuel d’Inter-Confort recense{" "}
              {totalRealisationsSiteActuel} réalisations photographiées : elles seront reprises ici,
              classées par solution et par métier.
            </p>
          </div>
        </Container>
        <RuleTick />
      </section>

      {categories.map((cat) => {
        const items = realisations.filter((r) => r.categorie === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="border-b border-ink/10 py-14 sm:py-20 odd:bg-paper-2">
            <Container>
              <TitreSection eyebrow="Catégorie">{cat}</TitreSection>
              <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {items.map((r, i) => (
                  <li key={r.titre}>
                    <Reveal delay={i * 50}>
                      {r.image ? (
                        <>
                          <div className="relative aspect-[3/4] w-full bg-paper-2">
                            <Image
                              src={r.image.src}
                              alt={r.image.alt}
                              fill
                              sizes="(max-width: 768px) 50vw, 25vw"
                              className="object-cover"
                            />
                          </div>
                          <p className="mt-3 text-sm text-ink">{r.titre}</p>
                          {r.legende ? (
                            <p className="mt-1 text-xs leading-snug text-steel">{r.legende}</p>
                          ) : null}
                        </>
                      ) : (
                        <>
                          <PhotoManquante description={r.aFournir ?? r.titre} ratio="3 / 4" />
                          <p className="mt-3 text-sm text-ink">{r.titre}</p>
                        </>
                      )}
                    </Reveal>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <section className="bg-ink text-white">
        <Container>
          <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <TitreSection eyebrow="Votre projet" clair>
              La prochaine installation peut être la vôtre.
            </TitreSection>
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
