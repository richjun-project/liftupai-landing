import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PhoneFrame, RecoveryScreen } from "./PhoneMockup";

export function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32"
    >
      <SectionHeading
        index="01"
        eyebrow="WHAT IT DOES"
        title={
          <>
            운동 앱은 기록만 합니다.
            <br />
            리프트업AI는 <span className="text-lift-cyan">결정</span>합니다.
          </>
        }
        lead="무게를 얼마나 올릴지, 오늘 어느 부위를 쉬어야 할지, 정체를 어떻게 뚫을지. 매번 검색하던 판단을 AI가 대신합니다."
      />

      {/* 비대칭 배치: 좌측 큰 블록 + 우측 목업, 하단에 서로 다른 폭의 항목 */}
      <div className="mt-16 grid gap-x-12 gap-y-16 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="space-y-12">
          <Reveal>
            <h3 className="font-display text-[20px] font-semibold tracking-tight">
              매일 아침, 오늘의 루틴이 이미 정해져 있습니다
            </h3>
            <p className="mt-3.5 max-w-xl text-[15px] leading-[1.8] text-ink-500">
              체형·목표·경험 수준·주간 가용 시간을 분석해 프로그램을 설계하고,
              근육 회복 주기에 맞춰 분할을 배치합니다. 세션마다 무게와 볼륨은
              점진적 과부하 원리에 따라 자동으로 조정됩니다.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                "전신 · 상하체 · 3분할 · 5분할",
                "주 2~6회 대응",
                "홈트 / 헬스장 장비 반영",
              ].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-ink-800 px-3 py-1.5 text-[12.5px] text-ink-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-x-10 gap-y-11 sm:grid-cols-2">
            {[
              {
                title: "사진 한 장으로 끝나는 식단 기록",
                body: "먹은 음식을 찍으면 칼로리와 단백질·탄수·지방을 추정하고, 오늘 남은 목표치를 알려줍니다.",
              },
              {
                title: "1RM과 볼륨, 자동으로 추적",
                body: "세트 기록에서 추정 1RM을 계산해 주간·월간 근력 곡선을 그립니다. 부위별 빈도 편차도 잡아냅니다.",
              },
              {
                title: "정체 감지 시 프로그램 전환",
                body: "성장이 멈춘 구간을 감지하면 다른 분할이나 강도 체계로 옮길 시점을 먼저 제안합니다.",
              },
              {
                title: "오프라인에서도 기록",
                body: "지하 헬스장에서 신호가 끊겨도 세트는 그대로 저장되고, 연결되면 자동으로 동기화됩니다.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <h4 className="text-[15.5px] font-semibold text-ink-100">
                  {item.title}
                </h4>
                <p className="mt-2.5 text-[14px] leading-[1.75] text-ink-500">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={120}
          className="mx-auto w-full max-w-[15.5rem] lg:sticky lg:top-24"
        >
          <PhoneFrame label="리프트업AI 회복 상태 화면 — 부위별 근육 회복률과 오늘의 추천">
            <RecoveryScreen />
          </PhoneFrame>
          <p className="mt-5 text-[13px] leading-relaxed text-ink-500">
            부위별 회복률을 실시간으로 추정해, 오늘 밀어붙일 곳과 쉬어야 할 곳을
            구분합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
