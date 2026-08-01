import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Charge = Record<string, string>;

const CHAMPS = [
  ["nom", "Nom"],
  ["societe", "Société"],
  ["email", "E-mail"],
  ["telephone", "Téléphone"],
  ["pays", "Pays"],
  ["secteur", "Secteur"],
  ["solution", "Solution envisagée"],
  ["lieu", "Lieu d'installation"],
  ["implantation", "Implantation"],
  ["temperature", "Température souhaitée"],
  ["produits", "Produits à distribuer"],
  ["emballages", "Dimensions des emballages"],
  ["capacite", "Capacité souhaitée"],
  ["description", "Description du projet"],
  ["camionExpo", "Passage du camion-expo demandé"],
] as const;

function estEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

export async function POST(request: Request) {
  let charge: Charge;
  try {
    charge = (await request.json()) as Charge;
  } catch {
    return NextResponse.json({ ok: false, message: "Requête illisible." }, { status: 400 });
  }

  // Champ piège : rempli uniquement par un robot.
  if (charge.societe_web) {
    return NextResponse.json({ ok: true });
  }

  const nom = (charge.nom ?? "").trim();
  const email = (charge.email ?? "").trim();

  if (!nom || !email) {
    return NextResponse.json(
      { ok: false, message: "Indiquez au minimum votre nom et votre adresse e-mail." },
      { status: 400 },
    );
  }
  if (!estEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "L'adresse e-mail ne semble pas valide." },
      { status: 400 },
    );
  }

  const lignes = CHAMPS.filter(([cle]) => (charge[cle] ?? "").trim())
    .map(([cle, libelle]) => {
      const v = charge[cle].trim();
      return `${libelle} : ${v === "on" ? "oui" : v}`;
    })
    .join("\n");

  const cle = process.env.RESEND_API_KEY;
  const destinataire = process.env.CONTACT_TO_EMAIL;
  const expediteur = process.env.CONTACT_FROM_EMAIL;

  if (!cle || !destinataire || !expediteur) {
    // Sans configuration e-mail, la demande est tracée côté serveur plutôt que perdue.
    console.warn("[contact] Envoi e-mail non configuré. Demande reçue :\n" + lignes);
    return NextResponse.json({ ok: true, message: "Demande enregistrée." });
  }

  try {
    const reponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cle}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: expediteur,
        to: [destinataire],
        reply_to: email,
        subject: `Demande d'étude — ${nom}${charge.societe ? ` (${charge.societe})` : ""}`,
        text: lignes,
      }),
    });

    if (!reponse.ok) {
      console.error("[contact] Resend a répondu", reponse.status, await reponse.text());
      return NextResponse.json(
        { ok: false, message: "L'envoi a échoué. Réessayez ou appelez-nous." },
        { status: 502 },
      );
    }
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json(
      { ok: false, message: "L'envoi a échoué. Réessayez ou appelez-nous." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
