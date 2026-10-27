import type { Metadata } from "next";
import Link from "next/link";
import { JaFooter, JaHeader } from "@/components/ja/JaChrome";
import { StoreButtons } from "@/components/StoreButtons";
import { jaFaqs, jaGuides, jaPricing, jaSite } from "@/lib/ja";
import { entityId, site } from "@/lib/site";
import { homeLanguages } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: {
    canonical: "/ja",
    languages: homeLanguages,
  },
};

const features = [
  {
    title: "今日のメニューを自動で作成",
    body: "目標（筋肥大・筋力アップ・減量）、経験レベル、使える器具、週のトレーニング日数、回復状態から、今日の種目とセットごとの重量・回数を決めます。",
  },
  {
    title: "記録に合わせて次回の重量を調整",
    body: "セットごとの重量と回数が自動で保存され、前回の実績が次回の重量提案に反映されます。記録はグラフで振り返れます（1RMの推移はPro）。",
  },
  {
    title: "写真で食事のカロリー解析",
    body: "食事の写真を撮ると、AIがカロリーとPFC（たんぱく質・脂質・炭水化物）を推定し、目標に合わせてその日の残りの摂取量を表示します（Pro）。",
  },
  {
    title: "1,300種目以上とレストタイマー",
    body: "部位別ガイドつきの1,300種目以上のデータベース、自動で動くレストタイマー、トレーニング時間のリマインダー通知はずっと無料です。",
  },
];

const coach = [
  {
    label: "答える前に確認すること",
    value: "最近のトレーニング · 種目ごとの重量の推移 · 今日のメニュー · 回復状態 · 食事",
  },
  {
    label: "頼むと実際に変えること",
    value: "今日のプランの種目の入れ替え（ケガ・器具・レベルを確認） · トレーニング時間と通知",
  },
  {
    label: "覚えておくこと",
    value: "ケガのある部位 · 苦手な種目 · 好みなど、伝えた内容を最大30件（いつでも忘れさせられる）",
  },
  {
    label: "選べるトレーナー",
    value: "厳しく追い込むタイプから丁寧にフォームを説明するタイプまで10人（無料で4人）",
  },
];

const plans = [
  {
    label: "無料",
    value: "筋トレ記録 · セット/回数管理 · 1,300種目以上 · レストタイマー · 通知 · AI提案 1日3回 · AIチャット 1日3回 · トレーナー4人",
  },
  {
    label: "Pro",
    value: "AIチャットとAIメニュー作成が無制限 · トレーナー10人全員 · 写真で食事解析 · 1RM推移 · 回復状態 · 漸進性過負荷にもとづく重量提案",
  },
  { label: "Proの料金", value: `${jaPricing.monthly} · ${jaPricing.yearly} · ${jaPricing.lifetime}` },
  { label: "無料体験", value: jaPricing.trial },
];

export default function JaHome() {
  const url = `${site.url}/ja`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": url,
      url,
      name: `${jaSite.name} — ${jaSite.tagline}`,
      description: jaSite.description,
      inLanguage: "ja",
      isPartOf: { "@id": entityId.website },
      about: { "@id": entityId.app },
      publisher: { "@id": entityId.organization },
      dateModified: jaSite.factsAsOf,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: jaFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JaHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-5 pb-16 pt-16 sm:px-8 lg:pt-24">
          <p className="text-[13px] font-medium tracking-wide text-lift-cyan">
            AIパーソナルトレーナーアプリ · iPhone / Android
          </p>
          <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
            {/* 일본어는 띄어쓰기가 없어 구 단위로 묶어야 단어 중간에서 줄이 안 바뀐다 */}
            <span className="inline-block">記録を読んで、</span>
            <span className="inline-block">次のメニューを組む。</span>
            <br />
            <span className="inline-block">あなた専用の</span>
            <span className="inline-block">AIパーソナルトレーナー</span>
          </h1>
          <p className="mt-7 max-w-2xl text-[16.5px] leading-[1.85] text-ink-300">
            {`${jaSite.name}（${jaSite.nameKana}）は、目標・経験・器具・回復状態から今日の筋トレメニューを作り、セットごとの記録をもとに次回の重量を調整するアプリです。AIトレーナーはあなたの記録を確認してから答え、頼めばプランの種目や通知の時間を実際に変更します。`}
          </p>
          <StoreButtons
            size="lg"
            locale="ja"
            appStoreHref={jaSite.appStore}
            playStoreHref={jaSite.playStore}
            className="mt-9"
          />
          <p className="mt-4 text-[13px] text-ink-500">
            無料でダウンロード · 筋トレ記録はずっと無料 · Proは1週間の無料体験つき
          </p>
        </section>

        <section id="features" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em]">
            できること
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-ink-800 bg-ink-900/40 px-6 py-6">
                <h3 className="text-[16.5px] font-semibold text-ink-100">{f.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-ink-500">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="coach" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em]">
            記録を見て動くAIトレーナー
          </h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.85] text-ink-300">
            {`対話AIにメニューを聞くと、毎回の重量や回数を自分で伝え直す必要があります。${jaSite.name}のAIトレーナーは、アプリに保存された記録を自分で確認し、確認したことと変更したことをチャットに表示します。`}
          </p>
          <FactTable rows={coach} />
        </section>

        <section id="pricing" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em]">料金</h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.85] text-ink-300">
            基本の記録機能はずっと無料です。AIに毎日のメニューと重量を任せたくなったらProへ。
          </p>
          <FactTable rows={plans} />
          <p className="mt-3 text-[12.5px] text-ink-500">
            {jaPricing.note} {site.nameEn} 公式情報 · {jaSite.factsAsOf} 時点
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em]">
            よく聞かれること
          </h2>
          <ul className="mt-6 space-y-3">
            {jaGuides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={g.path}
                  className="text-[15px] text-ink-300 underline decoration-ink-800 underline-offset-4 hover:text-ink-100"
                >
                  {g.question}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="faq" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em]">
            よくある質問
          </h2>
          <div className="mt-6 divide-y divide-ink-900 border-y border-ink-900">
            {jaFaqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-[15.5px] font-medium text-ink-100">{f.q}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-ink-500">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className="mx-auto max-w-4xl scroll-mt-20 px-5 pb-24 pt-10 sm:px-8">
          <div className="rounded-2xl border border-ink-800 bg-ink-900/40 px-6 py-8">
            <p className="font-display text-[21px] font-semibold tracking-[-0.02em]">
              {jaSite.name}をインストールして、今日のメニューを受け取る
            </p>
            <p className="mt-2.5 text-[14.5px] leading-[1.75] text-ink-500">
              iPhone と Android で無料でインストールできます。
            </p>
            <StoreButtons
              locale="ja"
              appStoreHref={jaSite.appStore}
              playStoreHref={jaSite.playStore}
              className="mt-6"
            />
          </div>
        </section>
      </main>
      <JaFooter />
    </>
  );
}

function FactTable({ rows }: { rows: readonly { label: string; value: string }[] }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-[14.5px]">
        <tbody className="divide-y divide-ink-900 border-y border-ink-900">
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope="row" className="w-[32%] py-3.5 pr-4 align-top font-medium text-ink-500">
                {r.label}
              </th>
              <td className="py-3.5 align-top leading-[1.75] text-ink-100">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
