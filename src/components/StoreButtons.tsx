import { site } from "@/lib/site";

function AppleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M16.36 12.66c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.83-.81-3-.79-1.55.02-2.98.9-3.77 2.28-1.61 2.79-.41 6.92 1.15 9.18.77 1.11 1.68 2.35 2.87 2.3 1.15-.04 1.59-.74 2.98-.74 1.39 0 1.78.74 3 .72 1.24-.02 2.02-1.12 2.78-2.24.87-1.28 1.23-2.53 1.25-2.6-.03-.01-2.4-.92-2.42-3.68ZM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.67-1.09 1.76-.95 2.8 1.02.08 2.06-.52 2.68-1.27Z" />
    </svg>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M3.6 2.4a1.3 1.3 0 0 0-.5 1.05v17.1c0 .43.19.81.5 1.05l9.03-9.6L3.6 2.4Z" fill="#00d3ff" />
      <path d="m16.2 15.6-3.57-3.6 3.57-3.6 4.2 2.36c.94.53.94 1.95 0 2.48l-4.2 2.36Z" fill="#ffce00" />
      <path d="M3.6 2.4c.35-.28.86-.33 1.32-.07L16.2 8.4l-3.57 3.6L3.6 2.4Z" fill="#00f076" />
      <path d="M3.6 21.6c.35.28.86.33 1.32.07L16.2 15.6l-3.57-3.6L3.6 21.6Z" fill="#ff3a44" />
    </svg>
  );
}

type Props = {
  /** hero용 큰 사이즈 */
  size?: "md" | "lg";
  className?: string;
};

export function StoreButtons({ size = "md", className = "" }: Props) {
  const pad = size === "lg" ? "px-6 py-3.5" : "px-5 py-3";
  const mark = size === "lg" ? "size-7" : "size-6";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={site.appStore}
        target="_blank"
        rel="noopener"
        data-store="ios"
        className={`group inline-flex items-center gap-3 rounded-2xl bg-ink-100 ${pad} text-ink-950 transition-transform duration-300 ease-out-quint hover:-translate-y-0.5`}
      >
        <AppleMark className={mark} />
        <span className="text-left leading-tight">
          <span className="block text-[11px] tracking-wide text-ink-700">
            App Store에서
          </span>
          <span className="block font-display text-[15px] font-semibold">
            다운로드
          </span>
        </span>
      </a>

      <a
        href={site.playStore}
        target="_blank"
        rel="noopener"
        data-store="android"
        className={`group inline-flex items-center gap-3 rounded-2xl border border-ink-800 bg-ink-900/80 ${pad} text-ink-100 transition-all duration-300 ease-out-quint hover:-translate-y-0.5 hover:border-ink-700`}
      >
        <GoogleMark className={mark} />
        <span className="text-left leading-tight">
          <span className="block text-[11px] tracking-wide text-ink-500">
            Google Play에서
          </span>
          <span className="block font-display text-[15px] font-semibold">
            다운로드
          </span>
        </span>
      </a>
    </div>
  );
}
