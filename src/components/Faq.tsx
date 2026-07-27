import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const faqs = [
  {
    q: "헬스장에 처음 가는데 써도 되나요?",
    a: "경험 수준을 초보로 설정하면 기구 사용법과 부위별 가이드가 포함된 입문 프로그램이 생성됩니다. 세트마다 무게와 횟수를 제시하므로 무엇을 몇 번 할지 고민할 필요가 없습니다.",
  },
  {
    q: "홈트레이닝도 가능한가요?",
    a: "온보딩에서 사용 가능한 장비를 선택하면 맨몸·덤벨 중심 루틴으로 프로그램이 구성됩니다. 헬스장 등록 후에는 설정만 바꾸면 프로그램이 다시 설계됩니다.",
  },
  {
    q: "무료로 어디까지 쓸 수 있나요?",
    a: "운동 기록, 세트/횟수 관리, 1,300개 운동 데이터베이스, 휴식 타이머와 알림은 계속 무료입니다. AI 운동 추천과 AI PT 채팅은 하루 3회까지 무료로 제공됩니다.",
  },
  {
    q: "AI 코치에게 무엇을 물어볼 수 있나요?",
    a: "자세 교정, 대체 운동, 식단 구성, 오늘 컨디션에 맞는 강도 조절까지 대화로 물어볼 수 있습니다. 대화 내용은 그날의 루틴에 즉시 반영됩니다.",
  },
  {
    q: "식단 기록은 어떻게 하나요?",
    a: "음식 사진을 찍으면 AI가 칼로리와 단백질·탄수화물·지방을 추정하고, 운동 목표에 맞춰 남은 섭취량을 알려줍니다.",
  },
  {
    q: "기기를 바꿔도 기록이 유지되나요?",
    a: "계정에 기록이 저장되므로 새 기기에서 로그인하면 그대로 이어집니다. iOS와 Android 모두 같은 계정을 사용합니다.",
  },
  {
    q: "구독은 어떻게 해지하나요?",
    a: "App Store 또는 Google Play 계정의 구독 설정에서 언제든 해지할 수 있습니다. 해지해도 남은 기간까지는 Pro 기능이 유지되고, 기록은 사라지지 않습니다.",
  },
  {
    q: "어떤 언어를 지원하나요?",
    a: "한국어, 영어, 일본어를 지원하며 AI 코치도 해당 언어로 대화합니다.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading index="04" eyebrow="FAQ" title="자주 묻는 질문" />

        <Reveal className="divide-y divide-ink-900 border-y border-ink-900">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start gap-4 text-[15.5px] font-medium text-ink-100 marker:hidden">
                <span className="flex-1">{f.q}</span>
                <span
                  aria-hidden
                  className="mt-1 grid size-5 shrink-0 place-items-center rounded-full border border-ink-800 text-[12px] text-ink-500 transition-transform duration-300 ease-out-quint group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3.5 max-w-2xl pr-9 text-[14.5px] leading-[1.8] text-ink-500">
                {f.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
