import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-hairline-soft"
    >
      {/* Two-tone diagonal split: ink left / Bugatti blue right */}
      <div aria-hidden className="absolute inset-0 split-surface" />

      {/* Ambient blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 80% 30%, hsl(var(--gold-glow) / 0.25), transparent 50%)",
        }}
      />

      {/* Engineered grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ink)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-csw relative pt-32 pb-32 md:pt-44 md:pb-52 lg:pt-52 lg:pb-64">
        {/* Top spec bar — atelier reference */}
        <div
          className="reveal-soft mb-16 flex items-center justify-between gap-6 border-t border-hairline pt-5"
          style={{ animationDelay: "100ms" }}
        >
          <div className="flex items-center gap-4">
            <span className="spec-label">{t("hero.specMark")}</span>
            <span className="hidden sm:inline-block h-3 w-px bg-hairline" />
            <span className="hidden sm:inline spec-label">{t("hero.specSeries")}</span>
          </div>
          <span className="spec-label">{t("hero.specRef")}</span>
        </div>

        <div
          className="reveal-soft inline-flex items-center gap-4 mb-10"
          style={{ animationDelay: "200ms" }}
        >
          <span className="h-px w-14 bg-gold" />
          <span className="eyebrow">{t("hero.eyebrow")}</span>
        </div>

        <h1
          className="display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] max-w-6xl reveal"
          style={{ animationDelay: "350ms" }}
        >
          {t("hero.headline")}
        </h1>

        <div
          className="mt-12 flex items-start gap-6 reveal"
          style={{ animationDelay: "550ms" }}
        >
          <span className="hidden md:block mt-2 h-px w-16 bg-gold shrink-0" />
          <p className="max-w-2xl text-base md:text-lg text-ink-soft leading-[1.8]">
            {t("hero.subheadline")}
          </p>
        </div>

        <div
          className="mt-16 flex flex-wrap items-center gap-5 reveal"
          style={{ animationDelay: "750ms" }}
        >
          <Link to="/portfolio" className="btn-luxury group">
            {t("hero.primaryCta")}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link to="/about" className="btn-ghost-luxury group">
            {t("hero.secondaryCta")}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Bottom precision spec strip */}
        <div
          className="reveal-soft mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline"
          style={{ animationDelay: "900ms" }}
        >
          {(["est", "ventures", "markets", "discipline"] as const).map((k) => (
            <div key={k} className="bg-background/80 backdrop-blur-sm p-6">
              <div className="spec-label mb-3">{t(`hero.specs.${k}.label`)}</div>
              <div className="font-serif text-2xl md:text-3xl text-ink leading-none">
                {t(`hero.specs.${k}.value`)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-fade" aria-hidden />
    </section>
  );
};
