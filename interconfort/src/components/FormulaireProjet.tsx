"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const secteurs = [
  "Traiteur / restauration",
  "Boulangerie / pâtisserie",
  "Chocolaterie",
  "Producteur / artisan",
  "Pharmacie / parapharmacie",
  "Fruits et légumes",
  "Produits laitiers",
  "Produits surgelés",
  "Site industriel / entreprise",
  "Collectivité / établissement",
  "Autre",
];

const solutionsEnvisagees = [
  "Je ne sais pas encore",
  "Fresh Food Store",
  "MULTI 610",
  "MULTI 610 double",
  "IGLOO",
  "Pharmashop",
  "Technologies Magex",
];

const champ =
  "w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-steel/70 focus:border-cold";
const label = "mb-2 block text-sm text-ink-2";

export default function FormulaireProjet() {
  const router = useRouter();
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErreur(null);
    setEnvoi(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await r.json()) as { ok?: boolean; message?: string };
      if (!r.ok || !json.ok) {
        setErreur(
          json.message ?? "L'envoi n'a pas abouti. Réessayez ou appelez-nous.",
        );
        setEnvoi(false);
        return;
      }
      router.push("/contact/confirmation");
    } catch {
      setErreur("La connexion a échoué. Vérifiez votre réseau et réessayez.");
      setEnvoi(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="space-y-10">
      {/* Piège à robots : invisible pour les humains, ignoré par les lecteurs d'écran. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="societe_web">Ne pas remplir</label>
        <input
          id="societe_web"
          name="societe_web"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <fieldset>
        <legend className="eyebrow mb-5">Vos coordonnées</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="nom">
              Nom et prénom *
            </label>
            <input
              className={champ}
              id="nom"
              name="nom"
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label className={label} htmlFor="societe">
              Société
            </label>
            <input
              className={champ}
              id="societe"
              name="societe"
              autoComplete="organization"
            />
          </div>
          <div>
            <label className={label} htmlFor="email">
              Adresse e-mail *
            </label>
            <input
              className={champ}
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label className={label} htmlFor="telephone">
              Téléphone
            </label>
            <input
              className={champ}
              id="telephone"
              name="telephone"
              type="tel"
              autoComplete="tel"
            />
          </div>
          <div>
            <label className={label} htmlFor="pays">
              Pays
            </label>
            <input
              className={champ}
              id="pays"
              name="pays"
              autoComplete="country-name"
            />
          </div>
          <div>
            <label className={label} htmlFor="secteur">
              Secteur d&apos;activité
            </label>
            <select
              className={champ}
              id="secteur"
              name="secteur"
              defaultValue=""
            >
              <option value="">Sélectionner</option>
              {secteurs.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="eyebrow mb-5">Votre projet</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="solution">
              Solution envisagée
            </label>
            <select
              className={champ}
              id="solution"
              name="solution"
              defaultValue=""
            >
              <option value="">Sélectionner</option>
              {solutionsEnvisagees.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={label} htmlFor="lieu">
              Lieu d&apos;installation
            </label>
            <input
              className={champ}
              id="lieu"
              name="lieu"
              placeholder="Ville, type de site"
            />
          </div>
          <div>
            <span className={label} id="implantation-legende">
              Implantation
            </span>
            <div
              className="flex gap-6 pt-1"
              role="radiogroup"
              aria-labelledby="implantation-legende"
            >
              {["Intérieur", "Extérieur", "À déterminer"].map((v) => (
                <label
                  key={v}
                  className="flex items-center gap-2 text-sm text-ink-2"
                >
                  <input
                    type="radio"
                    name="implantation"
                    value={v}
                    className="accent-cold"
                  />
                  {v}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className={label} htmlFor="temperature">
              Température souhaitée
            </label>
            <input
              className={champ}
              id="temperature"
              name="temperature"
              placeholder="Ex. 0 à 4 °C, ou −18 °C"
            />
          </div>
          <div>
            <label className={label} htmlFor="produits">
              Produits à distribuer
            </label>
            <input
              className={champ}
              id="produits"
              name="produits"
              placeholder="Ex. barquettes traiteur, pâtisseries"
            />
          </div>
          <div>
            <label className={label} htmlFor="emballages">
              Dimensions des emballages
            </label>
            <input
              className={champ}
              id="emballages"
              name="emballages"
              placeholder="Ex. 230 × 180 × 45 mm"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor="capacite">
              Capacité souhaitée
            </label>
            <input
              className={champ}
              id="capacite"
              name="capacite"
              placeholder="Nombre de références et de produits"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor="description">
              Description du projet
            </label>
            <textarea
              className={champ}
              id="description"
              name="description"
              rows={6}
            />
          </div>
        </div>
      </fieldset>

      <div className="space-y-5">
        <label className="flex items-start gap-3 text-sm text-ink-2">
          <input
            type="checkbox"
            name="consentement"
            required
            className="mt-1 accent-cold"
          />
          <span>
            J&apos;accepte que ces informations soient utilisées pour répondre à
            ma demande. *
          </span>
        </label>

        {erreur ? (
          <p
            role="alert"
            className="border-l-2 border-hatch bg-paper-2 px-4 py-3 text-sm text-ink"
          >
            {erreur}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={envoi}
          className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm text-white transition-colors hover:bg-cold disabled:opacity-60"
        >
          {envoi ? "Envoi en cours…" : "Envoyer ma demande"}
          <span aria-hidden="true" className="data text-xs">
            →
          </span>
        </button>

        <p className="text-xs text-steel">
          Les champs marqués d&apos;un astérisque sont obligatoires. Pour
          joindre des photos ou des plans, répondez à l&apos;accusé de réception
          que vous recevrez par e-mail.
        </p>
      </div>
    </form>
  );
}
