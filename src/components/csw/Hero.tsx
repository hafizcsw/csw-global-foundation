import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-hairline-soft bg-gradient-hero"
    >
      {/* Cinematic ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, hsl(var(--gold) / 0.08), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 start-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.25), transparent 60%)" }}
      />

      <div className="container-csw relative pt-32 pb-32 md:pt-44 md:pb-52 lg:pt-52 lg:pb-64">
        <div
          className="reveal-soft inline-flex items-center gap-3 mb-12"
          style={{ animationDelay: "100ms" }}
        >
          <span className="h-px w-12 bg-gold animate-gold-pulse" />
          <span className="eyebrow">{t("hero.eyebrow")}</span>
        </div>

        <h1
          className="display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] max-w-6xl reveal"
          style={{ animationDelay: "200ms" }}
        >
          {t("hero.headline")}
        </h1>

        <p
          className="mt-12 max-w-2xl text-base md:text-lg text-ink-soft leading-[1.7] reveal"
          style={{ animationDelay: "500ms" }}
        >
          {t("hero.subheadline")}
        </p>

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
      </div>

      {/* Bottom fade for cinematic depth */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-fade" aria-hidden />
    </section>
  );
};
