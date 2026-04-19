import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline">
      <div className="container-csw pt-24 pb-24 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        <div className="eyebrow mb-10 animate-fade-up">{t("hero.eyebrow")}</div>
        <h1
          className="display text-ink text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          {t("hero.headline")}
        </h1>
        <p
          className="mt-10 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          {t("hero.subheadline")}
        </p>
        <div
          className="mt-14 flex flex-wrap items-center gap-6 animate-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 bg-ink text-parchment px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-ink-soft transition-colors"
          >
            {t("hero.primaryCta")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#thesis"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink hover:text-gold transition-colors"
          >
            <span className="border-b border-hairline group-hover:border-gold pb-1 transition-colors">
              {t("hero.secondaryCta")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
