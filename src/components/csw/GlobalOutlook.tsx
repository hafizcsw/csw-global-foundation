import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/i18n";

export const GlobalOutlook = () => {
  const { t } = useTranslation();
  return (
    <section className="relative border-b border-hairline-soft bg-secondary/50">
      <div className="container-csw py-32 md:py-40 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">{t("global.eyebrow")}</span>
          </div>
          <h2 className="display text-3xl md:text-5xl lg:text-6xl">{t("global.title")}</h2>
          <p className="mt-10 text-base md:text-lg text-ink-soft leading-[1.8] max-w-xl">
            {t("global.body")}
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="flex flex-wrap gap-2">
            {SUPPORTED_LANGUAGES.map((l) => (
              <span
                key={l.code}
                className="px-5 py-3 border border-hairline text-sm text-ink-soft hover:text-gold hover:border-gold transition-all duration-500 bg-secondary"
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
