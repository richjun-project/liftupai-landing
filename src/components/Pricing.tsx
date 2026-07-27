import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const free = [
  "빠른 운동 추천 하루 3회",
  "AI PT 채팅 하루 3회",
  "기본 AI 트레이너 4명",
  "운동 기록 · 세트/횟수 관리",
  "1,300개 운동 데이터베이스",
  "휴식 타이머 · 리마인더 알림",
];

const pro = [
  "AI PT 채팅 무제한",
  "AI 맞춤 운동 추천 무제한",
  "프리미엄 AI 트레이너 10종 전체 해금",
  "AI 영양 분석 — 사진으로 칼로리 추정",
  "고급 통계 · 1RM 추적 · 근력 곡선",
  "근육 회복 추적",
  "AI 점진적 과부하 자동 제안",
];

function Check({ tone = "muted" }: { tone?: "muted" | "pro" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={`mt-[5px] size-3.5 shrink-0 ${
        tone === "pro" ? "text-lift-cyan" : "text-ink-700"
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 8.5 3.2 3.2L13 4.8" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32"
    >
      <SectionHeading
        index="03"
        eyebrow="PRICING"
        title={
          <>
            PT 한 달 값으로
            <br />1 년을 훈련합니다.
          </>
        }
        lead="핵심 기록 기능은 계속 무료입니다. AI가 매일 판단해주길 원할 때 Pro로 넘어가세요."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal className="rounded-3xl border border-ink-850 p-7 sm:p-8">
          <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-ink-500">
            FREE
          </p>
          <p className="mt-4 font-display text-[30px] font-semibold tracking-tight">
            0원
          </p>
          <p className="mt-1.5 text-[13.5px] text-ink-500">
            가입만 하면 바로 사용
          </p>

          <ul className="mt-7 space-y-3">
            {free.map((f) => (
              <li key={f} className="flex gap-3 text-[14px] text-ink-300">
                <Check />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={90}
          className="relative overflow-hidden rounded-3xl border border-lift-blue/25 bg-gradient-to-b from-lift-indigo/12 to-transparent p-7 premium-glow sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-lift-cyan">
                LIFTUP PRO
              </p>
              <p className="mt-4 font-display text-[30px] font-semibold tracking-tight">
                월간 · 연간 · 평생
              </p>
              <p className="mt-1.5 text-[13.5px] text-ink-500">
                연간 결제 시 할인, 평생 이용권은 한 번 결제로 영구 이용 · 언제든
                해지 가능
              </p>
            </div>
            <span className="shimmer-sweep rounded-full border border-lift-violet/40 bg-lift-violet/12 px-3 py-1.5 text-[11.5px] font-semibold text-ink-100">
              BEST DEAL
            </span>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {pro.map((f) => (
              <li key={f} className="flex gap-3 text-[14px] text-ink-100">
                <Check tone="pro" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="shimmer-sweep inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-lift-blue via-lift-indigo to-lift-blue px-6 py-3.5 font-display text-[15px] font-semibold text-white premium-glow transition-transform duration-300 ease-out-quint hover:-translate-y-0.5"
            >
              Pro 시작하기
            </a>
            <p className="text-[12.5px] text-ink-500">
              정확한 가격은 앱 내 결제 화면에서 확인하세요
            </p>
          </div>

          <p className="mt-6 border-t border-ink-850 pt-5 text-[12px] leading-relaxed text-ink-700">
            구독은 기간 종료 24시간 전까지 해지하지 않으면 자동 갱신됩니다.
            해지는 App Store / Google Play 계정 설정에서 가능합니다. 자세한
            내용은{" "}
            <a
              href={site.terms}
              target="_blank"
              rel="noopener"
              className="text-ink-500 underline underline-offset-2 hover:text-ink-300"
            >
              이용약관
            </a>
            을 참고하세요.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
