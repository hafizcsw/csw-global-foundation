import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
  const { t } = useTranslation();
  const channels = ["partnerships", "media", "strategic"] as const;
  return (
    <section id="contact" className="border-b border-hairline bg-ink text-parchment">
      <div className="container-csw py-28 md:py-36">
        <div className="max-w-3xl">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-parchment/60 mb-8">
            {t("contact.eyebrow")}
          </div>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl text-parchment">
            {t("contact.title")}
          </h2>
          <p className="mt-8 text-base md:text-lg text-parchment/70 leading-relaxed max-w-2xl">
            {t("contact.body")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-parchment/15 pt-12">
          {channels.map((c) => (
            <div key={c}>
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-3">
                {t(`contact.${c}`)}
              </div>
              <div className="font-serif text-xl text-parchment">{t("brand.name")}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a href="mailto:contact@cswglobal.com" className="group inline-flex items-center gap-3 bg-parchment text-ink px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-ink transition-colors">
            {t("contact.cta")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
