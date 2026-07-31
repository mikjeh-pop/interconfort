import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, societe } from "@/content/site";
import { localBusinessLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Inter-Confort — concepteur de points de vente automatisés",
    template: "%s",
  },
  description:
    "Inter-Confort conçoit et intègre des solutions de vente automatisée réfrigérées pour les professionnels : produits frais, surgelés, multi-produits et pharmacie. Nivelles, Belgique.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-BE">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <span className="sr-only">{societe.raisonSociale}</span>
      </body>
    </html>
  );
}
