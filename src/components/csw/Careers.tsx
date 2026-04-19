import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const Careers = () => {
  const { t } = useTranslation();
  return (
    <section id="careers" className="relative border-b border-hairline-soft bg-background">
      <div className="container-csw py-32 md:py-44 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-ink-muted">
              {t("careers.eyebrow")}
            </span>
          </div>
          <h2
            className="font-display uppercase text-ink leading-[0.95] text-3xl md:text-5xl lg:text-6xl"
            style={{ fontWeight: 600, letterSpacing: "0.005em" }}
          >
            {t("careers.title")}
          </h2>
          <p className="mt-8 text-base md:text-lg text-ink-soft leading-[1.85] max-w-2xl">
            {t("careers.body")}
          </p>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <Link
            to="/contact#careers"
            className="group inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em] text-ink hover:text-gold transition-colors duration-500"
          >
            {t("careers.cta")}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
