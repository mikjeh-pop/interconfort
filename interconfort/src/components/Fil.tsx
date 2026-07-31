import Link from "next/link";
import { Container } from "./Ui";

export default function Fil({
  items,
}: {
  items: { nom: string; href: string }[];
}) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="border-b border-ink/10 bg-paper-2/60"
    >
      <Container>
        <ol className="data flex flex-wrap items-center gap-2 py-3 text-[0.7rem] text-steel">
          {items.map((it, i) => (
            <li key={it.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-ink-2">
                  {it.nom}
                </span>
              ) : (
                <Link
                  href={it.href}
                  className="underline-offset-4 hover:underline"
                >
                  {it.nom}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
