import Fil from "@/components/Fil";
import Reveal from "@/components/Reveal";
import { Bouton, Container, RuleTick, TitreSection } from "@/components/Ui";
import { societe } from "@/content/site";
import { breadcrumbLd, organizationLd } from "@/lib/jsonld";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Inter-Confort — constructeur et intégrateur à Nivelles depuis 1986",
  description:
    "Inter-Confort conçoit, intègre et suit des solutions de vente automatisée depuis 1986 à Nivelles, en Brabant wallon. Représentation et service des technologies Magex et Pharmashop.",
  path: "/inter-confort",
});

const fil = [
  { nom: "Accueil", href: "/" },
  { nom: "Inter-Confort", href: "/inter-confort" },
];

const philosophie = [
  {
    titre: "Le produit d’abord",
    texte:
      "Nous commençons par regarder ce que vous voulez vendre : format, poids, emballage, fragilité, température. L’équipement vient ensuite. C’est l’inverse d’un catalogue.",
  },
  {
    titre: "Sur mesure plutôt que standard",
    texte:
      "Chaque configuration est ajustée : agencement des plateaux, niveau de froid, moyens de paiement, habillage. Deux clients d’un même métier n’ont presque jamais la même machine.",
  },
  {
    titre: "Concepteur et intégrateur",
    texte:
      "Nous concevons nos propres appareils, comme le Fresh Food Store, et nous intégrons des technologies éprouvées lorsqu’elles répondent mieux au besoin.",
  },
  {
    titre: "Présents après l’installation",
    texte:
      "Représentation, commercialisation et service après-vente font partie du même métier. Une machine autonome n’est utile que si elle reste en service.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(fil)) }}
      />
      <Fil items={fil} />

      <section className="border-b border-ink/10">
        <Container>
          <div className="max-w-4xl py-16 sm:py-24">
            <p className="eyebrow mb-7">L’entreprise</p>
            <h1 className="display text-[clamp(2.2rem,5.6vw,4.4rem)] text-ink">
              Inter-Confort, constructeur à Nivelles depuis {societe.depuis}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
              Installée à Nivelles, en {societe.adresse.region}, Inter-Confort
              conçoit, importe, configure et installe des distributeurs
              automatiques pour les professionnels. Notre clientèle réunit
              fabricants, commerçants, artisans et opérateurs qui cherchent un
              équipement capable de porter leurs produits, pas seulement de les
              vendre.
            </p>
          </div>
        </Container>
        <RuleTick />
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <TitreSection eyebrow="Histoire">
              Une spécialité, tenue dans la durée.
            </TitreSection>
            <div className="space-y-6 text-lg leading-relaxed text-ink-2">
              <p>
                Inter-Confort exerce depuis {societe.depuis} dans le vending et
                le snacking. Cette ancienneté a une conséquence concrète : nous
                avons vu passer suffisamment de projets pour savoir rapidement
                ce qui fonctionnera et ce qui posera problème, qu’il s’agisse
                d’un emballage mal adapté ou d’un emplacement trop exposé.
              </p>
              <p>
                Notre activité couvre la représentation, la commercialisation,
                la vente et le service après-vente des appareils Inter-Confort,
                Magex et Pharmashop auprès des entreprises, commerçants,
                fabricants, opérateurs et revendeurs.
              </p>
              <p>
                Ce double statut — concepteur de nos propres machines et
                intégrateur de technologies éprouvées — nous permet de ne pas
                forcer une solution unique. Le Fresh Food Store est une
                conception Inter-Confort ; d’autres besoins trouvent une
                meilleure réponse dans les configurations Magex ou Pharmashop.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Philosophie">
            Comment nous travaillons.
          </TitreSection>
          <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-ink/15 pt-10 sm:grid-cols-2">
            {philosophie.map((p, i) => (
              <Reveal key={p.titre} delay={i * 60}>
                <div className="flex gap-5">
                  <span className="data pt-1 text-xs text-steel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-xl text-ink">{p.titre}</h3>
                    <p className="mt-3 leading-relaxed text-ink-2">{p.texte}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Vos interlocuteurs">
            Qui suit votre région.
          </TitreSection>
          <div className="mt-12 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-2">
            {societe.contacts.map((c) => (
              <div key={c.email}>
                <h3 className="display text-xl text-ink">{c.nom}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {c.zone}
                </p>
                <p className="mt-4 text-sm">
                  <a
                    href={`mailto:${c.email}`}
                    className="text-cold underline-offset-4 hover:underline"
                  >
                    {c.email}
                  </a>
                </p>
                <p className="data mt-1 text-sm text-ink-2">{c.gsm}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container>
          <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <TitreSection eyebrow="Nous rencontrer" clair>
              {societe.adresse.rue}, {societe.adresse.codePostal}{" "}
              {societe.adresse.ville}.
            </TitreSection>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Bouton href="/contact" variante="clair">
                Nous contacter
              </Bouton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
