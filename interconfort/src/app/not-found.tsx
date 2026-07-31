import Link from "next/link";
import { Container } from "@/components/Ui";
import { navigation } from "@/content/site";

export default function NotFound() {
  return (
    <Container>
      <div className="max-w-2xl py-28 sm:py-40">
        <p className="eyebrow mb-6">Erreur 404</p>
        <h1 className="display text-[clamp(2rem,6vw,4rem)] text-ink">
          Cette page n&apos;existe pas.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">
          Le lien est peut-être ancien, ou l&apos;adresse comporte une erreur.
          Voici les pages principales du site.
        </p>
        <ul className="mt-10 border-t border-ink/15">
          {[{ libelle: "Accueil", href: "/" }, ...navigation].map((n) => (
            <li key={n.href} className="border-b border-ink/10">
              <Link
                href={n.href}
                className="flex items-center justify-between py-4 text-ink hover:text-cold"
              >
                {n.libelle}
                <span aria-hidden="true" className="data text-xs text-steel">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
