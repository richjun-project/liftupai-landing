/**
 * 한국 Pro 가격(App Store·Google Play 표시, 부가세 포함). 2026-10-24 부터 새 구독자에게 적용.
 * 바뀌면 숫자 세 개만 고친다 — 홈 요금제·가이드·llms.txt 가 모두 여기서 읽는다.
 */
const monthlyKrw = 9900;
const yearlyKrw = 59000;
const lifetimeKrw = 149000;
const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;

export const krPricing = {
  monthlyKrw,
  yearlyKrw,
  lifetimeKrw,
  monthly: `월 ${won(monthlyKrw)}`,
  yearly: `연 ${won(yearlyKrw)}(월 약 ${won(Math.round(yearlyKrw / 12))})`,
  lifetime: `평생 이용권 ${won(lifetimeKrw)}(한 번 결제)`,
  trial: "App Store에서는 월간·연간 모두 1주 무료 체험",
  note: "가격과 무료 체험 조건은 이용 중인 App Store·Google Play 표시가 우선합니다.",
  asOf: "2026-10-24",
} as const;
