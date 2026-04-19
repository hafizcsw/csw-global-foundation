import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

export const Careers = () => {
  const { t } = useTranslation();
  return (
    <section id="careers" className="border-b border-hairline">
      <div className="container-csw py-24 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div className="eyebrow mb-6">{t("careers.eyebrow")}</div>
          <h2 className="display text-3xl md:text-4xl text-ink">{t("careers.title")}</h2>
          <p className="mt-6 text-base md:text-lg text-ink-soft leading-relaxed max-w-2xl">
            {t("careers.body")}
          </p>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <a href="#" className="group inline-flex items-center gap-3 border border-ink text-ink px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-ink hover:text-parchment transition-colors">
            {t("careers.cta")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
