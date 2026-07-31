import Link from "next/link";
import Fil from "@/components/Fil";
import Reveal from "@/components/Reveal";
import { Bouton, Container, RuleTick, TitreSection } from "@/components/Ui";
import { secteurs } from "@/content/secteurs";
import { breadcrumbLd } from "@/lib/jsonld";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Secteurs d’activité — solutions par métier",
  description:
    "Traiteurs, boulangers, chocolatiers, producteurs, pharmaciens, glaciers, entreprises : la solution de vente automatisée adaptée à chaque métier et à ses contraintes.",
  path: "/secteurs",
});

const fil = [
  { nom: "Accueil", href: "/" },
  { nom: "Secteurs", href: "/secteurs" },
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
            <p className="eyebrow mb-7">Par métier</p>
            <h1 className="display text-[clamp(2.2rem,5.6vw,4.4rem)] text-ink">
              Chaque métier a sa contrainte
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
              Un chocolatier ne redoute pas la même chose qu’un pharmacien ou
              qu’un glacier. La machine adaptée découle de cette contrainte-là,
              pas d’un catalogue.
            </p>
          </div>
        </Container>
        <RuleTick />
      </section>

      <section className="border-b border-ink/10">
        <Container>
          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {secteurs.map((s, i) => (
              <li key={s.slug} className="bg-paper">
                <Reveal delay={i * 40}>
                  <Link
                    href={`/secteurs/${s.slug}`}
                    className="group flex h-full flex-col p-8 transition-colors hover:bg-paper-2"
                  >
                    <span className="data text-xs text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display mt-4 text-2xl text-ink group-hover:text-cold">
                      {s.nom}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-2">
                      {s.accroche}
                    </p>
                    <span className="mt-6 text-sm text-cold underline-offset-4 group-hover:underline">
                      Voir la page métier →
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container>
          <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <TitreSection eyebrow="Votre métier n’est pas listé ?" clair>
              Décrivez vos produits, la logique reste la même.
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
