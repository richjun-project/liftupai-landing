import type { Guide } from "./guides";
import { site } from "./site";

/**
 * 영어 페이지(/en). 일본에서 ChatGPT 앱 유입이 첫 다운로드의 절반이었다(2026-10 ASC) —
 * 영어권 답변엔진이 인용할 1차 소스를 같은 구조로 둔다. 사실 기준은 한국어·일본어 페이지와 같다(앱 1.1.32).
 * 가격은 미국 App Store 표시가 기준이고, 다른 나라는 스토어의 현지 가격이 우선이다.
 */
export const enSite = {
  name: "LIFTUP.AI",
  tagline: "The AI personal trainer that reads your workout log",
  description:
    "LIFTUP.AI is an AI personal trainer app for strength training. It builds today's workout from your goal, experience, equipment and recovery, adjusts your next weights from every logged set, and its AI coach checks your actual training history before it answers. 1,300+ exercises, 10 AI coaches, photo calorie tracking. iPhone and Android, free to start.",
  appStore: `https://apps.apple.com/us/app/id${site.iosId}?pt=126107754&ct=web-en&mt=8`,
  playStore: `https://play.google.com/store/apps/details?id=${site.androidId}&hl=en&referrer=${encodeURIComponent("utm_source=web-en&utm_medium=web&utm_campaign=web-en")}`,
  factsAsOf: "2026-10-24",
} as const;

/** 미국 App Store·Google Play 표시 가격(세전). 바뀌면 숫자 세 개만 고친다. */
const monthlyUsd = 9.99;
const yearlyUsd = 49.99;
const lifetimeUsd = 99.99;
const usd = (n: number) => `$${n.toFixed(2)}`;

export const enPricing = {
  monthlyUsd,
  yearlyUsd,
  lifetimeUsd,
  monthly: `${usd(monthlyUsd)}/month`,
  yearly: `${usd(yearlyUsd)}/year (about ${usd(yearlyUsd / 12)}/month)`,
  lifetime: `${usd(lifetimeUsd)} one-time lifetime`,
  trial: "1-week free trial on both monthly and yearly plans (App Store)",
  note: "US prices. Prices and trial terms shown in your App Store or Google Play take precedence.",
} as const;

export const enFaqs = [
  {
    q: "Is LIFTUP.AI free?",
    a: "Yes, it is free to download. Workout logging, the 1,300+ exercise database, the rest timer and reminders are free with no time limit. AI workout suggestions and AI coach chat are free up to 3 times a day each.",
  },
  {
    q: "How is it different from asking ChatGPT for a workout plan?",
    a: "The LIFTUP.AI coach checks the weights, reps and frequency saved in the app before it answers, and when you ask, it actually swaps exercises in your plan. It remembers injuries and preferences you tell it and uses them in later chats and suggestions.",
  },
  {
    q: "How much does Pro cost?",
    a: `Pro is ${enPricing.monthly} or ${enPricing.yearly} in the US, or ${enPricing.lifetime}. There is a ${enPricing.trial}; cancel during the trial and you are not charged.`,
  },
  {
    q: "Which languages does it support?",
    a: "The app and the AI coach work in English, Korean and Japanese.",
  },
  {
    q: "How do I cancel?",
    a: "Cancel anytime from your App Store or Google Play subscription settings. Pro stays active until the end of the paid period and your workout history is kept.",
  },
  {
    q: "Can I use it with an injury?",
    a: "Tell the AI coach which body part is injured and it avoids exercises that load that area and suggests swaps. If you have sharp pain or numbness, stop training and see a medical professional.",
  },
] as const;

const enGuideList = [
  {
    slug: "ai-workout-routine",
    question: "Is there an app where AI builds your workout routine?",
    answer:
      "Yes. LIFTUP.AI builds today's workout from your goal, experience, equipment and recovery, and adjusts your next weights from your log.",
    description:
      "Looking for an app where AI writes your gym routine? LIFTUP.AI picks today's exercises, sets and weights from your goal, experience level, equipment and weekly schedule, and recalculates the plan as your training log grows. iPhone and Android, free to start.",
    body: [
      "LIFTUP.AI builds your program from the goal you choose at setup (muscle gain, strength or fat loss), your experience level, the equipment you have and how many days a week you train. The program is not a fixed table: it is recalculated every time you log a workout.",
      "Each set shows a target weight and rep count, so you do not have to look up what to do at the gym. Your last performance (weight and reps) feeds the next weight suggestion.",
      "If you do not like an exercise, ask the AI coach to swap it. The coach checks your injuries, equipment and level, then actually replaces the exercise in today's plan.",
    ],
    facts: [
      { label: "Routine is based on", value: "Goal · experience level · equipment · training days per week · recovery" },
      { label: "Exercise database", value: "1,300+ exercises" },
      { label: "AI coaches", value: "10 (4 free)" },
      { label: "Free AI suggestions", value: "Quick workout suggestion 3 times a day" },
      { label: "Platforms", value: "iPhone (iOS) · Android" },
    ],
    faqs: [
      {
        q: "Can I edit the routine it builds?",
        a: "Yes. You can swap exercises or change the number of sets, and your changes feed the next suggestion.",
      },
      {
        q: "What if the suggested weight is too heavy?",
        a: "Log the weight and reps you actually did, and the next suggested weight is recalculated from that log.",
      },
      {
        q: "How many free AI suggestions do I get?",
        a: "Quick workout suggestions and AI coach chat are free up to 3 times a day each, and unlimited with Pro.",
      },
    ],
    related: ["ai-chat-vs-coach-app", "gym-beginner-routine"],
  },
  {
    slug: "gym-beginner-routine",
    question: "What should a beginner do at the gym first?",
    answer:
      "Set your experience level to beginner and LIFTUP.AI builds a starter program with machine instructions and muscle-group guides.",
    description:
      "New to the gym and not sure where to start? LIFTUP.AI builds a beginner program with how-to instructions for each machine and muscle-group guides, and shows the weight and reps for every set. Ask the AI coach anything you are unsure about.",
    body: [
      "The beginner program includes instructions for each machine and guides by muscle group. Every exercise comes with a form description, so you spend less time standing in front of equipment wondering what to do.",
      "During a workout, each set shows a target weight and rep count, and the rest timer starts automatically. Your log is saved set by set.",
      "Ask the AI coach whether your form is right or what to do when a machine is taken. Swap in an alternative and today's plan updates right away.",
    ],
    facts: [
      { label: "Beginner program includes", value: "Machine instructions · muscle-group guides · weight and reps per set" },
      { label: "During a workout", value: "Rest timer · set logging · reminders (free)" },
      { label: "Ask questions", value: "AI coach chat (3 times a day free)" },
      { label: "Changing settings", value: "Change level or equipment and the program is rebuilt" },
    ],
    faqs: [
      {
        q: "Can I use it if I do not know machine names?",
        a: "Each exercise shows a form description and target muscles, and the AI coach can suggest an alternative for any machine you do not know.",
      },
      {
        q: "How many days a week should I start with?",
        a: "Choose your training days per week at setup and the program is split to match that number.",
      },
      {
        q: "Is workout logging paid?",
        a: "No. Workout logging, sets and reps, the 1,300+ exercise database, the rest timer and reminders are free with no time limit.",
      },
    ],
    related: ["ai-workout-routine", "home-workout-routine"],
  },
  {
    slug: "home-workout-routine",
    question: "How do I build a home workout routine?",
    answer:
      "Pick the equipment you own and LIFTUP.AI builds a bodyweight and dumbbell program around it.",
    description:
      "Training at home instead of a gym? LIFTUP.AI builds a bodyweight and dumbbell program from the equipment you pick, and when you join a gym you just change the equipment setting. Your training history carries over.",
    body: [
      "Choose the equipment you have at setup and the program only uses exercises you can do with it. With no equipment at all, you get a bodyweight program.",
      "If you join a gym later, just change the equipment in settings. The program is rebuilt and your existing history stays.",
      "Set logging and the rest timer work the same at home, so your log stays continuous wherever you train.",
    ],
    facts: [
      { label: "Equipment setting", value: "Choose bodyweight, dumbbells and other gear you own" },
      { label: "When you switch location", value: "Change equipment → program rebuilt, history kept" },
      { label: "Sync", value: "Account-based, same account on iPhone and Android" },
      { label: "Free features", value: "Logging · timer · exercise database" },
    ],
    faqs: [
      {
        q: "Will it work with just one dumbbell?",
        a: "Yes. The program only uses exercises you can do with the equipment you select, so a single dumbbell is enough.",
      },
      {
        q: "Do I keep my history if I change phones?",
        a: "Yes. Your log is saved to your account, so you can sign in on a new phone and continue. iPhone and Android use the same account.",
      },
      {
        q: "Can I alternate between gym and home?",
        a: "Yes. Change your equipment setting and the program is rebuilt without losing your history.",
      },
    ],
    related: ["ai-workout-routine", "free-ai-pt"],
  },
  {
    slug: "photo-calorie-tracking",
    question: "Is there an app that tracks calories from a photo?",
    answer:
      "Yes. In LIFTUP.AI you take a photo of your meal and AI estimates calories, protein, carbs and fat.",
    description:
      "Want to log meals from a single photo? LIFTUP.AI's AI nutrition analysis estimates calories and macros from a photo and shows how much you have left for the day based on your training goal. Included with Pro.",
    body: [
      "Take a photo in the nutrition tab and AI estimates calories, protein, carbs and fat. The meal is logged without searching for foods one by one.",
      "Your intake is compared with your training goal and shown as what is left for the day. The target changes depending on whether you are bulking or cutting.",
      "Photo-based AI nutrition analysis is a Pro feature. Core features like workout logging and set tracking stay free without Pro.",
    ],
    facts: [
      { label: "Input", value: "Photo of your meal" },
      { label: "Estimates", value: "Calories · protein · carbs · fat" },
      { label: "Goal link", value: "Shows remaining intake for the day from your training goal" },
      { label: "Plan", value: "Pro feature" },
    ],
    faqs: [
      {
        q: "Can I correct the estimate?",
        a: "Yes. The estimate is saved as a log entry, and you can adjust the values if they differ from what you actually ate.",
      },
      {
        q: "Do I need Pro just for food logging?",
        a: "Photo-based AI nutrition analysis is a Pro feature, while workout logging and set tracking remain free.",
      },
      {
        q: "Do I lose my history if I cancel Pro?",
        a: "No. Pro stays active until the end of the paid period and your history is kept.",
      },
    ],
    related: ["free-ai-pt", "ai-workout-routine"],
  },
  {
    slug: "free-ai-pt",
    question: "How much of an AI personal trainer app can I use for free?",
    answer:
      "In LIFTUP.AI, logging and the 1,300+ exercise database are always free, and AI suggestions and chat are free 3 times a day.",
    description:
      "What you get in LIFTUP.AI without Pro: workout logging, set tracking, the exercise database and rest timer are always free, and AI workout suggestions and AI coach chat are free up to 3 times a day. Pro has a 1-week free trial on the App Store.",
    body: [
      "The free tier includes workout logging, sets and reps, the 1,300+ exercise database, the rest timer and reminders. There is no time limit.",
      "Quick workout suggestions and AI coach chat are each free up to 3 times a day, and you can use the 4 basic AI coaches.",
      `Pro is ${enPricing.monthly} or ${enPricing.yearly} in the US (${enPricing.trial}). It unlocks unlimited AI coach chat and AI workout planning, all 10 AI coaches, photo nutrition analysis, 1RM tracking, muscle recovery tracking and progressive overload suggestions.`,
    ],
    facts: [
      { label: "Always free", value: "Workout logging · sets/reps · 1,300+ exercise database · rest timer · reminders" },
      { label: "Free AI usage", value: "Quick workout suggestion 3/day · AI coach chat 3/day" },
      { label: "Free coaches", value: "4 basic AI coaches" },
      { label: "Pro adds", value: "Unlimited AI · all 10 coaches · photo nutrition · 1RM · recovery · overload suggestions" },
      { label: "Pro price (US)", value: `${enPricing.monthly} · ${enPricing.yearly}` },
      { label: "Free trial", value: enPricing.trial },
    ],
    faqs: [
      {
        q: "Is there a time limit on the free version?",
        a: "No. Workout logging, sets and reps, the 1,300+ exercise database, the rest timer and reminders are free with no time limit.",
      },
      {
        q: "How do I cancel the subscription?",
        a: "Cancel anytime in your App Store or Google Play subscription settings. Pro stays active until the end of the paid period.",
      },
      {
        q: "Which languages are supported?",
        a: "English, Korean and Japanese. The AI coach chats in the same language.",
      },
    ],
    related: ["ai-pt-app-price", "personal-gym-alternative"],
  },
  {
    slug: "personal-gym-alternative",
    question: "Can an AI personal trainer app replace a personal trainer?",
    answer:
      "An app can take over programming, weight progression and tracking. Watching and correcting your form in person is still a human trainer's job.",
    description:
      "Want to save on personal training? LIFTUP.AI builds your program from your goal and log, adjusts the next weights from your last session, and its AI coach checks your history before it answers. Here is what it can and cannot replace, how to combine both, and what it costs.",
    body: [
      "A personal trainer does four main things: writes your program, decides the weight each session, reviews your log to judge progress, and watches and corrects your form. The LIFTUP.AI coach does the first three using the history in the app.",
      "When you ask a question, the LIFTUP.AI coach first checks your recent workouts and weight trend for each exercise, then answers. Ask it to \"swap this exercise\" or \"move my workout to 7 pm\" and it actually changes your plan and reminder time, and shows what it changed in the chat. It remembers injuries and preferences you mention and uses them in later suggestions.",
      "It cannot watch your form through the camera. If you are unsure about a new lift, book a few sessions with a trainer for form, and keep your daily programming and logging in the app.",
      `It is free to start, and Pro is ${enPricing.monthly} or ${enPricing.yearly} in the US with a ${enPricing.trial}.`,
    ],
    facts: [
      { label: "What the app replaces", value: "Programming · weight progression · log review · exercise swaps · reminder time changes" },
      { label: "What the coach remembers", value: "Injuries · exercises you avoid · preferences you share (you can make it forget anytime)" },
      { label: "What it cannot do", value: "Watch and correct your form in person" },
      { label: "Price", value: `Free to start · Pro ${enPricing.monthly} / ${enPricing.yearly} (US)` },
      { label: "Free trial", value: enPricing.trial },
    ],
    faqs: [
      {
        q: "Does the AI coach really look at my history?",
        a: "Yes. Before answering it checks your recent workouts, weight trend per exercise, today's plan and recovery status saved in the app, and the chat shows what it checked.",
      },
      {
        q: "Do changes I ask for actually happen?",
        a: "Yes. Exercise swaps and workout time changes are written to your plan and reminder settings, and the chat shows what changed.",
      },
      {
        q: "Can I choose the coach's personality?",
        a: "There are 10 AI coaches, from a tough drill-sergeant type to a patient form explainer. 4 are free and Pro unlocks all of them.",
      },
    ],
    related: ["ai-chat-vs-coach-app", "ai-pt-app-price"],
  },
  {
    slug: "ai-chat-vs-coach-app",
    question: "ChatGPT workout plan vs. an AI personal trainer app: what's the difference?",
    answer:
      "An AI personal trainer app reads your actual log (weights, reps, frequency) to adjust your next workout, and changes the plan itself when you ask.",
    description:
      "The difference between getting a workout plan from a chat AI like ChatGPT and using an AI personal trainer app like LIFTUP.AI: saved training history, next-session weight progression, real plan changes and memory of what you told it.",
    body: [
      "A chat AI can draft a routine, but you have to re-enter your weights and reps every time. In the app, every set is saved automatically and that log drives your next weight suggestion.",
      "Before it answers, the LIFTUP.AI coach checks your data in the app: recent workouts, weight trend per exercise, today's plan, recovery status and meals. Ask it to swap an exercise or change your workout time and it actually updates your plan and reminders.",
      "It remembers up to 30 things you tell it, such as injuries, exercises you avoid and preferences, and uses them in later chats and suggestions. You can make it forget any of them anytime.",
    ],
    facts: [
      { label: "Training log", value: "Weight and reps saved automatically for every set" },
      { label: "What the AI checks", value: "Recent workouts · weight trend per exercise · today's plan · recovery · meals" },
      { label: "What the AI can change", value: "Swap exercises in your plan · change workout (reminder) time" },
      { label: "Memory", value: "Up to 30 things you tell it, deletable anytime" },
      { label: "Free usage", value: "AI coach chat 3 times a day (unlimited with Pro)" },
    ],
    faqs: [
      {
        q: "What does the AI coach remember?",
        a: "Things you tell it in chat, such as an injured body part, exercises you avoid and training preferences, and it uses them in later suggestions.",
      },
      {
        q: "Will the AI coach change my plan on its own?",
        a: "No. It changes exercises or reminders only when you ask, and the chat shows what it changed.",
      },
      {
        q: "Do I need a ChatGPT account?",
        a: "No. The LIFTUP.AI app alone gives you AI coach chat and workout planning.",
      },
    ],
    related: ["personal-gym-alternative", "ai-workout-routine"],
  },
  {
    slug: "ai-pt-app-price",
    question: "How much does an AI personal trainer app cost?",
    answer: `LIFTUP.AI is free to start. Pro is ${enPricing.monthly} or ${enPricing.yearly} in the US.`,
    description: `LIFTUP.AI pricing: workout logging and the 1,300+ exercise database are always free, AI suggestions and AI coach chat are free 3 times a day, and Pro is ${enPricing.monthly}, ${enPricing.yearly} or ${enPricing.lifetime} in the US, with a ${enPricing.trial}.`,
    body: [
      "LIFTUP.AI is free to download and sign up. Workout logging, sets and reps, the 1,300+ exercise database, the rest timer and reminders are free with no time limit, and quick workout suggestions and AI coach chat are free up to 3 times a day each.",
      `Pro is ${enPricing.monthly}, ${enPricing.yearly} or ${enPricing.lifetime} in the US. There is a ${enPricing.trial}; cancel during the trial and you are not charged.`,
      "Pro unlocks unlimited AI coach chat and workout suggestions, all 10 AI coaches, photo nutrition analysis, 1RM tracking, muscle recovery tracking and progressive overload suggestions.",
    ],
    facts: [
      { label: "Pro monthly (US)", value: enPricing.monthly },
      { label: "Pro yearly (US)", value: enPricing.yearly },
      { label: "Lifetime (US)", value: enPricing.lifetime },
      { label: "Free trial", value: enPricing.trial },
      { label: "Always free", value: "Logging · sets/reps · 1,300+ exercises · rest timer · reminders · AI suggestions/chat 3 a day" },
      { label: "Price basis", value: `US App Store and Google Play prices as of ${enSite.factsAsOf}; other countries see local prices` },
    ],
    faqs: [
      {
        q: "Am I charged automatically after the free trial?",
        a: "On the App Store, the plan you chose is charged unless you cancel at least 24 hours before the trial ends. Cancel in your App Store subscription settings.",
      },
      {
        q: "Is monthly or yearly cheaper?",
        a: `Yearly is ${enPricing.yearly}, less than half of paying ${enPricing.monthly} for 12 months.`,
      },
      {
        q: "Do I lose my history if I cancel?",
        a: "No. Pro stays active until the end of the paid period and your workout history is kept.",
      },
    ],
    related: ["free-ai-pt", "personal-gym-alternative"],
  },
] as const satisfies readonly Omit<Guide, "path">[];

export const enGuides: Guide[] = enGuideList.map((g) => ({
  ...g,
  path: `/en/guide/${g.slug}`,
  body: [...g.body],
  facts: g.facts.map((f) => ({ ...f })),
  faqs: g.faqs.map((f) => ({ ...f })),
  related: [...g.related],
}));

export function getEnGuide(slug: string): Guide | undefined {
  return enGuides.find((g) => g.slug === slug);
}
