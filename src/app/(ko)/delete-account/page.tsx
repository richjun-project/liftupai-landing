import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { deletion, legalPaths } from "@/lib/legal";

const doc = deletion.ko;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: {
    canonical: legalPaths.deletion.ko,
    languages: { ko: legalPaths.deletion.ko, ja: legalPaths.deletion.ja, en: legalPaths.deletion.en },
  },
  openGraph: { type: "article", locale: "ko_KR", title: doc.title, description: doc.description },
};

export default function DeleteAccountKoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalArticle doc={doc} related={{ href: legalPaths.privacy.ko, label: "개인정보 처리방침 →" }} />
      </main>
      <Footer />
    </>
  );
}
