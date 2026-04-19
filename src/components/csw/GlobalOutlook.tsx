import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/i18n";

export const GlobalOutlook = () => {
  const { t } = useTranslation();
  return (
    <section className="border-b border-hairline bg-secondary/40">
      <div className="container-csw py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-6">
          <div className="eyebrow mb-6">{t("global.eyebrow")}</div>
          <h2 className="display text-3xl md:text-4xl lg:text-5xl text-ink">
            {t("global.title")}
          </h2>
          <p className="mt-8 text-base md:text-lg text-ink-soft leading-relaxed max-w-xl">
            {t("global.body")}
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="flex flex-wrap gap-2">
            {SUPPORTED_LANGUAGES.map((l) => (
              <span
                key={l.code}
                className="px-4 py-2 border border-hairline text-sm text-ink-soft hover:text-ink hover:border-ink transition-colors bg-background"
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
