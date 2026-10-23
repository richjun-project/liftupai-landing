import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { guides, getGuide } from "@/lib/guides";
import { getJaGuide } from "@/lib/ja";
import { entityId, site } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const ja = getJaGuide(slug);

  return {
    title: guide.question,
    description: guide.description,
    alternates: {
      canonical: guide.path,
      // 같은 주제의 일본어 가이드가 있으면 hreflang 짝
      languages: ja ? { ko: guide.path, ja: ja.path, "x-default": guide.path } : undefined,
    },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: `${site.url}${guide.path}`,
      siteName: site.name,
      title: `${guide.question} | ${site.name}`,
      description: guide.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.question} | ${site.name}`,
      description: guide.description,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${site.url}${guide.path}`;

  // 가시 텍스트와 글자까지 동일하게 — 화면에 없는 내용은 넣지 않는다.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: guide.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: site.name, item: site.url },
        { "@type": "ListItem", position: 2, name: guide.question, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": url,
      url,
      name: guide.question,
      description: guide.description,
      inLanguage: "ko",
      isPartOf: { "@id": entityId.website },
      about: { "@id": entityId.app },
      publisher: { "@id": entityId.organization },
      dateModified: site.factsAsOf,
    },
  ];

  const related = guide.related
    .map((s) => getGuide(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-14 sm:px-8 lg:pb-32 lg:pt-20">
          <nav
            aria-label="경로"
            className="flex items-center gap-2 text-[12.5px] text-ink-500"
          >
            <Link href="/" className="hover:text-ink-100">
              {site.name}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink-300">가이드</span>
          </nav>

          <h1 className="mt-6 font-display text-[clamp(1.9rem,4.4vw,2.8rem)] font-semibold leading-[1.22] tracking-[-0.025em]">
            {guide.question}
          </h1>

          {/* 직답 — 첫 화면에서 한 문장으로 끝낸다 */}
          <p className="mt-7 rounded-2xl border border-ink-800 bg-ink-900/50 px-6 py-5 text-[17px] font-medium leading-[1.7] text-ink-100">
            {guide.answer}
          </p>

          <div className="mt-8 space-y-5">
            {guide.body.map((p) => (
              <p key={p} className="text-[15.5px] leading-[1.85] text-ink-300">
                {p}
              </p>
            ))}
          </div>

          {/* 라벨-값 표 — 답변엔진이 구조화된 사실로 파싱한다 */}
          <h2 className="mt-14 font-display text-[22px] font-semibold tracking-[-0.02em]">
            핵심 정보
          </h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-[14.5px]">
              <tbody className="divide-y divide-ink-900 border-y border-ink-900">
                {guide.facts.map((f) => (
                  <tr key={f.label}>
                    <th
                      scope="row"
                      className="w-[38%] py-3.5 pr-4 align-top font-medium text-ink-500"
                    >
                      {f.label}
                    </th>
                    <td className="py-3.5 align-top text-ink-100">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12.5px] text-ink-500">
            {site.nameEn} 공식 정보 · {site.factsAsOf} 기준
          </p>

          <h2 className="mt-14 font-display text-[22px] font-semibold tracking-[-0.02em]">
            자주 묻는 질문
          </h2>
          <div className="mt-5 divide-y divide-ink-900 border-y border-ink-900">
            {guide.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-[15.5px] font-medium text-ink-100">
                  {f.q}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-ink-500">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-ink-800 bg-ink-900/40 px-6 py-7">
            <p className="font-display text-[19px] font-semibold tracking-[-0.02em]">
              리프트업AI 설치하고 오늘 루틴 받기
            </p>
            <p className="mt-2.5 text-[14.5px] leading-[1.75] text-ink-500">
              iOS와 Android에서 무료로 설치할 수 있습니다.
            </p>
            <StoreButtons className="mt-6" />
          </div>

          {related.length > 0 ? (
            <>
              <h2 className="mt-14 font-display text-[22px] font-semibold tracking-[-0.02em]">
                함께 보면 좋은 질문
              </h2>
              <ul className="mt-5 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={r.path}
                      className="text-[15px] text-ink-300 underline decoration-ink-800 underline-offset-4 hover:text-ink-100"
                    >
                      {r.question}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  );
}
