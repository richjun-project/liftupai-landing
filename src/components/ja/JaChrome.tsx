import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { jaSite } from "@/lib/ja";

const nav = [
  { href: "/ja#features", label: "機能" },
  { href: "/ja#coach", label: "AIトレーナー" },
  { href: "/ja#pricing", label: "料金" },
  { href: "/ja#faq", label: "よくある質問" },
];

export function JaHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/80 bg-ink-950/72 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Link href="/ja" className="flex items-center gap-2.5">
          <Image
            src="/images/logo_icon.png"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-lg"
            priority
          />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            {jaSite.name}
          </span>
        </Link>

        <nav aria-label="メインメニュー" className="ml-auto hidden md:block">
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
          href="/ja#download"
          className="ml-auto rounded-full bg-ink-100 px-4 py-2 text-[13px] font-semibold text-ink-950 transition-transform duration-300 ease-out-quint hover:-translate-y-0.5 md:ml-0"
        >
          アプリを入手
        </a>
      </div>
    </header>
  );
}

export function JaFooter() {
  return (
    <footer className="border-t border-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo_icon.png"
              alt=""
              width={28}
              height={28}
              className="size-7 rounded-lg"
            />
            <span className="font-display text-[14px] font-semibold">
              {jaSite.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ink-700">
            AIパーソナルトレーナーアプリ。iPhone・Androidで使えます。
          </p>
        </div>

        <nav aria-label="フッターメニュー" className="flex gap-12 text-[13.5px]">
          <ul className="space-y-2.5 text-ink-500">
            <li>
              <a href={jaSite.appStore} target="_blank" rel="noopener" className="hover:text-ink-100">
                App Store
              </a>
            </li>
            <li>
              <a href={jaSite.playStore} target="_blank" rel="noopener" className="hover:text-ink-100">
                Google Play
              </a>
            </li>
            <li>
              <a href="/ja#faq" className="hover:text-ink-100">
                よくある質問
              </a>
            </li>
          </ul>
          <ul className="space-y-2.5 text-ink-500">
            <li>
              <a href={site.terms} target="_blank" rel="noopener" className="hover:text-ink-100">
                利用規約
              </a>
            </li>
            <li>
              <a href={site.privacy} target="_blank" rel="noopener" className="hover:text-ink-100">
                プライバシーポリシー
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink-100">
                お問い合わせ
              </a>
            </li>
            <li>
              <Link href="/" hrefLang="ko" lang="ko" className="hover:text-ink-100">
                한국어
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
