import Image from "next/image";
import PageSolution from "@/components/PageSolution";
import Reveal from "@/components/Reveal";
import { Container, TitreSection } from "@/components/Ui";
import { multi610 as s } from "@/content/solutions";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: s.seo.title,
  description: s.seo.description,
  path: s.href,
  image: s.photo.src,
});

const systemes = [
  { nom: "Système poussoir", usage: "Emballages rigides et produits stables." },
  { nom: "Système à tapis", usage: "Barquettes et formats plats." },
  { nom: "Spirales simples ou doubles", usage: "Sachets, boîtes et produits légers." },
  { nom: "Séparateurs modulables", usage: "Espacement réglable selon la gamme." },
];

const options = [
  "Lecteur de billets",
  "Monnayeur",
  "Routeur 4G intégré",
  "Lecteur code-barres / QR code",
  "Retrait de commande prépayée",
  "Option froid 0 à 4 °C",
  "Module secondaire, capacité doublée",
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
                  <TitreSection eyebrow="Stockage et livraison">
                    Le produit est accompagné, pas lâché.
                  </TitreSection>
                  <p className="mt-8 max-w-xl leading-relaxed text-ink-2">
                    Le plateau se positionne au niveau de la sélection, prend en charge l’article,
                    puis redescend vers la zone de retrait. C’est ce qui rend possible la
                    distribution de produits que la chute libre abîmerait.
                  </p>
                  <dl className="mt-10 border-t border-ink/15">
                    {systemes.map((sy) => (
                      <div key={sy.nom} className="grid gap-1 border-b border-ink/10 py-4 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                        <dt className="data text-sm text-ink">{sy.nom}</dt>
                        <dd className="text-sm leading-relaxed text-ink-2">{sy.usage}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="data mt-8 text-sm text-ink">
                    Surface utile du plateau : 719,6 × 193,3 mm
                  </p>
                </div>
                <Reveal>
                  <div className="grid gap-4">
                    <div className="relative aspect-[4/3] w-full bg-paper-2">
                      <Image
                        src="/images/multi-610/multi-610-ascenseur-vue-dessus.webp"
                        alt="Vue de dessus du plateau de livraison et du mécanisme d’ascenseur du MULTI 610"
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] w-full bg-paper-2">
                      <Image
                        src="/images/multi-610/multi-610-principe-levage.webp"
                        alt="Schéma du principe de montée contrôlée de l’ascenseur du MULTI 610"
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>

          <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
            <Container>
              <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
                <Reveal>
                  <div className="relative aspect-[4/3] w-full bg-paper">
                    <Image
                      src="/images/multi-610/multi-610-dimensions.webp"
                      alt="Schémas dimensionnels de face et de profil du MULTI 610"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-contain"
                    />
                  </div>
                </Reveal>
                <div>
                  <TitreSection eyebrow="Configurations">Simple ou double.</TitreSection>
                  <p className="mt-8 max-w-xl leading-relaxed text-ink-2">
                    Le MULTI 610 fonctionne seul ou avec un module secondaire piloté depuis la même
                    console. Le client conserve un seul écran et un seul paiement, tout en accédant à
                    environ deux fois plus de références.
                  </p>
                  <p className="mt-6 max-w-xl leading-relaxed text-ink-2">
                    Une implantation extérieure ou semi-extérieure suppose une protection étudiée
                    selon le lieu : le MULTI 610 est conçu pour l’intérieur.
                  </p>
                  <p className="eyebrow mt-12 mb-4">Options disponibles</p>
                  <ul className="flex flex-wrap gap-2">
                    {options.map((o) => (
                      <li key={o} className="border border-ink/15 bg-paper px-3 py-2 text-sm text-ink-2">
                        {o}
                      </li>
                    ))}
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
