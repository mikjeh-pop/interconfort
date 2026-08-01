"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Trajet Nivelles → site du client, avec le camion showroom qui le parcourt.
 * Le visuel du camion ne fait que 100 × 58 px : il reste volontairement petit.
 * Immobile si l'utilisateur demande des animations réduites.
 */
export default function TraceDeplacement() {
  const ref = useRef<HTMLDivElement>(null);
  const [trace, setTrace] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setTrace(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full pt-8">
      {/* Camion, sur la route */}
      <Link
        href="/contact?objet=camion-showroom"
        title="Demander le passage du camion showroom"
        className="absolute bottom-[18px] left-0 block w-[86px] transition-transform hover:scale-110"
        style={{
          transform: trace ? "translateX(calc(100% * 6.2))" : "translateX(0)",
          transition: "transform 2600ms cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <Image
          src="/images/camion-showroom.webp"
          alt="Camion showroom Inter-Confort — demander un rendez-vous"
          width={100}
          height={58}
          className="h-auto w-full"
        />
      </Link>

      <svg
        viewBox="0 0 640 30"
        role="img"
        aria-label="Trajet du camion showroom depuis Nivelles jusqu’au site du client"
        className="h-[30px] w-full"
      >
        <circle cx="6" cy="8" r="3.5" fill="var(--color-ink)" />
        <text x="6" y="26" className="data" fontSize="8" fill="var(--color-steel)">
          NIVELLES
        </text>

        <path
          d="M 12 8 H 610"
          fill="none"
          stroke="var(--color-steel)"
          strokeWidth="1"
          strokeDasharray="6 6"
          style={{
            clipPath: trace ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            transition: "clip-path 2600ms cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        />

        <g
          style={{
            opacity: trace ? 1 : 0,
            transition: "opacity 500ms ease 2300ms",
          }}
        >
          <path d="M 622 0 v 16 M 614 8 h 16" stroke="var(--color-hatch)" strokeWidth="1.5" />
          <text x="596" y="26" className="data" fontSize="8" fill="var(--color-ink)">
            CHEZ VOUS
          </text>
        </g>
      </svg>
    </div>
  );
}
