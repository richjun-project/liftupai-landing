import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
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
              {site.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ink-700">
            AI 기반 퍼스널 트레이닝 앱. iOS · Android에서 이용할 수 있습니다.
          </p>
        </div>

        <nav aria-label="푸터 메뉴" className="flex gap-12 text-[13.5px]">
          <ul className="space-y-2.5 text-ink-500">
            <li>
              <a
                href={site.appStore}
                target="_blank"
                rel="noopener"
                className="hover:text-ink-100"
              >
                App Store
              </a>
            </li>
            <li>
              <a
                href={site.playStore}
                target="_blank"
                rel="noopener"
                className="hover:text-ink-100"
              >
                Google Play
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-ink-100">
                자주 묻는 질문
              </a>
            </li>
          </ul>
          <ul className="space-y-2.5 text-ink-500">
            <li>
              <a
                href={site.terms}
                target="_blank"
                rel="noopener"
                className="hover:text-ink-100"
              >
                이용약관
              </a>
            </li>
            <li>
              <a
                href={site.privacy}
                target="_blank"
                rel="noopener"
                className="hover:text-ink-100"
              >
                개인정보 처리방침
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink-100">
                문의하기
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl border-t border-ink-900 px-5 py-6 text-[12px] text-ink-700 sm:px-8">
        © {new Date().getFullYear()} {site.nameEn}. All rights reserved.
      </div>
    </footer>
  );
}
