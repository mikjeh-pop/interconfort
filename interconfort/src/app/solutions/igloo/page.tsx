import Image from "next/image";
import PageSolution from "@/components/PageSolution";
import Reveal from "@/components/Reveal";
import { Container, TitreSection } from "@/components/Ui";
import { igloo as s } from "@/content/solutions";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: s.seo.title,
  description: s.seo.description,
  path: s.href,
  image: s.photo.src,
});

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
                  <TitreSection eyebrow="Stockage">
                    Chaque format a sa place.
                  </TitreSection>
                  <p className="mt-8 max-w-xl leading-relaxed text-ink-2">
                    Spirales simples ou doubles, tapis et séparateurs cohabitent sur six plateaux
                    pour accueillir cornets, pots, boîtes, sachets ou barquettes. Une configuration
                    spécifique permet de maintenir et de distribuer les cônes glacés sans les
                    coucher.
                  </p>
                  <p className="mt-6 max-w-xl leading-relaxed text-ink-2">
                    L’ascenseur accompagne le produit jusqu’à une zone de retrait de 150 × 695 mm,
                    dimensionnée pour les emballages volumineux.
                  </p>
                </div>
                <Reveal>
                  <div className="relative aspect-[3/4] w-full bg-paper-2">
                    <Image
                      src="/images/igloo/igloo-stockage-modulable.webp"
                      alt="Intérieur de l’IGLOO : six plateaux numérotés combinant spirales, tapis et séparateurs"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-top"
                    />
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>

          <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
            <Container>
              <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
                <Reveal>
                  <div className="relative aspect-[4/5] w-full bg-paper">
                    <Image
                      src="/images/igloo/igloo-installation-exterieure.webp"
                      alt="IGLOO installé en extérieur, protégé par son toit blanc"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <div>
                  <TitreSection eyebrow="Installation">Intérieur ou extérieur.</TitreSection>
                  <p className="mt-8 max-w-xl leading-relaxed text-ink-2">
                    Le système de refroidissement et l’isolation renforcée permettent d’envisager
                    une implantation extérieure. Le toit de protection abrite la machine des
                    intempéries et porte la hauteur totale à 2 356 mm.
                  </p>
                  <ul className="mt-10 space-y-3 border-t border-ink/15 pt-8 text-sm text-ink-2">
                    <li>Vente en continu, y compris la nuit et le week-end</li>
                    <li>Vitrine éclairée par LED</li>
                    <li>Habillage personnalisable aux couleurs de l’activité</li>
                    <li>Étude préalable de l’emplacement et des raccordements</li>
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        </>
      }
    />
  );
}
