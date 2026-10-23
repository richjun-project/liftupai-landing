import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";

// 루트 레이아웃이 둘((ko)·ja)이라 어느 경로에도 안 맞는 URL 은 여기서 404 를 낸다.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "페이지를 찾을 수 없습니다 | 리프트업AI",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col items-center justify-center gap-5 px-6 text-center">
        <p className="text-[15px] text-ink-300">페이지를 찾을 수 없습니다 · ページが見つかりません</p>
        <div className="flex gap-6 text-[14px]">
          <Link href="/" className="text-ink-100 underline underline-offset-4">
            리프트업AI 홈
          </Link>
          <Link href="/ja" lang="ja" className="text-ink-100 underline underline-offset-4">
            LIFTUP.AI（日本語）
          </Link>
        </div>
      </body>
    </html>
  );
}
