/**
 * Emplacement réservé pour un visuel non encore fourni par Inter-Confort.
 * Volontairement explicite : le site de démonstration ne doit jamais
 * présenter une image de substitution comme s'il s'agissait de la machine.
 */
export default function PhotoManquante({
  description,
  ratio = "4 / 3",
}: {
  description: string;
  ratio?: string;
}) {
  return (
    <div
      className="flex flex-col items-start justify-end border border-dashed border-steel/45 bg-paper-2 p-5"
      style={{ aspectRatio: ratio }}
    >
      <p className="eyebrow mb-2 !text-hatch">Visuel à fournir</p>
      <p className="max-w-xs text-sm leading-snug text-steel">{description}</p>
    </div>
  );
}
