import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { guides } from "@/lib/guides";
import { jaGuides, jaSite } from "@/lib/ja";
import { enGuides, enSite } from "@/lib/en";
import { guideLanguages, homeLanguages } from "@/lib/i18n";
import { legalPaths } from "@/lib/legal";

/** hreflang 짝(상대 경로)을 sitemap 용 절대 URL 로 */
function abs(langs: Record<string, string> | undefined) {
  if (!langs) return {};
  const languages = Object.fromEntries(
    Object.entries(langs)
      .filter(([k]) => k !== "x-default")
      .map(([k, p]) => [k, `${site.url}${p === "/" ? "" : p}`]),
  );
  return { alternates: { languages } };
}

const home = abs(homeLanguages);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // 개인정보 처리방침·계정 삭제 안내(세 언어)
    ...(["privacy", "deletion"] as const).flatMap((k) =>
      (["ko", "ja", "en"] as const).map((l) => ({
        url: `${site.url}${legalPaths[k][l]}`,
        lastModified: new Date("2026-11-01"),
        changeFrequency: "yearly" as const,
        priority: 0.3,
        alternates: { languages: Object.fromEntries((["ko", "ja", "en"] as const).map((x) => [x, `${site.url}${legalPaths[k][x]}`])) },
      })),
    ),
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1, ...home },
    // 의도 랜딩 — 새 가이드를 만들면 여기 자동 반영된다
    ...guides.map((g) => ({
      url: `${site.url}${g.path}`,
      lastModified: new Date(site.factsAsOf),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...abs(guideLanguages(g.slug)),
    })),
    // 일본어(/ja) — 일본 첫 다운로드의 절반이 ChatGPT 앱을 거쳐 온다(2026-10 ASC)
    { url: `${site.url}/ja`, lastModified: new Date(jaSite.factsAsOf), changeFrequency: "weekly", priority: 0.9, ...home },
    ...jaGuides.map((g) => ({
      url: `${site.url}${g.path}`,
      lastModified: new Date(jaSite.factsAsOf),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...abs(guideLanguages(g.slug)),
    })),
    // 영어(/en) — 같은 구조로 영어권 답변엔진용 1차 소스(2026-10-24)
    { url: `${site.url}/en`, lastModified: new Date(enSite.factsAsOf), changeFrequency: "weekly", priority: 0.9, ...home },
    ...enGuides.map((g) => ({
      url: `${site.url}${g.path}`,
      lastModified: new Date(enSite.factsAsOf),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...abs(guideLanguages(g.slug)),
    })),
  ];
}
