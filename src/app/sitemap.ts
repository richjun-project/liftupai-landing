import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { guides } from "@/lib/guides";
import { getJaGuide, jaGuides, jaSite } from "@/lib/ja";

/** 한국어·일본어 가이드가 같은 주제면 서로를 언어 대체본으로 표시한다 */
function langAlternates(slug: string) {
  const ko = guides.find((g) => g.slug === slug);
  const ja = getJaGuide(slug);
  if (!ko || !ja) return {};
  return { alternates: { languages: { ko: `${site.url}${ko.path}`, ja: `${site.url}${ja.path}` } } };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { ko: site.url, ja: `${site.url}/ja` } },
    },
    // 의도 랜딩 — 새 가이드를 만들면 여기 자동 반영된다
    ...guides.map((g) => ({
      url: `${site.url}${g.path}`,
      lastModified: new Date(site.factsAsOf),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...langAlternates(g.slug),
    })),
    // 일본어(/ja) — 일본 첫 다운로드의 절반이 ChatGPT 앱을 거쳐 온다(2026-10 ASC)
    {
      url: `${site.url}/ja`,
      lastModified: new Date(jaSite.factsAsOf),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { ko: site.url, ja: `${site.url}/ja` } },
    },
    ...jaGuides.map((g) => ({
      url: `${site.url}${g.path}`,
      lastModified: new Date(jaSite.factsAsOf),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...langAlternates(g.slug),
    })),
  ];
}
