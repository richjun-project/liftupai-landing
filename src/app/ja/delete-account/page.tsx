import type { Metadata } from "next";
import { JaFooter, JaHeader } from "@/components/ja/JaChrome";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { deletion, legalPaths } from "@/lib/legal";

const doc = deletion.ja;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: {
    canonical: legalPaths.deletion.ja,
    languages: { ko: legalPaths.deletion.ko, ja: legalPaths.deletion.ja, en: legalPaths.deletion.en },
  },
  openGraph: { type: "article", locale: "ja_JP", title: doc.title, description: doc.description },
};

export default function DeleteAccountJaPage() {
  return (
    <>
      <JaHeader />
      <main className="flex-1">
        <LegalArticle doc={doc} related={{ href: legalPaths.privacy.ja, label: "プライバシーポリシー →" }} />
      </main>
      <JaFooter />
    </>
  );
}
