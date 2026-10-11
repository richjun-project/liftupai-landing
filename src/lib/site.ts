export const site = {
  name: "리프트업AI",
  nameEn: "LiftUp AI",
  url: "https://liftupai.net",
  tagline: "AI가 설계하는 나만의 웨이트 트레이닝",
  description:
    "체형·목표·회복 상태를 분석해 매일의 루틴을 자동 설계하는 AI 퍼스널 트레이너. 10가지 개성의 AI 코치, 1,300개 운동 데이터베이스, 사진 한 장으로 끝나는 식단 분석까지.",
  appStore: "https://apps.apple.com/kr/app/id6752910787",
  playStore:
    "https://play.google.com/store/apps/details?id=com.richjun.liftupai",
  androidId: "com.richjun.liftupai",
  iosId: "6752910787",
  email: "ggprgrkjh2@gmail.com",
  terms:
    "https://relic-baboon-412.notion.site/AI-278766a8bb4680b884ccd0de8c31f6e0?pvs=74",
  privacy:
    "https://relic-baboon-412.notion.site/AI-278766a8bb46804c9028fcd34abe6abf",
  // 구조화 데이터에 쓰는 기준일 — 사실 정보를 고칠 때 같이 올린다
  factsAsOf: "2026-10-11",
} as const;

/**
 * 엔티티 식별자. 같은 실체는 사이트 전체에서 같은 @id를 쓴다.
 * 페이지마다 Organization을 새로 선언하면 엔티티가 분열된다.
 */
export const entityId = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  app: `${site.url}/#app`,
} as const;

/** "이 표면들이 전부 같은 실체"라는 선언 — 실제로 보유·운영하는 공식 표면만 넣는다. */
export const sameAs: readonly string[] = [site.appStore, site.playStore];
