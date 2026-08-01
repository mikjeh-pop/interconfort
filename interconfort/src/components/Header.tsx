"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, societe, type NavItem } from "@/content/site";
import { logo } from "@/content/medias-distants";
import { Container } from "./Ui";

export default function Header() {
  const [ouvert, setOuvert] = useState<string | null>(null);
  const [mobileOuvert, setMobileOuvert] = useState(false);
  const [defile, setDefile] = useState(false);
  const pathname = usePathname();

  const minuterie = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Annule une fermeture programmée : le curseur est revenu à temps. */
  const annulerFermeture = () => {
    if (minuterie.current) {
      clearTimeout(minuterie.current);
      minuterie.current = null;
    }
  };

  /**
   * Fermeture différée. Sans ce délai, le panneau disparaissait dès que le
   * curseur quittait le bouton, avant même de l'avoir atteint.
   */
  const fermerPlusTard = () => {
    annulerFermeture();
    minuterie.current = setTimeout(() => setOuvert(null), 320);
  };

  const ouvrir = (href: string) => {
    annulerFermeture();
    setOuvert(href);
  };

  const fermerTout = () => {
    annulerFermeture();
    setOuvert(null);
    setMobileOuvert(false);
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOuvert(null);
        setMobileOuvert(false);
      }
    }
    document.addEventListener("keydown", onKey);
    const onScroll = () => setDefile(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      if (minuterie.current) clearTimeout(minuterie.current);
    };
  }, []);

  const avecMenu = navigation.filter((n) => n.enfants?.length);
  const simples = navigation.filter((n) => !n.enfants?.length);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Aller au contenu
      </a>
      <Container>
        <div
          className={`flex items-center justify-between gap-6 transition-[padding] duration-300 ${
            defile ? "py-2.5" : "py-4"
          }`}
        >
          <Link
            href="/"
            onClick={fermerTout}
            className="flex items-center gap-4 leading-none"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              priority
              unoptimized
              className={`w-auto transition-[height] duration-300 ${defile ? "h-9 sm:h-10" : "h-11 sm:h-12"}`}
            />
            <span className="eyebrow hidden border-l border-ink/15 pl-4 text-[0.58rem] leading-tight whitespace-nowrap 2xl:block">
              Nivelles
              <br />
              depuis {societe.depuis}
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              {avecMenu.map((n) => (
                <li
                  key={n.href}
                  onMouseEnter={() => ouvrir(n.href)}
                  onMouseLeave={fermerPlusTard}
                >
                  <button
                    type="button"
                    aria-expanded={ouvert === n.href}
                    onClick={() =>
                      ouvert === n.href ? fermerTout() : ouvrir(n.href)
                    }
                    className="flex items-center gap-2 whitespace-nowrap py-2 text-sm text-ink-2 transition-colors hover:text-ink"
                  >
                    {n.libelle}
                    <span
                      aria-hidden="true"
                      className="data text-[0.6rem] text-steel"
                    >
                      ▾
                    </span>
                  </button>

                  {ouvert === n.href ? (
                    <MegaMenu
                      item={n}
                      onClose={fermerTout}
                      onEnter={annulerFermeture}
                      onLeave={fermerPlusTard}
                    />
                  ) : null}
                </li>
              ))}

              {simples.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={fermerTout}
                    aria-current={pathname === n.href ? "page" : undefined}
                    className={`whitespace-nowrap py-2 text-sm transition-colors hover:text-ink ${
                      pathname === n.href ? "text-ink" : "text-ink-2"
                    }`}
                  >
                    {n.libelle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${societe.telephone.replace(/\s/g, "")}`}
              className="data hidden whitespace-nowrap text-sm text-ink-2 hover:text-ink 2xl:block"
            >
              {societe.telephoneAffichage}
            </a>
            <Link
              href="/contact"
              onClick={fermerTout}
              className="whitespace-nowrap bg-ink px-5 py-3 text-sm text-white transition-colors hover:bg-cold"
            >
              Mon projet
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
        <div
          id="menu-mobile"
          className="max-h-[75vh] overflow-y-auto border-t border-ink/10 bg-paper lg:hidden"
        >
          <Container>
            <nav aria-label="Navigation mobile" className="py-4">
              {avecMenu.map((n) => (
                <div key={n.href} className="mb-5">
                  <p className="eyebrow py-3">{n.libelle}</p>
                  <ul>
                    {n.enfants?.map((e) => (
                      <li key={e.href}>
                        <Link
                          href={e.href}
                          onClick={fermerTout}
                          className="block border-b border-ink/8 py-3 text-sm text-ink"
                        >
                          {e.libelle}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href={n.href}
                        onClick={fermerTout}
                        className="block border-b border-ink/8 py-3 text-sm text-cold"
                      >
                        Tout voir
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
              <ul>
                {simples.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      onClick={fermerTout}
                      className="block border-b border-ink/8 py-3 text-ink"
                    >
                      {n.libelle}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={fermerTout}
                className="mt-5 block bg-ink px-5 py-4 text-center text-sm text-white"
              >
                Présenter mon projet
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function MegaMenu({
  item,
  onClose,
  onEnter,
  onLeave,
}: {
  item: NavItem;
  onClose: () => void;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      /* pt-2 : pont invisible entre le bouton et le panneau, pour que le
         curseur puisse descendre sans traverser une zone morte. */
      className="absolute inset-x-0 top-full -mt-2 border-y border-ink/10 bg-paper pt-2 shadow-[0_24px_48px_-32px_rgba(14,19,23,0.4)]">
      <Container>
        <div className="grid gap-x-10 gap-y-1 py-8 md:grid-cols-3 lg:grid-cols-4">
          {item.enfants?.map((e, i) => (
            <Link
              key={e.href}
              href={e.href}
              onClick={onClose}
              className="group flex gap-4 border-b border-ink/8 py-3 transition-colors hover:bg-paper-2"
            >
              <span className="data pt-1 text-[0.68rem] text-steel">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="display block text-base text-ink group-hover:text-cold">
                  {e.libelle}
                </span>
                <span className="mt-1 block text-xs leading-snug text-steel">
                  {e.description}
                </span>
              </span>
            </Link>
          ))}
          <Link
            href={item.href}
            onClick={onClose}
            className="flex items-center gap-3 py-3 text-sm text-cold underline-offset-4 hover:underline"
          >
            Tout voir
            <span aria-hidden="true" className="data text-xs">
              →
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
