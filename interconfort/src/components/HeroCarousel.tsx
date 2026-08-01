"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Reference } from "@/content/references";

/**
 * Fondu enchaîné lent entre plusieurs installations réelles.
 * S'immobilise sur la première image si l'utilisateur préfère
 * les animations réduites.
 */
export default function HeroCarousel({ items }: { items: Reference[] }) {
  const [actif, setActif] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActif((i) => (i + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <>
      <div aria-hidden="true" className="absolute inset-0">
        {items.map((r, i) => (
          <div
            key={r.slug}
            className="absolute inset-0 transition-opacity duration-[1600ms] ease-in-out"
            style={{ opacity: i === actif ? 1 : 0 }}
          >
            <Image
              src={r.image.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover hero-zoom ${i === actif ? "hero-zoom--actif" : ""}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/35" />
      </div>

      {/* Indicateur discret */}
      <div className="pointer-events-none absolute bottom-8 right-5 z-10 hidden items-center gap-2 sm:right-8 sm:flex lg:right-12">
        {items.map((r, i) => (
          <span
            key={r.slug}
            className={`h-px transition-all duration-700 ${
              i === actif ? "w-10 bg-white" : "w-5 bg-white/35"
            }`}
          />
        ))}
      </div>
    </>
  );
}
