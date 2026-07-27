import Image from "next/image";
import { StoreButtons } from "./StoreButtons";
import { Reveal } from "./Reveal";

export function DownloadCta() {
  return (
    <section
      id="download"
      className="relative scroll-mt-20 overflow-hidden border-t border-ink-900"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(56rem 26rem at 50% 118%, rgba(10,132,255,0.3), transparent 65%), radial-gradient(40rem 20rem at 22% 100%, rgba(191,90,242,0.18), transparent 60%)",
        }}
      />

      <Reveal className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 lg:py-36">
        <Image
          src="/images/logo_icon.png"
          alt=""
          width={72}
          height={72}
          className="mx-auto size-16 rounded-2xl premium-glow"
        />
        <h2 className="mt-8 font-display text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1.18] tracking-[-0.028em]">
          다음 세션부터,
          <br />
          고민은 AI에게 맡기세요.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[15.5px] leading-[1.8] text-ink-500">
          설치하고 3분이면 첫 프로그램이 완성됩니다. 카드 등록 없이 바로
          시작하세요.
        </p>
        <StoreButtons size="lg" className="mt-10 justify-center" />
      </Reveal>
    </section>
  );
}
