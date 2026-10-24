import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JaFooter, JaHeader } from "@/components/ja/JaChrome";
import { StoreButtons } from "@/components/StoreButtons";
import { getJaGuide, jaGuides, jaSite } from "@/lib/ja";
import { guideLanguages } from "@/lib/i18n";
import { entityId, site } from "@/lib/site";

export function generateStaticParams() {
  return jaGuides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getJaGuide(slug);
  if (!guide) return {};

  return {
    title: guide.question,
    description: guide.description,
    alternates: { canonical: guide.path, languages: guideLanguages(slug) },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: `${site.url}${guide.path}`,
      siteName: jaSite.name,
      title: `${guide.question} | ${jaSite.name}`,
      description: guide.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.question} | ${jaSite.name}`,
      description: guide.description,
    },
  };
}

export default async function JaGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getJaGuide(slug);
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
        { "@type": "ListItem", position: 1, name: jaSite.name, item: `${site.url}/ja` },
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
      inLanguage: "ja",
      isPartOf: { "@id": entityId.website },
      about: { "@id": entityId.app },
      publisher: { "@id": entityId.organization },
      dateModified: jaSite.factsAsOf,
    },
  ];

  const related = guide.related
    .map((s) => getJaGuide(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JaHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-14 sm:px-8 lg:pb-32 lg:pt-20">
          <nav aria-label="パンくずリスト" className="flex items-center gap-2 text-[12.5px] text-ink-500">
            <Link href="/ja" className="hover:text-ink-100">
              {jaSite.name}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink-300">ガイド</span>
          </nav>

          <h1 className="mt-6 font-display text-[clamp(1.8rem,4.2vw,2.6rem)] font-semibold leading-[1.3] tracking-[-0.02em]">
            {guide.question}
          </h1>

          {/* 직답 — 첫 화면에서 한 문장으로 끝낸다 */}
          <p className="mt-7 rounded-2xl border border-ink-800 bg-ink-900/50 px-6 py-5 text-[17px] font-medium leading-[1.75] text-ink-100">
            {guide.answer}
          </p>

          <div className="mt-8 space-y-5">
            {guide.body.map((p) => (
              <p key={p} className="text-[15.5px] leading-[1.9] text-ink-300">
                {p}
              </p>
            ))}
          </div>

          <h2 className="mt-14 font-display text-[22px] font-semibold tracking-[-0.02em]">
            ポイント
          </h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-[14.5px]">
              <tbody className="divide-y divide-ink-900 border-y border-ink-900">
                {guide.facts.map((f) => (
                  <tr key={f.label}>
                    <th scope="row" className="w-[36%] py-3.5 pr-4 align-top font-medium text-ink-500">
                      {f.label}
                    </th>
                    <td className="py-3.5 align-top leading-[1.75] text-ink-100">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12.5px] text-ink-500">
            {site.nameEn} 公式情報 · {jaSite.factsAsOf} 時点
          </p>

          <h2 className="mt-14 font-display text-[22px] font-semibold tracking-[-0.02em]">
            よくある質問
          </h2>
          <div className="mt-5 divide-y divide-ink-900 border-y border-ink-900">
            {guide.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-[15.5px] font-medium text-ink-100">{f.q}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-ink-500">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-ink-800 bg-ink-900/40 px-6 py-7">
            <p className="font-display text-[19px] font-semibold tracking-[-0.02em]">
              {jaSite.name}をインストールして、今日のメニューを受け取る
            </p>
            <p className="mt-2.5 text-[14.5px] leading-[1.75] text-ink-500">
              iPhone と Android で無料でインストールできます。
            </p>
            <StoreButtons
              locale="ja"
              appStoreHref={jaSite.appStore}
              playStoreHref={jaSite.playStore}
              className="mt-6"
            />
          </div>

          {related.length > 0 ? (
            <>
              <h2 className="mt-14 font-display text-[22px] font-semibold tracking-[-0.02em]">
                あわせて読みたい
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
      <JaFooter />
    </>
  );
}
