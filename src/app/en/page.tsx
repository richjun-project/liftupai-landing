import type { Metadata } from "next";
import Link from "next/link";
import { EnFooter, EnHeader } from "@/components/en/EnChrome";
import { StoreButtons } from "@/components/StoreButtons";
import { enFaqs, enGuides, enPricing, enSite } from "@/lib/en";
import { homeLanguages } from "@/lib/i18n";
import { entityId, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en",
    languages: homeLanguages,
  },
};

const features = [
  {
    title: "Today's workout, built for you",
    body: "From your goal (muscle gain, strength or fat loss), experience level, equipment, training days per week and recovery, it picks today's exercises and the weight and reps for every set.",
  },
  {
    title: "Next weights from your log",
    body: "Weight and reps are saved for every set, and your last performance feeds the next weight suggestion. Review progress in charts (1RM trend with Pro).",
  },
  {
    title: "Calories from a meal photo",
    body: "Snap your meal and AI estimates calories, protein, carbs and fat, then shows what is left for the day based on your goal (Pro).",
  },
  {
    title: "1,300+ exercises and a rest timer",
    body: "A 1,300+ exercise database with muscle-group guides, an automatic rest timer and workout reminders are free forever.",
  },
];

const coach = [
  {
    label: "Checks before answering",
    value: "Recent workouts · weight trend per exercise · today's plan · recovery · meals",
  },
  {
    label: "Actually changes when asked",
    value: "Swaps exercises in today's plan (checking injuries, equipment and level) · workout time and reminders",
  },
  {
    label: "Remembers",
    value: "Injuries · exercises you avoid · preferences: up to 30 things you tell it (forget anytime)",
  },
  {
    label: "Coaches to choose from",
    value: "10 personalities, from a tough drill sergeant to a patient form explainer (4 free)",
  },
];

const plans = [
  {
    label: "Free",
    value: "Workout logging · sets/reps · 1,300+ exercises · rest timer · reminders · AI suggestions 3/day · AI chat 3/day · 4 coaches",
  },
  {
    label: "Pro",
    value: "Unlimited AI chat and AI workout planning · all 10 coaches · photo nutrition analysis · 1RM trend · recovery tracking · progressive overload suggestions",
  },
  { label: "Pro price (US)", value: `${enPricing.monthly} · ${enPricing.yearly} · ${enPricing.lifetime}` },
  { label: "Free trial", value: enPricing.trial },
];

export default function EnHome() {
  const url = `${site.url}/en`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": url,
      url,
      name: `${enSite.name} — ${enSite.tagline}`,
      description: enSite.description,
      inLanguage: "en",
      isPartOf: { "@id": entityId.website },
      about: { "@id": entityId.app },
      publisher: { "@id": entityId.organization },
      dateModified: enSite.factsAsOf,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: enFaqs.map((f) => ({
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
      <EnHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-5 pb-16 pt-16 sm:px-8 lg:pt-24">
          <p className="text-[13px] font-medium tracking-wide text-lift-cyan">
            AI personal trainer app · iPhone / Android
          </p>
          <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
            It reads your log and plans your next workout.
            <br />
            Your own AI personal trainer.
          </h1>
          <p className="mt-7 max-w-2xl text-[16.5px] leading-[1.85] text-ink-300">
            {`${enSite.name} builds today's strength workout from your goal, experience, equipment and recovery, and adjusts your next weights from every set you log. Its AI coach checks your training history before it answers, and when you ask, it actually changes exercises in your plan or your reminder time.`}
          </p>
          <StoreButtons
            size="lg"
            locale="en"
            appStoreHref={enSite.appStore}
            playStoreHref={enSite.playStore}
            className="mt-9"
          />
          <p className="mt-4 text-[13px] text-ink-500">
            Free download · workout logging free forever · Pro has a 1-week free trial
          </p>
        </section>

        <section id="features" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em]">
            What it does
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
            An AI coach that works from your log
          </h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.85] text-ink-300">
            {`When you ask a chat AI for a workout, you have to retype your weights and reps every time. The ${enSite.name} coach checks the history saved in the app by itself, and the chat shows what it checked and what it changed.`}
          </p>
          <FactTable rows={coach} />
        </section>

        <section id="pricing" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em]">Pricing</h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.85] text-ink-300">
            Core logging is free forever. Go Pro when you want AI to plan your workouts and weights every day.
          </p>
          <FactTable rows={plans} />
          <p className="mt-3 text-[12.5px] text-ink-500">
            {enPricing.note} Official {site.nameEn} information as of {enSite.factsAsOf}.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em]">
            Popular questions
          </h2>
          <ul className="mt-6 space-y-3">
            {enGuides.map((g) => (
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
            FAQ
          </h2>
          <div className="mt-6 divide-y divide-ink-900 border-y border-ink-900">
            {enFaqs.map((f) => (
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
              Install {enSite.name} and get today&apos;s workout
            </p>
            <p className="mt-2.5 text-[14.5px] leading-[1.75] text-ink-500">
              Free to install on iPhone and Android.
            </p>
            <StoreButtons
              locale="en"
              appStoreHref={enSite.appStore}
              playStoreHref={enSite.playStore}
              className="mt-6"
            />
          </div>
        </section>
      </main>
      <EnFooter />
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
