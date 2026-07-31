import type { Faq } from "@/content/solutions";

export default function FaqBloc({ faq }: { faq: Faq[] }) {
  return (
    <div className="border-t border-ink/15">
      {faq.map((f) => (
        <details key={f.q} className="group border-b border-ink/10">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
            <span className="display max-w-3xl text-lg tracking-tight text-ink sm:text-xl">
              {f.q}
            </span>
            <span
              aria-hidden="true"
              className="data mt-1 shrink-0 text-steel transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 text-[0.95rem] leading-relaxed text-ink-2">
            {f.r}
          </p>
        </details>
      ))}
    </div>
  );
}
