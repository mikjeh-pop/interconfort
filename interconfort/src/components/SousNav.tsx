"use client";
import { useEffect, useState } from "react";
import { Container } from "./Ui";

/** Navigation interne collante, avec surlignage de la section visible. */
export default function SousNav({
  sections,
}: {
  sections: { id: string; libelle: string }[];
}) {
  const [actif, setActif] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const cibles = sections
      .map((s) => document.getElementById(s.id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (!cibles.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActif(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    cibles.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-[73px] z-40 hidden border-b border-ink/10 bg-paper/95 backdrop-blur-sm lg:block">
      <Container>
        <nav aria-label="Sections de la page">
          <ul className="flex items-center gap-8 overflow-x-auto">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={actif === s.id ? "true" : undefined}
                  className={`block border-b-2 py-4 text-sm whitespace-nowrap transition-colors ${
                    actif === s.id
                      ? "border-hatch text-ink"
                      : "border-transparent text-steel hover:text-ink"
                  }`}
                >
                  {s.libelle}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}
