import type { Metadata } from "next";
import { EnFooter, EnHeader } from "@/components/en/EnChrome";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { deletion, legalPaths } from "@/lib/legal";

const doc = deletion.en;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: {
    canonical: legalPaths.deletion.en,
    languages: { ko: legalPaths.deletion.ko, ja: legalPaths.deletion.ja, en: legalPaths.deletion.en },
  },
  openGraph: { type: "article", locale: "en_US", title: doc.title, description: doc.description },
};

export default function DeleteAccountEnPage() {
  return (
    <>
      <EnHeader />
      <main className="flex-1">
        <LegalArticle doc={doc} related={{ href: legalPaths.privacy.en, label: "Privacy policy →" }} />
      </main>
      <EnFooter />
    </>
  );
}
