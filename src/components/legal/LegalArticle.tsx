import Link from "next/link";
import type { LegalDoc } from "@/lib/legal";

/** 개인정보 처리방침·계정 삭제 안내 본문. 서버에서 그대로 HTML 로 나간다(자바스크립트 없이 읽힌다). */
export function LegalArticle({
  doc,
  related,
}: {
  doc: LegalDoc;
  related?: { href: string; label: string };
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-14 sm:px-8 lg:pb-32 lg:pt-20">
      <h1 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
        {doc.title}
      </h1>
      <p className="mt-3 text-[13px] text-ink-500">{doc.effective}</p>
      <div className="mt-8 space-y-4">
        {doc.intro.map((p) => (
          <p key={p} className="text-[15.5px] leading-[1.85] text-ink-300">
            {p}
          </p>
        ))}
      </div>
      {doc.sections.map((s) => {
        const List = s.ordered ? "ol" : "ul";
        return (
          <section key={s.heading} className="mt-12">
            <h2 className="font-display text-[20px] font-semibold tracking-[-0.015em] text-ink-100">
              {s.heading}
            </h2>
            {s.items && (
              <List
                className={`mt-4 space-y-2.5 pl-5 text-[15px] leading-[1.8] text-ink-300 ${
                  s.ordered ? "list-decimal" : "list-disc"
                }`}
              >
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </List>
            )}
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-4 text-[15px] leading-[1.8] text-ink-300">
                {p}
              </p>
            ))}
          </section>
        );
      })}
      {related && (
        <p className="mt-14 border-t border-ink-900 pt-6 text-[14px]">
          <Link href={related.href} className="text-ink-100 underline underline-offset-4 hover:text-white">
            {related.label}
          </Link>
        </p>
      )}
    </article>
  );
}
