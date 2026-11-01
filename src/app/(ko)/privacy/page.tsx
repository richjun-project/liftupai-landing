import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { privacy, legalPaths } from "@/lib/legal";

const doc = privacy.ko;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: {
    canonical: legalPaths.privacy.ko,
    languages: { ko: legalPaths.privacy.ko, ja: legalPaths.privacy.ja, en: legalPaths.privacy.en },
  },
  openGraph: { type: "article", locale: "ko_KR", title: doc.title, description: doc.description },
};

export default function PrivacyKoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalArticle doc={doc} related={{ href: legalPaths.deletion.ko, label: "계정 삭제 안내 →" }} />
      </main>
      <Footer />
    </>
  );
}
