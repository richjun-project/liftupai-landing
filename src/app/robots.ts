import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI 크롤러는 용도가 세 가지다: 학습 / 검색 색인 / 사용자 질문 시 실시간 열람.
// 인용 유입이 목표이므로 전부 허용한다. 와일드카드로 암묵 허용하는 대신 명시해
// 각사 크롤러가 정책을 분명히 읽게 한다.
const aiCrawlers = [
  // 학습
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  // 검색 색인
  "OAI-SearchBot",
  "Claude-SearchBot",
  "PerplexityBot",
  // 실시간 fetch
  "ChatGPT-User",
  "Claude-User",
  "Perplexity-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // 네이버 · 다음 크롤러 명시 허용
      { userAgent: "Yeti", allow: "/" },
      { userAgent: "Daumoa", allow: "/" },
      // AI 크롤러 명시 허용
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
