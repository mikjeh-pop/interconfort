"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, societe } from "@/content/site";
import { Container } from "./Ui";

export default function Header() {
  const [megaOuvert, setMegaOuvert] = useState(false);
  const [mobileOuvert, setMobileOuvert] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLLIElement>(null);

  const fermerTout = () => {
    setMegaOuvert(false);
    setMobileOuvert(false);
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOuvert(false);
        setMobileOuvert(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const solutions = navigation[0];
  const autres = navigation.slice(1);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Aller au contenu
      </a>
      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          <Link href="/" className="group block leading-none">
            <span className="display block text-[1.35rem] tracking-[-0.03em] text-ink">
              INTER-CONFORT
            </span>
            <span className="eyebrow mt-1 block text-[0.6rem]">
              Nivelles · depuis {societe.depuis}
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              <li
                ref={megaRef}
                onMouseEnter={() => setMegaOuvert(true)}
                onMouseLeave={() => setMegaOuvert(false)}
              >
                <button
                  type="button"
                  aria-expanded={megaOuvert}
                  onClick={() => setMegaOuvert((v) => !v)}
                  className="flex items-center gap-2 py-2 text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  {solutions.libelle}
                  <span aria-hidden="true" className="data text-[0.6rem] text-steel">
                    ▾
                  </span>
                </button>

                {megaOuvert ? (
                  <div className="absolute inset-x-0 top-full border-y border-ink/10 bg-paper shadow-[0_24px_48px_-32px_rgba(14,19,23,0.4)]">
                    <Container>
                      <div className="grid gap-x-10 gap-y-1 py-8 md:grid-cols-3">
                        {solutions.enfants?.map((e, i) => (
                          <Link
                            key={e.href}
                            href={e.href}
                            onClick={fermerTout}
                            className="group flex gap-5 border-b border-ink/8 py-4 transition-colors hover:bg-paper-2"
                          >
                            <span className="data pt-1 text-[0.7rem] text-steel">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>
                              <span className="display block text-lg text-ink group-hover:text-cold">
                                {e.libelle}
                              </span>
                              <span className="mt-1 block max-w-xs text-sm leading-snug text-steel">
                                {e.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/solutions"
                          onClick={fermerTout}
                          className="flex items-center gap-3 py-4 text-sm text-cold underline-offset-4 hover:underline"
                        >
                          Comparer toutes les solutions
                          <span aria-hidden="true" className="data text-xs">
                            →
                          </span>
                        </Link>
                      </div>
                    </Container>
                  </div>
                ) : null}
              </li>

              {autres.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={fermerTout}
                    aria-current={pathname === n.href ? "page" : undefined}
                    className={`py-2 text-sm transition-colors hover:text-ink ${
                      pathname === n.href ? "text-ink" : "text-ink-2"
                    }`}
                  >
                    {n.libelle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a href={`tel:${societe.telephone.replace(/\s/g, "")}`} className="data text-sm text-ink-2 hover:text-ink">
              {societe.telephoneAffichage}
            </a>
            <Link href="/contact" className="bg-ink px-5 py-3 text-sm text-white transition-colors hover:bg-cold">
              Présenter mon projet
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={mobileOuvert}
            aria-controls="menu-mobile"
            onClick={() => setMobileOuvert((v) => !v)}
            className="border border-ink/20 px-4 py-2 text-sm lg:hidden"
          >
            {mobileOuvert ? "Fermer" : "Menu"}
          </button>
        </div>
      </Container>

      {mobileOuvert ? (
        <div id="menu-mobile" className="border-t border-ink/10 bg-paper lg:hidden">
          <Container>
            <nav aria-label="Navigation mobile" className="py-4">
              <p className="eyebrow py-3">Solutions</p>
              <ul className="mb-4">
                {solutions.enfants?.map((e) => (
                  <li key={e.href}>
                    <Link href={e.href} onClick={fermerTout} className="block border-b border-ink/8 py-3 text-ink">
                      {e.libelle}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/solutions" onClick={fermerTout} className="block border-b border-ink/8 py-3 text-cold">
                    Comparer toutes les solutions
                  </Link>
                </li>
              </ul>
              <ul>
                {autres.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} onClick={fermerTout} className="block border-b border-ink/8 py-3 text-ink">
                      {n.libelle}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/contact" onClick={fermerTout} className="mt-5 block bg-ink px-5 py-4 text-center text-sm text-white">
                Présenter mon projet
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
