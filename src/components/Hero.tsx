import { StoreButtons } from "./StoreButtons";
import { ChatScreen, PhoneFrame, WorkoutScreen } from "./PhoneMockup";

const stats = [
  { value: "1,300+", label: "운동 데이터베이스" },
  { value: "10", label: "AI 코치 페르소나" },
  { value: "3개국어", label: "한국어 · English · 日本語" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* 배경 — 방사형 광원 한 곳 + 미세 그리드 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(58rem 34rem at 72% 6%, rgba(94,92,230,0.42), transparent 66%), radial-gradient(40rem 26rem at 88% 42%, rgba(10,132,255,0.24), transparent 64%), radial-gradient(46rem 28rem at 6% 14%, rgba(10,132,255,0.12), transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pb-32 lg:pt-24">
        <div>
          <p className="rise-in inline-flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900/60 px-3.5 py-1.5 text-[12px] text-ink-300">
            <span className="size-1.5 rounded-full bg-lift-cyan" />
            App Store · Google Play 출시
          </p>

          <h1
            className="rise-in mt-6 font-display text-[clamp(2.4rem,6.2vw,4.1rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
            style={{ animationDelay: "80ms" }}
          >
            헬스장에서
            <br />
            뭘 해야 할지
            <br />
            <span className="text-lift-cyan">더는 검색하지 마세요.</span>
          </h1>

          <p
            className="rise-in mt-7 max-w-[30rem] text-[16px] leading-[1.75] text-ink-300 sm:text-[17px]"
            style={{ animationDelay: "160ms" }}
          >
            리프트업AI는 당신의 목표, 경험, 어제의 피로까지 계산해 오늘의 세트와
            무게를 정해줍니다. 정체가 오면 AI가 먼저 알아채고 프로그램을
            바꿉니다.
          </p>

          <div className="rise-in mt-9" style={{ animationDelay: "240ms" }}>
            <StoreButtons size="lg" />
          </div>

          <dl
            className="rise-in mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-ink-900 pt-7"
            style={{ animationDelay: "300ms" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-[22px] font-semibold tabular-nums text-ink-100">
                  {s.value}
                </dt>
                <dd className="mt-0.5 text-[12.5px] text-ink-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 기기 목업 — 겹쳐 배치 */}
        <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-[26rem] lg:max-w-none">
          <div className="relative pb-8 pl-1 sm:pl-14 lg:pl-10">
            <div className="rise-in" style={{ animationDelay: "220ms" }}>
              <PhoneFrame
                label="리프트업AI 운동 화면 — 세트별 무게와 횟수 기록, AI 점진적 과부하 제안"
                className="max-w-[14.5rem] rotate-[-3deg] sm:max-w-[19rem]"
              >
                <WorkoutScreen />
              </PhoneFrame>
            </div>

            <div
              className="rise-in absolute bottom-0 right-0 w-[52%] max-w-[10.5rem] sm:w-[52%] sm:max-w-[13.5rem]"
              style={{ animationDelay: "380ms" }}
            >
              <PhoneFrame
                label="리프트업AI AI PT 채팅 화면 — 트레이너가 루틴을 실시간으로 수정"
                className="rotate-[5deg] shadow-[0_50px_120px_-40px_rgba(94,92,230,0.6)]"
              >
                <ChatScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
