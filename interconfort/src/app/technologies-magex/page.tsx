import Fil from "@/components/Fil";
import PhotoManquante from "@/components/PhotoManquante";
import Reveal from "@/components/Reveal";
import SpecTable from "@/components/SpecTable";
import { Bouton, Container, RuleTick, TitreSection } from "@/components/Ui";
import { magex } from "@/content/magex";
import { breadcrumbLd } from "@/lib/jsonld";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: magex.seo.title,
  description: magex.seo.description,
  path: "/technologies-magex",
});

const fil = [
  { nom: "Accueil", href: "/" },
  { nom: "Solutions", href: "/solutions" },
  { nom: "Technologies Magex", href: "/technologies-magex" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(fil)) }} />
      <Fil items={fil} />

      <section className="border-b border-ink/10">
        <Container>
          <div className="max-w-4xl py-16 sm:py-24">
            <p className="eyebrow mb-7">Héritage technique</p>
            <h1 className="display text-[clamp(2.2rem,5.6vw,4.4rem)] text-ink">{magex.seo.h1}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">{magex.intro}</p>
          </div>
        </Container>
        <RuleTick />
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Principes">Ce qui distingue ces machines.</TitreSection>
          <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {magex.principes.map((p, i) => (
              <Reveal key={p.titre} delay={i * 60}>
                <div className="flex gap-5">
                  <span className="data pt-1 text-xs text-steel">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display text-lg text-ink">{p.titre}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.texte}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Modèles">Configurations historiques.</TitreSection>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {magex.modeles.map((m, i) => (
              <Reveal key={m.nom} delay={i * 70}>
                <article className="flex h-full flex-col border border-ink/12 bg-paper p-6 sm:p-8">
                  <PhotoManquante description={`Photographie du modèle ${m.nom}`} ratio="16 / 10" />
                  <h3 className="display mt-6 text-2xl text-ink">{m.nom}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">{m.texte}</p>
                  <div className="mt-6">
                    <SpecTable specs={m.specs} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Secteurs">Où ces technologies sont installées.</TitreSection>
          <dl className="mt-12 border-t border-ink/15">
            {magex.secteurs.map((s) => (
              <div key={s.nom} className="grid gap-1 border-b border-ink/10 py-5 sm:grid-cols-[1fr_1.6fr] sm:gap-8">
                <dt className="display text-lg text-ink">{s.nom}</dt>
                <dd className="text-sm leading-relaxed text-ink-2">{s.texte}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container>
          <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <TitreSection eyebrow="Projet sur mesure" clair>
              Une contrainte inhabituelle ? C’est souvent là que ces technologies servent.
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
