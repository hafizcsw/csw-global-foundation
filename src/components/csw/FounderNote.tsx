import { useTranslation } from "react-i18next";

export const FounderNote = () => {
  const { t } = useTranslation();
  return (
    <section className="border-b border-hairline">
      <div className="container-csw py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-10">{t("founder.eyebrow")}</div>
          <blockquote className="display text-2xl md:text-3xl lg:text-4xl text-ink leading-[1.3]">
            <span className="text-gold font-serif text-4xl align-top leading-none mr-1">“</span>
            {t("founder.body")}
            <span className="text-gold font-serif text-4xl align-top leading-none ml-1">”</span>
          </blockquote>
          <div className="mt-10 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {t("founder.attribution")}
          </div>
        </div>
      </div>
    </section>
  );
};
