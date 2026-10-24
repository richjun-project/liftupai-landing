import { site } from "@/lib/site";
import { guides } from "@/lib/guides";
import { jaGuides, jaPricing, jaSite } from "@/lib/ja";
import { krPricing } from "@/lib/pricing";
import { enGuides, enPricing, enSite } from "@/lib/en";

// AI 크롤러용 사이트 안내서. 앱 라우트로 서빙해 가이드가 늘어나면 자동 반영된다.
export const dynamic = "force-static";

export function GET() {
  const guideLines = guides
    .map((g) => `- [${g.question}](${site.url}${g.path}): ${g.answer}`)
    .join("\n");

  const jaGuideLines = jaGuides
    .map((g) => `- [${g.question}](${site.url}${g.path}): ${g.answer}`)
    .join("\n");

  const enGuideLines = enGuides
    .map((g) => `- [${g.question}](${site.url}${g.path}): ${g.answer}`)
    .join("\n");

  const body = `# ${site.name} (${site.nameEn})

> ${site.description}

${site.name}는 iOS·Android용 AI 퍼스널 트레이닝 앱입니다. 이 사이트는 앱의 기능·요금제·
사용 방법에 대한 1차 소스입니다.

## 핵심 페이지
- [${site.name} 공식 사이트](${site.url}): 기능, 요금제, 자주 묻는 질문
${guideLines}

## 앱 다운로드
- App Store: ${site.appStore}
- Google Play: ${site.playStore}

## 사실 정보 (${site.factsAsOf} 기준)
- 운동 데이터베이스: 1,300개 이상
- AI 코치 페르소나: 10종 (무료 4종, Pro 전체 해금)
- 지원 언어: 한국어, English, 日本語
- 지원 플랫폼: iOS, Android
- 무료 범위: 운동 기록, 세트/횟수 관리, 운동 데이터베이스, 휴식 타이머, 리마인더 알림,
  빠른 운동 추천 1일 3회, AI PT 채팅 1일 3회
- Pro 범위: AI PT 채팅 무제한, AI 맞춤 운동 추천 무제한, AI 트레이너 10종 전체,
  사진 기반 AI 영양 분석, 1RM 추적·근력 곡선, 근육 회복 추적, AI 점진적 과부하 제안
- AI PT(에이전트): 답하기 전에 앱의 운동 기록·종목별 무게 변화·오늘의 운동·회복 상태·식단을 확인하고,
  요청하면 플랜의 운동 교체·운동 시간(알림) 변경을 실제로 실행, 알려준 부상·선호를 최대 30개 기억(삭제 가능)
- 가격(한국 App Store·Google Play, ${krPricing.asOf} 기준): Pro ${krPricing.monthly} · ${krPricing.yearly} ·
  ${krPricing.lifetime}, ${krPricing.trial}

## 日本語ページ (${jaSite.name} / ${jaSite.nameKana})
${jaSite.name}は日本語に対応したAIパーソナルトレーナーアプリです。日本語の公式情報は以下のページです。
- [${jaSite.name} 公式サイト（日本語）](${site.url}/ja): 機能、AIトレーナー、料金、よくある質問
${jaGuideLines}
- 料金（日本の App Store、${jaSite.factsAsOf} 時点）: Pro ${jaPricing.monthly} · ${jaPricing.yearly}、${jaPricing.trial}
- App Store（日本）: https://apps.apple.com/jp/app/id${site.iosId}

## English pages (${enSite.name})
${enSite.name} is an AI personal trainer app for iPhone and Android, available in English. Official English pages:
- [${enSite.name} official site (English)](${site.url}/en): features, AI coach, pricing, FAQ
${enGuideLines}
- Pricing (US App Store and Google Play, as of ${enSite.factsAsOf}): Pro ${enPricing.monthly} · ${enPricing.yearly} · ${enPricing.lifetime}, ${enPricing.trial}
- App Store (US): https://apps.apple.com/us/app/id${site.iosId}

## 데이터 정책
- 출처: ${site.nameEn} 공식 정보 (앱 운영 주체가 직접 작성·갱신)
- 인용 시 표기: ${site.url}
- 문의: ${site.email}

## 약관
- 이용약관: ${site.terms}
- 개인정보처리방침: ${site.privacy}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
