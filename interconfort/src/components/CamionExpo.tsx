import Link from "next/link";
import { camionExpo } from "@/content/site";
import TraceDeplacement from "./TraceDeplacement";
import { Container } from "./Ui";

/** Invitation au déplacement du camion-expo, reprise sur chaque fiche solution. */
export default function CamionExpo() {
  return (
    <section className="border-b border-ink/10 bg-paper-2 py-14 sm:py-16">
      <Container>
        <div className="flex flex-col gap-8 border-l-2 border-hatch pl-6 sm:pl-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Avant de décider</p>
            <h2 className="display text-[clamp(1.5rem,3vw,2.2rem)] text-ink">
              {camionExpo.titre}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">{camionExpo.texte}</p>
            <div className="mt-8 max-w-2xl">
              <TraceDeplacement />
            </div>
          </div>
          <Link
            href="/contact?objet=camion-expo"
            className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap border border-ink/25 px-7 py-4 text-sm text-ink transition-colors hover:bg-ink hover:text-white"
          >
            {camionExpo.bouton}
            <span aria-hidden="true" className="data text-xs">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
