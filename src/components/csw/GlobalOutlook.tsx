import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/i18n";

export const GlobalOutlook = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-secondary/40 border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-44 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-ink/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-ink-muted">
              {t("global.eyebrow")}
            </span>
          </div>
          <h2
            className="font-display uppercase text-ink leading-[0.95] text-3xl md:text-5xl lg:text-6xl"
            style={{ fontWeight: 600, letterSpacing: "0.005em" }}
          >
            {t("global.title")}
          </h2>
          <p className="mt-10 text-base md:text-lg text-ink-soft leading-[1.85] max-w-xl">
            {t("global.body")}
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="flex flex-wrap gap-2">
            {SUPPORTED_LANGUAGES.map((l) => (
              <span
                key={l.code}
                className="px-5 py-3 border border-hairline-soft font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink hover:border-ink/40 transition-all duration-500 bg-background"
              >
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
