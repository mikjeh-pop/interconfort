import Link from "next/link";
import { notFound } from "next/navigation";
import Fil from "@/components/Fil";
import { Bouton, Container, RuleTick, TitreSection } from "@/components/Ui";
import { secteurParSlug, secteurs } from "@/content/secteurs";
import { breadcrumbLd } from "@/lib/jsonld";
import { meta } from "@/lib/seo";

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = secteurParSlug(slug);
  if (!s) return {};
  return meta({
    title: s.seo.title,
    description: s.seo.description,
    path: `/secteurs/${s.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = secteurParSlug(slug);
  if (!s) notFound();

  const fil = [
    { nom: "Accueil", href: "/" },
    { nom: "Secteurs", href: "/secteurs" },
    { nom: s.nom, href: `/secteurs/${s.slug}` },
  ];
  const autres = secteurs.filter((x) => x.slug !== s.slug).slice(0, 4);

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
            <p className="eyebrow mb-7">{s.nom}</p>
            <h1 className="display text-[clamp(2.1rem,5.4vw,4.2rem)] text-ink">
              {s.seo.h1}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
              {s.accroche}
            </p>
          </div>
        </Container>
        <RuleTick />
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <TitreSection eyebrow="Le contexte">
              Ce que vous perdez aujourd’hui.
            </TitreSection>
            <p className="text-lg leading-relaxed text-ink-2">{s.contexte}</p>
          </div>
        </Container>
      </section>

      <section className="bg-cold text-white">
        <RuleTick clair />
        <Container>
          <div className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <TitreSection eyebrow="Le point dur" clair>
              {s.contrainte.titre}
            </TitreSection>
            <p className="text-lg leading-relaxed text-frost">
              {s.contrainte.texte}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <TitreSection eyebrow="Produits distribués">
                Ce que la machine accepte.
              </TitreSection>
              <ul className="mt-10 flex flex-wrap gap-2">
                {s.produits.map((p) => (
                  <li
                    key={p}
                    className="border border-ink/15 bg-paper-2 px-4 py-2 text-sm text-ink-2"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <TitreSection eyebrow="À vérifier ensemble">
                Avant de configurer.
              </TitreSection>
              <ol className="mt-10 border-t border-ink/15">
                {s.aVerifier.map((v, i) => (
                  <li
                    key={v}
                    className="flex gap-5 border-b border-ink/10 py-4"
                  >
                    <span className="data text-xs text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-ink-2">
                      {v}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Solution recommandée">
            {s.solutionRecommandee.nom}
          </TitreSection>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
            {s.solutionRecommandee.pourquoi}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Bouton href={s.solutionRecommandee.href}>
              Voir la fiche technique
            </Bouton>
            <Bouton href="/contact" variante="ligne">
              Demander une étude
            </Bouton>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-16 sm:py-20">
        <Container>
          <p className="eyebrow mb-8">Autres métiers</p>
          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {autres.map((a) => (
              <li key={a.slug} className="bg-paper">
                <Link
                  href={`/secteurs/${a.slug}`}
                  className="group block p-6 transition-colors hover:bg-paper-2"
                >
                  <span className="display text-lg text-ink group-hover:text-cold">
                    {a.titreCourt}
                  </span>
                  <span className="mt-2 block text-xs leading-snug text-steel">
                    {a.accroche}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
