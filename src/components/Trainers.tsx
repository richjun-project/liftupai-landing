import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Trainer = {
  name: string;
  emoji: string;
  style: string;
  line: string;
};

const trainers: Trainer[] = [
  {
    name: "스파르타",
    emoji: "🔥",
    style: "극한 동기부여",
    line: "한 개 더! 못 한다고 생각하는 순간 이미 진 거다.",
  },
  {
    name: "번아웃 김PT",
    emoji: "😑",
    style: "3년차 현실주의",
    line: "회사 힘들고 시간 없고… 3년간 들어본 핑계야.",
  },
  {
    name: "게임 마스터",
    emoji: "🎮",
    style: "RPG 퀘스트",
    line: "[Lv.1] 오늘의 퀘스트를 완료하고 EXP를 획득하세요.",
  },
  {
    name: "예나쌤",
    emoji: "💕",
    style: "필라테스 감성",
    line: "웨이크업 필라테스로 코어부터 깨워볼까요? 나마스테 ✨",
  },
  {
    name: "MC 리프트",
    emoji: "🎵",
    style: "힙합 그라인드",
    line: "Yo! Grind time. No pain no gain, you feel me?",
  },
  {
    name: "왕년의 체육선생",
    emoji: "👴",
    style: "라떼는 말이야",
    line: "내가 젊었을 땐 매일 6시에 일어나 10km를 뛰었단다.",
  },
  {
    name: "부장님",
    emoji: "☕",
    style: "회식 후 갱생",
    line: "어제도 2차까지 갔지? 하하, 그래도 한번 해볼까?",
  },
  {
    name: "LA 교포",
    emoji: "🌴",
    style: "웨스트코스트",
    line: "Weather 완전 perfect한데 morning run 어때?",
  },
  {
    name: "부산 베테랑",
    emoji: "🏆",
    style: "선수 출신",
    line: "와이리 늦게 왔노? 아프다 힘들다, 다 소용없다.",
  },
  {
    name: "김일병",
    emoji: "🫡",
    style: "열정 신병",
    line: "충성! 아직 서툴지만 열심히 하겠습니다!",
  },
];

function TrainerCard({ t }: { t: Trainer }) {
  return (
    <li className="w-[19rem] shrink-0 rounded-2xl border border-ink-850 bg-ink-900/70 p-5">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink-850 text-[18px]"
        >
          {t.emoji}
        </span>
        <div className="leading-tight">
          <p className="text-[14.5px] font-semibold text-ink-100">{t.name}</p>
          <p className="mt-0.5 text-[11.5px] tracking-wide text-lift-cyan">
            {t.style}
          </p>
        </div>
      </div>
      <p className="mt-4 text-[13.5px] leading-[1.7] text-ink-300">
        “{t.line}”
      </p>
    </li>
  );
}

function Row({
  items,
  reverse = false,
}: {
  items: Trainer[];
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
      <ul
        className="flex w-max gap-4 py-2"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} 46s linear infinite`,
        }}
      >
        {items.map((t) => (
          <TrainerCard key={t.name} t={t} />
        ))}
        {items.map((t) => (
          <TrainerCard key={`${t.name}-dup`} t={t} />
        ))}
      </ul>
    </div>
  );
}

export function Trainers() {
  return (
    <section
      id="trainers"
      className="relative scroll-mt-20 overflow-hidden border-y border-ink-900 bg-ink-900/25 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="AI COACHES"
          title={
            <>
              같은 프로그램도,
              <br />
              누가 시키느냐에 따라 다릅니다.
            </>
          }
          lead="10명의 AI 코치는 말투도 관점도 다릅니다. 소리 질러주는 코치가 맞는 날이 있고, 냉소적인 현실 조언이 필요한 날이 있으니까요. 기본 코치 4명은 무료, 전체 10종은 Pro에서 해금됩니다."
        />
      </div>

      <Reveal className="mt-14 space-y-4">
        <Row items={trainers.slice(0, 5)} />
        <Row items={trainers.slice(5)} reverse />
      </Reveal>
    </section>
  );
}
