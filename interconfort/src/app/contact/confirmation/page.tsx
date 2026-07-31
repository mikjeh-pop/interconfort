import Link from "next/link";
import { Container } from "@/components/Ui";
import { societe } from "@/content/site";
import { meta } from "@/lib/seo";

export const metadata = {
  ...meta({
    title: "Demande envoyée",
    description: "Votre demande d’étude a bien été transmise à Inter-Confort.",
    path: "/contact/confirmation",
  }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <Container>
      <div className="max-w-2xl py-28 sm:py-40">
        <p className="eyebrow mb-6">Demande envoyée</p>
        <h1 className="display text-[clamp(2rem,5.5vw,3.6rem)] text-ink">
          Votre demande nous est parvenue.
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-ink-2">
          Nous revenons vers vous rapidement. Si votre projet est urgent, appelez-nous directement au{" "}
          <a
            href={`tel:${societe.telephone.replace(/\s/g, "")}`}
            className="data text-ink underline underline-offset-4"
          >
            {societe.telephoneAffichage}
          </a>
          .
        </p>
        <p className="mt-6 leading-relaxed text-ink-2">
          Pour joindre des photos, des plans ou des fiches produit, répondez simplement à l’e-mail
          que vous allez recevoir.
        </p>
        <div className="mt-12 flex flex-wrap gap-6 text-sm">
          <Link href="/" className="text-cold underline-offset-4 hover:underline">
            Retour à l’accueil
          </Link>
          <Link href="/solutions" className="text-cold underline-offset-4 hover:underline">
            Parcourir les solutions
          </Link>
        </div>
      </div>
    </Container>
  );
}
