"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Décompte animé au défilement. La valeur finale est toujours rendue
 * telle quelle si l'utilisateur préfère les animations réduites,
 * afin que le chiffre reste lisible et exact.
 */
export default function Compteur({
  valeur,
  prefixe = "",
  suffixe = "",
  duree = 1400,
}: {
  valeur: number;
  prefixe?: string;
  suffixe?: string;
  duree?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [affiche, setAffiche] = useState(valeur);
  const [demarre, setDemarre] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDemarre(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!demarre) return;
    let raf = 0;
    const debut = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - debut) / duree, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setAffiche(Math.round(valeur * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [demarre, valeur, duree]);

  return (
    <span ref={ref}>
      {prefixe}
      {affiche.toLocaleString("fr-BE")}
      {suffixe}
    </span>
  );
}
