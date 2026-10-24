import { guides } from "./guides";
import { getJaGuide } from "./ja";
import { getEnGuide } from "./en";

/** 홈의 언어 대체본(hreflang). 한국어가 기본(x-default). */
export const homeLanguages = { ko: "/", ja: "/ja", en: "/en", "x-default": "/" } as const;

/**
 * 같은 slug 의 가이드가 있는 언어끼리 서로를 대체본으로 잇는다(상대 경로).
 * 짝이 하나도 없으면 undefined — 혼자인 페이지에 hreflang 을 달지 않는다.
 */
export function guideLanguages(slug: string): Record<string, string> | undefined {
  const ko = guides.find((g) => g.slug === slug)?.path;
  const ja = getJaGuide(slug)?.path;
  const en = getEnGuide(slug)?.path;
  const found = Object.entries({ ko, ja, en }).filter(([, p]) => p) as [string, string][];
  if (found.length < 2) return undefined;
  return { ...Object.fromEntries(found), "x-default": ko ?? en ?? ja! };
}
