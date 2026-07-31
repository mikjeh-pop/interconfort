"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Image as Img } from "@/content/solutions";

export default function Galerie({ images }: { images: Img[] }) {
  const [actif, setActif] = useState<number | null>(null);

  const fermer = useCallback(() => setActif(null), []);
  const deplacer = useCallback(
    (pas: number) =>
      setActif((i) =>
        i === null ? null : (i + pas + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (actif === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") fermer();
      if (e.key === "ArrowRight") deplacer(1);
      if (e.key === "ArrowLeft") deplacer(-1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [actif, fermer, deplacer]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setActif(i)}
              className="group block w-full text-left"
            >
              <span className="relative block aspect-[4/5] overflow-hidden bg-paper-2">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </span>
              {img.legende ? (
                <span className="mt-2 block text-xs leading-snug text-steel">
                  {img.legende}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>

      {actif !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[actif].alt}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/96 p-4 sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="data text-xs text-frost/70">
              {String(actif + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={fermer}
              autoFocus
              className="border border-white/30 px-4 py-2 text-sm text-white hover:bg-white hover:text-ink"
            >
              Fermer
            </button>
          </div>

          <div className="relative min-h-0 flex-1 py-6">
            <Image
              src={images[actif].src}
              alt={images[actif].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => deplacer(-1)}
              className="border border-white/30 px-4 py-2 text-sm text-white hover:bg-white hover:text-ink"
            >
              ← Précédent
            </button>
            <p className="max-w-md text-center text-xs text-frost/80">
              {images[actif].legende}
            </p>
            <button
              type="button"
              onClick={() => deplacer(1)}
              className="border border-white/30 px-4 py-2 text-sm text-white hover:bg-white hover:text-ink"
            >
              Suivant →
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
