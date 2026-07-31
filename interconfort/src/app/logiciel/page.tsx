import Fil from "@/components/Fil";
import Reveal from "@/components/Reveal";
import { Bouton, Container, RuleTick, TitreSection } from "@/components/Ui";
import { logiciel } from "@/content/logiciel";
import { breadcrumbLd } from "@/lib/jsonld";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: logiciel.seo.title,
  description: logiciel.seo.description,
  path: "/logiciel",
});

const fil = [
  { nom: "Accueil", href: "/" },
  { nom: "Logiciel", href: "/logiciel" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(fil)) }} />
      <Fil items={fil} />

      <section className="border-b border-ink/10">
        <Container>
          <div className="max-w-4xl py-16 sm:py-24">
            <p className="eyebrow mb-7">Pilotage à distance</p>
            <h1 className="display text-[clamp(2.2rem,5.6vw,4.4rem)] text-ink">{logiciel.seo.h1}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">{logiciel.intro}</p>
          </div>
        </Container>
        <RuleTick />
      </section>

      <section className="border-b border-ink/10 bg-paper-2 py-8">
        <Container>
          <p className="max-w-3xl border-l-2 border-hatch pl-5 text-sm leading-relaxed text-ink-2">
            {logiciel.avertissement}
          </p>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <div className="space-y-16">
            {logiciel.groupes.map((g, gi) => (
              <Reveal key={g.titre} delay={gi * 60}>
                <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
                  <TitreSection eyebrow={String(gi + 1).padStart(2, "0")}>{g.titre}</TitreSection>
                  <dl className="border-t border-ink/15">
                    {g.fonctions.map((f) => (
                      <div key={f.nom} className="grid gap-1 border-b border-ink/10 py-4 sm:grid-cols-[1fr_1.5fr] sm:gap-8">
                        <dt className="data text-sm text-ink">{f.nom}</dt>
                        <dd className="text-sm leading-relaxed text-ink-2">{f.texte}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Maquette d’interface volontairement sans données chiffrées :
          aucune statistique ne doit être présentée comme provenant d’un parc réel. */}
      <section className="bg-cold text-white">
        <RuleTick clair />
        <Container>
          <div className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <TitreSection eyebrow="Interface" clair>
                Une vue par machine, une vue par parc.
              </TitreSection>
              <p className="mt-8 max-w-lg leading-relaxed text-frost">
                L’interface web regroupe les machines d’un même exploitant. Chaque appareil expose
                son état, son stock, ses ventes et sa température. Les alertes remontent par
                notification, et les historiques peuvent être exportés.
              </p>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-frost/70">
                La représentation ci-contre est un schéma d’organisation de l’interface. Elle ne
                comporte volontairement aucune donnée : les captures réelles seront fournies par
                Inter-Confort.
              </p>
            </div>

            <div className="border border-white/20 bg-cold-2/60 p-5 sm:p-7">
              <p className="eyebrow !text-frost/70">Organisation de l’interface</p>
              <ul className="mt-6 space-y-px">
                {[
                  { zone: "Parc", contenu: "Liste des machines, état de connexion" },
                  { zone: "Machine", contenu: "Stock par référence, dernières ventes" },
                  { zone: "Froid", contenu: "Relevés de température, historique, alertes" },
                  { zone: "Catalogue", contenu: "Références, prix, images, descriptions" },
                  { zone: "Emplacements", contenu: "Affectation des produits aux sélections" },
                  { zone: "Retraits", contenu: "Codes de réservation et validations" },
                ].map((r) => (
                  <li
                    key={r.zone}
                    className="grid grid-cols-[7rem_1fr] gap-4 border-b border-white/10 py-3 last:border-b-0"
                  >
                    <span className="data text-xs text-frost/70">{r.zone}</span>
                    <span className="text-sm text-white">{r.contenu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container>
          <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <TitreSection eyebrow="Périmètre" clair>
              Le niveau de pilotage se définit avec la machine.
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
