import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // 의도 랜딩 — 새 가이드를 만들면 여기 자동 반영된다
    ...guides.map((g) => ({
      url: `${site.url}${g.path}`,
      lastModified: new Date(site.factsAsOf),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
