import Image from "next/image";
import Reveal from "./Reveal";
import { references } from "@/content/references";

/**
 * Références installées. La première occupe deux colonnes : elle porte
 * la section, les autres la complètent.
 */
export default function BlocReferences({ limite = 5 }: { limite?: number }) {
  const items = references.slice(0, limite);
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((r, i) => (
        <li key={r.slug} className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}>
          <Reveal delay={i * 70}>
            <figure className="group relative h-full overflow-hidden bg-paper-2">
              <div className={`relative w-full ${i === 0 ? "aspect-[4/3] lg:aspect-[4/5]" : "aspect-[4/3]"}`}>
                <Image
                  src={r.image.src}
                  alt={r.image.alt}
                  fill
                  sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="eyebrow !text-white/60">{r.activite}</p>
                {r.afficherNom ? (
                  <p className="display mt-2 text-xl text-white sm:text-2xl">{r.nomClient}</p>
                ) : null}
                <p className="mt-2 max-w-md text-xs leading-relaxed text-white/0 transition-colors duration-500 group-hover:text-white/80">
                  {r.contexte}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
