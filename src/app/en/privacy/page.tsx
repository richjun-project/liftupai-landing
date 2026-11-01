import type { Metadata } from "next";
import { EnFooter, EnHeader } from "@/components/en/EnChrome";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { privacy, legalPaths } from "@/lib/legal";

const doc = privacy.en;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: {
    canonical: legalPaths.privacy.en,
    languages: { ko: legalPaths.privacy.ko, ja: legalPaths.privacy.ja, en: legalPaths.privacy.en },
  },
  openGraph: { type: "article", locale: "en_US", title: doc.title, description: doc.description },
};

export default function PrivacyEnPage() {
  return (
    <>
      <EnHeader />
      <main className="flex-1">
        <LegalArticle doc={doc} related={{ href: legalPaths.deletion.en, label: "Account deletion →" }} />
      </main>
      <EnFooter />
    </>
  );
}
