import Fil from "@/components/Fil";
import FormulaireProjet from "@/components/FormulaireProjet";
import { Container, RuleTick, TitreSection } from "@/components/Ui";
import { societe } from "@/content/site";
import { breadcrumbLd } from "@/lib/jsonld";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Contact et étude de projet",
  description:
    "Décrivez votre projet de vente automatisée : produits, emballages, température, capacité et lieu d’installation. Inter-Confort étudie la configuration adaptée.",
  path: "/contact",
});

const fil = [
  { nom: "Accueil", href: "/" },
  { nom: "Contact", href: "/contact" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(fil)) }} />
      <Fil items={fil} />

      <section className="border-b border-ink/10">
        <Container>
          <div className="max-w-4xl py-16 sm:py-20">
            <p className="eyebrow mb-7">Étude de projet</p>
            <h1 className="display text-[clamp(2.2rem,5.6vw,4.4rem)] text-ink">
              Présentez-nous votre projet
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
              Plus votre description est précise, plus notre réponse le sera. Les formats
              d’emballage, la température exigée et le lieu d’installation sont les trois éléments
              qui déterminent la configuration.
            </p>
          </div>
        </Container>
        <RuleTick />
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
            <FormulaireProjet />

            <aside className="lg:border-l lg:border-ink/12 lg:pl-12">
              <TitreSection eyebrow="Nous joindre">Directement.</TitreSection>
              <address className="mt-8 space-y-6 text-sm not-italic leading-relaxed text-ink-2">
                <p>
                  {societe.raisonSociale}
                  <br />
                  {societe.adresse.rue}
                  <br />
                  {societe.adresse.codePostal} {societe.adresse.ville}
                  <br />
                  {societe.adresse.pays}
                </p>
                <p>
                  <span className="eyebrow block">Téléphone</span>
                  <a
                    href={`tel:${societe.telephone.replace(/\s/g, "")}`}
                    className="data mt-2 block text-base text-ink hover:text-cold"
                  >
                    {societe.telephoneAffichage}
                  </a>
                </p>
                <p>
                  <span className="eyebrow block">E-mail</span>
                  <a
                    href={`mailto:${societe.email}`}
                    className="mt-2 block text-base text-cold underline-offset-4 hover:underline"
                  >
                    {societe.email}
                  </a>
                </p>
              </address>

              <div className="mt-10 border-t border-ink/12 pt-8">
                <p className="eyebrow mb-4">Vos interlocuteurs</p>
                <ul className="space-y-6 text-sm">
                  {societe.contacts.map((c) => (
                    <li key={c.email}>
                      <p className="text-ink">{c.nom}</p>
                      <p className="mt-1 text-xs leading-snug text-steel">{c.zone}</p>
                      <a href={`mailto:${c.email}`} className="mt-1 block text-cold underline-offset-4 hover:underline">
                        {c.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
