import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { SUPPORTED_LANGUAGES } from "@/i18n";

const CODE_MAP: Record<string, string> = {
  en: "EN", ar: "AR", fr: "FR", es: "ES", de: "DE", pt: "PT",
  zh: "ZH", ja: "JA", ko: "KO", ru: "RU", hi: "HI", bn: "BN",
};

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const current =
    SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) ??
    SUPPORTED_LANGUAGES[0];
  const isFilmHero = pathname === "/";

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const triggerTone = isFilmHero
    ? "border-parchment/30 text-parchment hover:border-parchment hover:bg-parchment/5"
    : "border-hairline text-ink hover:border-ink hover:bg-ink/5";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t("footer.language", { defaultValue: "Language" })}
        aria-expanded={open}
        className={`group inline-flex items-center gap-2 h-9 px-3 border rounded-full font-mono text-[10px] tracking-[0.32em] uppercase transition-all duration-500 ${triggerTone}`}
      >
        <span
          aria-hidden
          className="inline-block w-1.5 h-1.5 rounded-full bg-gold"
          style={{ boxShadow: "0 0 0 3px hsl(var(--gold) / 0.18)" }}
        />
        <span>{CODE_MAP[current.code] ?? current.code.toUpperCase()}</span>
        <span aria-hidden className={`transition-transform duration-500 ${open ? "rotate-180" : ""}`}>
          ⌄
        </span>
      </button>

      {/* Panel */}
      <div
        className={`absolute right-0 mt-3 z-50 origin-top-right transition-all duration-500 ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="w-[320px] bg-background border border-hairline shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-hairline-soft">
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-ink-soft">
              {t("footer.language", { defaultValue: "Language" })}
            </span>
            <span className="font-mono text-[9px] tracking-[0.32em] text-ink-muted">
              {String(SUPPORTED_LANGUAGES.length).padStart(2, "0")}
            </span>
          </div>

          {/* Grid */}
          <ul className="grid grid-cols-2 max-h-[60vh] overflow-y-auto">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const active = lang.code === current.code;
              return (
                <li key={lang.code} className="border-b border-hairline-soft last:border-b-0 odd:border-r">
                  <button
                    type="button"
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setOpen(false);
                    }}
                    className={`group w-full flex items-center justify-between gap-2 px-4 py-3.5 text-left transition-colors duration-300 ${
                      active ? "bg-ink/5" : "hover:bg-ink/[0.03]"
                    }`}
                  >
                    <span className="flex flex-col min-w-0">
                      <span
                        className={`font-display text-sm leading-tight truncate ${
                          active ? "text-ink" : "text-ink group-hover:text-ink"
                        }`}
                        style={{ fontWeight: 600, letterSpacing: "0.01em" }}
                      >
                        {lang.label}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.32em] uppercase text-ink-muted mt-1">
                        {CODE_MAP[lang.code] ?? lang.code.toUpperCase()}
                        {lang.status === "scaffold" && (
                          <span className="ml-2 text-ink-muted/70">· beta</span>
                        )}
                      </span>
                    </span>
                    {active && (
                      <span aria-hidden className="font-mono text-[10px] text-gold">●</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
