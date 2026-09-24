import { site } from "./site";

/**
 * 채널별 추적 링크(/go/<출처>)가 보낼 곳을 정한다.
 *
 * 스레드처럼 본문에 링크를 넣기 어려운 채널에서 "설치까지 이어졌는가" 를 재려면
 * 출처가 스토어까지 전달돼야 한다.
 *  - iPhone/iPad → App Store 캠페인 링크(pt+ct). App Store Connect 분석 > 캠페인에 ct 이름으로 잡힌다.
 *    pt 는 팀 고유 provider token(App Store Connect 캠페인 링크 생성기에서 확인, 2026-09-25).
 *  - Android → Play referrer 의 utm_*. Play Console 획득 보고서와 Firebase first_open 에 잡힌다.
 *  - 그 외(데스크톱 등) → 랜딩에 utm 을 달아 보낸다.
 * 출처 이름은 App Store 캠페인 이름 한도(30자) 안의 소문자·숫자·-·_ 만 허용한다.
 * 그 밖의 값은 스토어 보고서를 오염시키지 않도록 출처 없이 랜딩으로 보낸다.
 */
export const APP_STORE_PROVIDER_TOKEN = "126107754";

const SOURCE_PATTERN = /^[a-z0-9][a-z0-9_-]{0,29}$/;

export type GoPlatform = "ios" | "android" | "other";

export function detectPlatform(userAgent: string | null | undefined): GoPlatform {
  const ua = userAgent ?? "";
  // 순서 중요: 일부 안드로이드 인앱 브라우저 UA 에도 "like iPhone" 류 문자열이 없지만,
  // iPadOS 데스크톱 모드는 "Macintosh" 로 와서 구분할 수 없다 → other 로 떨어져 랜딩으로 간다.
  if (/Android/i.test(ua)) return "android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  return "other";
}

export function isValidSource(source: string): boolean {
  return SOURCE_PATTERN.test(source);
}

export function resolveGoTarget(source: string, userAgent: string | null | undefined): string {
  if (!isValidSource(source)) return site.url;

  switch (detectPlatform(userAgent)) {
    case "ios": {
      const u = new URL(`https://apps.apple.com/app/apple-store/id${site.iosId}`);
      u.searchParams.set("pt", APP_STORE_PROVIDER_TOKEN);
      u.searchParams.set("ct", source);
      u.searchParams.set("mt", "8");
      return u.toString();
    }
    case "android": {
      const referrer = new URLSearchParams({
        utm_source: source,
        utm_medium: "social",
        utm_campaign: source,
      }).toString();
      const u = new URL("https://play.google.com/store/apps/details");
      u.searchParams.set("id", site.androidId);
      u.searchParams.set("referrer", referrer);
      return u.toString();
    }
    default: {
      const u = new URL(site.url);
      u.searchParams.set("utm_source", source);
      u.searchParams.set("utm_medium", "social");
      return u.toString();
    }
  }
}
