import type { ReactNode } from "react";

/** 기기 프레임 — 내부 화면은 children으로 주입 */
export function PhoneFrame({
  children,
  className = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative aspect-[9/19.3] w-full rounded-[2.6rem] border border-ink-800 bg-ink-900 p-[3px] shadow-[0_40px_100px_-40px_rgba(10,132,255,0.45),0_2px_0_0_rgba(255,255,255,0.06)_inset] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-ink-950">
        <div className="absolute left-1/2 top-2 z-20 h-[18px] w-[74px] -translate-x-1/2 rounded-full bg-ink-950" />
        {children}
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3.5 text-[10px] font-medium text-ink-300">
      <span className="font-display">9:41</span>
      <span className="flex items-center gap-1">
        <span className="inline-block h-2 w-3 rounded-[2px] bg-ink-500" />
        <span className="inline-block h-2.5 w-1.5 rounded-[2px] bg-ink-500" />
        <span className="inline-block h-2.5 w-4 rounded-[2px] bg-ink-300" />
      </span>
    </div>
  );
}

/** 화면 1 — AI PT 채팅 */
export function ChatScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <div className="flex items-center gap-2.5 px-4 pb-3 pt-4">
        <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-lift-blue to-lift-indigo text-sm">
          🔥
        </div>
        <div className="leading-tight">
          <p className="text-[12px] font-semibold text-ink-100">스파르타</p>
          <p className="text-[9px] text-lift-cyan">응답 중</p>
        </div>
      </div>

      <div className="flex-1 space-y-2.5 overflow-hidden px-4">
        <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-lift-blue px-3 py-2 text-[10.5px] leading-relaxed text-white">
          벤치 60kg에서 3주째 정체예요
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-ink-850 px-3 py-2 text-[10.5px] leading-relaxed text-ink-100">
          정체? 그건 몸이 적응했다는 뜻이다. 이번 주는 60kg 5×5 대신
          <span className="text-lift-cyan"> 52.5kg 3×8 + 네거티브 2세트</span>로
          간다.
        </div>
        <div className="rounded-2xl border border-lift-blue/25 bg-lift-blue/8 px-3 py-2.5">
          <p className="text-[9px] font-semibold tracking-wide text-lift-cyan">
            루틴이 자동으로 수정되었습니다
          </p>
          <p className="mt-1 text-[10px] text-ink-300">
            푸시 데이 · 벤치프레스 3×8 · 클로즈그립 3×10
          </p>
        </div>
      </div>

      <div className="m-4 flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900 px-4 py-2.5">
        <span className="text-[10.5px] text-ink-500">메시지 입력…</span>
        <span className="ml-auto grid size-6 place-items-center rounded-full bg-lift-blue text-[10px] text-white">
          ↑
        </span>
      </div>
    </div>
  );
}

/** 화면 2 — 오늘의 운동 */
export function WorkoutScreen() {
  const sets = [
    { w: "60", r: "8", done: true },
    { w: "60", r: "8", done: true },
    { w: "62.5", r: "6", done: false },
  ];

  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <div className="px-4 pb-3 pt-5">
        <p className="text-[9px] font-medium tracking-[0.16em] text-lift-cyan">
          PUSH · 4주차 DAY 2
        </p>
        <h4 className="mt-1 font-display text-[17px] font-semibold text-ink-100">
          벤치프레스
        </h4>
      </div>

      <div className="space-y-1.5 px-4">
        {sets.map((s, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
              s.done
                ? "bg-ink-900 text-ink-500"
                : "border border-lift-blue/35 bg-lift-blue/10 text-ink-100"
            }`}
          >
            <span className="font-display text-[10px] tabular-nums">
              {i + 1}세트
            </span>
            <span className="ml-auto font-display text-[13px] font-semibold tabular-nums">
              {s.w}
              <span className="text-[9px] font-normal"> kg</span>
            </span>
            <span className="font-display text-[13px] font-semibold tabular-nums">
              {s.r}
              <span className="text-[9px] font-normal"> 회</span>
            </span>
            <span
              className={`grid size-5 place-items-center rounded-md text-[10px] ${
                s.done ? "bg-ink-800 text-ink-500" : "bg-lift-blue text-white"
              }`}
            >
              ✓
            </span>
          </div>
        ))}
      </div>

      <div className="mx-4 mt-3 rounded-2xl border border-ink-800 bg-ink-900 p-3.5">
        <p className="text-[9px] font-semibold tracking-wide text-ink-500">
          AI 점진적 과부하
        </p>
        <p className="mt-1.5 text-[10.5px] leading-relaxed text-ink-300">
          지난 3주 볼륨 +12%. 다음 세션은{" "}
          <span className="font-display font-semibold text-lift-cyan">
            65kg
          </span>
          부터 시작하세요.
        </p>
        <div className="mt-3 flex h-9 items-end gap-1">
          {[38, 46, 52, 44, 61, 70, 84].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-sm ${
                i === 6 ? "bg-lift-blue" : "bg-ink-800"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between px-4 pb-5 pt-4 text-[9px] text-ink-500">
        <span className="text-lift-blue">홈</span>
        <span>운동</span>
        <span>AI PT</span>
        <span>통계</span>
        <span>프로필</span>
      </div>
    </div>
  );
}

/** 화면 3 — 회복 상태 */
export function RecoveryScreen() {
  const muscles = [
    { name: "가슴", pct: 42, color: "#ff9f0a" },
    { name: "등", pct: 88, color: "#30d158" },
    { name: "하체", pct: 96, color: "#30d158" },
    { name: "어깨", pct: 61, color: "#ffd60a" },
    { name: "팔", pct: 74, color: "#30d158" },
  ];

  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <div className="px-4 pb-4 pt-5">
        <h4 className="font-display text-[17px] font-semibold text-ink-100">
          근육 회복 상태
        </h4>
        <p className="mt-1 text-[10px] text-ink-500">
          마지막 세션 기준 실시간 추정
        </p>
      </div>

      <div className="space-y-3 px-4">
        {muscles.map((m) => (
          <div key={m.name}>
            <div className="flex items-baseline justify-between text-[10px]">
              <span className="text-ink-300">{m.name}</span>
              <span className="font-display tabular-nums text-ink-500">
                {m.pct}%
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink-850">
              <span
                className="block h-full rounded-full"
                style={{ width: `${m.pct}%`, backgroundColor: m.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mx-4 mt-5 rounded-2xl border border-lift-indigo/30 bg-lift-indigo/10 p-3.5">
        <p className="text-[9px] font-semibold tracking-wide text-lift-violet">
          오늘의 추천
        </p>
        <p className="mt-1.5 text-[10.5px] leading-relaxed text-ink-300">
          가슴이 아직 회복 중입니다. 등·이두 세션으로 대체하는 편이 성장에
          유리해요.
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between px-4 pb-5 pt-4 text-[9px] text-ink-500">
        <span>홈</span>
        <span>운동</span>
        <span>AI PT</span>
        <span className="text-lift-blue">통계</span>
        <span>프로필</span>
      </div>
    </div>
  );
}
