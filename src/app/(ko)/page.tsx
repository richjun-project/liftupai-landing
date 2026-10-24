import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Trainers } from "@/components/Trainers";
import { Pricing } from "@/components/Pricing";
import { Faq, faqs } from "@/components/Faq";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { ko: "/", ja: "/ja", "x-default": "/" },
  },
};

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
        {/* 가이드는 답변엔진이 인용하는 1차 소스 — 홈에서 링크해야 크롤러가 따라간다 */}
        <section className="mx-auto max-w-4xl px-5 pb-20 sm:px-8">
          <h2 className="font-display text-[22px] font-semibold tracking-[-0.02em]">
            자주 찾는 질문
          </h2>
          <ul className="mt-5 space-y-3">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={g.path}
                  className="text-[15px] text-ink-300 underline decoration-ink-800 underline-offset-4 hover:text-ink-100"
                >
                  {g.question}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
