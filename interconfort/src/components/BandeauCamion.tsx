"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { camionExpo } from "@/content/site";
import { Container } from "./Ui";

/**
 * Bandeau d'accueil : le camion showroom traverse la page au défilement.
 * La position suit le scroll plutôt qu'une durée fixe — le visiteur
 * pilote le mouvement, ce qui évite l'effet gadget.
 */
export default function BandeauCamion() {
  const ref = useRef<HTMLDivElement>(null);
  const [avancee, setAvancee] = useState(0.5);
  /** Position gelée pendant le survol, pour qu'on puisse viser le camion. */
  const gel = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const calculer = () => {
      // Mouvement réduit : le camion reste au milieu de la voie.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setAvancee(0.5);
        return;
      }
      const el = ref.current;
      if (!el) return;
      if (gel.current !== null) return;
      const r = el.getBoundingClientRect();
      const total = window.innerHeight + r.height;
      const p = (window.innerHeight - r.top) / total;
      setAvancee(Math.min(Math.max(p, 0), 1));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calculer);
    };
    raf = requestAnimationFrame(calculer);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="overflow-hidden border-y border-ink/10 bg-paper-2 py-14 sm:py-16"
      aria-labelledby="titre-camion"
    >
      {/* Voie du camion */}
      <div className="relative mb-10 h-[58px]">
        <Link
          href="/contact?objet=camion-showroom"
          onMouseEnter={() => {
            gel.current = avancee;
          }}
          onMouseLeave={() => {
            gel.current = null;
          }}
          title="Demander le passage du camion showroom"
          className="group absolute bottom-0 block w-[92px] will-change-transform"
          style={{ left: `${avancee * 118 - 12}%` }}
        >
          <Image
            src="/images/camion-showroom.webp"
            alt="Camion showroom Inter-Confort — demander un rendez-vous"
            width={100}
            height={58}
            className="h-auto w-full transition-transform duration-300 group-hover:scale-110"
          />
          <span className="eyebrow absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap !text-hatch opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Prendre rendez-vous
          </span>
        </Link>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, color-mix(in srgb, var(--color-steel) 45%, transparent) 0 10px, transparent 10px 20px)",
          }}
        />
      </div>

      <Container>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Sur rendez-vous</p>
            <h2 id="titre-camion" className="display text-[clamp(1.4rem,2.8vw,2rem)] text-ink">
              Demandez le passage de notre camion showroom
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-2">
              Nous venons chez vous avec une machine. Vous la manipulez avec vos propres produits
              et vos propres emballages, avant toute décision.
            </p>
          </div>
          <Link
            href="/contact?objet=camion-showroom"
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
