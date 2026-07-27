import Image from "next/image";
import { site } from "@/lib/site";

const nav = [
  { href: "#features", label: "기능" },
  { href: "#trainers", label: "AI 코치" },
  { href: "#pricing", label: "요금제" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/80 bg-ink-950/72 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/logo_icon.png"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-lg"
            priority
          />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            {site.name}
          </span>
        </a>

        <nav aria-label="주요 메뉴" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-7 text-[13.5px] text-ink-300">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors duration-200 hover:text-ink-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#download"
          className="ml-auto rounded-full bg-ink-100 px-4 py-2 text-[13px] font-semibold text-ink-950 transition-transform duration-300 ease-out-quint hover:-translate-y-0.5 md:ml-0"
        >
          앱 받기
        </a>
      </div>
    </header>
  );
}
