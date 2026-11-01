import type { Metadata } from "next";
import { JaFooter, JaHeader } from "@/components/ja/JaChrome";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { privacy, legalPaths } from "@/lib/legal";

const doc = privacy.ja;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: {
    canonical: legalPaths.privacy.ja,
    languages: { ko: legalPaths.privacy.ko, ja: legalPaths.privacy.ja, en: legalPaths.privacy.en },
  },
  openGraph: { type: "article", locale: "ja_JP", title: doc.title, description: doc.description },
};

export default function PrivacyJaPage() {
  return (
    <>
      <JaHeader />
      <main className="flex-1">
        <LegalArticle doc={doc} related={{ href: legalPaths.deletion.ja, label: "アカウント削除のご案内 →" }} />
      </main>
      <JaFooter />
    </>
  );
}
