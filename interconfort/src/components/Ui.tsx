import Link from "next/link";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function TitreSection({
  eyebrow,
  children,
  clair = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  clair?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? (
        <p className={`eyebrow mb-5 ${clair ? "!text-frost" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`display text-[clamp(1.85rem,4.2vw,3.35rem)] ${
          clair ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </h2>
    </div>
  );
}

export function Bouton({
  href,
  children,
  variante = "plein",
}: {
  href: string;
  children: React.ReactNode;
  variante?: "plein" | "ligne" | "clair";
}) {
  const base =
    "inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide transition-colors duration-200";
  const styles = {
    plein: "bg-ink text-white hover:bg-cold",
    ligne:
      "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
    clair: "border border-white/35 text-white hover:bg-white hover:text-ink",
  }[variante];
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <span aria-hidden="true" className="data text-xs">
        →
      </span>
    </Link>
  );
}

export function RuleTick({ clair = false }: { clair?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`rule-tick ${clair ? "rule-tick--light" : ""}`}
    />
  );
}
