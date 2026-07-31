import Image from "next/image";
import PageSolution from "@/components/PageSolution";
import Reveal from "@/components/Reveal";
import { Container, TitreSection } from "@/components/Ui";
import { freshFoodStore as s } from "@/content/solutions";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: s.seo.title,
  description: s.seo.description,
  path: s.href,
  image: s.photo.src,
});

const capacites = [
  { format: "Grandes barquettes · 230 × 180 mm", capacite: "Jusqu’à 96" },
  { format: "Barquettes · 170 × 130 mm", capacite: "Jusqu’à 128 ou 160" },
  {
    format: "Petits pots et desserts · 150 × 100 mm",
    capacite: "Jusqu’à 200 à 240",
  },
  {
    format: "Très petits formats",
    capacite: "Capacité supérieure selon configuration",
  },
];

const plateaux = [
  {
    type: "Doubles tapis",
    usage: "Produits larges : grandes barquettes, plateaux traiteur, gratins.",
  },
  {
    type: "Tapis simples couplables",
    usage: "Formats standards : salades, bowls, pâtisseries individuelles.",
  },
  {
    type: "Poussoirs modulables en largeur",
    usage: "Emballages rigides : bouteilles, boîtes hermétiques, conserves.",
  },
  {
    type: "Spirales d’épaisseurs variables",
    usage: "Fromages affinés, charcuteries, viandes conditionnées.",
  },
];

export default function Page() {
  return (
    <PageSolution
      solution={s}
      sections={
        <>
          <section className="border-b border-ink/10 py-20 sm:py-24">
            <Container>
              <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
                <div>
                  <TitreSection eyebrow="Gestion du froid">
                    Trois notions à ne pas confondre.
                  </TitreSection>
                  <div className="mt-10 space-y-8 border-t border-ink/15 pt-8">
                    <div>
                      <p className="data text-xl text-ink">0 à 20 °C</p>
                      <h3 className="display mt-2 text-lg text-ink">
                        Plage de réglage
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-2">
                        La consigne se règle selon la nature des produits. Cela
                        ne signifie pas que des produits frais se conservent à
                        20 °C.
                      </p>
                    </div>
                    <div>
                      <p className="data text-xl text-ink">0 à 4 °C</p>
                      <h3 className="display mt-2 text-lg text-ink">
                        Performance standard
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-2">
                        Le groupe frigorifique à double évaporateur homogénéise
                        et stabilise le froid, y compris en extérieur et en
                        plein soleil.
                      </p>
                    </div>
                    <div>
                      <p className="data text-xl text-ink">Au-delà de 40 °C</p>
                      <h3 className="display mt-2 text-lg text-ink">
                        Expositions extrêmes
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-2">
                        Une configuration renforcée — second système ventilé,
                        sondes digitales calibrées et régulation pilotée par les
                        sondes — sécurise le maintien entre 0 et 4 °C lorsque la
                        température ambiante dépasse 40 °C.
                      </p>
                    </div>
                  </div>
                </div>
                <Reveal>
                  <div className="relative aspect-[3/4] w-full bg-paper-2">
                    <Image
                      src="/images/fresh-food-store/fresh-food-store-exterieur.webp"
                      alt="Fresh Food Store en installation extérieure, exposé au soleil, avec toit de protection"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs text-steel">
                    Installation extérieure — le toit de protection est prévu à
                    cet effet.
                  </p>
                </Reveal>
              </div>
            </Container>
          </section>

          <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
            <Container>
              <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
                <Reveal>
                  <div className="relative aspect-[3/4] w-full bg-paper">
                    <Image
                      src="/images/fresh-food-store/fresh-food-store-plateaux-modulables.webp"
                      alt="Intérieur du Fresh Food Store : plateaux numérotés, séparateurs modulables et convoyeur en partie basse"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <div>
                  <TitreSection eyebrow="Stockage">
                    Des plateaux adaptés à chaque produit.
                  </TitreSection>
                  <p className="mt-8 max-w-xl leading-relaxed text-ink-2">
                    L’unité de gestion détecte automatiquement le type de
                    plateau installé et met le stock à jour. Le remplissage se
                    fait plateau par plateau, sur des emplacements numérotés.
                  </p>
                  <dl className="mt-10 border-t border-ink/15">
                    {plateaux.map((p) => (
                      <div
                        key={p.type}
                        className="grid gap-1 border-b border-ink/10 py-4 sm:grid-cols-[1fr_1.4fr] sm:gap-8"
                      >
                        <dt className="data text-sm text-ink">{p.type}</dt>
                        <dd className="text-sm leading-relaxed text-ink-2">
                          {p.usage}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Container>
          </section>

          <section className="border-b border-ink/10 py-20 sm:py-24">
            <Container>
              <TitreSection eyebrow="Capacité">
                La capacité dépend de l’emballage, pas de la machine.
              </TitreSection>
              <p className="mt-8 max-w-2xl leading-relaxed text-ink-2">
                Les volumes ci-dessous sont indicatifs : la largeur, la
                profondeur et la hauteur des conditionnements déterminent
                l’agencement retenu. Une étude de stockage est réalisée avant
                commande.
              </p>
              <dl className="mt-10 border-t border-ink/15">
                {capacites.map((c) => (
                  <div
                    key={c.format}
                    className="grid gap-1 border-b border-ink/10 py-4 sm:grid-cols-[1.4fr_1fr] sm:gap-8"
                  >
                    <dt className="text-sm text-ink-2">{c.format}</dt>
                    <dd className="data text-sm text-ink">{c.capacite}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </section>

          <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
            <Container>
              <TitreSection eyebrow="Exploitation">
                Paiement, retrait et pilotage.
              </TitreSection>
              <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    t: "Paiement",
                    d: "Cartes de crédit et de débit, Bancontact, Payconiq, sans contact NFC, billets et monnaie. Paiements mobiles et titres-restaurant selon le terminal et le contrat monétique.",
                  },
                  {
                    t: "Retrait de commande",
                    d: "Les commandes prépayées sont retirées par code ou QR code sur l’écran, selon la configuration retenue.",
                  },
                  {
                    t: "Panier multiple",
                    d: "Jusqu’à cinq produits par commande, livrés en une seule opération dans la trappe.",
                  },
                  {
                    t: "Suivi à distance",
                    d: "Ventes, stocks et températures consultables depuis un appareil connecté, avec alertes et historiques exportables.",
                  },
                  {
                    t: "Dates de péremption",
                    d: "Gestion des dates limites et principe premier entré, premier sorti.",
                  },
                  {
                    t: "Personnalisation",
                    d: "Habillage graphique, visuels produits et contenus d’écran aux couleurs de l’exploitant.",
                  },
                ].map((f, i) => (
                  <Reveal key={f.t} delay={i * 50}>
                    <h3 className="display text-lg text-ink">{f.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">
                      {f.d}
                    </p>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        </>
      }
    />
  );
}
