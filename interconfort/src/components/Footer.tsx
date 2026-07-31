import Link from "next/link";
import { navigation, societe } from "@/content/site";
import { Container, RuleTick } from "./Ui";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <RuleTick clair />
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="display text-xl tracking-[-0.03em]">INTER-CONFORT</p>
            <p className="eyebrow mt-2 !text-frost/70">Concepteur et intégrateur</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-frost/85">
              Conception, intégration et suivi de solutions de vente automatisée pour les
              professionnels, depuis {societe.depuis}.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5 !text-frost/70">Solutions</p>
            <ul className="space-y-3 text-sm">
              {navigation[0].enfants?.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="text-frost/85 underline-offset-4 hover:text-white hover:underline">
                    {e.libelle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 !text-frost/70">Entreprise</p>
            <ul className="space-y-3 text-sm">
              {navigation.slice(1).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-frost/85 underline-offset-4 hover:text-white hover:underline">
                    {n.libelle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 !text-frost/70">Contact</p>
            <address className="space-y-3 text-sm not-italic text-frost/85">
              <p>
                {societe.raisonSociale}
                <br />
                {societe.adresse.rue}
                <br />
                {societe.adresse.codePostal} {societe.adresse.ville}, {societe.adresse.pays}
              </p>
              <p className="data">
                <a href={`tel:${societe.telephone.replace(/\s/g, "")}`} className="hover:text-white">
                  {societe.telephoneAffichage}
                </a>
              </p>
              <p>
                <a href={`mailto:${societe.email}`} className="underline-offset-4 hover:text-white hover:underline">
                  {societe.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/12 py-6 text-xs text-frost/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {societe.raisonSociale} — {societe.adresse.ville},{" "}
            {societe.adresse.pays}
          </p>
          <p className="data">Site de démonstration</p>
        </div>
      </Container>
    </footer>
  );
}
