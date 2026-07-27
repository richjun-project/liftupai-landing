import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Trainers } from "@/components/Trainers";
import { Pricing } from "@/components/Pricing";
import { Faq, faqs } from "@/components/Faq";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink-100 focus:px-4 focus:py-2 focus:text-ink-950"
      >
        본문으로 건너뛰기
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Trainers />
        <Pricing />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
