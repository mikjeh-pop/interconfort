import type { Spec } from "@/content/solutions";

export default function SpecTable({
  specs,
  titre,
  clair = false,
}: {
  specs: Spec[];
  titre?: string;
  clair?: boolean;
}) {
  return (
    <div>
      {titre ? (
        <h3 className={`eyebrow mb-4 ${clair ? "!text-frost" : ""}`}>
          {titre}
        </h3>
      ) : null}
      <dl className={`border-t ${clair ? "border-white/20" : "border-ink/15"}`}>
        {specs.map((s) => (
          <div
            key={s.label}
            className={`grid grid-cols-1 gap-1 border-b py-3 sm:grid-cols-[1fr_1.1fr] sm:gap-6 ${
              clair ? "border-white/12" : "border-ink/10"
            }`}
          >
            <dt className={`text-sm ${clair ? "text-frost" : "text-steel"}`}>
              {s.label}
            </dt>
            <dd className={`data text-sm ${clair ? "text-white" : "text-ink"}`}>
              {s.valeur}
              {s.note ? (
                <span
                  className={`mt-1 block text-[0.68rem] leading-relaxed ${
                    clair ? "text-frost/70" : "text-steel"
                  }`}
                >
                  <span className="text-hatch">▲</span> {s.note}
                </span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
