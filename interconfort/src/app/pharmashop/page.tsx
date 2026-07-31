import Image from "next/image";
import FaqBloc from "@/components/FaqBloc";
import Fil from "@/components/Fil";
import Reveal from "@/components/Reveal";
import SpecTable from "@/components/SpecTable";
import { Bouton, Container, RuleTick, TitreSection } from "@/components/Ui";
import { photosPharmashop } from "@/content/medias-distants";
import { pharmashop as p } from "@/content/pharmashop";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: p.seo.title,
  description: p.seo.description,
  path: "/pharmashop",
});

const fil = [
  { nom: "Accueil", href: "/" },
  { nom: "Solutions", href: "/solutions" },
  { nom: "Pharmashop", href: "/pharmashop" },
];

const parcours = [
  {
    etape: "Préparation",
    texte:
      "Le pharmacien prépare la commande ou la réserve depuis le robot de l’officine.",
  },
  {
    etape: "Notification",
    texte:
      "Le patient reçoit un code de retrait, un QR code ou est identifié par sa carte.",
  },
  {
    etape: "Identification",
    texte:
      "À la console, l’identification déclenche la mise à disposition du produit réservé.",
  },
  {
    etape: "Contrôle",
    texte:
      "La caméra interne permet de vérifier l’article avant l’ouverture de la porte.",
  },
  {
    etape: "Délivrance",
    texte:
      "La porte s’ouvre automatiquement, sous le contrôle du pharmacien. Une posologie peut être imprimée.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(p.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(fil)) }}
      />
      <Fil items={fil} />

      <section className="border-b border-ink/10">
        <Container>
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-7">Pharmacie et parapharmacie</p>
              <h1 className="display text-[clamp(2.1rem,5.4vw,4.2rem)] text-ink">
                {p.seo.h1}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2">
                {p.accroche}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Bouton href="/contact">Demander une étude</Bouton>
              </div>
            </div>
            <Reveal>
              <div className="relative aspect-[3/4] w-full bg-paper-2">
                <Image
                  src={photosPharmashop[0].src}
                  unoptimized
                  alt={photosPharmashop[0].alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
        <RuleTick />
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <TitreSection eyebrow="Présentation">
              Un service continu, sous contrôle.
            </TitreSection>
            <p className="text-lg leading-relaxed text-ink-2">{p.intro}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Fonctionnement">
            Le parcours de délivrance.
          </TitreSection>
          <ol className="mt-12 border-t border-ink/15">
            {parcours.map((e, i) => (
              <li
                key={e.etape}
                className="grid gap-3 border-b border-ink/10 py-6 sm:grid-cols-[3rem_1fr_1.6fr] sm:gap-8"
              >
                <span className="data text-sm text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-lg text-ink">{e.etape}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{e.texte}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Caractéristiques">
            Ce que la console permet.
          </TitreSection>
          <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {p.atouts.map((a, i) => (
              <Reveal key={a.titre} delay={i * 50}>
                <h3 className="display text-lg text-ink">{a.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {a.texte}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cold text-white">
        <RuleTick clair />
        <Container>
          <div className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20">
            <div>
              <TitreSection eyebrow="Console de façade" clair>
                Night &amp; Safe
              </TitreSection>
              <div className="mt-10">
                <SpecTable specs={p.specsConsole} clair />
              </div>
            </div>
            <div>
              <TitreSection eyebrow="Distributeur de parapharmacie" clair>
                Pharma 24H « Store »
              </TitreSection>
              <div className="mt-10">
                <SpecTable specs={p.specsStore} clair />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-frost/70">
                Deux réponses différentes : la console sert au retrait et au
                guichet de garde, le modèle Store à la vente directe de
                parapharmacie.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-20 sm:py-24">
        <Container>
          <TitreSection eyebrow="Références installées">
            Réalisations Pharmashop.
          </TitreSection>
          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {photosPharmashop.map((ph, i) => (
              <li key={ph.src}>
                <Reveal delay={i * 50}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-2">
                    <Image
                      src={ph.src}
                      unoptimized
                      alt={ph.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  </div>
                  {ph.legende ? (
                    <p className="mt-2 text-xs leading-snug text-steel">
                      {ph.legende}
                    </p>
                  ) : null}
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-2 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
            <TitreSection eyebrow="Questions fréquentes">
              Avant de démarrer.
            </TitreSection>
            <FaqBloc faq={p.faq} />
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container>
          <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <TitreSection eyebrow="Étude de projet" clair>
              Étudions l’intégration en façade de votre officine.
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
